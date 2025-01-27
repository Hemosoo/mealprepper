import React from 'react';
import hemo from '../assets/hemosoo.png';

const profiles = [
    { name: 'Hemosoo Woo', imageUrl: hemo }
  ];
  
export const ProfileGrid: React.FC = () => {
    return (
      <div className="profile-grid">
        {profiles.map((profile, index) => (
          <div className="profile-item" key={index}>
            <img src={profile.imageUrl} alt={profile.name} className="profile-picture" />
            <h1 className="profile-name">{profile.name}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProfileGrid;