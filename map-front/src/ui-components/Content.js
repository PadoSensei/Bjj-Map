import React from 'react';
import css from './content.module.css';

function Content({component}) {
  
  return (
    <div className={css.container}>
      {component}
    </div>
  )
}

export default Content
