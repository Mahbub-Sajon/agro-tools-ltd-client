import { useEffect, useState } from 'react';

const useOrderedProducts = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/ordered-products')
        .then(res => res.json())
        .then(data => setOrderedProducts(data))
    } , []);
    return [orderedProducts, setOrderedProducts]
};

export default useOrderedProducts;