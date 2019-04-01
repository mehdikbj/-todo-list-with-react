import React from 'react'
import PropTypes from 'prop-types'

/**
 * Heading
 *
 * render heading
 *
 * @param {string} title text to display
 * @param {string} size levels of section headings (h1||h2||h3||h4)
 * @param {object} className
 */
const Heading = ({ title, size, className }) => {
  switch (size) {
    case 'h1':
      return <h1 className={className}>{title}</h1>
    case 'h2':
      return <h2 className={className}>{title}</h2>
    case 'h3':
      return <h3 className={className}>{title}</h3>
    case 'h4':
      return <h4 className={className}>{title}</h4>
    default:
      return { title }
  }
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Heading
