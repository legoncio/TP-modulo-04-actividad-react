import './App.css';
import React from 'react';
import axios from 'axios';

//Components
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import LoadingApp from './components/LoadingApp';
import Login from './components/Login';

import { profile } from './data/profile';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      search: "",
      posts: [],
      section: "posts",
      isLoading: true,
      loggedIn: false
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      this.setState({
        loggedIn: true
      })
      this.loadPosts()
    }
  }

  loadPosts = () => {
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
          this.setState({
            posts: res.data,
            isLoading: false
          })
        }
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 401){
          localStorage.removeItem('token')
          this.setState({
            loggedIn: false
          })
        }
      })
  }

  onLoginComplete = () => {
    this.setState({
      loggedIn: true
    })
    this.loadPosts()
  }

  onSectionChange = (section) => {
    this.setState({
      section
    })
  }

  onSearchChange = (text) => {
    this.setState({
      search: text
    })
  }

  render (){

    if (this.state.loggedIn){
      return(
        <div className="App">
          <header>
            <Navbar onSectionChange={this.onSectionChange}/>
            <Searchbar onSearchChange={this.onSearchChange}/>
          </header>
        { 
            !this.state.isLoading ?
              (this.state.section === "posts" ? <PostList posts={this.state.posts} searchCriteria={this.state.search}/> : <Profile profile={profile}/>)
              :
              <LoadingApp />
          }
        </div>
      );  
    }else{
      return(
        <Login onLoginComplete={this.onLoginComplete}/>
      )
    }
  }
}

export default App;
