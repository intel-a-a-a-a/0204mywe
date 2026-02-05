import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen relative overflow-hidden font-sans selection:bg-indigo-500/30 transition-colors duration-500
            ${theme === 'dark' ? 'bg-black text-[#f5f5f7]' : 'bg-slate-50 text-slate-900'}
        `}>

            {/* Background Glows - Adjusted for both modes */}
            {theme === 'dark' ? (
                <>
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>
                </>
            ) : (
                <>
                    {/* Light Mode Glows - Professional & Subtle */}
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-multiply"></div>
                </>
            )}

            {/* Noise Texture */}
            <div className={`absolute inset-0 z-0 pointer-events-none ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.015] mix-blend-overlay'}`} style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header>
                    <NavBar />
                </header>

                <main className="flex-grow pt-32 px-6 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto">
                    <div className="relative animate-fade-in-up">
                        <Outlet />
                    </div>
                </main>

                <footer className={`w-full py-8 text-center text-sm border-t backdrop-blur-md mt-20 transition-colors duration-300
                    ${theme === 'dark' ? 'text-zinc-600 border-white/5' : 'text-zinc-400 border-black/5'}
                `}>
                    <p>© 2024 Team Page. Designed by AI.</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
