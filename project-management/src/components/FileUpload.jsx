import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Button, Alert, ProgressBar } from "react-bootstrap";

const FileUpload = ({ projectId }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,application/pdf",
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const handleUpload = async () => {
    if (!file) return setError("Please select a file");
    setError("");
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("projectId", projectId);

    try {
      await axios.post("http://localhost:5000/api/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
      });
      alert("File uploaded successfully");
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setUploading(false);
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
      {uploading && <ProgressBar animated now={progress} label={`${progress}%`} />}
      <Button className="mt-2" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  );
};

export default FileUpload;
