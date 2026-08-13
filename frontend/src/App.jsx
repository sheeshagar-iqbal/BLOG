import React from "react";
import Login from "./components/account/Login";
import { Route, Routes } from "react-router-dom";
// import Show from "./components/show/Show";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreateBlog from "./components/create/CreateBlog";
import About from "./components/home/About";
import Info from "./components/home/Info";
import Profile from "./components/home/Profile";
import MyAccount from "./components/home/MyAccount";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Info />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myaccount" element={<MyAccount />} />

        {/* <Route path="/create"> */}
          <Route path="/create" element={<CreateBlog />} />
        {/* </Route> */}
      </Routes>
    </>
  );
};

export default App;
