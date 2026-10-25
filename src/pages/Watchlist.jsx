
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useMovieContext();

  return (
    <main className="watchlist-page">
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>Your watchlist is empty. Add some movies to get started!</p>
      ) : (
        <div className="movie-grid">
          {watchlist.map((movie) => (
            <div key={movie.id} className="watchlist-item">
              <MovieCard movie={movie} />

              <button
                type="button"
                className="remove-watchlist-button"
                onClick={() => removeFromWatchlist(movie.id)}
              >
                Remove from Watchlist
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Watchlist;
