// EditProfileForm.js

import React from 'react';

const EditProfileForm = ({ editedUser, onInputChange, onSaveClick, onCancelClick }) => {
    
  return (
    <div className="edit-profile-modal">
      <div className="modal-content">
        <span className="close" onClick={onCancelClick}>&times;</span>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="name"
          value={editedUser.name}
          onChange={onInputChange}
        />
        <label htmlFor="foto_profile">Foto Profile:</label>
        <input
          type="file"
          id="foto_profile"
          name="foto_profile"
          onChange={onInputChange}
        />
        <button className="save-profile-button" onClick={onSaveClick}>
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
