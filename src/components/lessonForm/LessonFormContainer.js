import React, { Component } from 'react'
import PdfUpload from "./Pdf_Upload";
import DropdownItem from '../dropdownItem';
import { connect } from 'react-redux';
import {fetchLessons} from '../../redux/actions/fetchLessons'
import { Form, Button } from 'react-bootstrap';

class LessonFormContainer extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit")
    console.log(this.state.grade)
    this.props.fetchLessons(this.state.grade)
    console.log("handleSubmit")
    this.setState({
      
    })
  }

  render() {
    const grades = ["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth" ] 
    const subjects = ["English", "History", "Mathematics", "Science", "Fine Arts", "Athletics", "Elective"]

    const listGrade = <DropdownItem list={grades} choice={this.state.grade} onClick={this.gradeChoice} />
    const listSubject = <DropdownItem list={subjects} choice={this.state.subject} onClick={this.subjectChoice} />
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>LESSON FORM PAGE</h1>
        {listGrade}
        {listSubject}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, {fetchLessons})(LessonFormContainer)