import React from 'react';
import UserProfile from '../components/zustand/UserProfile';
import ThemeToggle from '../components/zustand/ThemeToggle';
import NotificationSettings from '../components/zustand/NotificationSettings';

const ZustandDemo: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ 
        backgroundColor: '#d1ecf1', 
        padding: '16px', 
        borderRadius: '8px', 
        marginBottom: '20px',
        border: '1px solid #bee5eb'
      }}>
        <h2 style={{ margin: '0 0 12px 0', color: '#0c5460' }}>Zustand Demo</h2>
        <p style={{ margin: '0', color: '#0c5460' }}>
          <strong>✅ Optimized:</strong> Only components that subscribe to the changed state will re-render.
          Watch the console to see the selective re-rendering.
        </p>
      </div>
      
      <div style={{ display: 'grid', gap: '16px' }}>
        <UserProfile />
        <ThemeToggle />
        <NotificationSettings />
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '16px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{ margin: '0 0 12px 0', color: '#495057' }}>How to test:</h3>
        <ol style={{ margin: '0', paddingLeft: '20px', color: '#495057' }}>
          <li>Open your browser's developer console</li>
          <li>Click any button in any component</li>
          <li>Notice that ONLY the component using the changed data re-renders</li>
          <li>Other components remain unchanged and don't re-render</li>
        </ol>
      </div>
    </div>
  );
};

export default ZustandDemo; 