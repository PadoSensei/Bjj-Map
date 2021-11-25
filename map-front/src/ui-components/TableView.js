import React from 'react';
import css from './tableview.module.css';

function TableView({id, list}) {
  return (
    <div className={css.container}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Level</th>
            <th>RootId</th>
            <th>ParentId</th>
          </tr>
        </thead>
        <tbody>
          {list && list.map((item, index) => (
            <tr 
              key={item.id}
              className={(index % 2 ? css.odd : css) + ' ' + (item.id === id ? css.selected : '')}
              >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.level}</td>
              <td>{item.rootId}</td>
              <td>{item.parentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableView
