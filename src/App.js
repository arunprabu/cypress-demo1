import logo from './logo.svg';
import './App.css';

function App() {

  const handleSubmit = () => {
    alert('wow');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome</h1>

        <input type="text" id="input1"/> <br />
        <input type="text" id="input2"/> <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
