import React from 'react'
import LessonIndex from './LessonIndex';
import AddComment from './AddComment';
import RecommendedCount from './RecommendedCount';
import Comments from './Comments';

export default function Lesson() {
  return (
    <div>
    <h1>Lesson Page</h1> 
    <LessonIndex />
    <AddComment />
    <RecommendedCount />
    <Comments />
  </div>
  )
}

