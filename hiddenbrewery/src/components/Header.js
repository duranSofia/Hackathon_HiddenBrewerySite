import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FakeHome from '../Pages/FakeHome';

function Header({onLogin, loggedIn}) {
  const classes = useStyles();
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  return (
    <>
    <CssBaseline />
    <AppBar className={classes.wrap}>
      <Toolbar className={classes.container}>
        <div className={classes.iconDiv}>
        <ShoppingCartIcon className={classes.icon} />
        <div  onClick={routeChange}>
          <Typography variant="h6" color="inherit" noWrap >
          WhatSheNeeds
          </Typography>
        </div>
        </div>
        <div>
        <div>a shop for your woman!</div>
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
  },

  wrap: {
    backgroundColor: "black"
  }
}));
export default Header