import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';

import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  // Will utilize localstorage to see if a user is logged in or not
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

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

        {/* Will only show the Login link on the Navbar if user is not logged-in */}
        {!isAuth ? (
          <Link to='/login'> Login </Link> 
        ) : (
          // Will only show Create Post link on Navbar is user is logged-in
          <>
            <Link to='/createpost'>Create Post</Link>
            <button onClick={signUserOut}> Log Out </button>
          </> 
        )}
      </nav>

      {/* Define structure of the Routes */}
      <Routes>
        {/* Home page route */}
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App;
