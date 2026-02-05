import WeatherWidget from '../components/WeatherWidget';

export default function WeatherPage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2 className="text-2xl font-bold">🏠 날씨 정보</h2>
            <p>날씨 정보를 확인할 수 있습니다.</p>
            <hr style={{ margin: '20px 0' }} />

            {/* 위젯 부착! */}
            <WeatherWidget />
        </div>
    );
}