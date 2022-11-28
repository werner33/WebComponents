import React, {useState, useEffect} from 'react';

import ProductCard from '../productCard/ProductCard';

import './ProductCards.scss';

const ProductCards  = ({title}) => {

    let [products, setProducts] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:9000/products';

        fetch(url)
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
