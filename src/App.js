
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { connect } from "react-redux";
import Home from "./components/home/HomeContainer";
import LessonForm from "./components/lessonForm/LessonFormContainer";
import Lesson from "./components/lesson/LessonContainer";
import Lessons from "./components/lessons/LessonContainer"
import Header from './components/Header';
import Footer from "./components/Footer";



function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Lesson} />
            <Route path="/players/new" component={LessonForm} />
          </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
