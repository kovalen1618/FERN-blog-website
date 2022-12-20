import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  // Resets state, clears local storage, and redirects user to login
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  }

  return (
    <Router>
      {/* Navbar with links to different routes */}
      {/* You are not allowed to use anything from the react-router-dom outside of the <Router> */}
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/createpost'> CreatePost </Link>
        {/* Will only show the Login link on the Navbar if user is not logged-in */}
        {!isAuth ? <Link to='/login'> Login </Link> : <button onClick={signUserOut}> Log Out </button>}
      </nav>

      {/* Define structure of the Routes */}
      <Routes>
        {/* Home page route */}
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App;
