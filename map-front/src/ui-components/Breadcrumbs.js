import React from 'react';
import css from './breadcrumbs.module.css';
import router from '../router';

function Breadcrumbs({ list }) {
  return (
    <div className={css.container}>
      {
        list.map(item => (
          <span key={item}>
            <span 
            onClick={() => router.setRoute(item)}
            className={css.item}>{item}</span>
          </span>
        ))
      }
    </div>
  )
}

export default Breadcrumbs
