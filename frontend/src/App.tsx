import React from 'react';
import Routes from './routes'
import './Global.css'

import { AuthProvider } from './services/auth'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
