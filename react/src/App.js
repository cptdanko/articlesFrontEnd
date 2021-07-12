import logo from './logo.svg';
import './App.css';
import Articles from './components/article';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="Title">News</span>
      </header>
      <Articles />
    </div>
  );
}

export default App;
