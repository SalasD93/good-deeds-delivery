import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import { ProdCardCont } from './styles';

function ProductItem(item) {
  console.log('this is working');
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  const extra = (
    <div>
      <Icon name='coffee' />
      <span> {quantity} {pluralize("item", quantity)} in stock</span>
      <div>
        <Button onClick={addToCart}>Add to cart</Button>
      </div>
    </div>
  )

  const img = (
    <Link to={`/products/${_id}`}>
      <Image
        alt={name}
        src={`/images/${image}`}
        />
    </Link>
  )

  return (
    <ProdCardCont>
      <Card header={name} extra={extra} image={img} meta={price} />
    </ProdCardCont>
  );
}

export default ProductItem;