import React from 'react'
//import axios from 'axios'

const PDF_Upload = (props) => {

    return (
      <div>
      <label className="form-label" htmlFor="customFile">Upload Lesson:</label>
      <input type="file" className="form-control" accept="application/pdf" id="customFile" onChange={props.onChange}/>
      </div>
    )
  }

export default PDF_Upload
