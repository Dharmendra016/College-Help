import logo from './logo.svg';
import './App.css';

// let a , b ; 
// a = parseInt(prompt("Eneter the value of a"));
// b = parseInt(prompt("Eneter the value of a"));   // parseInt is used to convert string to numebr

// function sum(a , b){
//   let c = a + b;
//   return c;
// }


function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="nav-bar">
          <nav >
            <ul className="nav-items">
              <li> <a href="#">Home</a> </li>
              <li> <a href="#">About</a> </li>
              <li> <a href="#">Sign up</a></li>
              <li> <a href="#">Login</a> </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
