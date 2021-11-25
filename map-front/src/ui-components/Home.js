import React from 'react';
import repository from './repository';
import Toolbar from './Toolbar';
import Card from './Card';
import css from './home.module.css';
import router from './router';

// Refactor to functional component with hooks? 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: repository.getList({level: 0}),
      id: 1
    }
  }

  // Map Creation on Home Screen
  add() {
    repository.save({
      name: 'Good idea!',
      level: 0,
      parentId: null
    });
    this.setState({list: repository.getList({level: 0})})
  }

  actionMenu = [
    { name: 'add', onClick: () => this.add() },
    { name: 'delete', onClick: () => this.delete(this.state.id) }
  ];

  setSelected(id) {
    this.setState({id})
  }

  delete(id) {
    repository.delete(id);
    this.setState({list: repository.getList({level: 0})});
  }

  // Routes to selected map from Home Screen
  getMap(id) {
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
              <div className={css.item}key={item.id}>
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
