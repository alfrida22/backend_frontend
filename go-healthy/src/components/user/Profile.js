// // Profile.js
// import React from 'react';
// import './Profile.css';

// const Profile = () => {
//   const user = {
//     name: localStorage.getItem('user_name'),
//     email: localStorage.getItem('user_email'),
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2 className="profile-title">Profile</h2>
//       </div>
//       <div className="profile-content">
//         <div className="profile-info">
//           <label htmlFor="username">Username:</label>
//           <p id="username">{user.name}</p>

//           <label htmlFor="email">Email:</label>
//           <p id="email">{user.email}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from 'react';
import './Profile.css';
import profileImage from './images/profile.jpeg';
import EditProfileForm from './EditProfileForm';

const Profile = () => {
  const user = {
        // name: localStorage.getItem('user_name'),
        email: localStorage.getItem('user_email'),
      };

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: localStorage.getItem('user_name') || '',
    // email: localStorage.getItem('user_email') || '',
    foto_profile: localStorage.getItem('user_foto_profile') || profileImage,
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      // Jika input adalah tipe file (gambar)
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setEditedUser((prevUser) => ({ ...prevUser, [name]: reader.result }));
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      // Jika input bukan tipe file
      setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Simpan perubahan di localStorage atau kirim ke server jika diperlukan
    localStorage.setItem('user_name', editedUser.name);
    localStorage.setItem('user_foto_profile', editedUser.foto_profile);
    
    setIsEditing(false);

    // Lakukan permintaan API untuk menyimpan perubahan
    fetch(`https://localhost:8080/update/user/${localStorage.getItem('user_id')}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2 className="profile-title">Profile</h2>
        <div className="avatar-container">
          <img src={editedUser.foto_profile} alt="Avatar" className="avatar" />
        </div>
        <div className="welcome-message">
          <p>Selamat datang, {editedUser.name}!</p>
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          {isEditing ? (
            <EditProfileForm
              editedUser={editedUser}
              onInputChange={handleInputChange}
              onSaveClick={handleSaveClick}
              onCancelClick={() => setIsEditing(false)}
            />
          ) : (
            <>
              {/* <label htmlFor="username">Username:</label>
              <p id="username">{editedUser.name}</p> */}
              <p id="email">{user.email}</p>
              {/* <label htmlFor="foto_profile">Foto Profile:</label>
              <img src={editedUser.foto_profile} alt="Foto Profile" className="foto-profile" /> */}
              <button className="edit-profile-button" onClick={handleEditClick}>
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
