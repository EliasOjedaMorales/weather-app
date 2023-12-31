const dbKey = process.env.NEXT_PUBLIC_API_KEY_DB_Citties
export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': dbKey,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
}

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
