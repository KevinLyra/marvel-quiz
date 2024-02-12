import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App/App';
import Firebase from './components/Firebase/FirebaseConfig';
import FirebaseContext from './components/Firebase/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={Firebase}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
);

reportWebVitals();
