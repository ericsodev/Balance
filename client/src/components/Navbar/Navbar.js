import { useState } from "react";

export default function Nav(props) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div onClick={() => setExpanded(false)} className={`inline-block min-w-fit w-24 h-screen drop-shadow-2xl bg-slate-50`}></div>
    )
}

function iconList(props) {

}

function fullList() {
    return (
        <ul>
            <li>Settings</li>
            <li>Stock Simulator</li>
        </ul>
    )
}