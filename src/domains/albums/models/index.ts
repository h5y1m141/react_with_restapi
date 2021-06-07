// https://jsonplaceholder.typicode.com/albums
export type Album = {
  id: string
  userId: string
  title: string
}

export const initialAlbumState: Album = {
  id: '',
  userId: '',
  title: '',
}
