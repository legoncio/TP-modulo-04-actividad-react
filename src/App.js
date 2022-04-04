import './App.css';
import { useState, useEffect}  from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios';

//Components
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import LoadingApp from './components/LoadingApp';
import Login from './components/Login';

import { profile } from './data/profile';

function App()
{
  const [search, setSearch] = useState("")
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setLoggedIn(true)
      loadPosts()
    }
  }, [])

  useEffect(() => {
    if(!loggedIn){
      <Navigate to='/login'/>
    }
  }, [loggedIn])

  function loadPosts() {
    const token = localStorage.getItem('token')
    axios
      .get(
        'https://three-points.herokuapp.com/api/posts',
        {
          headers:{
            "Authorization": `Bearer ${token}`
          }
        }
      )
      .then(res => {
        const resCode = res.status
        if(resCode === 200){
          setPosts(res.data)
          setIsLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 401){
          localStorage.removeItem('token')
          setLoggedIn(false)
        }
      })
  }

  function onLoginComplete() {
    setLoggedIn(true)
    loadPosts()
  }

  function onLogoutComplete(){
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  function onSearchChange(text) {
    setSearch(text)
  }

  if(loggedIn){
    return(
      <div className="App">
        <header>
          <Navbar />
          <Searchbar onSearchChange={onSearchChange}/>
          {isLoading ?
            <LoadingApp />
          :
            <Routes>
              <Route exact path='/' element={<PostList posts={posts} searchCriteria={search}/>}/>
              <Route path='/profile' element={<Profile profile={profile} onLogoutComplete={onLogoutComplete}/>}/>
              {!loggedIn && <Route path='/login' element= {<Login onLoginComplete={onLoginComplete}/>}/>}
              <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
          }
        </header>
      </div>
    );  
  }else{
    return(
      <Login onLoginComplete={onLoginComplete} />
    )
  }
}

export default App;
