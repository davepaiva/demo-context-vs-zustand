import React from 'react';
import { useUser } from '../../context/UserContext';

const NotificationSettings: React.FC = () => {
  const { user, updateNotifications } = useUser();
  
  console.log('🔄 Context NotificationSettings re-rendered at:', new Date().toLocaleTimeString());

  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      margin: '8px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Notification Settings</h3>
      <p style={{ margin: '8px 0' }}>
        Notifications: <strong>{user.preferences.notifications ? 'Enabled' : 'Disabled'}</strong>
      </p>
      <button 
        onClick={() => updateNotifications(!user.preferences.notifications)}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle Notifications
      </button>
    </div>
  );
};

export default NotificationSettings; 