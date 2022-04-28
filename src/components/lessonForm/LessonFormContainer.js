import React, { Component, useEffect, useState } from 'react'
import PdfUpload from "./Pdf_Upload";
import DropdownItem from '../lessons/dropdownItem';
import { connect } from 'react-redux';
import {uploadLesson} from '../../redux/actions/uploadLesson'
import { Form, Button } from 'react-bootstrap';
import Upload from './Pdf_Upload';
import './LessonFormContainer.css';
import { Card } from 'react-bootstrap'

class LessonFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {grade: 'no grade specified', subject: 'no subject specified', name: '', description: '', content: [], key: 0 };
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
    //console.log(this.state.name)
  }

  descriptionChoice = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    this.setState({
      description: e.target.value
    })
    //console.log(this.state.description)
  }

  uploadedContent = (e) => {
    e.preventDefault();
    console.log(e.target.files)
    this.setState({
      content: e.target.files[0]
    })
    //setTimeout(() => {console.log(this.state.content)}, 5000)
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
    this.props.uploadLesson(lesson)
    //onSubmitProps.setSubmitting(false)
    //onSubmitProps.resetForm()
    console.log(this.props)
    this.defaultState()
  }

  defaultState = () => {
    this.setState({
      grade: 'no grade specified',
      subject: 'no subject specified',
      name: '',
      description: '',
      content: [],
      key: this.state.key + 1 
    })
  }


  render() {
    const grades = ["Kindergarten", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth" ] 
    const subjects = ["English", "History", "Mathematics", "Science", "Fine Arts", "Athletics", "Elective"]

    const listGrade = <DropdownItem list={grades} choice={this.state.grade} onClick={this.gradeChoice} required={true} />
    const listSubject = <DropdownItem list={subjects} choice={this.state.subject} onClick={this.subjectChoice} required={true}/>
    const name = <textarea id="name" rows="1" value={this.state.name} onChange={this.nameChoice} required={true}/>
    const description = <textarea id="description" rows="5" value={this.state.description} onChange={this.descriptionChoice} required={true}/>
    const content = <Upload onChange={this.uploadedContent} key={this.state.key} />
    return (
      <div className="upload">
        <Form onSubmit={this.handleSubmit} className='form'>
          <h1>LESSON FORM PAGE</h1>
          <div className='title'>
            Name
            <div>
              {name}
            </div>
          </div>
          <div className='title'>
            Description
            <div className='body'> 
              {description}
            </div>
          </div>
          <div className='title'>
            Choose Grade Level
            <div className='body'>
            {listGrade}
            </div>
          </div>
          <div className='title'>
            Choose Subject
            <div className='body'>
              {listSubject}
            </div>
          </div>
          <div className='pdf'>
            {content}
          </div>
          <div className='btn'>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
          <div className='btn'>
            <Button type='reset'>Reset</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default connect(null, {uploadLesson})(LessonFormContainer)

