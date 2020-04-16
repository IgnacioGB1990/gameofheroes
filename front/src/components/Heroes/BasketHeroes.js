import React, { useState, useEffect } from 'react';
import './styles.css';
import { withProtected } from "../../../lib/protectRoute.hoc"
import { selectedHeroes } from "../Heroes/index"

const BasketPage = () => {


  return (

    < div className="App" >
      Hello {selectedHeroes}
    </div >
  );
};

const Page = () => (
  <div>
    <BasketPage />
  </div>
);

// Redirect to /auth/login if user is not present
export const Basket = withProtected(Page);