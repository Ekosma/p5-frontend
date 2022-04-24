import React, { Component, useEffect, useState } from 'react'
import PdfUpload from "./Pdf_Upload";
import DropdownItem from '../dropdownItem';
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
      <Card style={{ maxWidth: '22rem', margin: '25px'}} className="card bg-light mb-3 ">
        <Form onSubmit={this.handleSubmit} className='form'>
          <h1>LESSON FORM PAGE</h1>
          <div>
            Name:{name}
          </div>
          <div>
            Description:{description}
          </div>
          <div>
            Choose Grade Level:{listGrade}
          </div>
          <div>
            Choose Subject:{listSubject}
          </div>
          <div>
            {content}
          </div>
          <div>
            <Button variant="primary" type="submit">Submit</Button>
          </div>
          <Button type='reset'>Reset</Button>
        </Form>
        
      </Card>
    )
  }
}

export default connect(null, {uploadLesson})(LessonFormContainer)


/*
const [grade, setGrade] = useState("no grade specified")
  const [subject, SetSubject] = useState("no subject specified")
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  

  handleChange = (e) => {
    console.log(e)
    e.target=="grade" 
    ? setGrade(e.target.innerHTML)
    : e.target.name=="subject" 
    ? setSubject(e.target.innerHTML)
    : e.target.name=="name" 
    ? setName(e.target.value)
    : e.target.name=="description" 
    ? setDescription(e.target.value)
    : e.target.name=="content" 
    ? setContent(e.target.files[0])
    : console.log("error")
  }*/