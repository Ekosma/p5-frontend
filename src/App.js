import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { connect } from "react-redux";
import Home from "./components/Home";
import LessonForm from "./components/LessonForm";
import Lesson from "./components/Lesson";



function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/lessons/:id" component={Lesson} />
          <Route path="/lessons/new" component={LessonForm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
