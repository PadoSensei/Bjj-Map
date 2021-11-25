import React from 'react';
import Details from './Details';
import repository from './repository';
import router from './router';
import css from './map.module.css';

class Map extends React.Component {
  constructor(props) {
    super(props);
    const id = Number(router.getParams());
    const item = repository.getItem(id);
    this.state = {
      id: item.id,
      name: item.name,
      level: item.level,
      comment: item.comment
    }
  }

  changeName = (e) => {
    const name = e.target.value;
    const item = { id: this.state.id, name };
    repository.save(item);
    const list = repository.getList({ rootId: this.state.rootId });
    this.setState({ name, list });
  }

  changeComment = (e) => {
    const comment = e.target.value;
    const item = { id: this.state.id, comment };
    repository.save(item);
    this.setState({ comment });
  }

  render(){
    return (
      <>
        <h1>Map</h1>
        <div className={css.container}>
          <Details 
            id={this.state.id}
            level={this.state.level}
            name={this.state.name}
            comment={this.state.comment}
            onChangeName={this.changeName}
            onChangeComment={this.changeComment}
          />
        </div>
      </>
    )
  }
}

export default Map
