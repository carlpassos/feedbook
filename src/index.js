import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import './style.scss'

import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Carlos Passos',
        avatar: 'https://avatars2.githubusercontent.com/u/47759447?s=460&v=4',
        time: 'há 3 min',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mi egestas, ullamcorper ante at, placerat nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris scelerisque quis est sit amet molestie. Sed venenatis lectus ut ante faucibus, in blandit leo placerat. Phasellus dictum tristique gravida. Maecenas condimentum, nisl quis ornare tristique, urna tortor sagittis ante, rhoncus elementum odio lacus et tortor. Mauris ut fringilla est, et placerat nulla.'
      },
      {
        id: 2,
        name: 'Diego Fernandes',
        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4',
        time: 'há 40 min',
        body:
          'Vivamus sagittis metus non semper tincidunt. Sed metus neque, pellentesque id lectus nec, scelerisque viverra arcu. Donec aliquam dui ac cursus iaculis. Proin id urna quis arcu luctus volutpat vel eget augue. Proin vitae feugiat nibh.'
      }
    ]
  }

  render () {
    const { posts } = this.state

    return (
      <Fragment>
        <Header />
        <div className="post">
          <div className="post-container">
            {posts && posts.map(post => <Post key={post.id} data={post} />)}
          </div>
        </div>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
