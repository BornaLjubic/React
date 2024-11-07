import React, {FC} from 'react';
import './WelcomePage.scss';

export const WelcomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="home-page_welcome">
        <h1>Dobrodošli!</h1>
        <button>Pritisni me</button>
      </div>
    </div>
  );
};

