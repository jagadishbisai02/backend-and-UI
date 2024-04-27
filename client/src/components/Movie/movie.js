import { useState, useEffect, useContext } from "react";
import MovieCard from "../MovieCards/moviesCard";
import { InfinitySpin } from "react-loader-spinner";
import { SearchContext } from "../../context/context";
import "./movie.css";

const apiStatusConstant = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Movie = () => {
  const { search } = useContext(SearchContext);
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstant.initial,
    movieList: null,
    errorMsg: null,
  });

  useEffect(() => {
    const getMovies = async () => {
      setApiResponse({
        status: apiStatusConstant.inProgress,
        movieList: null,
        errorMsg: null,
      });

      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTVmMzFlNmExMTc2NDhkOWE1MDI5YTgxMGY3NjZlNSIsInN1YiI6IjY2MTNlZDQ3NmM4NDkyMDE4NWZkMTAwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KXItvH5k1r8EYUI05dihA5Ry07BKi-QM2_infiYzgXI",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstant.success,
          movieList: data.results,
        }));
      } else {
        setApiResponse((prev) => ({
          ...prev,
          status: apiStatusConstant.failure,
          errorMsg: data.error_msg,
        }));
      }
    };
    getMovies();
  }, []);

  const renderFailureView = () => {
    const { errorMsg } = apiResponse;
    return <p>{errorMsg}</p>;
  };

  const renderLoadingView = () => (
    <div className="loader-spinner-container">
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );

  const renderSuccess = () => {
    const { movieList } = apiResponse;

    return (
      <ul className="movie-card-container">
        {movieList.map((eachMovie) => (
          <MovieCard movie={eachMovie} key={eachMovie.id} />
        ))}
      </ul>
    );
  };

  const renderLeaderboard = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstant.inProgress:
        return renderLoadingView();
      case apiStatusConstant.success:
        return renderSuccess();
      case apiStatusConstant.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <>{renderLeaderboard()}</>;
};

export default Movie;
