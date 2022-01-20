import { Tooltip } from "./Components"

export function Change(props) {
    const bgColor = props.change >= 0 ? "bg-emerald-200" : "bg-red-300"
    const fgColor = props.change >= 0 ? "text-emerald-700" : "text-red-700"
    return (
        <div className={`${bgColor} ml-3 px-3 min-w-fit w-16 inline-block rounded-lg align-middle text-center`}>
            <text className={`${fgColor} font-sans text-xs font-medium`}>{props.change >= 0 ? "+" : "-"}{Math.abs(props.change)}{props.unit}</text>
        </div>
    )
}

export function Progress(props) {
    const fgColor = props.fg ? props.fg : "bg-accent-100"
    const bgColor = props.bg ? props.bg : "bg-gray-600"


    return (
        <div className={`${bgColor} block rounded-xl h-3.5 min-h-fit`}>
            <div className={`peer block ${fgColor} h-full rounded-xl`} style={{ width: Math.round(100 * props.value / props.max) + "%" }}></div>
            <Tooltip tooltip={`${props.value}/${props.max}`} origin="top"></Tooltip>
        </div >
    )
}