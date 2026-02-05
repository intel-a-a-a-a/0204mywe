import { useState } from 'react';
import axios from 'axios';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface WeatherData {
    temperature: number;
    weatherCode: number;
}

export default function useFashionRecommendation() {
    const [recommendation, setRecommendation] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(null);

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

    const getRecommendation = async (latitude: number, longitude: number, gender: string, style: string) => {
        setLoading(true);
        setError(null);
        setRecommendation(null);
        setWeather(null);

        try {
            // 1. 날씨 정보 가져오기
            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
            const weatherResponse = await axios.get(weatherUrl);
            const currentWeather = weatherResponse.data.current_weather;
            const temp = currentWeather.temperature;
            const code = currentWeather.weathercode;

            setWeather({ temperature: temp, weatherCode: code });
            const weatherDesc = getWeatherDescription(code);

            // 2. Gemini에게 추천 요청
            const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const prompt = `
                당신은 패션 매거진 에디터입니다.
                다음 조건에 맞는 옷차림을 추천해주세요.

                [정보]
                - 날씨: ${temp}도, ${weatherDesc}
                - 대상: ${gender}
                - 스타일: ${style}

                [필수 요청사항]
                1. 결과는 추천 멘트(text)만 텍스트로 출력하세요.
                2. 말투는 잡지 에디터 톤으로 세련되게.
                3. 마크다운 볼드(**) 같은 문법은 사용하지 마세요.
                4. 가독성 좋고 깔끔하게 작성해주세요.
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            setRecommendation(text);

        } catch (err) {
            console.error("패션 추천 실패:", err);
            setError("스타일링 정보를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    return { recommendation, loading, error, weather, getRecommendation };
}
