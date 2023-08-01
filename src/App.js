import './App.css';
import React from 'react';
import Login from './pages/Login/Login';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyPage from './pages/MyPage/MyPage';
import Ranking from './pages/Ranking/Ranking';
import Recovery from './pages/Recovery/Recovery';
import SignUp from './pages/SignUp/SignUp';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
