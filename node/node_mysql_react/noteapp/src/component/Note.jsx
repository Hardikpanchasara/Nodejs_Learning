import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import EditNote from './EditNote';

const Note = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const DeleteNote = () => {
    props.deleteItem(props.id)
  }

  return (
    <div className="note">
      {isEditing ? (
        <EditNote
          id={props.id}
          title={props.title}
          content={props.content}
          onSave={() => {
            setIsEditing(false);
            props.onSave(); // Notify the parent component (App) that a note has been updated
          }}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <h1>{props.title}</h1>
          <br />
          <p>{props.content}</p>
          <br />
          <button className="btn" onClick={DeleteNote}>
            <DeleteOutlineIcon className="noteIcon" />
          </button>
          <button className="btn" onClick={handleEditClick}>
            <EditIcon className="noteIcon" />
          </button>
        </>
      )}
    </div>
  );
};

export default Note;