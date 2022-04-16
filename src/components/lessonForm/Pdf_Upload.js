import React from 'react'
import axios from 'axios'

export default class PDF_Upload extends React.Component {
  state = {

    // Initially, no file is selected
    selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
      
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      
      // Details of the uploaded file
      console.log(this.state.selectedFile);
      
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      //what is displayed if a file is uploaded
      if (this.state.selectedFile) {
        //adds to page after file is uploaded. 
        return (
        <div>
          <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p> Last Modified:{" "} {this.state.selectedFile.lastModifiedDate.toDateString()} </p>
      </div>
        );
      } else {
        //initial directions that appear if a file is not uploaded 
        return (
        <div>
          <br />
          <h4>Choose a file before Pressing the Upload button</h4>
        </div>
        );
      }
      };
    
    render() {
    //the upload and updates File Data based on state 
    return (
      <div>
        <h3>
        Upload your lesson. 
        </h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
          Upload!
          </button>
        </div>
      {this.fileData()}
      </div>
    );
    }
  }
