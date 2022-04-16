import React, { Component } from 'react'
import DropdownItem from '../dropdownItem';
import "./Search.css"

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
    const grades = ["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth" ] 
    const subjects = ["English", "History", "Mathematics", "Science", "Fine Arts", "Athletics", "Elective"]

    const listGrade = <DropdownItem list={grades} choice={this.state.grade} onClick={this.gradeChoice} />
    const listSubject = <DropdownItem list={subjects} choice={this.state.subject} onClick={this.subjectChoice} />
    return (
    <div id="search">
      test test {listGrade} test test {listSubject}
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