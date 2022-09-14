import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Main from './Main/Main';




function App() {
  
 const {pathname}= useLocation()

  return (
    <div className="App">
      <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route  path = {pathname} element = {<About pathname = {pathname}/>}/> 
          {/* <Route path='/contact' element = {<Contact/>}/> */}
         
      </Routes>
      
 
    </div>
  
    
  );
 
}

export default App;
