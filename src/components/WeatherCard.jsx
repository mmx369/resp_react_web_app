import React from 'react'

export function WeatherCard({
  coord,
  weather,
  main,
  visibility,
  wind,
  clouds,
  dt,
  name,
}) {
  return (
    <div>
      <h2>{`Weather in ${name} (lon: ${coord.lon}, lat:${coord.lat})`}</h2>
      <p>
        Weather: <br />
        Temperature: {main.temp} &#8451;
        <br />
        Feel Likes: {main.feels_like} &#8451;
        <br />
        Humidity: {main.humidity} % <br />
      </p>
      Date: {new Date(dt * 1000).toLocaleString()}
    </div>
  )
}
