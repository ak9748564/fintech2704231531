import { Route,Routes } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import Register from './components/Register';
import Otp from './components/Otp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
