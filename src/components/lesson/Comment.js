import React from 'react'
import { Form } from 'react-bootstrap'

export default function Comments(props) {
  return (
    <div>
      {props.data.comment}
    </div>
  )
}
