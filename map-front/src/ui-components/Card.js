import React from 'react'
import css from './card.module.css';

function Card({ name, comment, isSelected, onClick }) {
  let className = css.container;
  if (isSelected) {
    className += ' ' + css.selected;
  }
  return (
    <div className={className} onClick={onClick}>
        <div className={css.title}>{name}</div>
        <div className={css.comment}>{comment}</div>
     
    </div>
  )
}

export default Card
