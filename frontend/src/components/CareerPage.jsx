import React, { useState } from 'react';
import {
    FaUniversity,
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaGraduationCap,
    FaAward,
    FaChevronRight,
    FaExternalLinkAlt,
    FaStar,
    FaCode,
    FaDatabase,
    FaCloud,
    FaLaptopCode,
    FaCar,
    FaWarehouse,
    FaUsers
} from 'react-icons/fa';
import { SiSalesforce, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const CareerPage = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [currentYear] = useState(new Date().getFullYear());

    // Education Timeline
    const education = [
        {
            id: 1,
            degree: 'Bachelor of Science in Computer Science and Engineering',
            institution: 'Daffodil International University',
            period: '2020 - October 2024',
            duration: '4 Years',
            location: 'Dhaka, Bangladesh',
            grade: 'CGPA: 3.93/4.00',
            achievements: [
                'Merit Based Scholarship , 2020-2024',
                '8th(Top 5%) Unlock The Algorithm Programming Contest, Spring 2022',
            ],
            courses: ['Data Structures & Algorithms', 'Database Management Systems', 'System Design', 'Web Technologies', 'Machine Learning', 'Computer Networks'],
            icon: FaUniversity,
            color: 'from-secondary/10 to-secondary/30',
            highlight: true
        }
    ];

    // Work Experience Timeline
    const experiences = [
        {
            id: 1,
            position: 'Jr. Salesforce Developer',
            company: 'Twinforce Solution Limited',
            period: 'November 2025 – Present',
            duration: 'Current Role',
            location: 'Dhaka, Bangladesh',
            type: 'Full-time',
            description: 'Leading development of enterprise Salesforce solutions with focus on automotive dealership management systems handling high-volume transactions.',
            responsibilities: [
                'Architected and developed a Car and Parts Dealership Management System from ground up',
                'Built custom Lightning Web Components with Tailwind CSS for modern, responsive UI',
                'Implemented complex APEX logic, triggers, and optimized SOQL queries for high-performance data handling',
                'Designed and implemented lifetime warranty tracking and service claims systems',
                'Created custom Salesforce objects and automation flows for streamlined business processes',
                'Managed security and access controls for 200+ internal users across departments'
            ],
            technologies: ['Salesforce APEX', 'Lightning Web Components (LWC)', 'SOQL', 'Salesforce Flows', 'Tailwind CSS', 'JavaScript', 'Salesforce Security'],
            achievements: [
                'Built system to handle 1,600–4,000+ annual transactions and 20,000+ lifetime records',
                'Reduced manual data entry by 85% through comprehensive automation',
                'Improved system performance by 60% with optimized SOQL queries',
                'Successfully delivered enterprise solution for automotive industry'
            ],
            icon: FaCloud,
            color: 'from-secondary/10 to-secondary/30',
            current: true,
            skillsGained: ['Salesforce Architecture', 'Enterprise Solution Design', 'High-Volume Data Management', 'Team Collaboration']
        },
        {
            id: 2,
            position: 'Salesforce Developer Intern',
            company: 'Twinforce Solution Limited',
            period: 'August 2025 – October 2025',
            duration: '3 Months',
            location: 'Dhaka, Bangladesh',
            type: 'Internship',
            description: 'Hands-on Salesforce development focusing on customization, automation, and system integration.',
            responsibilities: [
                'Developed Lightning Web Components (LWC) to support internal business workflows',
                'Implemented APEX classes and triggers to handle custom business logic',
                'Optimized SOQL queries for efficient data retrieval and performance',
                'Configured Salesforce Flows for process automation and data validation',
                'Integrated external systems using Salesforce REST APIs',
                'Collaborated with senior developers to troubleshoot issues and improve existing features'
            ],
            technologies: [
                'Salesforce',
                'APEX',
                'LWC',
                'SOQL',
                'Salesforce Flows',
                'REST API'
            ],
            achievements: [
                'Contributed to production-ready Salesforce features used by internal teams',
                'Improved process efficiency through automation and reduced manual operations',
                'Gained practical experience working with real-world Salesforce orgs and data models',
                'Successfully delivered assigned modules within tight deadlines'
            ],
            icon: SiSalesforce,
            color: 'from-secondary/10 to-secondary/30',
            skillsGained: [
                'Salesforce Platform Development',
                'Business Process Automation',
                'CRM Data Modeling',
                'Enterprise Application Support'
            ]
        }

    ];

    return (
        <section id="career" className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-highlight/40 to-transparent" />
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/10/20 via-accent/20 to-transparent transform -translate-x-1/2 hidden lg:block"></div>

                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-secondary/10 animate-pulse"
                        style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + Math.sin(i) * 40}%`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/30 flex items-center justify-center">
                                <FaBriefcase className="text-gray-200 text-lg sm:text-2xl" />
                            </div>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-hero-bold text-primary text-center leading-tight">
                            Career Journey
                        </h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        From academic excellence at Daffodil International University to building enterprise Salesforce solutions at Twinforce
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">

                    <div className="inline-flex rounded-2xl bg-gray-800/50 backdrop-blur-sm p-2 border border-gray-700/50">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`cursor-pointer flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${activeTab === 'experience'
                                ? 'bg-gradient-to-r from-secondary/10 to-secondary/30 text-gray-200 shadow-lg'
                                : 'text-gray-300 hover:text-gray-200 hover:bg-gray-700/50'
                                }`}
                        >
                            <FaBriefcase />
                            <span className="font-medium">Experience</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`cursor-pointer flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${activeTab === 'education'
                                ? 'bg-gradient-to-r from-secondary/10 to-secondary/30 text-gray-200 shadow-lg'
                                : 'text-gray-300 hover:text-gray-200 hover:bg-gray-700/50'
                                }`}
                        >
                            <FaUniversity />
                            <span className="font-medium">Education</span>
                        </button>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    <div className="space-y-6 sm:space-y-8">
                        {(activeTab === 'experience' ? experiences : education).map((item, index) => (
                            <div
                                key={item.id}
                                className={`relative group cursor-pointer ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'} lg:pt-8`}
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div
                                        className={`w-6 h-6 rounded-full border-4 border-background transition-all duration-300 
                        ${hoveredItem === item.id ? 'scale-150' : 'scale-100'} 
                        ${item.current ? 'bg-secondary' : 'bg-gray-600'}`}
                                    />
                                </div>

                                <div
                                    className={`relative rounded-3xl overflow-hidden border border-gray-800/50 
                    bg-gradient-to-br from-gray-900/50 to-background/30 backdrop-blur-sm 
                    transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl 
                    ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}
                                >
                                    {item.current && (
                                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/30 text-gray-200 text-xs sm:text-sm font-medium">
                                                <FaStar className="text-xs" />
                                                <span className="hidden sm:inline">Current Position</span>
                                            </div>

                                        </div>
                                    )}

                                    <div className={`p-4 sm:p-6 bg-gradient-to-r ${item.color} bg-opacity-10`}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div
                                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                                                >
                                                    <item.icon className="text-gray-200 text-xl sm:text-2xl" />
                                                </div>

                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-200 leading-tight">
                                                        {activeTab === 'experience' ? item.position : item.degree}
                                                    </h3>

                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                                                        <span className="text-secondary font-medium text-sm sm:text-base">
                                                            {activeTab === 'experience' ? item.company : item.institution}
                                                        </span>

                                                        {item.type && (
                                                            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 text-xs sm:text-sm">
                                                                {item.type}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 sm:p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                                                    <FaCalendarAlt className="text-gray-400 text-sm sm:text-base" />
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-gray-400">Period</div>
                                                    <div className="font-medium text-gray-200 text-sm sm:text-base">
                                                        {item.period}
                                                    </div>
                                                    <div className="text-xs text-gray-500">{item.duration}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                                                    <FaMapMarkerAlt className="text-gray-400 text-sm sm:text-base" />
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm text-gray-400">Location</div>
                                                    <div className="font-medium text-gray-200 text-sm sm:text-base">
                                                        {item.location}
                                                    </div>
                                                </div>
                                            </div>

                                            {item.grade && (
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800/50 flex items-center justify-center">
                                                        <FaAward className="text-gray-400 text-sm sm:text-base" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs sm:text-sm text-gray-400">Grade</div>
                                                        <div className="font-medium text-gray-200 text-sm sm:text-base">
                                                            {item.grade}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                                                Overview
                                            </h4>
                                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>

                                        {activeTab === 'experience' && (
                                            <>
                                                <div className="mb-6">
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                                                        Key Responsibilities
                                                    </h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        {item.responsibilities.map((responsibility, idx) => (
                                                            <div key={idx} className="flex items-start gap-3">
                                                                <FaChevronRight className="text-secondary mt-1 flex-shrink-0" />
                                                                <span className="text-gray-300 text-sm sm:text-base">
                                                                    {responsibility}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                                                        Technologies Used
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {item.technologies.map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-800/60 text-gray-200 text-xs sm:text-sm hover:text-highlight transition-colors"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {/* EDUCATION: COURSES & ACHIEVEMENTS */}
                                        {activeTab === 'education' && (
                                            <div className="space-y-6 mb-6">

                                                {/* KEY COURSES — ONE ROW */}
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                                                        <FaGraduationCap className="text-secondary" />
                                                        Key Courses
                                                    </h4>

                                                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                                                        {item.courses.map((course, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                                                            >
                                                                <FaCode className="text-secondary/70 text-xs" />
                                                                <span>{course}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* ACHIEVEMENTS — SECOND ROW */}
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-200 mb-3 flex items-center gap-2">
                                                        <FaAward className="text-secondary" />
                                                        Achievements
                                                    </h4>

                                                    <div className="flex flex-wrap gap-x-6 gap-y-3">
                                                        {item.achievements.map((achievement, idx) => (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                                                            >
                                                                <FaStar className="text-secondary/70 text-xs" />
                                                                <span>{achievement}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-gray-900/50 to-background/30 backdrop-blur-sm border border-gray-800/50">
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-200 mb-2">Detailed Professional Profile</h3>
                            <p className="text-gray-300">Download my complete resume for comprehensive details on projects, skills, and achievements</p>
                        </div>
                        <a
                            href="/src/assets/Aysha Akter Sumi_Software Developer.pdf"
                            className="cursor-pointer px-8 py-3 rounded-full bg-black text-primary font-bold-body text-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                            download
                        >
                            Download Resume
                            <FaExternalLinkAlt className="text-sm" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerPage;
