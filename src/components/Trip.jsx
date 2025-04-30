import React from "react";
import { Link } from "react-router-dom";

export default function Trip({src, name}) {
    const pathName = name.replaceAll(" ", "-");

    return (
        <Link to={`/trips/${pathName}`} style={{ textDecoration: 'none', width: '18vw', height: '20vh' }}>
            <div id="trip">
                <img src={src} alt="" />
                <h1>{name}</h1>
            </div>
        </Link>
    )
}