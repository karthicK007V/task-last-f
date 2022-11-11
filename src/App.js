
import './App.css';
import Login from './reg/login';
import Regsiter from './reg/regsiter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Forget from './reg/forget';
import Success from './reg/success';

function App() {
  // return(
  //   <>
  //   <Login/>
  //   </>
  // )
  return (
<>

<Router>
  <Routes>
    <Route path='' element={<Login/>}/>
  
  <Route path='/regi' element={<Regsiter/>}/>
  <Route path='/for' element={<Forget/>}/>
  <Route path='/suceess' element={<Success/>}/>
  


  </Routes>
</Router>

</>
  );
}

export default App;
