import React, { Component } from "react";
import { Button } from "../../components/components";
import "./landing.css";
import underCurve from "./Under.svg";
import overCurve from "./Over.svg";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing flex flex-row items-stretch">
        <div className="flex flex-col justify-center flex-1">
          <div className="mx-auto select-none">
            <text className="font-display font-semibold text-6xl text-accent-100">
              achieve
            </text>
            <text className="font-display font-bold text-9xl block text-white">
              Balance
            </text>
            <text className="block tagline font-sans text-2xl text-accent-200 mt-3 ml-0.5">
              Track your expenses, budget your income and break those pesky
              spending habits.
            </text>
            <Button
              text="Start Now"
              tooltip="Create a personalized plan"
              onClick={() => {
                console.log("click");
              }}
            ></Button>
          </div>
        </div>
        <div className="curves flex-1 relative">
          <img
            src={underCurve}
            alt=""
            className="absolute top-0 h-screen right-0 w-3/4 select-none"
            draggable="false"
          ></img>
          <img
            src={overCurve}
            alt=""
            className="absolute top-0 h-screen right-0 w-1/2 select-none"
            draggable="false"
          ></img>
        </div>
      </div>
    );
  }
}
