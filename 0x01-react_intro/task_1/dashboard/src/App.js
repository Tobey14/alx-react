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
      </div>
      <div className="App-footer">
        <p>{getFooterCopy()}</p>
      </div>
    </>
  );
}

export default App;
