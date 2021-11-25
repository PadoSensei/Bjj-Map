import React from 'react';
import Details from './Details';
import Toolbar from './Toolbar';
import repository from './repository';
import router from './router';
import css from './map.module.css';
import TableView from './TableView';

class Map extends React.Component {
  constructor(props) {
    super(props);
    const rootId = Number(router.getParams());
    const list = repository.getList({rootId});
    const item = list[0];
    this.state = {
      id: item.id,
      name: item.name,
      level: item.level,
      comment: item.comment, 
      rootId,
      list
    }
  }

  setSelected = (id) => {
    const item = repository.getItem(id);
    this.setState({
        id: item.id,
        name: item.name,
        level: item.level,
        comment: item.comment
    });
  };

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

  // Create new Map entry
  add() {
    const item = repository.save({
        name: 'New item',
        level: this.state.level + 1,
        rootId: this.state.rootId,
        parentId: this.state.id,
        comment: ''
    });
    const list = repository.getList({ rootId: this.state.rootId });
    this.setState({
        id: item.id,
        name: item.name,
        level: item.level,
        comment: item.comment,
        list
    });
  }

  delete = () => {
    repository.delete(this.state.id);
    const list = repository.getList({rootId: this.state.rootId});
    if (!list.length) {
      router.setRoute('home');
      return; 
    }
    const item = list[0];
    this.setState({
      id: item.id,
      name: item.name,
      level: item.level, 
      comment: item.comment, 
      list
    });
  }

  actionList = [
    { name: 'add', onClick: () => this.add() },
    { name: 'delete', onClick: () => this.delete() }
  ];

  render(){
    return (
      <>
        <h1>Map</h1>
        <div className={css.container}>
          <TableView 
            id={this.state.id} 
            list={this.state.list}
            onClick={this.setSelected}
          />
          <Toolbar 
            type="alert"
            location={['right', 'bottom', 'vertical']}
            list={this.actionList}
          />
        </div>
          <Details 
            id={this.state.id}
            level={this.state.level}
            name={this.state.name}
            comment={this.state.comment}
            onChangeName={this.changeName}
            onChangeComment={this.changeComment}
          />
      </>
    )
  }
}

export default Map
