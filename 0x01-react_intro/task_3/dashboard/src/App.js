/* eslint-disable jsx-a11y/alt-text */
import logo from "./holbertonLogo.jpg";
import { getFooterCopy } from "./utils";
import "./App.css";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>{getFooterCopy()}</p>
      </div>
    </>
  );
}

export default App;
