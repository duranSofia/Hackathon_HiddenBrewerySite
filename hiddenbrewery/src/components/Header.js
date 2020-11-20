import React, {useState} from "react";
import { CompoChoose, LabelDiv, MainWrap, NewsCard } from '../components/styledElements';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

function Header({onLogin, loggedIn}) {
  const [inputs, setInputs] = useState({email:"", password:""})
  const history = useHistory();
  const classes = useStyles();
  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]:event.target.value})
  }
  const handleLogin = (event) => {
    console.log('user try to login')
    event.preventDefault();
    onLogin(inputs);
    history.push('/alcohol')
  }


  const handleLogout = () => {
    onLogin();
  }
  return (
    <>
    <CssBaseline />
    <AppBar>
      <Toolbar className={classes.container}>
        <div className={classes.iconDiv}>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          What She Need
        </Typography>
        </div>
        <div>
        <LabelDiv>need help?</LabelDiv>
        {!loggedIn ? 
                <form onSubmit={(event)=> {console.log('test');handleLogin(event)}} >
                <input placeholder='username' value={inputs.email} onChange={e => handleChange(e)} name="email" />
                <input type='password' placeholder='password' value={inputs.password} onChange={e => handleChange(e)} name="password" />
                <input type='submit' value="Send" />
            </form> :
            <h1 onClick={()=> handleLogout()}>Logout</h1>        
      }
    </div>
      </Toolbar>
    </AppBar>
    </>


  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  iconDiv:{
    display:"flex"
  },
  container:{
    display: "flex", 
    justifyContent: "space-between"
  }
}));
export default Header