import React from 'react';
import Products from '../Products/Products';
import BannerSlider from './BannerSlider';
import Support from './Support';

const Home = () => {
    return (
        <div>
            <BannerSlider/>
            <Support/>
            <Products/>
        </div>
    );
};

export default Home;