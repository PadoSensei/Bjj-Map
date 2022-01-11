import React from 'react';
import css from './leftmenu.module.css';
import router from '../utils/router';
import Toolbar from './Toolbar';
import { useAuth0 } from '@auth0/auth0-react';

function LeftMenu(props) {
  const { logout } = useAuth0();

  const list =[
    { name: 'home', onClick: () => router.setRoute('home') },
    { name: 'profile', onClick: () => router.setRoute('profile') },
    { name: 'study', onClick: () => router.setRoute('study') },
    { name: 'help', onClick: () => router.setRoute('help') },
    { name: 'logout', onClick: () => logout()}
  ];

  let className = css.container;
  if (props.isMenuVisible){
    className += ' ' + css.visible;
  }
  return (
    <div className={className} onMouseLeave={() => props.onMouseLeave()}>
      <Toolbar list={list} type="primary" location={['vertical']} />
    </div>
  )
}

export default LeftMenu
