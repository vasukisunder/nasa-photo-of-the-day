import React from "react";
import Text from "./Text";
import "./Main.css";

export default function Image(props) {
    return(
        <img src={props.imgUrl}></img>

    )
}