import React, { Component } from 'react'
import AddComment from './AddComment';
import { connect } from 'react-redux'
//import RecommendedCount from './RecommendedCount';
import Comments from './Comments';
//import fetchComment from '../../redux/actions/fetchComment'
import { fetchLesson } from '../../redux/actions/fetchLesson'


class Lesson extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {grade: 'grade', subject: 'subject'};
  };

  componentDidMount() {
    const url = window.location.pathname
    const str = url.split('/')
    const id = str.at(-1)
    this.props.fetchLesson(id)
  }

  render() {
    return (
      <div>
      <h1>Lesson Page</h1> 

      <AddComment />
      
      <Comments />
    </div>
    )
  }  
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    lessons: state.uploadForm.lessons
  }
}

export default connect(mapStateToProps, {fetchLesson})(Lesson)