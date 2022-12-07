import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import './ProductCard.scss';

const ProductCard  = ({product}) => {
    
    const {id, title, price, inCart} = product;

    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');
    const [itemInCart, setItemInCart] = useState(false)
    const formattedPrice = `$${price}.00`;

    const handleAddToCart = (e) => {

        e.preventDefault();

        if(inCart){
            return;
        } else {
            setButtonText('Item In Cart')
            setLoading(true);
            setTimeout(function(){ setItemInCart(true); setLoading(false)}, 500)
        }
    }
    
    return (
       
            <div className="productCard">
                 <Link to={`/products/${id}`}>
                <div className="productCard__image">
                    <img 
                        src="https://images.dutchie.com/749b5083f43e25c1ff95278d91b289d9?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=175&w=175&q=75&dpr=1"
                        alt="A short description of the image."/>
                </div>
                    <div className="productCard__info">
                    <div className="productCard__title"> 
                        {title}
                    </div>
                    <div className="productCard__price">{formattedPrice}</div>
                    </div>
            <Button text={buttonText} loading={loading} onClick={handleAddToCart} />
            </Link>
        </div>
      
    )
}

export default ProductCard;

