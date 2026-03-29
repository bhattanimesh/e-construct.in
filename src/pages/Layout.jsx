import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className=" mt10 flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;