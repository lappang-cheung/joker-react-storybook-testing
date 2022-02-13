// Required Packages
import {
  BrowserRouter as Router,
  Routes,
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
      <Routes>
        <Route exact path='/suicidesquad'element={<SuicideSquad/>} />
        <Route exact path='/darkknight'element={<Darkknight/>} />
        <Route exact path='/timburton' element={<TimBurton/>} />
        <Route exact path='/' element={<Joker/>} />
        <Route element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
