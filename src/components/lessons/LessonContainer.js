import React, { Component } from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import {indexLessons} from '../../redux/actions/indexLessons'
import Card from './Cards'

 class LessonContainer extends Component {

  componentDidMount() {
    this.props.indexLessons()
  }
  


  render() {
    const listLessons = <Card data={this.props.lessons} />
    console.log(this.props.lessons)
    return ( 
      <div>
        {listLessons}
        <Search />
        
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
