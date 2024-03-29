import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <div className="header">{props.children}</div>
)

Header.defaultProps = {
  children: 'RocketBook'
}

Header.propTypes = {
  children: PropTypes.string
}

export default Header
