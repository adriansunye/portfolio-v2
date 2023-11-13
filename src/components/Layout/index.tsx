// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import './index.scss'
import Sidebar from '@components/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Sidebar/>
    </React.Fragment>
  );
};

export default Layout;
