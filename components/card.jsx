import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card-image" src={props.image}/>
            <h3>VS. {props.team}</h3>
            <h4>{props.date}</h4>
            <a href={props.link} className="button">
                View Match!
            </a>
        </div>
    )
}

export default Card