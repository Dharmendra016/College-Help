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
          <div className="logo">logo</div>
          <nav >
            <ul className="nav-items">
              <li> <a href="#">Home</a> </li>
              <li> <a href="#">Courses</a> </li>
              <li> <a href="#">About</a></li>
              <li> <a href="#">Blog</a> </li>
              <li> <a href="#">Contact</a> </li>
              <div className="btns">
                <button className ="primary-btn">Join</button>
                <button className="secondary-btn">Log in</button>
              </div>
            </ul>
          </nav>
          
        </div>
      </div>
    </div>
  );
}

export default App;
