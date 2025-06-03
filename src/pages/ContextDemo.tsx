import React from 'react';
import { UserProvider } from '../context/UserContext';
import UserProfile from '../components/context/UserProfile';
import ThemeToggle from '../components/context/ThemeToggle';
import NotificationSettings from '../components/context/NotificationSettings';

const ContextDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '16px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #ffeaa7'
      }}>
        <h2 style={{ margin: '0 0 12px 0', color: '#856404' }}>Context API Demo</h2>
        <p style={{ margin: '0', color: '#856404' }}>
          <strong>⚠️ Notice:</strong> ALL components re-render when ANY part of the context state changes.
          Watch the console to see the re-render logs.
        </p>
      </div>
      
      <UserProvider>
        <div style={{ display: 'grid', gap: '16px' }}>
          <UserProfile />
          <ThemeToggle />
          <NotificationSettings />
        </div>
      </UserProvider>
    </div>
  );
};

export default ContextDemo; 