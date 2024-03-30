
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Notfound from './Components/Notfound/Notfound';
import Categories from './Components/Categories/Categories';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import Brands from './Components/Brands/Brands';

let router = createBrowserRouter ([
  {path:'/' , element:<Layout/> , children:[
    {index:true, element:<Home/>},
    {path :'Products' , element:<Products/>},
    {path :'*' , element:< Notfound />},
    {path :'Categories' , element:<Categories/>},
    {path :'Cart' , element:<Cart/>},
    {path :'Brands' , element:<Brands/>},
    {path :'Register' , element:<Register/>},
    {path :'Login' , element:< Login />},
    {path :'Footer' , element:< Footer />}, ]}
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
