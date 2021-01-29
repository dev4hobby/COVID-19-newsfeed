import React from 'react'
import Feed from './feed'
import NotFoundPage from '../pages/404.jsx'

class Feeds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feeds: [],
    }
  }
  
  componentDidMount() {
    fetch(this.props.feedUrl,
    {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ feeds: data })
    })
    .catch(error => {
      console.log(error)
      this.setState({ feeds: []})
    })
  }

  render() {
    const feedList = Object.keys(this.state.feeds).map(key => 
      <Feed
        key={key}
        feed={this.state.feeds[key]}
      />
    )
    if (feedList[0]) {
      return (
        <div>
          {feedList}    
        </div>
      )
    } else {
      return <NotFoundPage/>
    }
  }
}

export default Feeds
