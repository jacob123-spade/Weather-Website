export const getWeatherIconMain = (main) => {
    if(!main) return "bx bx-cloud"; // default

    if(main === "Clear" ) return "bx bx-sun";

    if(main === "Clouds") return "bx bxs-cloud";

    if(main === "Rain" || main === "Drizzle") return "bx bx-cloud-rain";

    if(main === "Thunderstorm") return "bx bx-cloud-lightning";

    if(main === "Snow") return "bx bx-snowflake";

    if(
        main === "Mist" ||
        main === "Fog" ||
        main === "Haze"
    ) return "bx bx-cloud-fog";

    return "bx bx-cloud"; // fallback
};