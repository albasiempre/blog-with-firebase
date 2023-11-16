import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';
import CreatePost from './components/CreatePost';

function App() {
  // リロードするたびに動く
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isAuth, setIsAuth] = useState(localStorage.getItem("IsAuth"));
  // 最初は認証をしていないので、falseでOK
  return (
    <Router>
      <Navbar isAuth={ isAuth }/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/createpost" element={ <CreatePost isAuth={isAuth}/> }></Route>
        <Route path="/login" element={ <Login setIsAuth={setIsAuth}/> }></Route>
        <Route path="/logout" element={ <Logout setIsAuth={setIsAuth} /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
