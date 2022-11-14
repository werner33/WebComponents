import React, {useEffect, useState} from 'react'

import './ItemInCart.scss';

const ItemInCart = ({product, subtotal, products, setProducts}) => {

    const [quantity, setQuantity] = useState(product.quantity);
    const [quantityError, setQuantityError] = useState('');

    useEffect(() => {

        // fetch all products
        const productsWithUpdatedQty = products.map(productWithNewQuantity => {
             
            if(productWithNewQuantity.title === product.title){
                productWithNewQuantity.quantity = quantity
            }

            return productWithNewQuantity;
        })

        setProducts(productsWithUpdatedQty);

    }, [quantity])

    const validateQuantity = () => {
        console.log('validate');
        // check for isNaN 
        if(isNaN(quantity)){
            console.log(quantity)
            setQuantityError('Quantity must be a positive number');
        } else if (quantity > 100){
            setQuantityError('Quantity must not exceed 100');
        } else if(quantity < 1){
            setQuantityError('You must use a positive number or remove item from your cart.');
        } else {
            setQuantityError('');
        }
    }

    const handleSetQuantity = (e) => {
        const currQuantity = e.target.value;
        
        if(currQuantity.length > 3){
            if(currQuantity[0] === '-'){
                setQuantityError('Quantity must be a positve number.');
            } else {
                setQuantityError('100 is the maximum order size.');
            }
        } else {
            setQuantityError('')
            setQuantity(currQuantity);
        }
    }

    const removeItemFromCart = (e) => {

        const currId = e.target.id;

        // filter our products in cart to remove the product with this id
        const productsWithOneRemoved = products.filter(product => {
            return product.id != Number(currId);
        })

        // setProductsInCart to the filtered list
        setProducts(productsWithOneRemoved);
    }

    console.log(quantityError)

  return (
    <tr className="itemInCart">
        <td>
            <div className="itemInCart__productInfo">
            <div className="itemInCart__productImage">
                <img src={product.image} />
            </div>
            <div>
                <div className="itemInCart__productTitle">{product.title}</div>
                <div 
                    className="itemInCart__productRemove"
                    onClick={(e) => removeItemFromCart(e)}
                    id={product.id}
                >
                        Remove
                </div>
            </div>
            </div>
        </td>
        <td>
            <div className="itemInCart__productQty">
            <input 
                maxLimit='3' 
                value={quantity}   
                onChange={e => handleSetQuantity(e)}
                onBlur={validateQuantity} 
                style={{"border" : quantityError ? "1px solid red" : "1px solid black"}}
            />
            {quantityError && <div className="itemInCart__qtyError">{quantityError}</div>}
            </div>
        </td>
        <td>${product.price.toFixed(2)}</td>
        <td>${subtotal.toFixed(2)}</td>
    </tr>
  )
}

export default ItemInCart