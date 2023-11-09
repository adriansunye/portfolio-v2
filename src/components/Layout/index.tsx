// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import './index.scss'
import SideBar from '@components/SideBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <SideBar/>
    </React.Fragment>
  );
};

export default Layout;
