import { useState, useRef } from "react";

// SELECT FILES - ADD MORE FILES
// PREVIEW FILES 
// DELETE SELECTED FILES 
// SEND FILES to server

const DragDropFiles = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleChange = (event) => {
        setFiles(event.target.files);
        
    };

    const handleDragOver = event => event.preventDefault();

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };


    const handleUpload = async () => {
        
    };


    return (
        <>
            { !files && (<div
                className="dropzone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <h1>Drag and Drop Files Here </h1>
                <h1>Or</h1>
                <input
                    ref={inputRef}
                    hidden
                    type="file"
                    multiple
                    onChange={handleChange}
                />
                <button onClick={() => inputRef.current.click()}>Select Files</button>
            </div>)}
            {files && (<div className="uploads">
                <ul>{Array.from(files).map((file, id) => <li key={id}>{file.name}</li>)}</ul>
                <div className="actions">
                    <button onClick={() => setFiles(null)}>Cancel</button>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>)}

        </>)
};

export default DragDropFiles;