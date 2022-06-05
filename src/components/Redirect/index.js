import React from "react";
import { Link } from "react-router-dom";

export const Redirect = (props) => {
    return(
        <>
            <Link to={props.href} className={props.class}>{props.text}</Link>
        </>
    );
}