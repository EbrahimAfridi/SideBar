import React from "react";
import {SideBarData} from "./SideBarData";
import "../styles/App.css";

const SideBar = () => {
    return(
     <div className="Sidebar">
        <ul className="SideBarList">
            {SideBarData.map( (val, key) => {
                return(
                    <li
                    key={key}
                    onClick={()=>{window.location.pathname = val.link}}
                    className="row"
                    >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                )
            })}
        </ul>
     </div>
    );
}

export default SideBar;