import React from "react";

import "@/Components/Card/Card.css";

function Card({ name }) {

    return (
        <li className="Card">
            <h2 className="Card-titre">{name}</h2>
        </li>
    );
}

export default Card;