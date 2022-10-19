import React, {useState} from 'react';

import LoopIcon from '@mui/icons-material/Loop';

import './ProductCard.scss';

const ProductCard  = ({product}) => {
    
    const {id, title, price, inCart} = product;

    const [loading, setLoading] = useState(false);
    const [itemInCart, setItemInCart] = useState(false)
    const formattedPrice = `$${price}.00`;

    const handleAddToCart = (e) => {
        if(inCart){
            return;
        } else {
            setLoading(true);
            setTimeout(function(){ setItemInCart(true); setLoading(false)}, 500)
        }
    }
    
    return (
        <div className="productCard">
            <div className="productCard__image">
                <img 
                    // src="https://media2.fdncms.com/eastbayexpress/imager/u/zoom/4971745/legalize-ac04f79b8be81a15.jpg"
                    src="https://images.dutchie.com/749b5083f43e25c1ff95278d91b289d9?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=175&w=175&q=75&dpr=1"
                    alt="A short description of the image."/>
            </div>
                <div className="productCard__info">
                <div className="productCard__title"> 
                    {title}
                </div>
                <div className="productCard__price">{formattedPrice}</div>
                </div>
            <div 
                className="productCard__addToCart"
                onClick={handleAddToCart}
                id={id}
            >
                {!itemInCart && !loading && 'Add To Cart'}
                {!itemInCart && loading && <LoopIcon className="loader" fontSize='small' />}
                {itemInCart && 'View Cart'}
            </div> 
        </div>
    )
}

export default ProductCard;

