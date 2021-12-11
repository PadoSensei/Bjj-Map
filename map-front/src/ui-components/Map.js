import React from 'react';
import Details from './Details';
import Toolbar from './Toolbar';
import repository from './repository';
import router from './router';
import css from './map.module.css';
import TableView from './TableView';
import Chart from './Chart';

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
      list, 
      zoom: 1,
      moveMode: false,
      x: 0,
      y: 0
    }
  }

  // Drag Functionality
  toggleMoveMode = () => {
    const moveMode = !this.state.moveMode;
    this.setState({moveMode});
  }

  onMouseDown = (e) => {
    if (!this.state.moveMode) {
      return;
    }
    this.isDragging = true;
    this.startX = this.state.x * this.state.zoom + e.clientX;
    this.startY = this.state.y * this.state.zoom + e.clientY;
  };

  onMouseMove = (e) => {
    if (!this.isDragging) {
      return;
    }
    e.preventDefault();
    const x = (this.startX - e.clientX) * this.state.zoom;
    const y = (this.startY - e.clientY) * this.state.zoom;
    this.setState({x, y});
  };

  onMouseUp = () => {
    this.isDragging = false;
  }
  
  // Zoom Functionality
  ZOOM_FACTOR = 1.1;
  
  zoomIn = () => {
    const zoom = this.state.zoom * this.ZOOM_FACTOR;
    this.setState({zoom});
  }

  zoomOut = () => {
    const zoom = this.state.zoom / this.ZOOM_FACTOR;
    this.setState({zoom});
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

  viewMenu = [
    { name: 'viewList', onClick: () => this.setState({view: 'table'}) },
    { name: 'hive', onClick: () => this.setState({view: 'chart'}) }
  ];

  // Refactor with ternary
  render(){
    let view;
    if(this.state.view === 'table') {
      view = <TableView 
              id={this.state.id} 
              list={this.state.list}
              onClick={this.setSelected}
            />
    } else {
      view = <Chart
              id={this.state.id} 
              zoom={this.state.zoom}
              onZoomIn={this.zoomIn}
              onZoomOut={this.zoomOut}
              onToggleMoveMode={this.toggleMoveMode}
              x={this.state.x}
              y={this.state.y}
              onMouseDown={this.onMouseDown}
              onMouseMove={this.onMouseMove}
              onMouseUp={this.onMouseUp}

              list={this.state.list}
              onClick={this.setSelected}
            />
    }
    return (
      <>
        <h1>Map</h1>
        <div className={css.container}>
          {view}
          <Toolbar 
            type="alert"
            location={['right', 'bottom', 'vertical']}
            list={this.actionList}
          />
        </div>
        <Toolbar list={this.viewMenu} type='default' location={['vertical', 'left', 'bottom']} />
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
