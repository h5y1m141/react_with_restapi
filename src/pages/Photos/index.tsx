import React, { useContext } from 'react'
import { PhotosTemplate } from '../../templates/PhotosTemplate'
import { PhotoStateContext } from '../../providers/PhotoProvider'

export const Photos: React.VFC = () => {
  const [state] = useContext(PhotoStateContext)

  // NOTE: 一覧情報は非同期で取得されるため未取得状態で以下の対応が必要
  if (state.photos.length === 0) return <div>Loading...</div>

  return (
    <>
      <PhotosTemplate photos={state.photos} />
    </>
  )
}
