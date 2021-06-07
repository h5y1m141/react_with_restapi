import React, { createContext, useState } from 'react'
import { Album, initialAlbumState } from '../../domains/albums/models'

export const AlbumStateContext = createContext<[Album, (state: Album) => void]>(
  [initialAlbumState, () => {}]
)

export const AlbumProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<Album>(initialAlbumState)

  return (
    <>
      <AlbumStateContext.Provider value={[state, setState]}>
        <div>{children}</div>
      </AlbumStateContext.Provider>
    </>
  )
}
