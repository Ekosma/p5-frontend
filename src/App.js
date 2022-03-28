
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { connect } from "react-redux";
/*import Home from "./components/home/HomeContainer";
import LessonForm from "./components/lessonForm/LessonFormContainer";
import Lesson from "./components/lesson/LessonContainer";
import Lessons from "./components/lessons/LessonContainer"*/
import Header from './components/Header';
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';



/*function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/lessons" element={<Lessons />}>
          <Route path=":id" element={<Lesson />} />
          <Route path="new" element={<LessonForm />} />
        </Route>
      </Routes>
      <div>
      <ul>
      <li><Link to="/"> Teacher Gives Teachers</Link> </li>
      <li><Link to="/lessons/new">  Upload Lesson </Link></li>
      <li><Link to="/lessons/:id">Lessons</Link> </li>
      </ul>
    </div>
    </Router>
  );
}*/

function App() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App;
