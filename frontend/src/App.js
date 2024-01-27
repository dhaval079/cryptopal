import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import UserForm from './components/UserForm';
import Demo from './components/Demo';
import Landing from './components/Landing';
import Footer from './components/Footer';
import RiskForm from './components/RiskForm';
import About from './components/About';
import Home from './components/Home';
import HomeNews from './components/HomeNews';

function App() {
  return (
    <>
      
    <Router >
    <Navbar />  
    <Landing />
    <Footer />
    {/* <Navbar /> */}
    <div className='container'>
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/form" element={<UserForm />} />
          
          <Route exact path="/demo" element={<HomeNews />} />

            
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
