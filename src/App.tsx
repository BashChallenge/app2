import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from 'components/Hello';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className="container">
      {!loading && (
        <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙' : '☀️'}
        </div>
      )}
      {loading ? (
        <div className="fullscreen-loader">
          <div className="moving-text">NTTDATA</div>
        </div>
      ) : (
        <>
          <Hello value={1} />
        </>
      )}
    </div>
  );
};

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);