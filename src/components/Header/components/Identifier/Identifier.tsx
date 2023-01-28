import React, { FC } from "react";
import "./pageIdentifier.styles.css";

export const Identifier: FC = (): JSX.Element => {
  return (
    <div className='identifier_block'>
      <li className='regular'>Головна</li>
      <img
        className='point'
        src='/icons/point.png'
        alt='dot'
      />
      <li className='regular'>Каталог</li>
      <img
        className='point'
        src='/icons/point.png'
        alt='dot'
      />
      <li className='bold'>Засоби захисту рослин</li>
    </div>
  );
};
