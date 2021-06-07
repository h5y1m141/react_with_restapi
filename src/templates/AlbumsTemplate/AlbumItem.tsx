import React from 'react'
import { Button, Box, Grid, Typography } from '@material-ui/core'
import { Album } from '../../domains/albums/models'

type Props = {
  album: Album
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const AlbumItem: React.VFC<Props> = ({ album, handleClick }) => {
  return (
    <>
      <Box p={1}>
        <Grid container>
          <Grid item xs={9}>
            <Typography component="h5" variant="h5">
              {album.title}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              data-id={album.id}
            >
              詳細情報確認
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
