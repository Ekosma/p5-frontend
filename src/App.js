
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LessonForm from "./components/lessonForm/LessonFormContainer";
import Lesson from "./components/lesson/LessonContainer";
import Lessons from "./components/lessons/LessonContainer"
import Header from './components/Header';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Lessons} />
          <Route exact path="/Lesson/new" component={LessonForm} />
          <Route path="/Lesson/:id" component={Lesson} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
