import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AlbumStateContext } from '../../providers/AlbumProvider'
import { AlbumsTemplate } from '../../templates/AlbumsTemplate'
import { Album } from '../../domains/albums/models'
import { fetchAlbums } from '../../domains/albums/services'

export const Albums: React.VFC = () => {
  const initialAlbums: Album[] = []
  const [state, setState] = useContext(AlbumStateContext)
  const [albums, setAlbums] = useState(initialAlbums)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = Number(event.currentTarget.getAttribute('data-id'))
    if (targetId) {
      const album = albums.find((album) => Number(album.id) === targetId)

      if (album !== undefined) {
        setState(album)
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      const items = await fetchAlbums()
      if (items.length > 0) {
        setAlbums(items)
      }
    }
    fetchData()
  }, [])

  // NOTE: 一覧情報は非同期で取得されるため未取得状態で以下の対応が必要
  if (albums.length === 0) return <div>Loading...</div>

  // NOTE: 一覧情報から任意のアルバムが選択された時にはhandleClickメソッドを通じて
  // 選択されたアルバム情報をコンテクストオブジェクトに設定している
  // そのためコンテクストオブジェクトに任意の値が入っていれば該当の詳細ページに遷移させる
  if (state.id !== '') return <Redirect to={`/albums/${state.id}`} />

  return (
    <>
      <AlbumsTemplate albums={albums} handleClick={handleClick} />
    </>
  )
}
