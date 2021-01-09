import React from 'react';

import { AuthProvider } from './auth';
import { ToatProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToatProvider>{children}</ToatProvider>
  </AuthProvider>
);

export default AppProvider;
