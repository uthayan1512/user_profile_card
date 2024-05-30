import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">

<div class="upper-container">
      <div class="image-container">
      <img src={`${process.env.PUBLIC_URL}/John.jfif`} alt="Example" />
      </div>
    </div>

    <div class="lower-container">
      <div>
        <h3>{user.name}</h3>
        <h4>{user.role}</h4>
      </div>
      <div>
        <p>{user.biography}</p>
      </div>
      <div>
        <a href="#" class="btn">View profile</a>
      </div>
    </div>
    </div>
  );
};

export default UserProfile