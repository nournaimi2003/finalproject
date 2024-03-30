
/* import styles from "./Navbar.Module.css"*/
import { Link } from "react-router-dom";
import Logo from "../../assets/images/freshcart-logo.svg"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={Logo} alt="freshcart-logo.svg" />
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Brands">Brands</Link>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item d-flex align-items-center">
          <i className="fab fa-facebook mx-2"></i> 
          <i className="fab fa-twitter mx-2"></i> 
          <i className="fab fa-instagram mx-2"></i> 
          <i className="fab fa-tiktok mx-2"></i> 
          
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Login">Login </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Logout</Link>
        </li>
        
      </ul>
    
    
    </div>
  </div>
</nav>
    </div>
  )
}
