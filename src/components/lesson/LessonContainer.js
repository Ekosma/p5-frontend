import React, { Component } from 'react'
import AddComment from './AddComment';
import { connect } from 'react-redux'
//import RecommendedCount from './RecommendedCount';
//import Comments from './Comments';
import { fetchComments } from '../../redux/actions/fetchComments'
import { fetchLesson } from '../../redux/actions/fetchLesson'
import { addComment } from '../../redux/actions/addComment'



class Lesson extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {comment: '', recommended: 0 };
    const url = window.location.pathname
    const str = url.split('/')
    this.lesson_id = str.at(-1)
  };

  componentDidMount() {
    this.props.fetchLesson(this.lesson_id)
    this.props.fetchComments(this.lesson_id)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    //console.log("handleSubmit")
    //console.log(e)
    const comment = {
      lesson_id: this.lesson_id,
      comment: e.target[0].value,
      recommended: this.state.recommended,
    }
    //console.log(lesson)
    this.props.addComment(comment)
    //console.log("handleSubmit")
  }

  render() {
    console.log(this.props.lesson)
    console.log(this.props.comments)
    return (
      <div>
      <h1>{this.props.lesson.name}</h1> 
      <p>{this.props.lesson.description}</p>
      <p>{this.props.lesson.grade}</p>
      <p>{this.props.lesson.subject}</p>
      <AddComment handleSubmit={this.handleSubmit} comment={this.state.comment}/>
    </div>
    )
  }  
}

const mapStateToProps = state => {
  //console.log(state.uploadForm.lesson)
  return {
    lesson: state.uploadForm.lesson,
    comments: state.uploadForm.comments
  }
}

export default connect(mapStateToProps, {fetchLesson, addComment, fetchComments})(Lesson)