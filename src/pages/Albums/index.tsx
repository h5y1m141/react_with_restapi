import { useQuery } from 'react-query'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { AlbumsTemplate } from '../../templates/AlbumsTemplate'
import { AlbumDetailTemplate } from '../../templates/AlbumDetailTemplate'
import { Album, initialAlbumState } from '../../domains/albums/models'
import { fetchAlbums } from '../../domains/albums/services'

export const Albums: React.VFC = () => {
  const initialAlbums: Album[] = []
  const [albums, setAlbums] = useState(initialAlbums)
  const [currentAlbum, setCurrentAlbum] = useState(initialAlbumState)
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetId = Number(event.currentTarget.getAttribute('data-id'))
    if (targetId) {
      history.push(`/albums/${targetId}`)
    }
  }

  const { isLoading, error, data } = useQuery('albumData', () =>
    fetchAlbums().then((items) => {
      if (items) {
        setAlbums(items)
      }
      return items
    })
  )

  useEffect(() => {
    const album = albums.find((album) => Number(album.id) === Number(id))
    if (album !== undefined) {
      setCurrentAlbum(album)
    }
  }, [currentAlbum, albums, id])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>'An error has occurred: '</div>

  if (id) return <AlbumDetailTemplate album={currentAlbum} />
  if (data) {
    return (
      <>
        <AlbumsTemplate albums={data} handleClick={handleClick} />
      </>
    )
  }
  return <div>'An error has occurred: '</div>
}
