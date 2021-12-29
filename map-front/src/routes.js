import Help from "./ui-components/Help";
import Home from "./ui-components/Home";
import Map from "./ui-components/Map";


const routes = {
  'home': {component: <Home />, breadcrumbs: ['home']},
  'map': {component: <Map />, breadcrumbs: ['home', 'map']},
  'help': {component: <Help />, breadcrumbs: ['home', 'help']}
};

export default routes;