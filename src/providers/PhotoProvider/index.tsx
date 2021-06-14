import React, { createContext, useState, useEffect } from 'react'
import { PhotoState, initialPhotoState } from '../../domains/photos/models'
import { fetchPhotos } from '../../domains/photos/services'

export const PhotoStateContext = createContext<
  [PhotoState, (state: PhotoState) => void]
>([initialPhotoState, () => {}])

export const PhotoProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<PhotoState>(initialPhotoState)

  useEffect(() => {
    async function fetchData() {
      const initialAblumID = '1'
      const items = await fetchPhotos(initialAblumID)

      // NOTE: JavaScriptのスプレッド構文を利用して初期値で何も設定してない一覧情報だけを設定
      if (items.length > 0) {
        setState({
          ...state,
          photos: items,
        })
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <PhotoStateContext.Provider value={[state, setState]}>
        <div>{children}</div>
      </PhotoStateContext.Provider>
    </>
  )
}
