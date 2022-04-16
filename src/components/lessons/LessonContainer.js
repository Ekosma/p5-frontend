import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {indexLessons} from '../../redux/actions/indexLessons'
import Card from './Cards'

 class LessonContainer extends Component {



  constructor(props) {
    super(props);
    this.state = {grade: 'grade', subject: 'subject'};
  };

  componentDidMount() {
    this.props.indexLessons()
  }

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
    const filteredLessons = this.props.lessons
      .filter(lesson => this.state.grade === 'grade' ? true : lesson.grade === this.state.grade)
      .filter(lesson => this.state.subject === 'subject' ? true : lesson.subject === this.state.subject)
    //console.log(this.props.lessons)
    //console.log(this.state.grade)
    //console.log(filteredLessons)
    const listLessons = <Card data={filteredLessons} />
    //console.log(this.props.lessons)
    return ( 
      <div>
        <Search grade={this.state.grade} subject={this.state.subject} gradeChoice={this.gradeChoice} subjectChoice={this.subjectChoice} />
        {listLessons}
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

export default connect(mapStateToProps, {indexLessons})(LessonContainer)
