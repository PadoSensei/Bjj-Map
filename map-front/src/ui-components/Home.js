import React from 'react';
import repository from '../repository';
import Toolbar from './Toolbar';
import Card from './Card';
import css from './home.module.css';
import router from '../router';
class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          list: repository.getList({level: 0})
      }
  }
  
  actionMenu = [
    { name: 'add', onClick: () => this.addNode() },
    { name: 'delete', onClick: () => this.deleteNode(this.state.id) }
  ];

  // Map Creation on Home Screen
  addNode = () => {
    repository.save({
      name: 'Rename idea',
      level: 0,
      parentId: null,
    });
    this.setState({list: repository.getList({level: 0})});
  }

  setSelected = (id) => {
    this.setState({ id });
  }

  deleteNode = (id) => {
    repository.delete(id);
    this.setState({ list: repository.getList({ level: 0 }) });
  }

  // Routes to selected map from Home Screen
  getMap = (id) => {
    router.setRoute('map', id);
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <Toolbar list={this.actionMenu} type='alert' location={['vertical', 'right', 'bottom']} />
        <div className={css.list}>
          {
            this.state.list.map(item => (
              <div className={css.item} key={item.id}>
                <button onClick={() => this.getMap(item.id)}>Go to map...</button>
                <Card 
                  id={item.id} 
                  name={item.name} 
                  comment={item.comment} 
                  isSelected={item.id === this.state.id}
                  onClick={() => this.setSelected(item.id)}
                />
              </div>
            ))
          }
        </div>
      </>
    )
  }
}

export default Home