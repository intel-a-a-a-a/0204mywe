import { Link } from 'react-router-dom';
import WeatherWidget from '../components/WeatherWidget';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
            <div className="mb-8">
                <WeatherWidget />
            </div>
            <div className="mb-8 p-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md">
                <span className="px-4 py-1 text-sm font-medium text-indigo-300">
                    ✨ 우리는 최고의 팀입니다
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">성장하고</span>,
                <br />
                미래를 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">만듭니다</span>.
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                우리는 열정적인 개발자들과 디자이너들이 모여 세상을 바꾸는 서비스를 만듭니다.
                협업의 가치를 믿으며, 매일 더 나은 솔루션을 위해 고민합니다.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/team" className="px-8 py-4 rounded-xl font-bold bg-white text-gray-900 hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    팀원 만나보기
                </Link>
                <Link to="/about" className="px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/5 transition-all text-white backdrop-blur-sm">
                    더 알아보기
                </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-5xl/95">
                <FeatureCard
                    title="협업"
                    desc="서로의 생각을 존중하고 끊임없이 소통하며 최상의 결과를 만들어냅니다."
                    icon="🤝"
                />
                <FeatureCard
                    title="혁신"
                    desc="기존의 방식에 안주하지 않고 새로운 기술과 트렌드를 선도합니다."
                    icon="💡"
                />
                <FeatureCard
                    title="열정"
                    desc="자신이 하는 일을 사랑하며, 디테일 하나까지 놓치지 않는 장인정신을 가집니다."
                    icon="🔥"
                />
            </div>
        </div>
    );
};

const FeatureCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </div>
);

export default HomePage;
