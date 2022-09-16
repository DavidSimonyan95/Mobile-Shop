import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Product from '../src/Product/Product'
import './App.css';
import Contact from './NavItem/Contact';
import Main from './Main/Main';
import AbouteUs from './NavItem/AbouteUs';
import Services from './NavItem/Services';
import Credit from './NavItem/Credit'

function App() { 

 const {pathname}= useLocation()

  return (
    <div className="App">
      <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/abouteus' element = {<AbouteUs/>}/>
          <Route path='/services' element = {<Services/>}/>
          <Route path='/credit' element = {<Credit/>}/>
          <Route  path = {pathname} element = {<Product pathname = {pathname}/>}/> 
      </Routes>
    </div>
  );
}
export default App;
