import React from 'react'
import Header from "../Header";
import Footer from "../Footer";
import LessonIndex from './LessonIndex';
import AddComment from './AddComment';
import RecommendedCount from './RecommendedCount';
import Comments from './Comments';

export default function Lesson() {
  return (
    <div>
    Lesson Page 
    <Header />
    <LessonIndex />
    <AddComment />
    <RecommendedCount />
    <Comments />
    <Footer />
  </div>
  )
}
