import React from 'react';
import Banner from '../Components/Banner/Banner';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import Products from '../Components/Products/Products';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Products></Products>
      



            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;
