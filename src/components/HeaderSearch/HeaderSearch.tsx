import React, { useState } from "react";
import Divider from "/icons/divider.svg";
import Search from "/icons/search.svg";
import "./HeaderSearch.styles.css";

export const HeaderSearch = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='header_search'>
      <div className='header_search_input_block'>
        <input
          type='text'
          value={value}
          placeholder='Пошук'
          onChange={handleChange}
          className='header_search_input'
        />
        <img
          className='header_search_divider'
          src={Divider}
          alt='line'
        />
        <img
          className='header_search_magnifier'
          src={Search}
          alt='magnifier'
        />
      </div>
    </div>
  );
};
