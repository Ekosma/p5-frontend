import React from 'react'
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <Link to="/dashboard">
        Teacher Gives Teachers
      </Link>
      <Link to="/lessons/new">
        Upload Lesson
      </Link>
    </div>
  )
}
