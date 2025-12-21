import React from "react";
import { FaPhone, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import myPhoto from "../assets/myPhoto.png";

const AboutPage = () => {
    return (
        <section
            id="about"
            className="
                lg:min-h-screen
                bg-background
                px-4 sm:px-6 lg:px-8
                pt-5
                sm:pt-10
                md:pt-10
                lg:pt-[clamp(7rem,12vh,12rem)]
                pb-[clamp(3rem,5vh,5rem)]
            "
        >
            <div className="max-w-7xl mx-auto">

                {/* Main content split layout - Adjusted width distribution */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">

                    {/* LEFT HALF - Text Content - Now takes more space */}
                    <div className="lg:w-[60%]">
                        {/* Name and Role with highlight color */}
                        <div className="mb-10 lg:mb-12">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-hero-bold text-aboutBold leading-tight mb-6">
                                I'm Aysha Akter Sumi, Building Scalable, User-Centric Applications.
                            </h1>
                        </div>

                        {/* Main description */}
                        <div className="space-y-8 text-lg md:text-xl text-stone-400 leading-relaxed">
                            <p className="text-xl md:text-2xl">
                                I'm a software engineer with experience across full-stack development and enterprise systems. I focus on designing clean architectures, building reliable back-end logic, and creating intuitive front-end experiences that translate complex requirements into practical, maintainable solutions.
                            </p>
                            <p className="text-xl md:text-2xl">
                                Currently, I work at Twinforce Solution Limited, contributing to large-scale applications used by hundreds of users, where performance, security, and scalability are critical. I enjoy working on systems that grow over time and deliver real value to both users and businesses.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT HALF - Photo & Social Links - Now takes less space */}
                    <div className="lg:w-[40%]">
                        {/* Container for image and social links side-by-side on medium+ screens */}
                        <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:gap-10">

                            {/* Photo Container - Smaller width on larger screens */}
                            <div className="flex-shrink-0 md:w-2/5 lg:w-full">
                                <div className="relative w-full max-w-xs sm:max-w-sm mx-auto md:mx-0 md:w-full rounded-2xl overflow-hidden shadow-xl 
                                               lg:transform lg:rotate-5 transition-transform duration-300">
                                    <img
                                        src={myPhoto}
                                        alt="Aysha Akter Sumi"
                                        className="w-full h-auto aspect-square object-cover"
                                    />
                                </div>
                            </div>

                            {/* Social Links Section - Compact layout */}
                            <div className="md:flex-1 lg:flex-none">
                                <div className="space-y-5">
                                    {/* Phone Number Link - Replaced Twitter */}
                                    <a
                                        href="tel:+8801884394630" // Replace with your actual phone number
                                        className="group flex items-center gap-3 hover:text-highlight transition-colors"
                                    >
                                        <FaPhone className="w-4 h-4 text-gray-500 group-hover:text-highlight transition-colors" />
                                        <span className="font-medium text-stone-200 group-hover:text-highlight transition-colors text-sm sm:text-base">+880 1884-394630</span>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/aysha__amin_?igsh=YmExcGtjeThweTdz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 hover:text-highlight transition-colors"
                                    >
                                        <FaInstagram className="w-4 h-4 text-gray-500 group-hover:text-highlight transition-colors" />
                                        <span className="font-medium text-stone-200 group-hover:text-highlight transition-colors text-sm sm:text-base">Follow on Instagram</span>
                                    </a>

                                    <a
                                        href="http://github.com/ay-sha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 hover:text-highlight transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4 text-gray-500 group-hover:text-highlight transition-colors" />
                                        <span className="font-medium text-stone-200 group-hover:text-highlight transition-colors text-sm sm:text-base">Follow on GitHub</span>
                                    </a>

                                    <a
                                        href="http://www.linkedin.com/in/aysha-akter-sumi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 hover:text-highlight transition-colors"
                                    >
                                        <FaLinkedin className="w-4 h-4 text-gray-500 group-hover:text-highlight transition-colors" />
                                        <span className="font-medium text-stone-200 group-hover:text-highlight transition-colors text-sm sm:text-base">Follow on LinkedIn</span>
                                    </a>

                                    {/* Divider */}
                                    <div className="pt-3">
                                        <hr className="border-gray-600" />
                                    </div>

                                    {/* Email Link */}
                                    <a
                                        href="mailto:ayshaaktersumi630@gmail.com"
                                        className="group flex items-center gap-3 hover:text-highlight transition-colors pt-3"
                                    >
                                        <FaEnvelope className="w-4 h-4 text-gray-500 group-hover:text-highlight transition-colors" />
                                        <span className="font-medium text-stone-200 group-hover:text-highlight transition-colors text-sm sm:text-base">ayshaaktersumi630@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutPage;