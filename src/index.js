import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import MachineConfigPage from './pages/MachineConfigPage';
import InjectTailwind from './InjectTailwind'
import "./index.css"
import AdminConsolePage from './pages/AdminConsolePage';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
     <InjectTailwind>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/machines" element={<MachineConfigPage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/console" element={<AdminConsolePage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      </InjectTailwind>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
