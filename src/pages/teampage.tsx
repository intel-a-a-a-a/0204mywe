import type { ReactNode } from 'react';
import WeatherWidget from '../components/WeatherWidget';
import { useTheme } from '../context/ThemeContext';

const TeamPage = () => {
    const { theme } = useTheme();
    const team = [
        {
            name: '강도현',
            role: '프론트엔드 리드',
            image: '/team/male_lead.png'
        },
        {
            name: '윤서연',
            role: 'UI/UX 디자이너',
            image: '/team/female_designer.png'
        },
        {
            name: '장민준',
            role: '백엔드 엔지니어',
            image: '/team/male_engineer.png'
        },
        {
            name: '박지우',
            role: '프로젝트 매니저',
            image: '/team/female_pm.png'
        },
    ];

    return (
        <div className="py-12">
            <div className="flex justify-center mb-8">
                <WeatherWidget />
            </div>
            <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent
                    ${theme === 'dark' ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-slate-900 to-slate-600'}
                `}>멋진 팀원들</h2>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>최고의 결과를 만들어내는 전문가들입니다.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                    <div key={member.name} className="group relative">
                        <div className={`absolute inset-0 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500
                            ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-indigo-400 to-purple-400'}
                        `}></div>
                        <div className={`relative rounded-2xl p-6 border transition-all duration-300 h-full flex flex-col items-center text-center
                            ${theme === 'dark'
                                ? 'bg-[#1e293b] border-white/10 hover:border-white/20'
                                : 'bg-white border-slate-100 shadow-sm hover:shadow-lg hover:border-indigo-100'}
                        `}>
                            <div className={`w-24 h-24 rounded-full overflow-hidden mb-4 border-2 transition-colors shadow-lg
                                ${theme === 'dark' ? 'border-indigo-500/50 group-hover:border-indigo-400' : 'border-indigo-100 group-hover:border-indigo-300'}
                            `}>
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all" />
                            </div>
                            <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                            <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'}`}>{member.role}</p>

                            <div className="mt-auto flex gap-3">
                                <SocialIconLink href="#" label="LinkedIn" theme={theme}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </SocialIconLink>
                                <SocialIconLink href="#" label="GitHub" theme={theme}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </SocialIconLink>
                                <SocialIconLink href="#" label="Email" theme={theme}>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm2.141-1.599l3.239 3.841 3.23-3.846 6.275 7.675h-19.012l6.268-7.67zm-1.808 1.608l4.896 5.894 4.887-5.892 4.646 5.688v-11.267l-4.665 5.514zm3.321-4.938h11.979l-4.708 5.712-1.268-1.517-1.272 1.514-4.731-5.709z" /></svg>
                                </SocialIconLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SocialIconLink = ({ href, children, label, theme }: { href: string; children: ReactNode; label: string, theme?: string }) => (
    <a
        href={href}
        aria-label={label}
        className={`group/icon relative w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer transition-all border
            ${theme === 'dark'
                ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/20 border-transparent hover:border-white/10'
                : 'bg-slate-100 text-slate-500 hover:text-indigo-600 hover:bg-white border-slate-200 hover:border-indigo-100 hover:shadow-md'}
        `}
    >
        {children}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-md text-[10px] text-white rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
            {label}
        </span>
    </a>
);

export default TeamPage;
