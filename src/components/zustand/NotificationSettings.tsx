import React from 'react';
import { useUserStore } from '../../store/userStore';

const NotificationSettings: React.FC = () => {
  // Subscribe only to the notifications field and updateNotifications method
  const notifications = useUserStore((state) => state.user.preferences.notifications);
  const updateNotifications = useUserStore((state) => state.updateNotifications);
  
  console.log('🔄 Zustand NotificationSettings re-rendered at:', new Date().toLocaleTimeString());

  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      margin: '8px 0',
      backgroundColor: '#f0f8ff'
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Notification Settings</h3>
      <p style={{ margin: '8px 0' }}>
        Notifications: <strong>{notifications ? 'Enabled' : 'Disabled'}</strong>
      </p>
      <button 
        onClick={() => updateNotifications(!notifications)}
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