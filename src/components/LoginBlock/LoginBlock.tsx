import React from "react";
import "./LoginBlock.styles.css";
import EnterArrow from "/icons/arrow_enter.svg";
import { Link } from "react-router-dom";

export const LoginBlock = () => {
  return (
    <div className='login_block'>
      <ul className='login_block_list'>
        <Link
          className='login_block_list_item'
          to='#'
        >
          <img
            src={EnterArrow}
            alt='enter'
            className='login_block_enter-arrow'
          />
          Вхід
        </Link>
        <span className='login_divider'>|</span>
        <Link
          className='login_block_list_item'
          to='#'
        >
          Реестрація
        </Link>
      </ul>
    </div>
  );
};
