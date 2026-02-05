
const AboutPage = () => {
    return (
        <div className="py-12 max-w-4xl mx-auto">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-6 text-white">소개</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    우리는 뛰어난 디지털 경험을 구축하기 위해 헌신하는 개발자, 디자이너, 크리에이터 팀입니다.
                    복잡함을 단순화하고 아름답고 기능적인 소프트웨어를 세상에 내놓는 것이 우리의 미션입니다.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-indigo-300">우리의 비전</h3>
                    <p className="text-gray-400">
                        창의성을 고취하고 생산성을 높이는 도구로 전 세계 팀에게 힘을 실어주는 것입니다.
                        우리는 오픈 소스, 투명성, 그리고 사용자 중심의 디자인을 믿습니다.
                    </p>
                </div>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-white/10">
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">핵심 가치</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>✨ 관습보다는 혁신</li>
                        <li>🤝 커뮤니티 우선</li>
                        <li>💎 디테일이 살아있는 품질</li>
                        <li>🚀 끊임없는 배움</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
