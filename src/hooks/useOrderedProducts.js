import { useEffect, useState } from 'react';

const useOrderedProducts = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect( () => {
        fetch('https://sheltered-basin-70963.herokuapp.com/ordered-products')
        .then(res => res.json())
        .then(data => setOrderedProducts(data))
    } , []);
    return [orderedProducts, setOrderedProducts]
};

export default useOrderedProducts;