import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Cards.css"


const Cards = (props) => {

  const lessons = props.data.map((x) =>
    <Card key={x.id} className="card bg-light text-center mb-3 ">
      <Card.Header>
      <h3>{x.name}</h3>
    </Card.Header>
    <Card.Body >  
      <Card.Subtitle>
        Description:{x.description}
      </Card.Subtitle>
      <Card.Text>
        Grade Level:{x.grade}
      </Card.Text>
      <Card.Text>
      Subject:{x.subject}
      </Card.Text>
      <Link className="hidden btn stretched-link" to={"/Lesson/" + x.id}></Link>
    </Card.Body>
    </Card>
  )
  return (
  <div className="cards" >
    {lessons}
  </div>
  )
}


export default Cards

//<Document file={{data:x.content}} />