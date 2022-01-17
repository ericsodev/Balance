import React, { Component } from "react";
import "./landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing flex flex-row items-stretch">
        <div className="flex flex-col justify-center flex-1">
          <div className="mx-auto">
            <text className="font-display font-semibold text-6xl text-accent-100">
              achieve
            </text>
            <text className="font-display font-bold text-9xl block text-white">
              Balance
            </text>
            <text className="block max-w-fit font-sans text-2xl text-accent-200 mt-5 ml-0.5">
              Track your expenses, budget your income and break those bad
              spending habits.{" "}
            </text>
          </div>
        </div>
        <div className="curves flex-1"></div>
      </div>
    );
  }
}
