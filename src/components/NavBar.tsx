import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const NavBar = () => {
    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-full border border-white/10 bg-black/40 backdrop-blur-2xl shadow-xl transition-all duration-300">
            <div className="mx-auto px-6 h-14 flex items-center justify-between">

                {/* Logo - Minimalist Web Typography */}
                <div className="flex-shrink-0">
                    <Link to="/" className="flex items-center gap-2 group">
                        <span className="text-white font-semibold text-lg tracking-tight group-hover:text-gray-300 transition-colors">
                            Team<span className="opacity-50 font-light">Page</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation - Centered & Clean */}
                <div className="hidden md:flex items-center space-x-1">
                    <NavLink to="/">홈</NavLink>
                    <NavLink to="/team">팀 소개</NavLink>
                    <NavLink to="/projects">프로젝트</NavLink>
                    <NavLink to="/weather">날씨</NavLink>
                    <NavLink to="/about">소개</NavLink>
                </div>

                {/* CTA - Minimal Button */}
                <div className="hidden md:flex items-center">
                    <button className="px-5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors">
                        문의하기
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-300 hover:text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
    <Link
        to={to}
        className="px-4 py-1.5 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-200"
    >
        {children}
    </Link>
);

export default NavBar;
