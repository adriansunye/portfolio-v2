import './index.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import LogoS from '@assets/images/logo-s.png'
import LogoSubtitle from '@assets/images/logo_sub.png'

const SideBar: React.FC = () => {
  return (
    <aside className='nav-bar'>
      <Link className='logo' to="/"> 
        <img src={LogoS} alt="logo"/>
        <img src={LogoSubtitle} className='sub-logo' alt="adriansunye"/>
      </Link>
    </aside>
  );
};

export default SideBar;
