import React from 'react';

const Partners = () => {
    return (
        <div>
            <div>
                <h1 className=' text-center text-primary mt-10 text-3xl font-bold '>Our Partners</h1>
                <br />
               
            </div>

            

            <div className='flex  justify-between'>

            <div class="w-64 bg-green-200 relative group">
                <img src={`https://www.eastcoastgardencenter.com/components/com_rseventspro/assets/images/events/thumbs/250/9f7421065e2c0505e873b22f9612b7a2.png`} alt="" />
                <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">East Coast Garden center</div>
            </div>
            <div class="w-64 bg-green-200 relative group">
                <img className='mx-auto my-4' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DcX3XMMVoToJMKGjN4RGiap8og8Vgwkivw&usqp=CAU`} alt="" />
                <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">Loma Vista Nursery</div>
            </div>
            <div class="w-64 bg-green-200 relative group">
                <img className='mt-16 px-2' src={`https://portal.leaflandscapesupply.com/inet/styles/_blueberry/images/customer_logo.png`} alt="" />
                <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">Leaf Landscape Supply</div>
            </div>
            <div class="w-64 bg-green-200 relative group">
                <img className='mt-8 px-2' src={`https://www.penick.net/digging/images/2013_10_01_Vivero/Vivero_Growers_sign.JPG`} alt="" />
                <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">Vivero Growers</div>
            </div>
            <div class="w-64 bg-green-200 relative group">
                <img className='mx-auto my-4' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8gOrnJZBIvIYFR5XJHKG59K9w-XfgPvLWQ&usqp=CAU`} alt="" />
                <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl bg-gray-200 text-black font-semibold">Gingko Garden</div>
            </div>

            </div>
        </div>



    );
};

export default Partners;