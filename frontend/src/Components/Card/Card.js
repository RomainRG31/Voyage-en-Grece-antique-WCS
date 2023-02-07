import React from "react";

import "@/Components/Card/Card.css";

function Card({ name }) {

    return (
        <li className="Card">
            <p className="Card-titre">{name}</p>
        </li>
    );
}

export default Card;