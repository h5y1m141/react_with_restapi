import React, { useContext } from 'react'
import { Button, Typography } from '@material-ui/core'
import { AlbumStateContext } from '../../providers/AlbumProvider'
import { initialAlbumState } from '../../domains/albums/models'
import { useHistory } from 'react-router-dom'

export const AlbumDetail: React.VFC = () => {
  const [state, setState] = useContext(AlbumStateContext)
  const handleClick = () => {
    // NOTE：一覧画面でReactRouterのRedirectの処理が実行されないようにするため
    // ここでコンテクストオブジェクトの内容をリセットする必要ある
    setState(initialAlbumState)
    history.push('/albums')
  }
  const history = useHistory()

  return (
    <>
      <Typography component="h3" variant="h3">
        {state.title}
      </Typography>
      <p>{state.title}</p>
      <Button variant="contained" color="primary" onClick={handleClick}>
        一覧に戻る
      </Button>
    </>
  )
}
