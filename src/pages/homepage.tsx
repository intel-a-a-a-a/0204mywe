import { Link } from 'react-router-dom';
import WeatherWidget from '../components/WeatherWidget';
import { useTheme } from '../context/ThemeContext';

const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4 pt-12">
            <div className="mb-20">
                <WeatherWidget compact={true} />
            </div>
            <div className={`mb-8 p-1 rounded-full border backdrop-blur-md
                ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-white/10' : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-200'}
            `}>
                <span className={`px-4 py-1 text-sm font-medium ${theme === 'dark' ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    ✨ 우리는 최고의 팀입니다
                </span>
            </div>

            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">성장하고</span>,
                <br />
                미래를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">만듭니다</span>.
            </h1>

            <p className={`text-xl max-w-2xl mb-12 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
                우리는 열정적인 개발자들과 디자이너들이 모여 세상을 바꾸는 서비스를 만듭니다.
                협업의 가치를 믿으며, 매일 더 나은 솔루션을 위해 고민합니다.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/team" className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1
                    ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'}
                `}>
                    팀원 만나보기
                </Link>

            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-5xl/95">
                <FeatureCard
                    title="협업"
                    desc="서로의 생각을 존중하고 끊임없이 소통하며 최상의 결과를 만들어냅니다."
                    icon="🤝"
                    theme={theme}
                />
                <FeatureCard
                    title="혁신"
                    desc="기존의 방식에 안주하지 않고 새로운 기술과 트렌드를 선도합니다."
                    icon="💡"
                    theme={theme}
                />
                <FeatureCard
                    title="열정"
                    desc="자신이 하는 일을 사랑하며, 디테일 하나까지 놓치지 않는 장인정신을 가집니다."
                    icon="🔥"
                    theme={theme}
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ title, desc, icon, theme }: { title: string; desc: string; icon: string, theme: string }) => (
    <div className={`p-6 rounded-2xl border transition-all hover:-translate-y-1
        ${theme === 'dark'
            ? 'bg-white/5 border-white/10 hover:border-white/20'
            : 'bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100'}
    `}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{desc}</p>
    </div>
);

export default HomePage;
