import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import MovieCard from "../../components/movie-card";
import "./style.css";
import useMoview from "../../hooks/useMovie";

const HomePage = () => {
  const {loading, result, nextPage} = useMoview()

  return (
    <div className="homepage-container">
      <section className="movies-container">
        <Grid container spacing={2}>
          {result.map((movie, index) => (
            <Grid key={`${movie.id} + ${index}`}>
              <MovieCard title={movie.title} imageURL={movie.poster_path} />
            </Grid>
          ))}
        </Grid>
        <Button
          disabled={loading}
          onClick={() => nextPage()}
          variant="contained"
        >
          Load More
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
