export const getWeatherIconMain = (weatherText) => {
    if (!weatherText) return "bx bx-cloud"; // 데이터가 없을 때 기본값

    const text = weatherText.toLowerCase(); // 소문자로 변환하여 비교 누락 방지

    // 1. 맑음 계열
    if (text.includes("clear") || text.includes("sunny")) return "bx bx-sun";
    
    // 2. 구름 계열 (Partly cloudy, Overcast, Mist 등 포함)
    if (text.includes("cloud") || text.includes("overcast")) return "bx bxs-cloud";
    
    // 3. 비 계열 (Patchy rain, Light rain, Showers 등)
    if (text.includes("rain") || text.includes("drizzle") || text.includes("showers")) {
        return "bx bx-cloud-rain";
    }

    // 4. 번개 계열
    if (text.includes("thunder") || text.includes("storm")) return "bx bx-cloud-lightning";

    // 5. 눈/겨울 계열
    if (text.includes("snow") || text.includes("sleet") || text.includes("ice") || text.includes("blizzard")) {
        return "bx bx-cloud-snow";
    }

    // 6. 안개 계열
    if (text.includes("mist") || text.includes("fog") || text.includes("haze")) {
        return "bx bx-cloud-fog";
    }

    return "bx bx-cloud"; // 매칭되는 키워드가 없을 때의 최종 fallback
};


/*
배운점: 

1. .includes()함수를 이용해서 날씨에 맞게 아이콘을 띠울 수 있게 만들어줬다. 
이렇게하면 하드코딩의 늪에서 헤어나올 수 있다. 

*/