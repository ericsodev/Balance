import React from "react";
import "./components.css";

export function Button(props) {
  return (
    <div onClick={props.onClick}>
      <button className="group peer button text-2xl mt-10 drop-shadow-md button bg-accent-100/80 inline-block rounded-lg px-10 py-2 hover:bg-accent-100/60 hover:rounded-md hover:drop-shadow-xl focus:bg-accent-100/40 focus:drop-shadow-2xl transition-all duration-100 ease-linear">
        <text className="font-sans text-slate-200 group-hover:text-slate-200 group-focus:text-slate-300/70">
          {props.text}
        </text>
      </button>
      <Tooltip tooltip={props.tooltip}></Tooltip>
    </div>
  );
}

export function Tooltip(props) {
  return (
    <span className="inline-block text-sm ml-5 bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-lg scale-0 peer-hover:scale-100 transition-all duration-75 origin-left">
      {props.tooltip}
    </span>
  );
}
