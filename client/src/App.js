import './App.css';
import redirectToLogin from './utils/AuthenticationKroger';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is going to be an app for volunteering to deliver groceries to local community members who are elderly, disabled, or veterans who have a difficult time leaving home or paying for grocery delivery.
        </p>
        <button onClick={redirectToLogin}>Sign In</button>
      </header>
    </div>
  );
}

export default App;
