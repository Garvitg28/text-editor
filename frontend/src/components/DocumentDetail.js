import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import Text from "./Text"; // Import the Text component

function DocumentDetail() {
  const { id } = useParams();
  const [document, setDocument] = useState(null);

  function setDocumentContent(content) {
    setDocument({ ...document, content: content });
  }

  const handleSave = async () => {
    await axios.put(`http://localhost:8000/api/documents/${document.id}/`, {
      title: document.title,
      content: document?.content
    })
    .then(response => {
      console.log('Document saved successfully:', response.data);
    })
    .catch(error => {
      console.error('Error saving document:', error);
    });
  };


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/documents/${id}`)
      .then((response) => {
        console.log(response.data);
        setDocument(response.data);
      })
      .catch((error) => {
        console.error("Error fetching document details:", error);
      });
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[50%] mt-32">
      <Text content={document.content} setContent={setDocumentContent} />
      </div>
      <div className="mt-4 w-[50%]">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-4"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default DocumentDetail;
