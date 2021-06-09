import React, { useContext, useEffect } from 'react'
import { Button, Box, Grid, Typography } from '@material-ui/core'
import { useParams, useHistory } from 'react-router-dom'
import { PhotoStateContext } from '../../providers/PhotoProvider'

export const PhotoDetail: React.VFC = () => {
  const [state, setState] = useContext(PhotoStateContext)
  const { id } = useParams<{ id: string }>()
  const handleClick = () => {
    history.push('/photos')
  }
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const photo = state.photos.find(
        (photo) => Number(photo.id) === Number(id)
      )
      if (photo && photo.id !== '') {
        // NOTE: PhotoのIDが変更されるタイミングでStateで一覧情報に関連する値は
        // そのままで、詳細情報に関連のあるcurrentPhotoの値だけを変更したいので以下対応
        setState({
          ...state,
          currentPhoto: photo,
        })
      }
    }
    fetchData()
  }, [id, state])

  // if (state.photos.length === 0) return <div>Loading...</div>

  return (
    <>
      <Box p={1}>
        <Grid container>
          <Grid item xs={12}>
            <Typography component="h3" variant="h3">
              {state.currentPhoto.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {state.currentPhoto.id}
          </Grid>
          <Grid item xs={12}>
            <img
              src={state.currentPhoto.thumbnailUrl}
              alt={state.currentPhoto.title}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleClick}>
              一覧に戻る
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
