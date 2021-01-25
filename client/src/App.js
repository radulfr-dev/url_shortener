import logo from './logo.svg'
import './App.scss'
import LoginRegisterForm from './components/LoginRegisterForm'
import Header from './components/Header'
import NewLinkWrapper from './components/NewLinkWrapper'

function App() {

let isRegistered = false;

  return (
    <div className="App">
      <Header />
      <NewLinkWrapper />
    </div>
  );
}

export default App;
