import React, { useEffect, useState } from 'react'
import BasicAppBar from '../components/BasicAppBar'
import { WeatherCard } from '../components/WeatherCard'
import useFetch from '../hooks/useFetch'
import classes from './WeatherPage.module.css'

export function WeatherPage() {
  const [myCoords, setMyCoords] = useState({ lon: -0.125, lat: 51.5085 })

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setMyCoords({
            lon: position.coords.longitude,
            lat: position.coords.latitude,
          })
        },
        function (error) {
          console.error('Error Code = ' + error.code + ' - ' + error.message)
        }
      )
    } else {
      console.log('Geolocation Is Not Available')
    }
  }, [])

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myCoords.lat}&lon=${myCoords.lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`

  const { data, loading, error } = useFetch(url)

  if (loading)
    return (
      <>
        <BasicAppBar />
        <div className={classes.header}>Loading...</div>
      </>
    )

  const { coord, weather, main, visibility, wind, clouds, dt, name } = data

  return (
    <>
      <BasicAppBar />
      <div className={classes.root}>
        <h1 className={classes.header}>Weather Page</h1>
        <div>
          {error && <div>{error}</div>}
          {data && (
            <WeatherCard
              coord={coord}
              weather={weather}
              main={main}
              visibility={visibility}
              wind={wind}
              clouds={clouds}
              dt={dt}
              name={name}
            />
          )}
        </div>
      </div>
    </>
  )
}
