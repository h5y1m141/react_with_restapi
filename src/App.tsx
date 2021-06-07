import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AlbumProvider } from './providers/AlbumProvider'
import { Albums } from './pages/Albums'
import { AlbumDetail } from './pages/AlbumDetail'
import { Box, Container } from '@material-ui/core'

const App: React.VFC = () => {
  return (
    <Container maxWidth="lg">
      <Box p={1}>
        <Router>
          <Switch>
            <AlbumProvider>
              <Route exact path="/albums">
                <Albums />
              </Route>
              <Route path="/albums/:id">
                <AlbumDetail />
              </Route>
            </AlbumProvider>
          </Switch>
        </Router>
      </Box>
    </Container>
  )
}

export default App
