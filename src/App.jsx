import { useState } from "react";
import "./App.css";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import CourseDetails from "../components/CourseDetails";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Signin from "../components/Authentication/Signin";
import Signup from "../components/Authentication/Signup";
import Developer from "../components/Developer";
import SearchDisplay from "../components/SearchDisplay";

function App() {
  const location = useLocation();
  const hideLayout = ["/","/header","/signup", "/signin","/developer"];
  const isLayoutHidden = hideLayout.includes(location.pathname);
  return (
    <>
     {!isLayoutHidden && <Sidebar />}
     {!isLayoutHidden && <Header />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search/:title" element={<SearchDisplay />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/details/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;
