import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div class="dark-bubble"></div><div class="light-bubble"></div><section class="loginSection">
      <div class="loginContinuer">
        <div class="inputBoxContinuer">
          <input type="text" placeholder="Email" />
        </div>
        <div class="inputBoxContinuer">
          <input type="password" placeholder="Password" />
        </div>
        <button class="loginButton">Login</button>
      </div>
    </section><div class="dark-bubble-reverse"></div><div class="light-bubble-reverse"></div>
    </>
  );
}

export default App;
