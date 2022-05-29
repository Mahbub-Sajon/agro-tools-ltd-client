import React from 'react';
import Banner from '../Components/Banner/Banner';
import BusinessSummary from '../Components/BusinessSummary/BusinessSummary';
import BuyNow from '../Components/BuyNow/BuyNow';
import CustomerReview from '../Components/CustomerReview/CustomerReview';
import Partners from '../Components/Partners/Partners';
import Products from '../Components/Products/Products';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Products></Products>

            <BusinessSummary></BusinessSummary>
            <BuyNow></BuyNow>

            <Partners></Partners>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;
