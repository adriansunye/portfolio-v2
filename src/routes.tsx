// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@views/Home';
import About from '@views/About';
import Contact from '@views/Contact';
import Portfolio from '@views/Portfolio';
import Skills from '@views/Skills';

const AppRouter: React.FC = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
