import React from "react";
import Logo from "/logo/logo.svg";
import "./HeaderLogo.styles.css";

export const HeaderLogo = () => {
  return (
    <div>
      <img
        className='header_logo'
        src={Logo}
        alt='company'
      />
    </div>
  );
};
