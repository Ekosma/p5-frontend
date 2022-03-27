import React from 'react'
import { Link } from "react-router-dom";
import LessonForm from "./lessonForm/LessonFormContainer";

export default function header() {
  return (
    <nav>
      <Link to="/dashboard">
        Teacher Gives Teachers
      </Link>
      <Link to="/lessons/new">
        Upload Lesson
      </Link>
    </nav>
  )
}
