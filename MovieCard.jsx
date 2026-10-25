
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  } = useMovieContext();

  const saved = isInWatchlist(movie.id);

  const handleWatchlistToggle = () => {
    if (saved) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <div className="movie-card">
      {/* Keep your existing movie poster, title, and details here. */}

      <h3>{movie.title}</h3>

      <button
        type="button"
        className="watchlist-button"
        onClick={handleWatchlistToggle}
      >
        {saved ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </div>
  );
}

export default MovieCard;
