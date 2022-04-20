import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { Document } from 'react-pdf/dist/esm/entry.webpack5'
//import { Document} from 'react-pdf';



const Cards = (props) => {

  const lessons = props.data.map((x) =>
    <Card key={x.id} style={{ maxWidth: '22rem', margin: '25px'}} class="card bg-light mb-3 ">
      <Card.Header>
      {x.name}
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
      <Card>
        <Link className="btn btn-primary stretched-link" to={"/Lesson/" + x.id}>Lessons</Link>
      </Card>
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

//<Document file={{data:x.content}} />