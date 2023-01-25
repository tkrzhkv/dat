import React from "react";
import { LoginBlock } from "../LoginBlock/LoginBlock";
import { Navbar } from "../Navbar/Navbar";
import "./Header.styles.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <Navbar />
        <LoginBlock />
      </div>
    </div>
  );
};
