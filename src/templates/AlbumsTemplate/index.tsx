import React from 'react'
import { Typography } from '@material-ui/core'
import { Album } from '../../domains/albums/models'
import { AlbumItem } from './AlbumItem'

type Props = {
  albums: Album[]
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}
export const AlbumsTemplate: React.VFC<Props> = ({ albums, handleClick }) => {
  return (
    <>
      <Typography id="simple-modal-title" component="h3" variant="h3">
        アルバム一覧
      </Typography>

      {albums.map((album) => {
        return (
          <AlbumItem key={album.id} album={album} handleClick={handleClick} />
        )
      })}
    </>
  )
}
