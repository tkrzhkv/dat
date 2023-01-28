import React from "react";
import ArrowDown from "/icons/arrow_down.svg";
import "./Contacts.styles.css";
import { PhoneSvg } from "../../../svg/PhoneSvg/PhoneSvg";

export const Contacts = () => {
  return (
    <div className='header_contacts'>
      <div className='header_contacts_block'>
        <div className='header_contacts_phone_circle'>
          <PhoneSvg />
        </div>
        <p>+38 (067) 115 00 58</p>
        <img
          className='header_contacts_arrow_icon'
          src={ArrowDown}
          alt='submenu'
        />
        <p>
          <a href='#'>Замовити зворотній зв’язок</a>
        </p>
      </div>
    </div>
  );
};
