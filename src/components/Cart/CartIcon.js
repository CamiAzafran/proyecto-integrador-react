import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ShoopingIcon } from '../../assets/cart-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';

const CartIconStyled = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: white;
`;

export const CartIcon = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <CartIconStyled onClick={handlerToggle}>
      <ShoopingIcon style= {{ width: '24px', height: '24px' }} />
      <ItemCount>{quantity}</ItemCount>
    </CartIconStyled>
  );
};
