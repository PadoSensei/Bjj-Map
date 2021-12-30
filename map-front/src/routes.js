import Help from "./ui-components/Help";
import Home from "./ui-components/Home";
import Map from "./ui-components/Map";
import Profile from "./ui-components/Profile";
import Study from "./ui-components/Study";


const routes = {
  'home': {component: <Home />, breadcrumbs: ['home']},
  'profile': {component: <Profile />, breadcrumbs: ['home', 'profile']},
  'study': {component: <Study />, breadcrumbs: ['home', 'study']},
  'map': {component: <Map />, breadcrumbs: ['home', 'map']},
  'help': {component: <Help />, breadcrumbs: ['home', 'help']}
};

export default routes;