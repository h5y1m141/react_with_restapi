import { Album } from '../models/index'
export const fetchAlbums = async (): Promise<Album[]> => {
  const url = 'https://jsonplaceholder.typicode.com/albums?userId=1'
  const response = await fetch(url, {
    method: 'GET',
  })
  const items = response.json()
  return items
}
