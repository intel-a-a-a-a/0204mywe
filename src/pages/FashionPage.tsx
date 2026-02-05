import { useState, useEffect } from 'react';
import axios from 'axios';
import useFashionRecommendation from '../hooks/useFashionRecommendation';
import { useTheme } from '../context/ThemeContext';

interface Member {
    id: number;
    name: string;
    role: string;
    image: string;
    location: { lat: number; lng: number; name: string };
    gender: string;
    style: string;
    desc: string;
}

export default function FashionPage() {
    const { theme } = useTheme();
    const [members, setMembers] = useState<Member[]>([]);
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const { recommendation, loading, error, weather, getRecommendation } = useFashionRecommendation();

    // 팀원 목록 가져오기 (FastAPI)
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/members');
                setMembers(response.data);
            } catch (err) {
                console.error("팀원 정보를 불러오는데 실패했습니다.", err);
            }
        };
        fetchMembers();
    }, []);



    return (
        <div className={`min-h-[90vh] p-8 flex flex-col md:flex-row gap-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {/* 좌측: 컨트롤 패널 */}
            <div className={`w-full md:w-1/3 flex flex-col gap-6 p-6 rounded-3xl backdrop-blur-md border shadow-xl
                ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/40'}
            `}>
                <h2 className="text-3xl font-serif font-bold mb-4">Daily Look<br /><span className="text-indigo-500 text-lg font-sans">For Your Team</span></h2>

                <div className="space-y-4">
                    <label className="block text-sm font-bold opacity-70">팀원 선택</label>

                    {/* 팀원 선택 리모컨 (그리드 버튼) */}
                    <div className="grid grid-cols-4 gap-3">
                        {members.map(member => (
                            <button
                                key={member.id}
                                onClick={() => {
                                    setSelectedMember(member);
                                    getRecommendation(member.location.lat, member.location.lng, member.gender, member.style);
                                }}
                                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300
                                    ${selectedMember?.id === member.id
                                        ? 'bg-indigo-500 text-white shadow-md scale-105'
                                        : theme === 'dark'
                                            ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:scale-105'
                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:shadow-sm hover:scale-105'}
                                `}
                            >
                                <div className={`w-10 h-10 rounded-full overflow-hidden mb-1 border-2 
                                    ${selectedMember?.id === member.id ? 'border-white' : 'border-transparent'}
                                `}>
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xs font-bold">{member.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {selectedMember && (
                    <div className="mt-4 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                        <div className="flex items-center gap-4 mb-3">
                            <img src={selectedMember.image} alt={selectedMember.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200" />
                            <div>
                                <p className="font-bold text-lg">{selectedMember.name}</p>
                                <p className="text-sm opacity-70">{selectedMember.role}</p>
                            </div>
                        </div>
                        <div className="space-y-1 text-sm opacity-80">
                            <p>📍 위치: {selectedMember.location.name}</p>
                            <p>🎨 스타일: {selectedMember.style}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* 우측: 매거진 메인 */}
            <div className={`flex-1 relative rounded-3xl overflow-hidden min-h-[600px] flex flex-col justify-center
                 ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-[#fffdf9]'}
            `}>
                {/* 배경 장식 */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                {!selectedMember ? (
                    <div className="flex flex-col items-center justify-center opacity-40 text-center p-8 z-10">
                        <div className="text-6xl mb-4">👗</div>
                        <h3 className="text-2xl font-serif">Select a member to start</h3>
                        <p>팀원을 선택하면 AI가 맞춤형 코디를 제안합니다.</p>
                    </div>
                ) : (
                    <div className="p-8 md:p-12 flex flex-col h-full relative z-10 animate-fade-in-up overflow-y-auto custom-scrollbar">
                        {/* 헤더: 날씨 정보 */}
                        <div className="flex items-center justify-between mb-8 border-b border-dashed pb-6 relative shrink-0">
                            {weather ? (
                                <div className="flex items-end gap-4">
                                    <span className="text-6xl font-light">{Math.round(weather.temperature)}°</span>
                                    <div className="flex flex-col mb-2 opacity-80">
                                        <span className="text-lg font-bold">{selectedMember.location.name}</span>
                                        <span className="text-sm">Weather condition</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-2xl font-serif italic text-gray-400">Loading Weather...</div>
                            )}
                            <div className="text-right hidden md:block opacity-50 font-serif">
                                <p>FASHION ISSUE</p>
                                <p>VOL. 2026</p>
                            </div>
                        </div>

                        {/* 메인 컨텐츠: AI 추천 텍스트만 표시 */}
                        <div className="flex-1 w-full max-w-4xl mx-auto">
                            {loading ? (
                                <div className="space-y-4 animate-pulse mt-8">
                                    <div className="h-4 bg-gray-200/50 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200/50 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200/50 rounded w-5/6"></div>
                                    <p className="text-center mt-8 text-indigo-400 font-medium">AI 에디터가 스타일링을 고민중입니다...</p>
                                </div>
                            ) : error ? (
                                <div className="text-red-500 text-center mt-8">{error}</div>
                            ) : recommendation ? (
                                <div className="prose prose-lg dark:prose-invert max-w-none text-center">
                                    <h3 className="text-3xl font-serif font-bold mb-8 text-indigo-500 leading-tight">
                                        "Today's Pick for {selectedMember.name}"
                                    </h3>
                                    <div className="whitespace-pre-line text-xl leading-relaxed font-light font-sans tracking-wide p-6 border-y border-indigo-500/20" style={{ wordBreak: 'keep-all' }}>
                                        {recommendation}
                                    </div>
                                    <div className="mt-12 flex gap-3 justify-center">
                                        <span className="px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider opacity-60">#OOTD</span>
                                        <span className="px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider opacity-60">#{selectedMember.style}</span>
                                        <span className="px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wider opacity-60">#AI_Stylist</span>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
