export default function Characters(props) {
    return (
        <>
            <div className="card">
                <h2 className="card__title">{props.name}</h2>
                <p className="card__text">
                    Birth year: <b>{props.birth_year}</b>
                </p>
                <p className="card__text">
                    Gender: <b>{props.gender}</b>
                </p>
                <p className="card__text">
                    Height: <b>{props.height} cm</b>
                </p>
                <p className="card__text">
                    Weight: <b>{props.mass} kg</b>
                </p>
                <p className="card__text">
                    Skin color: <b>{props.height}</b>
                </p>
                <p className="card__text">
                    Hair color: <b>{props.hair_color}</b>
                </p>
                <p className="card__text">
                    Eye color: <b>{props.eye_color}</b>
                </p>
            </div>
        </>
    );
}
