import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AlbumQueryProvider } from './providers/AlbumQueryProvider'
import { PhotoProvider } from './providers/PhotoProvider'
import { Albums } from './pages/Albums'
import { Photos } from './pages/Photos'
import { PhotoDetail } from './pages/PhotoDetail'
import { Box, Container } from '@material-ui/core'

const App: React.VFC = () => {
  return (
    <Container maxWidth="lg">
      <Box p={1}>
        <Router>
          <Switch>
            <AlbumQueryProvider>
              <Route exact path="/albums">
                <Albums />
              </Route>
              <Route path="/albums/:id">
                <Albums />
              </Route>
            </AlbumQueryProvider>
          </Switch>
        </Router>
        <Router>
          <Switch>
            <PhotoProvider>
              <Route exact path="/photos">
                <Photos />
              </Route>
              <Route path="/photos/:id">
                <PhotoDetail />
              </Route>
            </PhotoProvider>
          </Switch>
        </Router>
      </Box>
    </Container>
  )
}

export default App
