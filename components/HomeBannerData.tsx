"use client";

import React, { useEffect, useState } from "react";

const HomeBannerData = () => {
  const initialTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const initialDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const [time, setTime] = useState(initialTime);
  const [date, setDate] = useState(initialDate);

  //Update time and date
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentTime = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const currentDateFormatted = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      setTime(currentTime);
      setDate(currentDateFormatted);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
      <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal ">
        Upcoming Meeting at: 12:30 PM
      </h2>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
        <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
      </div>
    </div>
  );
};

export default HomeBannerData;
