import React from 'react'
import PdfUpload from "./Pdf_Upload";
import CheckBoxes from './checkboxes';

export default function LessonFormContainer() {
  return (
    <div>
      <h1>LESSON FORM PAGE</h1>
      <CheckBoxes />
      <PdfUpload />
    </div>
  )
}