import React from 'react'
import { Typography } from '@material-ui/core'
import { Photo } from '../../domains/photos/models'
import { PhotoItem } from './PhotoItem'

type Props = {
  photos: Photo[]
}

export const PhotosTemplate: React.VFC<Props> = ({ photos }) => {
  return (
    <>
      <Typography id="simple-modal-title" component="h3" variant="h3">
        写真一覧
      </Typography>

      {photos.map((photo) => {
        return <PhotoItem photo={photo} />
      })}
    </>
  )
}
