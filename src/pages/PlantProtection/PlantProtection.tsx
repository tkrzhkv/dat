import React, { FC, useState } from "react";
import "./PlantProtection.styles.css";
import { Pagination, PaginationProps } from "../../components/Pagination/Pagination";
import { catalogItems } from "../../static/cartItems";

export interface ICart {
  imgUrl: string;
  scaleIcon: string;
  cartIcon: string;
  price: string;
  id: string;
  name: string;
  inStock: boolean;
  quantity: number;
}

export const PlantProtection: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = catalogItems.slice(firstPostIndex, lastPostIndex);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className='catalog_listing'>
        <img
          src='/icons/listik.svg'
          alt='plant'
        />
        <h1 className='catalog_heading'>Засоби захисту рослин</h1>
        <img
          className='right'
          src='/icons/listik.svg'
          alt='plant'
        />
      </div>
      <div className='listing_container'>
        {currentPosts.map((item) => {
          return (
            <div className='listing_item'>
              <div className='scale_icon'>
                <img
                  className='scale_icon_svg'
                  src={item.scaleIcon}
                  alt='product'
                />
              </div>
              <div className='listing_img'>
                <img
                  src={item.imgUrl}
                  alt='product'
                />
              </div>
              <div className='items_info_block'>
                <div className='items_name'>
                  <p>{item.name}</p>
                  <a href='#'>{item.inStock ? "В наявності" : "немає в наявності"}</a>
                </div>
                <div className='cart_info'>
                  <div className='item_price'>
                    <div>
                      <p className='price'>{item.price} грн</p>
                    </div>
                    <div>
                      <p className='quantity'>{item.quantity} шт</p>
                    </div>
                  </div>
                  <div className='cart_icon_container'>
                    <div className='cart_icon_block'>
                      <div className='cart_icon'>
                        <svg
                          width='40'
                          height='40'
                          viewBox='0 0 41 41'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_8428_7248)'>
                            <path
                              d='M27.9077 16.3429C27.8161 16.2116 27.6687 16.1305 27.5086 16.1236L17.5837 15.6958C17.2989 15.6833 17.0609 15.9032 17.0488 16.1866C17.0367 16.47 17.2561 16.7094 17.5395 16.7215L26.7926 17.1204L24.9732 22.7969H16.877L15.4142 14.8325C15.3821 14.658 15.2623 14.5124 15.097 14.4475L12.7013 13.5063C12.4373 13.403 12.1393 13.5327 12.0356 13.7964C11.9321 14.0602 12.0618 14.3583 12.3257 14.462L14.4558 15.2989L15.9443 23.403C15.9892 23.6466 16.2015 23.8236 16.4493 23.8236H16.6962L16.1324 25.3897C16.0852 25.5209 16.1047 25.6666 16.185 25.7806C16.2652 25.8946 16.3956 25.9624 16.5349 25.9624H16.9303C16.6853 26.2351 16.5349 26.5942 16.5349 26.9891C16.5349 27.8384 17.2259 28.5292 18.075 28.5292C18.924 28.5292 19.615 27.8384 19.615 26.9891C19.615 26.5943 19.4646 26.2351 19.2196 25.9624H22.5774C22.3322 26.2351 22.1818 26.5942 22.1818 26.9891C22.1818 27.8384 22.8727 28.5292 23.7219 28.5292C24.5712 28.5292 25.262 27.8384 25.262 26.9891C25.262 26.5943 25.1116 26.2351 24.8666 25.9624H25.3476C25.5839 25.9624 25.7754 25.7709 25.7754 25.5346C25.7754 25.2983 25.5839 25.1068 25.3476 25.1068H17.1436L17.6055 23.8234H25.3475C25.5708 23.8234 25.7683 23.6792 25.8363 23.4668L27.9753 16.793C28.0245 16.6407 27.9993 16.4742 27.9077 16.3429ZM18.075 27.6738C17.6975 27.6738 17.3905 27.3668 17.3905 26.9893C17.3905 26.6118 17.6975 26.3048 18.075 26.3048C18.4525 26.3048 18.7595 26.6118 18.7595 26.9893C18.7595 27.3668 18.4525 27.6738 18.075 27.6738ZM23.7219 27.6738C23.3444 27.6738 23.0374 27.3668 23.0374 26.9893C23.0374 26.6118 23.3444 26.3048 23.7219 26.3048C24.0994 26.3048 24.4064 26.6118 24.4064 26.9893C24.4064 27.3668 24.0994 27.6738 23.7219 27.6738Z'
                              fill='#8C3213'
                            />
                          </g>
                          <circle
                            cx='20'
                            cy='21'
                            r='19.5'
                            stroke='#8C3213'
                          />
                          {/* <circle
              cx='34'
              cy='7'
              r='7'
              fill='#84BE51'
            /> */}
                          {/* <path
              d='M34.6534 4V11H33.9334V4.64H32.2834V4H34.6534Z'
              fill='white'
            /> */}
                          <defs>
                            <clipPath id='clip0_8428_7248'>
                              <rect
                                width='16'
                                height='16'
                                fill='white'
                                transform='translate(12 13)'
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='pagination_container'>
        <Pagination
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          onChangePage={onChangePage}
          currentPosts={currentPosts}
        />
      </div>
    </>
  );
};
