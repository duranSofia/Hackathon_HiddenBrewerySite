import './App.css';
import FakeHome from './Pages/FakeHome';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home  from './Pages/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={FakeHome} exact />
        <Route path='/redirect' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
