import './App.css';
import { useState, useEffect}  from 'react';
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
  const [section, setSection] = useState("posts")
  const [isLoading, setIsLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      setLoggedIn(true)
      loadPosts()
    }
  }, [])

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

  function onSectionChange(section) {
    setSection(section)
  }

  function onSearchChange(text) {
    setSearch(text)
  }

    if (loggedIn){
      return(
        <div className="App">
          <header>
            <Navbar onSectionChange={onSectionChange}/>
            <Searchbar onSearchChange={onSearchChange}/>
          </header>
        { 
            !isLoading ?
              (section === "posts" ? <PostList posts={posts} searchCriteria={search}/> : <Profile profile={profile}/>)
              :
              <LoadingApp />
          }
        </div>
      );  
    }else{
      return(
        <Login onLoginComplete={onLoginComplete}/>
      )
    }
}

export default App;
