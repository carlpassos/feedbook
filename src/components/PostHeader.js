import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = props => (
  <div className="post-header">
    <img className="avatar" src={props.avatar} />
    <div className="data-container">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
)

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default PostHeader
