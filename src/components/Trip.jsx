import React from "react";
import { Link } from "react-router-dom";

export default function Trip({src, name}) {
    const pathName = name.replaceAll(" ", "-");
    let newName = name

    if (name === "Japan 2024-25") {
        newName = "Japan 2024/25";
    }

    return (
        <Link to={`/trips/${pathName}`} id="trip-container">
            <div id="trip">
                <img src={src} alt="" />
                <h1>{newName}</h1>
            </div>
        </Link>
    )
}