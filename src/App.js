//import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { connect } from "react-redux";
import Home from "./components/home/HomeContainer";
import LessonForm from "./components/lessonForm/LessonFormContainer";
import Lesson from "./components/lesson/LessonContainer";



function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/lessons/:id" component={Lesson} />
          <Route path="/lessons/new" component={LessonForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
