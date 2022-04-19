import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Document } from 'react-pdf/dist/esm/entry.webpack5'


const Cards = (props) => {
  const pdfContentType = 'application/pdf';
  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: pdfContentType });
};

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
      <Card.Text>
        <Document file={x.content} />
        <Link className="btn btn-primary stretched-link" to={"/Lesson/" + x.id}>Lessons</Link>
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