import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../../static/categoriesItems";
import "./Categories.styles.css";

export interface ICategory {
  id: string;
  name: string;
  svg: string;
  link: string;
}

export const Categories = () => {
  return (
    <div className='category_block'>
      <ul className='category_list'>
        {categories.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.link}
              className='link'
            >
              <div className='category_item'>
                <img
                  src={item.svg}
                  alt='icon'
                  className=''
                />
                <p className='category_text'>
                  {item.id !== "5" ? (
                    item.name
                  ) : (
                    <p>
                      <span>Агроному</span>
                      <br /> в поміч
                    </p>
                  )}
                </p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
