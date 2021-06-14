import React from 'react'

import { Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { Album } from '../../domains/albums/models'

type Props = {
  album: Album
}
export const AlbumDetailTemplate: React.VFC<Props> = ({ album }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/albums')
  }

  return (
    <>
      <Typography component="h3" variant="h3">
        {album.title}
      </Typography>
      <p>{album.title}</p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        一覧に戻る
      </Button>
    </>
  )
}
