import MovieItem from "../Components/MovieItem/MovieItem.jsx";
import "./Home.css";
import movies from "./movies.js";

const Home = () => {
    return (
        <div className="container">
            {movies.map((movie, key) => {
                return <MovieItem key={key} title={movie.title} year={movie.year} director={movie.director} duration={movie.duration} rate={Math.round(movie.rate)} genre={movie.genre.join()} />;
            })}
        </div>
    );
};

export default Home;
