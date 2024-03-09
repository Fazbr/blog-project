import React from 'react'
import CommentForm from './CommentForm'

const CommentsContainer = ({className}) => {
  return (
    <div className={`${className}`}>
      <CommentForm btnlabel="sens" />
    </div>
  )
}

export default CommentsContainer
