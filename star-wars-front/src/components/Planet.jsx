import React from "react";

export default function Planet(props) {
    return (
        <>
            <div className="card">
                <h2 className="card__title">{props.name}</h2>
                <p className="card__text">
                    Climate: <b>{props.climate}</b>
                </p>
                <p className="card__text">
                    Gravity: <b>{props.gravity}</b>
                </p>
                <p className="card__text">
                    Population: <b>{props.population}</b>
                </p>
                <p className="card__text">
                    Rotation period: <b>{props.rotation_period}</b>
                </p>
                <p className="card__text">
                    Terrain: <b>{props.terrain}</b>
                </p>
            </div>
        </>
    );
}
