import React, {useState, useEffect} from 'react';

import {getCookie} from '../../utils/cookieUtils.js';
import ProductCard from '../productCard/ProductCard';

import './ProductCards.scss';


// const productData = [
//     {id: 1, title: "Product 1", price: 35, inCart: false},
//     {id: 2, title: "Product 2", price: 5, inCart: false},
//     {id: 3, title: "Product 3", price: 500, inCart: false},
//     {id: 4, title: "Product 4", price: 23, inCart: false},
//     {id: 5, title: "Product 5", price: 61, inCart: false},
//     {id: 6, title: "Product 6", price: 34, inCart: false},
// ]

const ProductCards  = ({title}) => {

    let [products, setProducts] = useState([]);

    //fetch product data from backend 

    let accessToken = getCookie('accessToken');

    const requestOptions = {
        headers: {'Authorization': `Bearer ${accessToken}`}
    }

    useEffect(() => {

        const url = 'http://localhost:9000/products';

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {

            if(data.error){
                console.log(data.error)
            } else {
                setProducts(data.products);
            }
        });
    }, [])

    return (
        <div className="productCards">

            {title && <div className="productCards__title">{title}</div>}

            <div  className="productCards__container">
                {products.map((product, index) => {
                    return (< ProductCard key={index+1} product={product} />)
                })}
            </div>
          
        </div>
    )
}

export default ProductCards;
