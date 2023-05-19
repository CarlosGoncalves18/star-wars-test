import React from "react";

export default function Starship(props) {
    return (
        <>
            <div className="card">
                <h2 className="card__title">{props.name}</h2>
                <p className="card__text">
                    Manufacturer: <b>{props.manufacturer}</b>
                </p>
                <p className="card__text">
                    Consumables: <b>{props.consumables}</b>
                </p>
                <p className="card__text">
                    Hyperdrive rating: <b>{props.hyperdrive_rating} cm</b>
                </p>
                <p className="card__text">
                    Passengers: <b>{props.passengers} kg</b>
                </p>
                <p className="card__text">
                    Max speed: <b>{props.max_atmosphering_speed}</b>
                </p>
                <p className="card__text">
                    Hyperdrive rating: <b>{props.hyperdrive_rating}</b>
                </p>
            </div>
        </>
    );
}
