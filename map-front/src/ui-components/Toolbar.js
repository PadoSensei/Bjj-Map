import React from 'react';
import IconButton from './IconButton';
import css from './toolbar.module.css';

function Toolbar({ type, location }) {
  let className = css.container;
  const list =[
    { name: 'home', onClick: () => alert('Home click!') },
    { name: 'help', onClick: () => alert('Help click!') }
  ];
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
