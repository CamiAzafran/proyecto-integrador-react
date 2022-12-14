import React, { useCallback, useEffect } from 'react';
import { MyOrders } from '../components/MyOrders/MyOrders';

import { Wrapper, LayoutPage } from '../components/UI';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as orderActions from '../redux/orders/order-actions';

const Orders = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  let { orders, error } = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchOrders = useCallback(async () => {
    await dispatch(orderActions.fetchOrders(currentUser.id));
  }, [dispatch, currentUser]);

  if (!currentUser) {
    navigate.push('/');
  }
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <LayoutPage>
      <Wrapper>
        <MyOrders orders={orders} />
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;