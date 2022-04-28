import React from 'react'
import { Dropdown } from 'react-bootstrap';

const dropdownItem = (props) => {

  const list = props.list.map((x) =>
    <Dropdown.Item key={x} onClick={props.onClick}> {x} </Dropdown.Item>
  ) 

  return (
    <Dropdown>
    <Dropdown.Toggle variant="success" >
      {props.choice}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {list}
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default dropdownItem