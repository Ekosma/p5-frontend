import React from 'react'
import { Card } from 'react-bootstrap'


const Cards = (props) => {
  
  const lessons = props.data.map((x) =>
    <Card.Body key={x.id}>  
      <Card.Title>
        {x.name}
      </Card.Title>
      <Card.Subtitle>
        {x.description}
      </Card.Subtitle>
      <Card.Text>
        {x.grade}
        {x.subject}
      </Card.Text>
    </Card.Body>
  )

  return (
  <div>
    {lessons}
  </div>
  )
}

export default Cards