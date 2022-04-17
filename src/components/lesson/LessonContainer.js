import React, { Component } from 'react'
//import AddComment from './AddComment';
import { connect } from 'react-redux'
//import RecommendedCount from './RecommendedCount';
//import Comments from './Comments';
//import fetchComment from '../../redux/actions/fetchComment'
import { fetchLesson } from '../../redux/actions/fetchLesson'


class Lesson extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {comment: ''};
  };

  componentDidMount() {
    const url = window.location.pathname
    const str = url.split('/')
    const id = str.at(-1)
    this.props.fetchLesson(id)
  }

  render() {
    console.log(this.props.lesson)
    return (
      <div>
      <h1>{this.props.lesson.name}</h1> 
      <p>{this.props.lesson.description}</p>
      <p>{this.props.lesson.grade}</p>
      <p>{this.props.lesson.subject}</p>

    </div>
    )
  }  
}

const mapStateToProps = state => {
  //console.log(state.uploadForm.lesson)
  return {
    lesson: state.uploadForm.lesson
  }
}

export default connect(mapStateToProps, {fetchLesson})(Lesson)