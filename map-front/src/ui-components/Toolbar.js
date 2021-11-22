import React from 'react';
import IconButton from './IconButton';
import css from './toolbar.module.css';

function Toolbar({ type, location, list }) {
  let className = css.container;
  
  location.forEach(item => {
    className += ' ' + css[item]
  })
  
  return (
    <div className={className}>
        {list.map((item) => (
          <div className={css.button} key={item.name} >
            <IconButton 
              name={item.name}
              onClick={item.onClick}
              type={type} 
            />
          </div>
      ))}
    </div>
  )
}

export default Toolbar;
