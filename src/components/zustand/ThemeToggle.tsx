import React from 'react';
import { useUserStore } from '../../store/userStore';

const ThemeToggle: React.FC = () => {
  // Subscribe only to the theme field and updateTheme method
  const theme = useUserStore((state) => state.user.preferences.theme);
  const updateTheme = useUserStore((state) => state.updateTheme);
  
  console.log('🔄 Zustand ThemeToggle re-rendered at:', new Date().toLocaleTimeString());

  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      margin: '8px 0',
      backgroundColor: '#f0f8ff'
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#333' }}>Theme Settings</h3>
      <p style={{ margin: '8px 0' }}>Current theme: <strong>{theme}</strong></p>
      <button 
        onClick={() => updateTheme(theme === 'light' ? 'dark' : 'light')}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          backgroundColor: '#6f42c1',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle; 