import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Register from './components/forms/Register';
import Login from './components/forms/Login';
import Posts from './components/Posts';


function App() {
  const [posts,setPosts] = useState([])
  const [user,setUser] = useState({})
  const [token, setToken] = useState("")

  useEffect(()=>{
    fetch("http://localhost:4000/posts")
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })
    setUser(JSON.parse(localStorage.getItem("user")))
    setToken(localStorage.getItem("token"))
  },[])
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar user={user} token={token}/>
          <Switch>
            
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Posts posts={posts}/>
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
