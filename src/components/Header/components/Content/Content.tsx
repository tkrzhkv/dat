import React, { useState } from "react";
import "./Content.styles.css";
import { CartItems } from "../CartItems/CartItems";
import { Contacts } from "../Contacts/Contacts";
import { SearchInput } from "../SearchInput/SearchInput";
import { Logo } from "../Logo/Logo";
import { Categories } from "../Categories/Categories";

export const Content = () => {
  return (
    <div className='header_content'>
      <Logo />
      <SearchInput />
      <Contacts />
      <CartItems />
    </div>
  );
};
