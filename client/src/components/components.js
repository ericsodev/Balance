import React from "react";
import { Link } from "react-router-dom";

export function Button(props) {
  return (
    <div onClick={props.onClick}>
      <Link to="/dashboard">
        <button to={props.link} className="peer button text-2xl mt-10 drop-shadow-md button bg-accent-100/80 inline-block rounded-lg px-10 py-2 hover:bg-accent-100/60 hover:rounded-md hover:drop-shadow-xl focus:bg-accent-100/40 focus:drop-shadow-2xl transition-all duration-100 ease-linear">
          <text className="font-sans text-slate-200 group-hover:text-slate-200 group-focus:text-slate-300/70">
            {props.text}
          </text>
        </button>
        <Tooltip tooltip={props.tooltip}></Tooltip>
      </Link>
    </div>
  );
}

export function Tooltip(props) {
  let origin = props.origin ? props.origin : "left"
  return (
    <span className={`inline-block text-sm m-5 bg-slate-800 text-slate-300 px-2.5 py-1.5 rounded-lg scale-0 peer-hover:scale-100 transition-all duration-75 origin-${origin}`}>
      {props.tooltip}
    </span>
  );
}

export function Card(props) {
  if (props.size === 'md') {
    return cardMedium(props)
  } else if (props.size === 'lg') {
    return cardLarge(props)
  }
}

function cardMedium(props) {
  console.log(props)
  const Indicator = props.indicator ? props.indicator.f : () => <></>
  const indiProps = props.indicator ? props.indicator.props : {};
  return (
    <span className="min-w-fit w-80 px-10 py-4 bg-slate-50 drop-shadow-xl inline-block rounded-xl mb-8 mr-8 last:ml-0">
      <text className="block font-sans font-semibold text-base text-slate-500" >{props.title.toUpperCase()}</text>
      <text className="inline-block font-sans font-medium text-5xl text-slate-800">{props.value}</text>
      <Indicator {...indiProps}></Indicator>
    </span>
  )
}

function cardLarge(props) {
  const Indicator = props.indicator ? props.indicator.f : () => <></>
  const indiProps = props.indicator ? props.indicator.props : {};
  return (
    <span className="text-center min-w-fit w-80 px-12 py-8 bg-slate-50 drop-shadow-xl inline-block rounded-xl mb-8 mr-8 last:ml-0">
      <text className="block font-sans font-semibold text-base text-slate-500" >{props.title.toUpperCase()}</text>
      <text className="block font-sans font-medium text-7xl text-slate-800 mb-5">{props.value}</text>
      <text className="block font-sans text-slate-500 italic">{props.description}</text>
      <Indicator {...indiProps}></Indicator>
    </span>
  )
}
