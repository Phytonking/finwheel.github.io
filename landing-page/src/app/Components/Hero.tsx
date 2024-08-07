import React from "react";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
//import Head from 'next/head';


const Hero: React.FC = () => {
  return (
    <section id="/" className="container mx-auto px-4 py-12 flex flex-col items-start text-start md:items-center md:text-center">
      <title>FinWheel - Automated Investment Manager</title>
      <Badge text="Have our AI take care of your finances" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 font-bold leading-tight mb-6 mt-6 max-w-4xl">
      Make your personal finances easier with{" "}
        <span className="text-blue-600 underline">A.I.</span>
      </h1>

      <p className="text-slate-600 text-base sm:text-lg font-medium mb-8 max-w-[400px] md:max-w-[500px]">
        Create a cohesive financial plan that is easy to execute, meeting all of your financial goals. 
      </p>

      <div className="flex flex-row gap-4">
        <a href="https://forms.gle/uiZ8UTxCteUf3bxR9" target="_blank">
          <Button
            text="Sign up for the Beta Release"
            variant="primary"
            size="medium"
            className="rounded-lg font-bold transition-colors hover:bg-teal-800 text-white"
          />
        </a>
        <a href="https://youtu.be/8n7I0BAk8Bo?si=sBTn0m5VqegY-u4P" target="_blank">
          <Button
            text="Watch Demo"
            variant="outline"
            size="medium"
            iconUrl="/playVector.svg"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;