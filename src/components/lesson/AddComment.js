import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment(props) {

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Control type="input" as="textarea" required={true} value={props.comment} onChange={props.onChange}></Form.Control>
      <Button variant="primary" type="submit" >Submit</Button>
    </Form>
  )
}
