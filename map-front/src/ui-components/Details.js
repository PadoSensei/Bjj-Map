import React from 'react'
import css from './details.module.css'

function Details({id, name, level, comment, onChangeName, onChangeComment}) {
  return (
      <div className={css.container}>
          <h2>Details ID{id}</h2>
          <form>
              <fieldset>
                  <label>ID</label>
                  <input className={css.input} value={id} disabled type="text" />
              </fieldset>
              <fieldset>
                  <label>Level</label>
                  <input className={css.input} value={level} disabled type="text" />
              </fieldset>
              <fieldset>
                  <label>Name</label>
                  <input className={css.input}
                      onChange={onChangeName}
                      value={name} type="text" />
              </fieldset>
              <fieldset>
                  <label>Comment</label>
                  <textarea rows="10"
                      onChange={onChangeComment}
                      value={comment} className={css.textarea}></textarea>
              </fieldset>
          </form>
      </div>
  );
}

export default Details
