import './App.css';
import FakeHome from './Pages/FakeHome';
import RealCompo from './components/RealCompo'
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


    const { listen } = useSpeechRecognition({
      onResult: (result) => {
        console.log(result)
        if(result.includes("free alcohol now")){
          setLoggedIn(true);
        }
    
      },
    });



console.log(loggedIn)
  return (   
<>
    <Router>
    {loggedIn && <Redirect to="/access-allowed" />}

      <Header />
        <button style={{zIndex:999999, position:"absolute", opacity:0, height:"60px", width:"400px"}} onClick={()=>{listen()}}>Hello World</button>
      <Switch>
        <Route path='/' component={FakeHome} exact />
        <Route path="/access-allowed" exact>
        <RealCompo isLoggedIn={loggedIn} />
        </Route>
      </Switch>
    </Router>
  </>
  )
}

export default App;