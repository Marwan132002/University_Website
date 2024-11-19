import React, { useRef, useState } from "react";
import "./Upload.css";
import axios from "axios";

const UploadFile = (props) => {
  const inputRef = useRef();
  const pageNameInputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [pageName, setPageName] = useState(props.PageName);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handlePageNameChange = (event) => {
    setPageName(event.target.value);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }

    try {
      setUploadStatus("uploading");
      const token = window.localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing or invalid.");
      }
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("pageName", pageName);
      formData.append("token", token);
    console.log(pageName)
      const response = await axios.post('http://127.0.0.1:8000/api/core/admin/sendfile',
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );
    
      if (response.status === 200) {
        setUploadStatus("done");
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } 
     catch (error) {
      setUploadStatus("select");
      
    }
  };

  return (
    <div className="upall">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {!selectedFile && (
        <button className="file-btn" onClick={onChooseFile}>
          <span className="material-symbols-outlined">upload</span> Upload File
        </button>
      )}

      {selectedFile && (
        <>
          <div className="file-card">
            <span className="material-symbols-outlined icon">description</span>

            <div className="file-info">
              <div style={{ flex: 1 }}>
                <h6>{selectedFile?.name}</h6>

                <div className="progress-bg">
                  <div className="progress" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span className="material-symbols-outlined close-icon">
                    close
                  </span>
                </button>
              ) : (
                <div className="check-circle">
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "20px" }}
                    >
                      check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>
          <button className="upload-btn" onClick={handleUpload}>
            {uploadStatus === "select" || uploadStatus === 'uploading' ? "Upload" : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default UploadFile ;