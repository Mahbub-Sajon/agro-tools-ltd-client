import React from 'react';
import slider1 from '../../../images/Banner/slider-1.jpg'
import slider2 from '../../../images/Banner/slider-2.jpg'
import slider3 from '../../../images/Banner/slider-3.png'

const Banner = () => {


    return (

        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={slider1} alt='' class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={slider2} alt='' class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={slider3} alt='' class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
            </div>
        </div>


    )

};

export default Banner;