import holberton_logo from "../assets/holbertonLogo.jpg";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
