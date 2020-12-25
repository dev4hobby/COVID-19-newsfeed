import * as React from 'react'

const Feed = ({ feed }) => (
  <div>
    
    <p href={feed.link}>{feed.title}</p>
    <p>{feed.date}</p>
  </div>
);

export default Feed
