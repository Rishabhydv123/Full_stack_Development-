import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { LoginPage } from '../Components/Login';
import { Navbar } from '../Components/Navbar';

export const Router_Page = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
};
