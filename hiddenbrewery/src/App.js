import './App.css';
import FakeHome from './Pages/FakeHome';
import HomeCompo from './components/HomeCompo';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import React, {useState} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = (userInfos) =>{
    console.log('user is loggedIn', loggedIn)
    if(!loggedIn){
      if(userInfos.email === "freeAlcohol" && userInfos.password === "123456"){
        console.log("logged in");
        setLoggedIn(true);
      }
    }
        else{
          setLoggedIn(false);
          console.log('logout')
        }
  }

  
  return (
      
    <Router>
      <Header onLogin={(userInfos)=>toggleLogin(userInfos)} loggedIn={loggedIn} />
      <Switch>
        <Route path='/' component={FakeHome} exact />
        <Route path="/alcohol" exact>
          <HomeCompo isLoggedIn={loggedIn} />
          </Route>
      </Switch>
    </Router>
  )
}

export default App;