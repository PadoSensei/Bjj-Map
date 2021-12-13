import React from 'react'
import css from './header.module.css';
import IconButton from './IconButton';

function Header({onMenuClick}) {
  return (
    <div className={css.container}>
      <IconButton name="menu" onClick={() => onMenuClick()} />
      <div className={css.title}>BjjMindMap</div>
    </div>
  )
}

export default Header
