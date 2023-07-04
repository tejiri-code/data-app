import React from 'react';
import laptop from '../assets/laptop.jpg'
function Analytics() {
  return (
    <div className=' w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
<img classname='w-[500px] mx-auto my-4' src={laptop} alt="analytics"/>
      <div className='flex flex-col justify-center'>
        <p className='text-[#218b6a] font-bold'>DATA ANALYTICS DASHBOARD</p>
       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
       <p>Access historical stock prices and charts to analyze trends and make informed investment decisions.
        <br/> Explore a wide range of financial products, from stocks and bonds to cryptocurrencies and commodities.
         <br/>Connect with a community of like-minded investors to share ideas and insights.</p> 
        <button className='text-[#218b6a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
      </div>
      </div>
    </div>
  );
}

export default Analytics;
