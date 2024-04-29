
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/about">About</Link>
      <Link to="/users">users</Link>

      </header>
    </div>
  );
}

export default App;
