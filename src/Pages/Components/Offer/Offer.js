import React from 'react';

const Offer = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl'>Use discount code <span className='font-bold text-blue-600 italic text-2xl'>SAVEAGRO</span> to get 15% off in your first order!</h2>
                <p>Don't run out of time to get the discount!</p>
            </div>
            <div>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{value:15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      {/* <span style="--value:10;"></span> */}
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      {/* <span style="--value:24;"></span> */}
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      {/* <span style="--value:40;"></span> */}
    </span>
    sec
  </div>
</div>
            </div>
        </div>
    );
};

export default Offer;