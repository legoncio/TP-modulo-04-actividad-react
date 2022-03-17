import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import CardGroup from './components/CardGroup';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Searchbar />
      </header>
      <CardGroup />
    </div>
  );
}

export default App;
