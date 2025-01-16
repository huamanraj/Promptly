import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet';



const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#edf6f9] font-[Comfortaa] text-gray-800 scroll-smooth">
            
            <Helmet>
                <meta name="description"
                    content="Discover Chatbot Promptly, powered by Pollination AI, for seamless text and image generation." />
                <meta name="keywords" content="chatbot, AI, Pollination AI, text generation, image generation" />
                <meta name="author" content="Aman Raj" />
                <meta property="og:title" content="Chatbot Promptly - AI-Powered Text & Image Generation" />
                <meta property="og:description"
                    content="Discover Chatbot Promptly, powered by Pollination AI, for seamless text and image generation." />
                <meta property="og:image" content="/assets/logo.png" />
                <meta property="og:url" content="https://promptly.aman-raj.xyz" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" type="image/png" href="/assets/icon.png" />
                <link rel="apple-touch-icon" href="/assets/icon.png" />
            </Helmet>
            
            
            <header className="py-4 sm:py-6 px-4 sm:px-10">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center space-x-3">
                        <img src={logo} alt="Promptly Logo" className="h-8 sm:h-10" />
                    </div>

                    {/* Navigation - Hidden on mobile */}
                    <nav className="hidden sm:block">
                        <ul className="flex space-x-6 border rounded-full px-4 py-2">
                            <li><a href="#" className="hover:text-blue-500">Home</a></li>
                            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
                            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="sm:flex hidden  gap-2 sm:gap-4 ">
                        <motion.button className="px-3 sm:px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:bg-purple-700 transition-all ease-in-out text-sm sm:text-base">
                            Login
                        </motion.button>
                        <motion.button className="px-3 sm:px-4 py-2 text-black font-semibold rounded-full hover:shadow-lg border transition-all ease-in-out text-sm sm:text-base">
                            Signup
                        </motion.button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6">
                <section className="text-center flex justify-center py-12 sm:py-20">
                    
                    <div className='border border-violet-300 px-5 py-5 rounded-full'>
                        <p className='text-l sm:text-2xl'>
                            <span className=' text-3xl sm:text-5xl text-purple-600 '>
                            Turn ideas into content
                            
                            </span> 
                        <br />
                            AI-powered text and image generation  </p>
                    </div>

                    
                </section>

                <section id="features" className="py-12 sm:py-20">
                    <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        <motion.div
                            className="p-6 sm:p-8 border border-gray-200 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h4 className="text-lg sm:text-xl font-semibold mb-4">AI Assistance</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Get suggestions tailored to your needs.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 sm:p-8 border border-gray-200 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h4 className="text-lg sm:text-xl font-semibold mb-4">Custom Prompts</h4>
                            <p className="text-gray-600 text-sm sm:text-base">Create prompts for any scenario.</p>
                        </motion.div>
                        <motion.div
                            className="p-6 sm:p-8 border border-gray-200 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h4 className="text-lg sm:text-xl font-semibold mb-4">Real-Time Results</h4>
                            <p className="text-gray-600 text-sm sm:text-base">See instant outputs as you type.</p>
                        </motion.div>
                    </div>
                </section>

                <section id="contact" className="py-12 sm:py-20 text-center">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Contact Us</h3>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">We'd love to hear from you!</p>
                    <motion.a
                        href="mailto:info@promptly.com"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 text-sm sm:text-base"
                        whileHover={{ scale: 1.1 }}
                    >
                        Email Us
                    </motion.a>
                </section>
            </main>

            <footer className="py-4 sm:py-6 bg-gray-100 text-center">
                <p className="text-gray-600 text-sm sm:text-base">&copy; 2025 Promptly. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;