import React from 'react';
import repository from '../repository';
import Toolbar from './Toolbar';
import Card from './Card';
import css from './home.module.css';
import router from '../router';
import LoginView from './LoginView';
import { useAuth0 } from '@auth0/auth0-react';
 

// Refactored from class component
// Functional Component requires useEffect to rerender after creating / deleting maps.

function Home (props) {
  const { user, isAuthenticated } = useAuth0();
  const [list, setList] = React.useState(repository.getList({level: 0}));
  const [id, setId] = React.useState(1);

  if (user){
    console.log(user)
  }

  // Work in Progress
  // React.useEffect(() => {
  //   console.log("Rerendering...")
  // }, [list]);

  // Map Creation on Home Screen
  const addNode = () => {
    repository.save({
      name: 'Rename idea',
      level: 0,
      parentId: null,
    });
    setList({list: repository.getList({level: 0})})
  }

  const actionMenu = [
    { name: 'add', onClick: () => addNode() },
    { name: 'delete', onClick: () => deleteNode(id) }
  ];

  const setSelected = (id) => {
    setId(id)
  }

  const deleteNode = (id) => {
    repository.delete(id);
    setList({list: repository.getList({level: 0})});
  }

  // Routes to selected map from Home Screen
  const getMap = (id) => {
    router.setRoute('map', id);
  }

  
    return (
      <>
        <h1>Home</h1>
        <Toolbar list={actionMenu} type='alert' location={['vertical', 'right', 'bottom']} />
        <div className={css.list}>
          {/* Auth disabled for production with poor internet */}
          <div>
            {!isAuthenticated && <LoginView isAuthenticated={isAuthenticated}/>}
          </div> 
          {
            isAuthenticated && list.map(item => (
              <div className={css.item}key={item.id}>
                <button onClick={() => getMap(item.id)}>Go to map...</button>
                <Card 
                  id={item.id} 
                  name={item.name} 
                  comment={item.comment} 
                  isSelected={item.id === id}
                  onClick={() => setSelected(item.id)}
                />
              </div>
            ))
          }
        </div>
      </>
    )
}

export default Home