import React from 'react'
import css from './header.module.css';
import IconButton from './IconButton';

function Header(props) {
  return (
    <div className={css.container}>
      <IconButton name="menu" onClick={() => alert('clicked!')} />
      <div className={css.title}>BjjMindMap</div>
    </div>
  )
}

export default Header
