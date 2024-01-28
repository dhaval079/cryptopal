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
import About from './components/About';
import Home from './components/Home';
import HomeNews from './components/HomeNews';
import Sentiment from './components/Sentiment';

function App() {
  return (
    <>
      
    <Router >
    <Navbar />  
    <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/form" element={<UserForm />} />
          
          <Route exact path="/demo2" element={<HomeNews />} />


          <Route exact path="/demo" element={<Sentiment />} />

            
    </Routes>
    </Router>
    </>
  );
}

export default App;
