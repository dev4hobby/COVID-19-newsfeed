import React from 'react'
import Feed from './feed'

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
    
    return (
      <div>
        {feedList}    
      </div>
    )
  }
}

export default Feeds