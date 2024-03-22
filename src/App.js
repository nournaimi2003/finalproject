import logo from './logo.svg';
import './App.css';
import {createBrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Notfound from './Components/Notfound/Notfound';
import Categories from './Components/Categories/ Categories';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Brand from './Components/Brand/Brand';
import Register from './Components/Register/Register';

createBrowserRouter ([
  {path:'/' , element:<Layout/> , children:[
    {path :'Home' , element:<Home/>},
    {path :'Products' , element:<Products/>},
    {path :'Navbar' , element:< Navbar/>},
    {path :'*' , element:< Notfound />},
    {path :'Categories' , element:<Categories/>},
    {path :' Cart' , element:<Cart/>},
    {path :'Brand' , element:<Brand/>},
    {path :' Register' , element:<Register/>},
    {path :' Login ' , element:< Login />},
  ]}
])




  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> ); }

export default App;
