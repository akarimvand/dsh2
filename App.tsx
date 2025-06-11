import React from 'react';
import DashboardLayout from './components/dashboard/DashboardLayout';

const App: React.FC = () => {
  return (
    // Theming (background, text color) will be handled by DashboardLayout and its children
    // to match the dashboard.html's body and component-level styling.
    <DashboardLayout />
  );
};

export default App;
