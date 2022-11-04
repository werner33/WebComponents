import React, {useEffect, useState} from 'react'
import ProductCards from '../productCards/ProductCards';

import './ItemInCart.scss';

const ItemInCart = ({product, subtotal, products, setProducts}) => {

    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {

        // fetch all products
        products = products.map(productWithNewQuantity => {
             
            if(productWithNewQuantity.title === product.title){
                productWithNewQuantity.quantity = quantity
            }

            return productWithNewQuantity;
        })

        setProducts(products);

    }, [quantity])

  return (
    <tr className="itemInCart">
        <td>
            <div class="itemInCart__productInfo">
            <div class="itemInCart__productImage">
                <img src={product.image} />
            </div>
            <div>
                <div class="itemInCart__productTitle">{product.title}</div>
                <div class="itemInCart__productRemove">Remove</div>
            </div>
            </div>
        </td>
        <td>
            <div class="itemInCart__productQty">
            <input limit="2" value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
        </td>
        <td>${product.price.toFixed(2)}</td>
        <td>${subtotal.toFixed(2)}</td>
    </tr>
  )
}

export default ItemInCart