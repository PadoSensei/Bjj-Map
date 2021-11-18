import React from 'react';
import Icon from './Icon';
import css from './iconbutton.module.css';

function IconButton({type, name, onClick}) {
  let className = css.container;
  className += ' ' + css[type];
  return (
    <div className={className} onClick={onClick}>
      <Icon type={type} name={name} />
    </div>
    )
}

export default IconButton;
