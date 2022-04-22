import React, { Component } from 'react'
import AddComment from './AddComment';
import { connect } from 'react-redux'
//import RecommendedCount from './RecommendedCount';
import Comment from './Comment';
import { fetchComments } from '../../redux/actions/fetchComments'
import { fetchLesson } from '../../redux/actions/fetchLesson'
import { addComment } from '../../redux/actions/addComment'
//import { Document } from 'react-pdf/dist/esm/entry.webpack5'


class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: [], lesson: {content: ''}};
    const url = window.location.pathname
    const str = url.split('/')
    this.lesson_id = str.at(-1)
  };

  componentDidMount() {
    this.props.fetchLesson(this.lesson_id)
    this.props.fetchComments(this.lesson_id)
    //console.log(this.props.lesson.content)
    //console.log(this)
  }

  onChange = (e) => {this.setState({comments: [...this.props.comments, e.target.value]}); console.log(this.state); console.log(this.props)} 

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    //console.log("handleSubmit")
    //console.log(e)
    const comment = {
      lesson_id: this.lesson_id,
      comment: e.target[0].value,
    }
    //console.log(lesson)
    this.props.addComment(comment)
    //console.log(this.props)
    //console.log("handleSubmit")
  }

  render() {
    //console.log(this.props.lesson)
    console.log(this.props.comments)
    const commentsList = this.props.comments.slice(0).reverse().map((x) =>
    <Comment key={x.id} data={x} />
    )
    //console.log(this.props.lesson.content)
    return (
      <div>
      <h1>{this.props.lesson.name}</h1> 
      <p>Description:{this.props.lesson.description}</p>
      <p>Grade Level:{this.props.lesson.grade}</p>
      <p>Subject:{this.props.lesson.subject}</p>
      <embed type="application/pdf" src={'data:application/pdf;base64,' + this.props.lesson.content} height="700px" width="80%" />
      <AddComment handleSubmit={this.handleSubmit} comments={this.state.comment} onChange={this.onChange}/>
      {commentsList}
    </div>
    )
  }  
}

const mapStateToProps = state => {
  console.log(state.uploadForm.lesson)
  return {
    lesson: state.uploadForm.lesson,
    comments: state.uploadForm.comments
  }
}


export default connect(mapStateToProps, {fetchLesson, addComment, fetchComments})(Lesson)