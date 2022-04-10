import React from 'react';
import './Demo.css'

export default function demo() {
  return (
    <div><div className="container">
    <div className="card">
      <h3>Upload Files</h3>
      <div className="drop_box">
        <header>
          <h4>Select File here</h4>
        </header>
        <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
        <input type="file" hidden  id="fileID" style={{display:"none"}} />
        <button className="btn" >Choose File</button>
      </div>
  
    </div>
  </div>
  </div>
  )
}
