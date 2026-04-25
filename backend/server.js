import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

let db = { profile: {}, projects: [], experiences: [], education: [], skills: [] };
let mongoReady = false;

const profileSchema = new mongoose.Schema({}, { strict: false });
const projectSchema = new mongoose.Schema({}, { strict: false });
const experienceSchema = new mongoose.Schema({}, { strict: false });
const educationSchema = new mongoose.Schema({}, { strict: false });
const skillSchema = new mongoose.Schema({}, { strict: false });

let Profile, Project, Experience, Education, Skill;

function loadFallback() {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8'));
    if (data?.profile?.name) db = data;
  } catch {}
}

function saveFallback() {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(db, null, 2));
}

async function initMongo() {
  loadFallback();
  const uri = process.env.MONGODB_URI;
  if (uri && uri.length > 30) {
    try {
      await mongoose.connect(uri);
      mongoReady = true;
      Profile = mongoose.model('Profile', profileSchema);
      Project = mongoose.model('Project', projectSchema);
      Experience = mongoose.model('Experience', experienceSchema);
      Education = mongoose.model('Education', educationSchema);
      Skill = mongoose.model('Skill', skillSchema);
    } catch { mongoReady = false; }
  }
}

// API routes
app.get('/api/profile', async (req, res) => {
  if (mongoReady && Profile) try { const d = await Profile.findOne(); if (d && Object.keys(d).length > 1) return res.json(d); } catch {}
  res.json(db.profile);
});
app.put('/api/profile', async (req, res) => {
  if (mongoReady && Profile) try { await Profile.findOneAndUpdate({}, req.body, { upsert: true }); } catch {}
  db.profile = req.body; saveFallback(); res.json(req.body);
});
app.get('/api/projects', async (req, res) => { if (mongoReady && Project) try { const d = await Project.find(); if (d.length) return res.json(d); } catch {} res.json(db.projects); });
app.put('/api/projects', async (req, res) => { if (mongoReady) try { await Project.deleteMany({}); await Project.insertMany(req.body); } catch {} db.projects = req.body; saveFallback(); res.json({success:true}); });
app.get('/api/experiences', async (req, res) => { if (mongoReady && Experience) try { const d = await Experience.find(); if (d.length) return res.json(d); } catch {} res.json(db.experiences); });
app.put('/api/experiences', async (req, res) => { if (mongoReady && Experience) try { await Experience.deleteMany({}); await Experience.insertMany(req.body); } catch {} db.experiences = req.body; saveFallback(); res.json({success:true}); });
app.get('/api/education', async (req, res) => { if (mongoReady && Education) try { const d = await Education.find(); if (d.length) return res.json(d); } catch {} res.json(db.education); });
app.put('/api/education', async (req, res) => { if (mongoReady && Education) try { await Education.deleteMany({}); await Education.insertMany(req.body); } catch {} db.education = req.body; saveFallback(); res.json({success:true}); });
app.get('/api/skills', async (req, res) => { if (mongoReady && Skill) try { const d = await Skill.find(); if (d.length) return res.json(d); } catch {} res.json(db.skills); });
app.put('/api/skills', async (req, res) => { if (mongoReady && Skill) try { await Skill.deleteMany({}); await Skill.insertMany(req.body); } catch {} db.skills = req.body; saveFallback(); res.json({success:true}); });
app.post('/api/admin/login', (req, res) => { if (req.body.username === process.env.ADMIN_USERNAME && req.body.password === process.env.ADMIN_PASSWORD) res.json({success:true}); else res.status(401).json({error:'Invalid'}); });

// Frontend path - check multiple locations
const possiblePaths = [
  path.join(__dirname, 'frontend', 'dist'),  // render builds here
];

let distPath = possiblePaths.find(p => fs.existsSync(path.join(p, 'index.html')));
if (!distPath) distPath = possiblePaths[0];

console.log('>>> distPath:', distPath);
console.log('>>> exists:', fs.existsSync(distPath));

// Disable caching
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

app.use(express.static(distPath));
app.use('/assets', express.static(path.join(distPath, 'assets')));

// Explicit routes for root and index
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.get('*', (req, res) => {
  if (req.path.startsWith('/api')) return res.status(404).json({error:'Not found'});
  res.sendFile(path.join(distPath, 'index.html'));
});

initMongo().then(() => app.listen(PORT, () => console.log(`Port ${PORT}`)));