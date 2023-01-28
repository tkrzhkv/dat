import React from "react";
import { Categories } from "./components/Categories/Categories";
import { Content } from "./components/Content/Content";
import { Identifier } from "./components/Identifier/Identifier";
import { LoginBlock } from "./components/LoginBlock/LoginBlock";
import { Navbar } from "./components/Navbar/Navbar";

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
        <Content />
        <Categories />
        <Identifier />
      </div>
    </div>
  );
};
