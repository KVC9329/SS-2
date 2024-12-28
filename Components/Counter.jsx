"use client"
import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="number py-5 text-white">
      <CountUp duration={3} className="counter" end={number} />%
      <span> {title}</span>
    </div>
  );
}