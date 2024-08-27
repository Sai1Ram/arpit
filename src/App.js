import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SingleSeller from './components/SingleSeller';
import User from './components/User';
import Registration from './components/Registration';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/seller/:id" element={<SingleSeller />} />
          <Route path="/user" element={<User />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
