import React from 'react'
import './Pdf_Upload.css'

const PDF_Upload = (props) => {

    return (
      <div>
      <label className="form-label" htmlFor="customFile">Upload File</label>
      <input type="file" className="form-control" accept="application/pdf" id="customFile" onChange={props.onChange} required={true}/>
      </div>
    )
  }

export default PDF_Upload
