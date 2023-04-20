"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Time = dynamic(() => import("./Time"), { ssr: false });

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:text-7xl h-screen w-screen flex justify-center items-center text-4xl">
      <Time time={time} />
    </div>
  );
};

export default Home;
