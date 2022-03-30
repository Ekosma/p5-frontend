import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/*import Home from "./home/HomeContainer";
import LessonForm from "./lessonForm/LessonFormContainer";
import Lesson from "./lesson/LessonContainer";
import Lessons from "./lessons/LessonContainer"*/


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
