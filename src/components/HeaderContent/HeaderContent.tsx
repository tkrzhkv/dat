import React, { useState } from "react";
import "./HeaderContent.styles.css";
import { HeaderCartItems } from "../HeaderCartItems/HeaderCartItems";
import { HeaderContacts } from "../HeaderContacts/HeaderContacts";
import { HeaderLogo } from "../HeaderLogo/HeaderLogo";
import { HeaderSearch } from "../HeaderSearch/HeaderSearch";

export const HeaderContent = () => {
  return (
    <div className='header_content'>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderContacts />
      <HeaderCartItems />
    </div>
  );
};
