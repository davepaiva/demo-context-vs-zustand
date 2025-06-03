import React, { useState } from 'react';
import ContextDemo from './pages/ContextDemo';
import ZustandDemo from './pages/ZustandDemo';
import './App.css';

type DemoType = 'context' | 'zustand';

const App: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>('context');

  return (
    <div className="App">
      <div style={{ 
        backgroundColor: '#343a40', 
        color: 'white', 
        padding: '20px 0',
        marginBottom: '0'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ margin: '0 0 16px 0', fontSize: '2.5rem' }}>
            Context API vs Zustand
          </h1>
          <p style={{ margin: '0 0 20px 0', fontSize: '1.1rem', opacity: 0.9 }}>
            A demonstration of re-rendering behavior differences
          </p>

          <div style={{display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              marginTop: '20px', 
              marginBottom: '40px',
              padding: '16px', 
              borderRadius: '8px',
              border: '1px solid #dee2e6',
              textAlign: 'left'
            }}>
              <h3 style={{ margin: '0 0 12px 0', color: 'white' }}>How to test:</h3>
              <ol style={{ margin: '0', paddingLeft: '20px', color: 'white' }}>
                <li>Open your browser's developer console</li>
                <li>Click any button in any component</li>
                <li>Notice that ALL components log a re-render message</li>
                <li>This happens even for components that don't use the changed data</li>
              </ol>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => setActiveDemo('context')}
              style={{
                padding: '10px 20px',
                backgroundColor: activeDemo === 'context' ? '#ffc107' : 'transparent',
                color: activeDemo === 'context' ? '#000' : '#fff',
                border: '2px solid #ffc107',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
            >
              Context API Demo
            </button>
            <button
              onClick={() => setActiveDemo('zustand')}
              style={{
                padding: '10px 20px',
                backgroundColor: activeDemo === 'zustand' ? '#17a2b8' : 'transparent',
                color: activeDemo === 'zustand' ? '#fff' : '#fff',
                border: '2px solid #17a2b8',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                transition: 'all 0.2s ease'
              }}
            >
              Zustand Demo
            </button>
          </div>
        </div>
      </div>

      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {activeDemo === 'context' ? <ContextDemo /> : <ZustandDemo />}
      </div>

     
    </div>
  );
};

export default App; 