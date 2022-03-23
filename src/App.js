import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import LoadingApp from './components/LoadingApp';

import { posts } from './data/posts';
import { profile } from './data/profile';

class App extends React.Component
{
  constructor(props){
    super(props)
    this.state = {
      search: "",
      posts: posts,
      section: "posts",
      isLoading: true
    }
  }

  componentDidMount(){
    this.loadingSim()
  }

  loadingSim(){
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 3000)
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
  }
}

export default App;
