import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const totalPrice= cart.reduce((total,prd) => total + prd.price,0);
    let shipping = 0;
    if(totalPrice>100){
        shipping = 1.99;
    }
    else if(totalPrice>50){
        shipping = 4.99;
    }
    else if(totalPrice>0){
        shipping= 12.49;    
    }
    let tax = totalPrice/10;
    
    const twoDecimal= num => {
        const value = num.toFixed(2);
        return Number(value);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {twoDecimal( totalPrice)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax:{twoDecimal(tax)} </p>
            <p>Total: {twoDecimal(totalPrice+shipping+tax)}</p>
        </div>
    );
};

export default Cart;