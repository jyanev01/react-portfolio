// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import AboutMe from './pages/AboutMe';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header /> <br /> <br />

      <Project />  <br /> <br />

      <Footer /> <br /> <br />



      <Router>
            <Link to="/"> 
                Home
            </Link>

            <Link to="/about">
                About
            </Link>
        </Router>
        


       <Routes>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/about">
                <AboutMe />
            </Route>
        </Routes>
     
    </div>
  );
}

export default App;
