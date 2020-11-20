import './App.css';
import FakeHome from './Pages/FakeHome';
import HomeCompo from './components/HomeCompo';
import Header from './components/Header'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { useSpeechRecognition } from 'react-speech-kit';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


    const { listen, listening, stop } = useSpeechRecognition({
      onResult: (result) => {
        console.log(result,'restul')
        if(result === "free alcohol"){
          setLoggedIn(true)
        }
    
      },
    });
    useEffect(()=>{
      listen()
    },[])

  // const toggleLogin = (userInfos) =>{
  //   console.log('user is loggedIn', loggedIn)
  //   if(!loggedIn){
  //     if(userInfos.email === "freeAlcohol" && userInfos.password === "123456"){
  //       console.log("logged in");
  //       setLoggedIn(true);
  //     }
  //   }
  //       else{
  //         setLoggedIn(false);
  //         console.log('logout')
  //       }
  // }

  
  return (
      
    <Router>
      {loggedIn && <Redirect to="/alcohol" />}
      {/* <Header onLogin={(userInfos)=>toggleLogin(userInfos)} loggedIn={loggedIn} /> */}
      <Header />
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