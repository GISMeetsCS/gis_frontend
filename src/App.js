import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import Main from './components/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Ranking from './pages/Ranking/Ranking';
import Recovery from './pages/Recovery/Recovery';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
