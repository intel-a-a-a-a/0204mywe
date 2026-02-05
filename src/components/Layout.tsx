import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="min-h-screen relative overflow-hidden bg-black text-[#f5f5f7] font-sans selection:bg-white/20">

            {/* Background: Subtle Silver/Grey Glows (Apple Style) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Noise Texture for that premium feel */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <header>
                    <NavBar />
                </header>

                <main className="flex-grow pt-32 px-6 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto">
                    <div className="relative animate-fade-in-up">
                        <Outlet />
                    </div>
                </main>

                <footer className="w-full py-8 text-center text-zinc-600 text-sm border-t border-white/5 backdrop-blur-md mt-20">
                    <p>© 2024 Team Page. Designed by AI.</p>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
