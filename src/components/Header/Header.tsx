import React from "react";
import { HeaderContent } from "../HeaderContent/HeaderContent";
import { LoginBlock } from "../LoginBlock/LoginBlock";
import { Navbar } from "../Navbar/Navbar";
import "./Header.styles.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='nav_header'>
        <div className='nav_header_container'>
          <Navbar />
          <LoginBlock />
        </div>
      </div>
      <div className='header_container'>
        <HeaderContent />
      </div>
    </div>
  );
};
