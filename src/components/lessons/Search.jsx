import React, { Component } from 'react'
import DropdownItem from '../dropdownItem';
import "./Search.css"

export default class Search extends Component {
  
  render() {
    const grades = ["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth" ] 
    const subjects = ["English", "History", "Mathematics", "Science", "Fine Arts", "Athletics", "Elective"]

    const listGrade = <DropdownItem list={grades} choice={this.props.grade} onClick={this.props.gradeChoice} />
    const listSubject = <DropdownItem list={subjects} choice={this.props.subject} onClick={this.props.subjectChoice} />
    return (
    <div id="search">
      test test {listGrade} test test {listSubject}
    </div>
    )
  }
}

