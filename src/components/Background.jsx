import React from 'react';
export default function Background(){ return (
  <div className='fixed inset-0 -z-10'>
    <div className='w-full h-full bg-gradient-to-br from-[#060b25] via-[#0b1440] to-[#1b0440] animate-gradient' />
    <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-30 mix-blend-overlay'></div>
  </div>
)}