import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.css";
import Arrow from "../../assets/arrow_down.svg";

interface IMenu {
  text: string;
  link: string;
  svg?: string;
  class: string;
}

const menuItems: IMenu[] = [
  {
    text: "Про нас",
    link: "#",
    svg: "/icons/arrow_down.svg",
    class: "navbar_list_item",
  },
  {
    text: "Каталог продукції",
    link: "#",
    class: "navbar_list_item",
  },
  {
    text: "Оплата і доставка",
    link: "#",
    class: "navbar_list_item",
  },
  {
    text: "Партнери",
    link: "#",
    class: "navbar_list_item",
  },
  {
    text: "Новини",
    link: "#",
    class: "navbar_list_item",
  },
  {
    text: "Контакти",
    link: "#",
    class: "navbar_list_item",
  },
];

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar_list'>
        {menuItems.map((menu) => {
          return (
            <Link
              to={menu.link}
              className={menu.class}
            >
              {menu.text}
              {menu.svg ? (
                <img
                  src={menu.svg.toString()}
                  alt='arrow'
                  className='navbar_list_item_arrow'
                />
              ) : (
                ""
              )}
            </Link>
          );
        })}
        {/* <Link
          to='/'
          className='navbar_list_item'
        >
          Про нас
          <img
            src={Arrow}
            alt='submenu'
            className='navbar_list_item_arrow'
          />
        </Link>
        <Link
          to='#'
          className='navbar_list_item'
        >
          Каталог продукції
        </Link>
        <Link
          to='#'
          className='navbar_list_item'
        >
          Оплата і доставка
        </Link>
        <Link
          to='#'
          className='navbar_list_item'
        >
          Партнери
        </Link>
        <Link
          to='#'
          className='navbar_list_item'
        >
          Новини
        </Link>
        <Link
          to='#'
          className='navbar_list_item'
        >
          Контакти
        </Link> */}
        <div className='navbar_divider'></div>
      </ul>
    </nav>
  );
};
