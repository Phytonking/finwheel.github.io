"use client";
import React from 'react';
import Button from './ui/Button';

const CTA = () => {
  const handleClick = () => {
    console.log("CTA Button Clicked!");
  };

  return (
    <div className="container mx-auto max-w-[1280px] bg-blue-50 py-10 mt-12 flex flex-col items-center px-8 sm:px-20 md:px-56">
      <div className="flex w-full flex-col gap-6 md:flex-row justify-between items-center md:ml-10">
        <h2 className="text-blue-600 text-2xl md:text-3xl font-bold leading-10">
          Sign up for the Beta Testing!
        </h2>
        <a href="https://forms.gle/AjQyY4srfNivnQPHA" target="_blank">
          <Button
            text="Sign up!"
            variant="cta"
            size="medium"
            className="rounded-lg font-bold"
            onClick={handleClick}
          />
        </a>
      </div>
    </div>
  );
};

export default CTA;
