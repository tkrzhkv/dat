import { Link } from "react-router-dom";
import "./Navbar.styles.css";
import { menuItems } from "../../static/menuItems";

export interface IMenu {
  text: string;
  link: string;
  svg?: string;
  class: string;
}

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
        <div className='navbar_divider'></div>
      </ul>
    </nav>
  );
};
