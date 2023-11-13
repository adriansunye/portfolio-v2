// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import './index.scss'
import Sidebar from '@components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <React.Fragment>
      <div className='App'>
        <Sidebar/>
        <div className='page'>
          <span className='tags top-tags'>&lt;body&gt;</span>

          <Outlet/>

          <span className='tags bottom-tags'>
            &lt;/body&gt;
            <br/>
            <span className='bottom-tag-html'>&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
