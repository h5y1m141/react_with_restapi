import React from 'react'
import { Button, Box, Grid, Typography } from '@material-ui/core'
import { Photo } from '../../domains/photos/models'
import { Link } from 'react-router-dom'

type Props = {
  photo: Photo
}

export const PhotoItem: React.VFC<Props> = ({ photo }) => {
  return (
    <>
      <Box p={1}>
        <Grid container>
          <Grid item xs={9}>
            <Typography component="h5" variant="h5">
              {photo.title}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/photos/${photo.id}`}>
              <Button variant="contained" color="primary" data-id={photo.id}>
                詳細情報確認
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
