import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Cards = (props) => {
  
  const lessons = props.data.map((x) =>
    <Card key={x.id}>
      <Card.Header>
      {x.name}
    </Card.Header>
    <Card.Body >  
      <Card.Subtitle>
        {x.description}
      </Card.Subtitle>
      <Card.Text>
        {x.grade}
        {x.subject}
        <Link class="btn btn-primary stretched-link" to={"/Lesson/" + x.id}>Lessons</Link>
      </Card.Text>
    </Card.Body>
    </Card>
  )

  return (
  <div>
    {lessons}
  </div>
  )
}

export default Cards