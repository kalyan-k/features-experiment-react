import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink, HashRouter as Router } from 'react-router-dom';

import './App.css';
import MainComponent from './components/main.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    main: {
      maxWidth: 'fit-content',
      minWidth: '130em'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    link: {
      color: 'white',
      padding: '10px',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <NavLink exact to={'/'} className={classes.link}>Home</NavLink>
              <NavLink to={'/sampleForm'} className={classes.link}>Transaction</NavLink>
            </Toolbar>
          </AppBar>
        </div>
      </Router>

      <main className={classes.main}>
        <MainComponent />
      </main>
    </div>
  );
}

export default App;
