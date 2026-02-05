import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full border shadow-xl transition-all duration-300 backdrop-blur-2xl
            ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/60 border-slate-200/60 shadow-slate-200/20'}
        `}>
            <div className="mx-auto px-6 h-14 flex items-center justify-between">

                {/* Logo - Minimalist Web Typography */}
                <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className={`font-semibold text-lg tracking-tight transition-colors ${theme === 'dark' ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-600'}`}>
                            Team<span className="opacity-50 font-light">Page</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation - Centered & Clean */}
                <div className="hidden md:flex items-center space-x-1">
                    <NavLink to="/">홈</NavLink>
                    <NavLink to="/team">팀 소개</NavLink>
                    <NavLink to="/weather">날씨</NavLink>
                </div>

                {/* Right Side: CTA + Theme Toggle */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-black hover:bg-black/5'}`}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    <button className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-colors ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                        문의하기
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className={`transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
                    >
                        {theme === 'dark' ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                    <button className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'} focus:outline-none`}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => {
    const { theme } = useTheme();
    return (
        <Link
            to={to}
            className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-200
            ${theme === 'dark'
                    ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                    : 'text-zinc-500 hover:text-black hover:bg-black/5'}
            `}
        >
            {children}
        </Link>
    );
};

export default NavBar;
