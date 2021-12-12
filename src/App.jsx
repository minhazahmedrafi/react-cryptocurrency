import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { makeStyles } from '@mui/styles';



function App() {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#14161a',
      color: "#fff",
      minHeight: "100vh",
    },
});
  const classes = useStyles();
  return (
    <>
      <Router>
        <div className={classes.root}>
          <Header/>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/coins/:id" element={<Coin/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
