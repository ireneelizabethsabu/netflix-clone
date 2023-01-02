import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {auth, onAuthStateChanged} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout} from './features/user/userSlice';
import { selectUser } from './features/user/userSelector';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }));
      } else {
        dispatch(logout);
      }
    });
  
    return () => {
      unsubscribe();
    }
  }, [])
  
  return (
    <div className="app">
      <Router>
        {!user ? (<LoginScreen/>) : (
          <Routes>
          {/* <Route path="/test" element={<HomeScreen />} /> */}
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
