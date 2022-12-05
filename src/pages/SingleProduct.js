import React, {useState, useEffect} from "react";

import { useParams } from "react-router-dom";

const SingleProduct = () => {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null)

  const fetchProduct = async () => {
    try {
        const response = await fetch(`http://localhost:9000/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
}

    useEffect(() => {
        fetchProduct()
    }, []);


    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
    <div style={{margin: "40px"}}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
    </div>
    )
}

export default SingleProduct;