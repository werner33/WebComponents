import React from 'react';

import Button from '../button/Button';

import './CartSummary.scss';

const CartSummary = () => {
  return (
    <div className="cartSummary">
        <div className="cartSummary__header">
            Cart Summary
        </div>
        <div className="cartSummary__subtotal">
            <div> Subtotal</div>
            <div> $245.56</div>
        </div>
        <div className="cartSummary__shipping">
            <div>Shipping</div>
            <div>Free</div>
        </div>
        <div className="cartSummary__tax">
            <div>Estimated Tax</div>
            <div>$0.00</div>
        </div>
        <div className="cartSummary__total">
            <div>Estimated Total</div>
            <div>$254.56</div>
        </div>
        <Button text="Checkout"/>
    </div>
  )
}

export default CartSummary