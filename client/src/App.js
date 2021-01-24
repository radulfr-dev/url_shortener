import logo from './logo.svg';
import './App.css';
import LoginRegisterForm from './components/LoginRegisterForm'

function App() {

let isRegistered = false;

  return (
    <div className="App">
      <div className="loginRegisterFormContainer">
        <LoginRegisterForm></LoginRegisterForm>
      </div>
    </div>
  );
}

export default App;
