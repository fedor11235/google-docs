import logo from './assets/img/logo.svg'
import './assets/css/App.css'
import Routes from "./routes/Routes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <Routes />
      </header>
    </div>
  );
}

export default App
