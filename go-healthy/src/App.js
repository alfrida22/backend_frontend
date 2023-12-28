// App.js
import React from 'react';
import { AuthProvider } from './hooks/AuthContext'; // Sesuaikan dengan path yang sesuai
import Layout from "./components/Layout/MainLayout";
import withSplashScreen from "./components/withSplashScreen";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default withSplashScreen(App);
