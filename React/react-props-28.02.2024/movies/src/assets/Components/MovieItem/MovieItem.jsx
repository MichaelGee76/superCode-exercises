import "./MovieItem.css";

const MovieItem = (props) => {
    return (
        <div className="tile">
            <h2>{props.title}</h2>
            <h4>{props.year}</h4>
            <h3>{props.director}</h3>
            <p className="duration">{props.duration}</p>
            <p className="rating">{props.rate}</p>
            <p className="genre">{props.genre}</p>
        </div>
    );
};

export default MovieItem;
