import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={ <Signup/>}/>
          <Route path='/dashboard' element={ <Dashboard/>}/>
         
          
        </Routes>
      </Router>
       
     
    </div>
     
  );
}

export default App;
