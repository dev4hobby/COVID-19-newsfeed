import * as React from 'react'
import Feeds from '../components/feeds.jsx'

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const feedUrl = 'https://raw.githubusercontent.com/dev4hobby/COVID-19-newsfeed/master/feed.json'

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>COVID-19 Newsfeed</title>
      <Feeds feedUrl={feedUrl}> </Feeds>
    </main>
  )
}

export default IndexPage
