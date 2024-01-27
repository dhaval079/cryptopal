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

function App() {
  return (
    <>
      
      <Router >
    <Navbar />
    <div className='container'>
    <Routes>
          <Route exact path="/" element={<Demo />} />
          {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/form" element={<UserForm />} />
            
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
