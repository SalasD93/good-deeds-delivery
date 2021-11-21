import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
    console.log(user);
  }

  return (
    <div>
      {user ? <p className="location-p">Your Location: <span>{user.zipCode}</span></p> : null}
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;