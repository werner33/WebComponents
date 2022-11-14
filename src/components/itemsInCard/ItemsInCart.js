import React, {useState} from 'react'

import './ItemsInCart.scss';

import ItemInCart from '../itemInCart/ItemInCart';

const productData = [
    {
        id: 1,
        title: 'Pina Colada',
        image: 'https://images.dutchie.com/749b5083f43e25c1ff95278d91b289d9?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=175&w=175&q=75&dpr=1',
        price: 50.00, 
        quantity: 2
    },
    {
        id: 2,
        title: 'Popsicle Joy',
        image: 'https://images.dutchie.com/749b5083f43e25c1ff95278d91b289d9?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=175&w=175&q=75&dpr=1',
        price: 100.00, 
        quantity: 1
    }
] 


const ItemsInCart = () => {

    const [products, setProducts] = useState(productData);

    let subtotal = 0;

  return (
    <div className="itemsInCart">
        <table className="itemsInCart__table">
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
            </tr>
            {products.map(product => {
                subtotal += product.price * product.quantity;

                return (<ItemInCart product={product} subtotal={subtotal} products={products} setProducts={setProducts} />)
            })}
        </table>
    </div>
  )
}

export default ItemsInCart