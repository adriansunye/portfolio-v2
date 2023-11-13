// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/about" 
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
