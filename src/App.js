// import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/"
          element={<Main />}
        />
        <Route
          path="/about"
          element={<AboutMe/>}
        />
        <Route
          path="/portfolio"
          element={<Portfolio/>}
        />
        <Route
          path="/contact"
          element={<Contact/>}
        />
        <Route
          path="/resume"
          element={<Resume/>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
