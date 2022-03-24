import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import LessonForm from "./components/LessonForm";
import LessonIndex from "./components/LessonIndex";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lessons/:id" component={LessonIndex} />
          <Route path="/lessons/new" component={LessonForm} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
