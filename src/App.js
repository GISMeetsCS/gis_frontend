import './asset/css/global_style.css';
import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import MyPage from './pages/MyPage/MyPage';
import Ranking from './pages/Ranking/Ranking';
import Recovery from './pages/Recovery/Recovery';
import SignUp from './pages/SignUp/SignUp';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className='App-box'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
