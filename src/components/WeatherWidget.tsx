import useWeather from '../hooks/useWeather';
import { useTheme } from '../context/ThemeContext';

export default function WeatherWidget() {
    const { currentTemp, hourlyTemps, aiRecommendation, loading, error, refreshRecommendation } = useWeather();
    const { theme } = useTheme();

    return (
        <div className={`border rounded-xl p-6 text-center max-w-4xl mx-auto shadow-lg transition-all duration-300
            ${theme === 'dark'
                ? 'bg-zinc-900/50 border-white/10 text-white backdrop-blur-md'
                : 'bg-white/60 border-slate-200 text-slate-800 backdrop-blur-md shadow-indigo-500/5'}
        `}>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

                {/* 왼쪽: 날씨 정보 */}
                <div className="flex-1 w-full md:w-auto">
                    <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>🌤️ 서울 날씨</h3>

                    {/* 로딩 & 에러 처리 */}
                    {loading && !currentTemp && <p className="text-blue-500 text-sm animate-pulse">날씨를 불러오고 있어요... 🚚</p>}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* 데이터가 있을 때만 화면 표시 */}
                    {currentTemp !== null && (
                        <div>
                            <h2 className="text-5xl font-bold text-blue-500 my-6">{currentTemp}°C</h2>

                            <div className={`p-4 rounded-lg text-sm transition-colors grid grid-cols-3 gap-2
                                ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-100'}
                            `}>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-70">🕛 자정</span>
                                    <strong>{hourlyTemps[0]}°C</strong>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-70">☀️ 점심</span>
                                    <strong>{hourlyTemps[12]}°C</strong>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs opacity-70">🌙 저녁</span>
                                    <strong>{hourlyTemps[18]}°C</strong>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* 구분선 (모바일은 가로, PC는 세로) */}
                {currentTemp !== null && (
                    <div className={`w-full h-px md:w-px md:h-40 ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                )}

                {/* 오른쪽: AI 추천 영역 */}
                <div className="flex-1 w-full md:w-auto text-left flex flex-col h-full justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">🤖</span>
                            <span className={`font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                AI 스타일리스트
                            </span>
                        </div>

                        <div className={`p-5 rounded-xl border min-h-[140px] flex items-center
                            ${theme === 'dark'
                                ? 'bg-blue-900/10 border-blue-500/30 text-gray-200'
                                : 'bg-blue-50 border-blue-100 text-slate-700'}
                        `}>
                            {aiRecommendation ? (
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{aiRecommendation}</p>
                            ) : (
                                <p className="text-sm opacity-60 w-full text-center">
                                    {loading ? "날씨에 맞는 코디를 생각 중이에요..." : "날씨 정보를 불러오면 추천해드릴게요!"}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={refreshRecommendation}
                        className={`mt-4 w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95
                            ${theme === 'dark'
                                ? 'bg-white text-black hover:bg-gray-200'
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'}
                        `}
                    >
                        {loading ? '로딩 중...' : '👕 다른 옷차림 추천받기'}
                    </button>
                </div>
            </div>
        </div>
    );
}