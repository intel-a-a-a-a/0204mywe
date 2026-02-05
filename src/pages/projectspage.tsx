const ProjectsPage = () => {
    const projects = [
        {
            title: "Project Zero",
            subtitle: "The Next Generation AI",
            desc: "인간의 사고를 넘어서는 차세대 초거대 언어 모델 프로젝트. 무한한 가능성을 탐구합니다.",
            category: "Artificial Intelligence"
        },
        {
            title: "Vision OS",
            subtitle: "Spatial Computing",
            desc: "공간을 캔버스로 활용하는 혁신적인 공간 컴퓨팅 운영체제. 디지털과 현실의 경계를 허뭅니다.",
            category: "AR / VR Platform"
        },
        {
            title: "Neural Link",
            subtitle: "Brain-Computer Interface",
            desc: "생각만으로 모든 디바이스를 제어하는 초미세 신경 인터페이스 기술.",
            category: "Biotechnology"
        },
        {
            title: "Quantum Cloud",
            subtitle: "Supercomputing Infrastructure",
            desc: "양자 역학을 기반으로 한 세계에서 가장 빠른 클라우드 인프라.",
            category: "Infrastructure"
        }
    ];

    return (
        <div className="py-20">
            <div className="text-center mb-24 space-y-4">
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-2">
                    Innovation.
                </h2>
                <p className="text-2xl text-zinc-500 font-light">
                    상상을 현실로 만드는 우리의 여정.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-zinc-900/30 backdrop-blur-xl hover:bg-zinc-800/40 transition-all duration-500 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full items-start justify-between min-h-[200px]">
                            <div>
                                <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-zinc-300 border border-white/5">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">{project.title}</h3>
                                <p className="text-lg text-zinc-400 font-medium mb-4">{project.subtitle}</p>
                                <p className="text-zinc-500 leading-relaxed text-sm">{project.desc}</p>
                            </div>

                            <div className="mt-8 flex items-center text-sm font-semibold text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                자세히 보기 <span className="ml-2">→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
