import React, { Component } from 'react'
import PdfUpload from "./Pdf_Upload";
import DropdownItem from '../dropdownItem';
import { connect } from 'react-redux';
import {fetchLessons} from '../../redux/actions/fetchLessons'
import { Form, Button } from 'react-bootstrap';
import Upload from './Pdf_Upload';

class LessonFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {grade: 'no grade specified', subject: 'no subject specified', name: 'title', description: 'description', content: ''};
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

  nameChoice = (e) => {
    e.preventDefault();
    //console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  descriptionChoice = (e) => {
    e.preventDefault();
    //console.log(e.target.value)
    this.setState({
      description: e.target.value
    })
  }

  uploadedContent = (e) => {
    e.preventDefault();
    console.log(e.target.files[0])
    this.setState({
      content: e.target.files[0]
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //console.log("handleSubmit")
    //console.log(e)
    const lesson = {
      name: this.state.name,
      description: this.state.description,
      grade: this.state.grade,
      subject: this.state.subject,
      content: this.state.content,
    }
    //console.log(lesson)
    this.props.fetchLessons(lesson)
    //console.log("handleSubmit")
  }

  render() {
    const grades = ["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth" ] 
    const subjects = ["English", "History", "Mathematics", "Science", "Fine Arts", "Athletics", "Elective"]

    const listGrade = <DropdownItem list={grades} choice={this.state.grade} onClick={this.gradeChoice} />
    const listSubject = <DropdownItem list={subjects} choice={this.state.subject} onClick={this.subjectChoice} />
    const name = <textarea id="name" rows="1" onChange={this.nameChoice} />
    const description = <textarea id="description" rows="5" onChange={this.descriptionChoice} />
    const content = <Upload onChange={this.uploadedContent}/>
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>LESSON FORM PAGE</h1>
        {name}
        {description}
        {listGrade}
        {listSubject}
        {content}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    )
  }
}

export default connect(null, {fetchLessons})(LessonFormContainer)