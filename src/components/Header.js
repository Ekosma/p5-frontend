import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function header() {
  return (
   <div>
      <ul>
        <li><Link to="/"> Teacher Gives Teachers</Link> </li>
        <li><Link to="/Lesson/new">  Upload Lesson </Link></li>
        <li><Link to="/Lesson/:id">Lessons</Link> </li>
      </ul>
    </div>
  )
}
