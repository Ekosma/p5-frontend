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