import React from 'react';
import "./App.css";
import LogPage from './components/LogPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Verification from './components/Verification';
import ProfileSetting from './components/ProfileSetting';
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard';
import TableSec from './components/TableSec';

const App = () => {
  return (
    <div>
      <BrowserRouter> 
     <NavBar/>
        <Routes>
          <Route path='/' element={<LogPage />} />
          <Route path='/verfication' element={<Verification />} />
          <Route path='/profile' element={<ProfileSetting />} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/tablesec' element={<TableSec/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


