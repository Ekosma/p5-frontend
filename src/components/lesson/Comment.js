import React from 'react'
import { Card } from 'react-bootstrap'

export default function Comments(props) {
  //console.log(props)
  return (
    <div>
      {props.data.comment}
    </div>
  )
}
