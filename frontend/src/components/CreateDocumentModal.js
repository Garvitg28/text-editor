import React, { useState } from "react";
import Text from "./Text";
import axios from 'axios';

function CreateDocumentModal({ onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    axios.post('http://localhost:8000/api/documents/', {
      title: title,
      content: content
    })
    .then(response => {
      console.log('Document saved successfully:', response.data);
      onClose();
    })
    .catch(error => {
      console.error('Error saving document:', error);
    });
  };

  console.log(content)

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20">
      <div className="bg-white p-6 rounded-lg w-[820px]">
        <input
          type="text"
          placeholder="Enter document title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <Text content={content} setContent={setContent} />
        <div className="mt-4 flex justify-start">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-600 text-white py-2 px-4 rounded mr-4"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateDocumentModal;
