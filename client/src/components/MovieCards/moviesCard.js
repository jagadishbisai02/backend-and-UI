import "./moviesCard.css";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { movie } = props;

  return (
    <li className="movie-card">
      <Link to={`/movie/${movie.id}`} className="link-item">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.title}</p>
        <p>
          Rating: <span>{Math.round(movie.vote_average)}</span>
        </p>
      </Link>
    </li>
  );
}
