// src/hooks/useWeather.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
// 1. Gemini SDK 불러오기
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function useWeather() {
    const [currentTemp, setCurrentTemp] = useState<number | null>(null);
    const [hourlyTemps, setHourlyTemps] = useState<number[]>([]);
    // 2. 옷차림 추천을 담을 State 추가
    const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 컴포넌트 마운트 시 날씨 가져오기
    useEffect(() => {
        fetchWeather();
    }, []);

    const getWeatherData = async () => {
        const url = "https://api.open-meteo.com/v1/forecast?latitude=37.5&longitude=126.9&current_weather=true&hourly=temperature_2m";
        const response = await axios.get(url);
        return response.data;
    };

    // WMO Weather Code 해석 함수
    const getWeatherDescription = (code: number): string => {
        if (code === 0) return "매우 맑음";
        if (code === 1) return "맑음";
        if (code === 2) return "약간 흐림";
        if (code === 3) return "흐림";
        if (code >= 45 && code <= 48) return "안개";
        if (code >= 51 && code <= 55) return "이슬비";
        if (code >= 61 && code <= 65) return "비";
        if (code >= 71 && code <= 77) return "눈";
        if (code >= 80 && code <= 82) return "소나기";
        if (code >= 95) return "천둥번개";
        return "알 수 없음";
    };

    // ============================================================
    // 함수 C: AI 스타일리스트 (getAiRecommendation) - Improved! ⭐
    // ============================================================
    const getAiRecommendation = async (temp: number, code: number) => {
        setAiRecommendation(null); // 로딩 느낌을 주기 위해 초기화
        try {
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const weatherDesc = getWeatherDescription(code);

            // 더 구체적인 프롬프트
            const prompt = `
                현재 서울의 날씨는 기온 ${temp}도, 상태는 '${weatherDesc}'야.
                이 날씨에 딱 맞는 한국의 20대 남성 패션을 추천해줘.
                상의, 하의, 겉옷, 신발 등 구체적인 아이템을 콕 집어서 말해줘.
                말투는 "오늘은 ~가 좋겠어요!" 처럼 친근한 스타일리스트 느낌으로 3줄 이내로 짧게 부탁해.
                (날씨 상태인 '${weatherDesc}'를 꼭 언급하면서 조언해줘)
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            setAiRecommendation(text);

        } catch (error) {
            console.error("AI 추천 실패:", error);
            setAiRecommendation("AI 스타일리스트가 잠시 연결이 어렵네요. 😅 다시 시도해주세요!");
        }
    };

    // ============================================================
    // 함수 B: 화면 관리자 (fetchWeather)
    // ============================================================
    const fetchWeather = async () => {
        try {
            setLoading(true);
            setError(null);

            const data = await getWeatherData();

            setCurrentTemp(data.current_weather.temperature);
            setHourlyTemps(data.hourly.temperature_2m);
            const wCode = data.current_weather.weathercode;

            // AI에게 날씨 코드까지 전달
            getAiRecommendation(data.current_weather.temperature, wCode);

        } catch (err) {
            setError("날씨 데이터를 가져오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    // 옷차림만 다시 추천받기
    const refreshRecommendation = () => {
        if (currentTemp !== null) {
            // 현재 저장된 온도가 있다면 날씨 코드는 0(맑음)으로 가정하거나 
            // state에 weatherCode를 저장해야 하지만, 
            // 간단하게 하기 위해 가장 최근 불렀던 API가 있다고 가정하거나
            // 여기서는 심플하게 다시 fetchWeather를 부르는게 낫습니다.
            // 하지만 사용자 요청이 "다른 옷차림 추천"이므로 
            // 기존 온도로 AI만 다시 부르는게 효율적입니다.
            // *제대로 하려면 weatherCode도 State에 넣어야 합니다.*
            fetchWeather(); // 가장 확실한 방법 (날씨도 갱신)
        }
    };

    // 훅 리턴값에 refreshRecommendation 추가
    return { currentTemp, hourlyTemps, aiRecommendation, loading, error, fetchWeather, refreshRecommendation };
}