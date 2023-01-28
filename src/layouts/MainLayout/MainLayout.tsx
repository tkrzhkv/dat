import React, { FC } from "react";
import { Header } from "../../components/Header/Header";
import { PlantProtection } from "../../pages/PlantProtection/PlantProtection";
import "./MainLayout.styles.css";

export const MainLayout: FC = () => {
  return (
    <div>
      <div className='wrapper'>
        <PlantProtection />
      </div>
    </div>
  );
};
