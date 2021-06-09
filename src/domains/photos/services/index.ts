import { Photo } from '../models/index'

export const fetchPhotos = async (albumId: string): Promise<Photo[]> => {
  const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  const response = await fetch(url, {
    method: 'GET',
  })
  const items = response.json()
  return items
}

export const fetchPhoto = async (photoId: string): Promise<Photo> => {
  const url = `https://jsonplaceholder.typicode.com/photos/${photoId}`
  const response = await fetch(url, {
    method: 'GET',
  })
  const item = response.json()
  return item
}
