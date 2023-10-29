import { useEffect, useState } from 'react';

const useOrderedProducts = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect( () => {
        fetch('https://agro-tools-ltd-server.vercel.app/ordered-products')
        .then(res => res.json())
        .then(data => setOrderedProducts(data))
    } , []);
    return [orderedProducts, setOrderedProducts]
};

export default useOrderedProducts;