import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuthHook';

const AppInitializer = ({ children, isAuthenticated }) => {
    const { checkAuth, isLoading, isInitialized } = useAuth();
    const [minLoadingTime, setMinLoadingTime] = useState(true);

    useEffect(() => {
        // Check authentication status when app loads
        checkAuth();
    }, [isAuthenticated]); // Changed dependency to checkAuth function

    useEffect(() => {
        // Ensure minimum loading time for better UX
        const timer = setTimeout(() => {
            setMinLoadingTime(false);
        }, 2000); // Show loading screen for at least 2 seconds

        return () => clearTimeout(timer);
    }, []);

    // Show loading screen while initializing or during minimum loading time
    if ((!isInitialized && isLoading) || minLoadingTime) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex flex-col items-center justify-center text-white relative overflow-hidden">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Main glow orbs */}
                    <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-indigo-500/12 to-blue-500/12 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
                    
                    {/* Subtle grid overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                    
                    {/* Brand Logo with Enhanced Typography */}
                    <div className="mb-6 relative">
                        <h1 className="text-8xl md:text-9xl font-black tracking-tight mb-2 animate-brand-entrance">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 drop-shadow-2xl">
                                sid
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                                E
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400">
                                help
                            </span>
                        </h1>
                        {/* Brand underline accent */}
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full animate-width-grow"></div>
                    </div>

                    {/* Enhanced Tagline */}
                    <div className="mb-10 animate-fade-up delay-300">
                        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mb-4">
                            Unlock your full potential with a suite of tools designed to
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 text-base">
                            <span className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300 animate-tag-float delay-100">simplify</span>
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30 text-cyan-300 animate-tag-float delay-200">organize</span>
                            <span className="px-3 py-1 bg-sky-500/20 rounded-full border border-sky-500/30 text-sky-300 animate-tag-float delay-300">supercharge</span>
                        </div>
                        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl mt-4">
                            your learning experience
                        </p>
                    </div>

                    {/* Simple Student Loading Animation */}
                    <div className="mb-8 relative">
                        <div className="flex items-center justify-center space-x-4">
                            {/* Rotating loader with student theme */}
                            <div className="relative w-16 h-16">
                                <div className="absolute inset-0 rounded-full border-4 border-blue-500/20"></div>
                                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-cyan-400 animate-spin-smooth"></div>
                                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 animate-pulse-gentle"></div>
                                {/* Simple book icon in center */}
                                <div className="absolute inset-6 rounded-sm bg-white/90 animate-pulse-gentle delay-300 flex items-center justify-center">
                                    <div className="text-xs">📚</div>
                                </div>
                            </div>
                            
                            {/* Simple study progress */}
                            <div className="flex space-x-2">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded animate-cube-dance"
                                        style={{ animationDelay: `${i * 0.2}s` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Progress Section */}
                    <div className="w-full max-w-md mb-6 space-y-4">
                        {/* Progress bar container */}
                        <div className="relative">
                            <div className="h-2 bg-gray-800/60 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50">
                                <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 animate-progress-smooth rounded-full relative">
                                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                                </div>
                            </div>
                            {/* Progress percentage */}
                            <div className="absolute -top-8 left-0 text-xs text-gray-400 animate-count-up">
                                Initializing...
                            </div>
                        </div>
                    </div>

                    {/* Status Text */}
                    <div className="text-center space-y-3 animate-fade-up delay-500">
                        <h2 className="text-xl font-semibold text-white">Preparing Your Study Space</h2>
                        <div className="flex items-center justify-center space-x-2 text-gray-300">
                            <span className="text-sm">Loading your tools</span>
                            <div className="flex space-x-1">
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce-dots"
                                        style={{ animationDelay: `${i * 0.15}s` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple Academic Atmosphere */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Just a few floating academic icons */}
                    <div className="absolute top-20 right-20 text-xl opacity-30 animate-academic-float">📚</div>
                    <div className="absolute bottom-32 left-16 text-lg opacity-20 animate-academic-float delay-500">🎓</div>
                    <div className="absolute top-40 left-20 text-sm opacity-25 animate-academic-float delay-300">✏️</div>
                    
                    {/* Subtle particles */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-particle-float-${(i % 4) + 1}`}
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                filter: 'blur(0.5px)'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                <style jsx>{`
                    @keyframes brand-entrance {
                        0% { opacity: 0; transform: translateY(30px) scale(0.9); }
                        100% { opacity: 1; transform: translateY(0) scale(1); }
                    }
                    @keyframes fade-up {
                        0% { opacity: 0; transform: translateY(20px); }
                        100% { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes width-grow {
                        0% { width: 0; }
                        100% { width: 8rem; }
                    }
                    @keyframes tag-float {
                        0%, 100% { transform: translateY(0) scale(1); }
                        50% { transform: translateY(-3px) scale(1.05); }
                    }
                    @keyframes spin-smooth {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 0.6; transform: scale(1.05); }
                    }
                    @keyframes pulse-gentle {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                    @keyframes cube-dance {
                        0%, 100% { transform: translateY(0) rotate(0deg); }
                        25% { transform: translateY(-8px) rotate(90deg); }
                        50% { transform: translateY(0) rotate(180deg); }
                        75% { transform: translateY(-4px) rotate(270deg); }
                    }
                    @keyframes progress-smooth {
                        0% { width: 0%; }
                        20% { width: 30%; }
                        40% { width: 60%; }
                        80% { width: 90%; }
                        100% { width: 100%; }
                    }
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    @keyframes academic-float {
                        0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
                        50% { transform: translateY(-10px) rotate(2deg); opacity: 0.4; }
                    }
                    @keyframes particle-float-1 {
                        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
                        33% { transform: translateY(-20px) translateX(10px) rotate(120deg); opacity: 0.8; }
                        66% { transform: translateY(-10px) translateX(-5px) rotate(240deg); opacity: 0.4; }
                    }
                    @keyframes particle-float-2 {
                        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
                        50% { transform: translateY(-30px) translateX(-15px) rotate(180deg); opacity: 0.9; }
                    }
                    @keyframes particle-float-3 {
                        0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.2; }
                        25% { transform: translateY(-15px) translateX(8px) scale(1.2); opacity: 0.7; }
                        75% { transform: translateY(-25px) translateX(-8px) scale(0.8); opacity: 0.5; }
                    }
                    @keyframes particle-float-4 {
                        0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.4; }
                        40% { transform: translateY(-18px) translateX(12px) rotate(144deg); opacity: 0.8; }
                        80% { transform: translateY(-8px) translateX(-6px) rotate(288deg); opacity: 0.3; }
                    }
                    @keyframes bounce-dots {
                        0%, 80%, 100% { transform: scale(0.8) translateY(0); opacity: 0.5; }
                        40% { transform: scale(1.2) translateY(-10px); opacity: 1; }
                    }

                    .animate-brand-entrance { animation: brand-entrance 1.2s ease-out; }
                    .animate-fade-up { animation: fade-up 0.8s ease-out; }
                    .animate-width-grow { animation: width-grow 1.5s ease-out 0.5s both; }
                    .animate-tag-float { animation: tag-float 2s ease-in-out infinite; }
                    .animate-spin-smooth { animation: spin-smooth 2s linear infinite; }
                    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
                    .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
                    .animate-cube-dance { animation: cube-dance 2s ease-in-out infinite; }
                    .animate-progress-smooth { animation: progress-smooth 3s ease-out; }
                    .animate-shimmer { animation: shimmer 2s ease-in-out infinite; }
                    .animate-academic-float { animation: academic-float 4s ease-in-out infinite; }
                    .animate-bounce-dots { animation: bounce-dots 1.4s ease-in-out infinite; }
                    .animate-particle-float-1 { animation: particle-float-1 6s ease-in-out infinite; }
                    .animate-particle-float-2 { animation: particle-float-2 8s ease-in-out infinite; }
                    .animate-particle-float-3 { animation: particle-float-3 7s ease-in-out infinite; }
                    .animate-particle-float-4 { animation: particle-float-4 9s ease-in-out infinite; }

                    .delay-100 { animation-delay: 0.1s; }
                    .delay-200 { animation-delay: 0.2s; }
                    .delay-300 { animation-delay: 0.3s; }
                    .delay-500 { animation-delay: 0.5s; }
                    .delay-1000 { animation-delay: 1s; }
                `}</style>
            </div>
        );
    }

    // Once initialized, render the app
    return children;
};

export default AppInitializer;