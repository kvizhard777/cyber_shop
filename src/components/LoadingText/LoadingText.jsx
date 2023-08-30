import React from 'react'
import './LoadingText.css'

const LoadingText = ({ text }) => {
  return (
    <span className="loading-text">{text}</span>
  )
}

export default LoadingText