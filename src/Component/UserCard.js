import React from "react";
import UserProfile from './UserProfile';


const UserCard = () => {
    const user = {
      name: 'John Doe',
      biography: 'Software developer with a passion for open source projects.',
      role : 'Front-End Developer',
    };

    return (
      <UserProfile user={user}> </UserProfile>
    );
  };
  
  export default UserCard;