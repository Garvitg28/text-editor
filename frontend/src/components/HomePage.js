import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import CreateDocumentModal from "./CreateDocumentModal"; // Import the modal component

function HomePage() {
  const [documents, setDocuments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/documents/')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  const handleCreateDocument = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
  
    <div className="text-xl font-extrabold bg-blue-600 w-full h-14 text-white px-20 flex justify-start items-center"> Rich Text Editor</div>
    <div className="container mx-auto mt-8">

 

      <h1 className="text-xl text-blue-600 font-bold mb-4">Documents</h1>
      <ul className="space-y-0.1 ">
        {documents.map((document) => (
          <li key={document.id} className="flex items-center">
            <Link
              to={`/documents/${document.id}`}
              className="text-black over:underline"
            >
              {document.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <button
          onClick={handleCreateDocument}
          className="bg-blue-600 text-base hover:bg-blue-600 text-white py-2 px-3 rounded"
        >
          Create New Document
        </button>
      </div>
      {showModal && <CreateDocumentModal onClose={handleCloseModal} />}
    </div>
    </>
  );
}

export default HomePage;
