import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Button, Alert } from "react-bootstrap";

const FileUpload = ({ projectId }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const handleUpload = async () => {
    if (!file) return setError("Please select a file");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("projectId", projectId);

    try {
      await axios.post(" http://localhost:5173//api/upload", formData);
      alert("File uploaded successfully");
    } catch (err) {
      setError("Failed to upload file");
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <div {...getRootProps()} className="border p-3 text-center">
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select one</p>
      </div>
      {file && <p>Selected File: {file.name}</p>}
      <Button className="mt-2" onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default FileUpload;
