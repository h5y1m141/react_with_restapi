export type Photo = {
  id: string
  albumId: string
  title: string
  url: string
  thumbnailUrl: string
}

export type PhotoState = {
  photos: Photo[]
  currentPhoto: Photo
}

export const initialPhotoState = {
  photos: [],
  currentPhoto: {
    id: '',
    albumId: '',
    title: '',
    url: '',
    thumbnailUrl: '',
  },
}
