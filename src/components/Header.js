import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home/HomeContainer";
import LessonForm from "./lessonForm/LessonFormContainer";
import Lesson from "./lesson/LessonContainer";
import Lessons from "./lessons/LessonContainer"


export default function header() {
  return (
   /* <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/lessons" element={<Lessons />}>
        <Route path=":id" element={<Lesson />} />
        <Route path="new" element={<LessonForm />} />
      </Route>
    </Routes>*/
    <div>
    <ul>
    <li><Link to="/"> Teacher Gives Teachers</Link> </li>
    <li><Link to="/lessons/new">  Upload Lesson </Link></li>
    <li><Link to="/lessons/:id">Lessons</Link> </li>
    </ul>
  </div>
  //</Router>
  )
}
