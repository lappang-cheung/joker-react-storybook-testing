// Required Packages
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// Custom Pages
import Joker from './pages/Joker'
import Darkknight from './pages/Darkknight'
import SuicideSquad from './pages/SuicideSquad'
import TimBurton from './pages/TimBurton'
import ErrorPage from './pages/ErrorPage'
// CSS
import './styles/style.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/suicidesquad'component={SuicideSquad} />
        <Route exact path='/darkknight'component={Darkknight} />
        <Route exact path='/timburton' component={TimBurton} />
        <Route exact path='/' component={Joker} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
