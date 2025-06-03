import React from 'react';
import { useUser } from '../../context/UserContext';

const UserProfile: React.FC = () => {
  const { user, updateUserName } = useUser();
  
  console.log('🔄 Context UserProfile re-rendered at:', new Date().toLocaleTimeString());

  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      margin: '8px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>User Profile</h3>
      <p style={{ margin: '8px 0' }}>Name: <strong>{user.name}</strong></p>
      <button 
        onClick={() => updateUserName(user.name === 'John Doe' ? 'Jane Doe' : 'John Doe')}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Update Name
      </button>
    </div>
  );
};

export default UserProfile; 