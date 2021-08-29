
import './App.css';
import MovieList from './components/MovieList';
function App() {
  return (
    <div className="App">
      <h2>Rate a couple movies for our survey</h2>
      <small>Once your done , feel free to check out some new upcoming movies at this link <a href="https://www.imdb.com/movies-coming-soon/?ref_=nv_mv_cs">IMDB</a> </small>
      <MovieList/>
    </div>
  );
}

export default App;
