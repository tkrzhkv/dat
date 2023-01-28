import React from "react";
import companyLogo from "/logo/logo.svg";
import "./Logo.styles.css";
import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div>
      <img
        className='header_logo'
        src={companyLogo}
        alt='company'
      />
    </div>
  );
};
