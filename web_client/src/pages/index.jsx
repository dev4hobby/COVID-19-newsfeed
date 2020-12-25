import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Feeds from '../components/feeds.jsx'

const feedUrl = 'https://raw.githubusercontent.com/dev4hobby/COVID-19-newsfeed/master/feed.json'

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" style={{
          // backgroundColor: '#D1F2EB',
          height: '100vh',
          paddingTop: '5vh'
        }}>
          <h2>COVID-19 Newsfeed</h2>
          <br></br>
          <Feeds feedUrl={feedUrl}> </Feeds>
        </Typography>
      </Container>
    </React.Fragment>
  )
}


export default IndexPage
