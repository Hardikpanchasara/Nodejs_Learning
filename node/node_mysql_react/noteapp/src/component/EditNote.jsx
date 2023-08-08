import React, { useState } from 'react';
import axios from 'axios';

const EditNote = ({ id, title, content, onSave ,onCancel}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:5000/data/update/${id}`, { title: editedTitle, content: editedContent })
      .then(response => {
        console.log('Note updated successfully:', response.data);
        onSave(); // Notify the parent component (App) that a note has been updated
      })
      .catch(error => console.error('Error updating note:', error));
  };

  

  return (
    <div className="edit-note">
      <input type="text" value={editedTitle} onChange={handleTitleChange} />
      <br />
      <textarea value={editedContent} onChange={handleContentChange}></textarea>
      <br />
      <button className="btn" onClick={handleSave}>Save</button>
      <button className="btn" onClick={onCancel}>cancel</button>
    </div>
  );
};

export default EditNote;
