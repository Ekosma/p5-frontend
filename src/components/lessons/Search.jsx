import { Dropdown } from 'react-bootstrap';


// This holds a list of some fiction people
// Some  have the same name but different age and id
import React, { Component} from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {grade: 'pick grade', subject: 'pick subject'};
  };

  gradeChoice = (e) => {
    e.preventDefault();
    //console.log(e.target.innerHTML)
    this.setState({
      grade: e.target.innerHTML
    })
  }

  subjectChoice = (e) => {
    e.preventDefault();
    //console.log(e.target.innerHTML)
    this.setState({
      subject: e.target.innerHTML
    })
  }


  render() {
    const grades = ["Kindergarten", "First", "Second", "Third"] 
    const subjects = ["English", "History", "Mathematics", "Science"]

    const listGrades = grades.map((grade) =>
      <Dropdown.Item key={grade} onClick={this.gradeChoice}> {grade} </Dropdown.Item>
    ) 

    const listSubjects = subjects.map((subject) =>
      <Dropdown.Item key={subject} onClick={this.subjectChoice}> {subject} </Dropdown.Item>
    ) 
    

    return (
      <div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic1">
        {this.state.grade}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {listGrades}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic2">
        {this.state.subject}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {listSubjects}
      </Dropdown.Menu>
    </Dropdown>
    </div>
    )
  }
}





const LESSONS = [
  { id: 1, name: 'Quadratics', grade: 'kindergarten', subject:'math'},
  { id: 2, name: 'Algebra Review', grade: 'first', subject:'english'},
  { id: 3, name: 'Linear Fun', grade: 'first', subject:'math'},
  { id: 4, name: 'English Essay Prompts', grade: 'sixth', subject:'science' },
  { id: 5, name: '11th History Exam', grade: 'twelfth', subject:'elective'},
  { id: 6, name: '10th English Quiz', grade: 'fourth', subject:'fineArt' },
  { id: 7, name: 'Geometry CrossWord', grade: 'fifth', subject:'history'},
];