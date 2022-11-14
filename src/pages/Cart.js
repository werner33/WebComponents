import React from 'react';

// Components
import ItemsInCart from '../components/itemsInCard/ItemsInCart';
import CartSummary from '../components/cartSummary/CartSummary';

// Layout Components
import SplitScreen from '../layouts/splitScreen/SplitScreen';


const cart = () => {
  return (
    <div className="cart">
        <SplitScreen>
            <ItemsInCart />
            <CartSummary />
        </SplitScreen>
    </div>
  )
}

export default cart