import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons/:id" component={LessonIndex} />
          <Route path="/lessons/new" component={LessonForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
