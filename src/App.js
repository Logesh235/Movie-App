import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import logo from './search.png'

const API_KEY_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=9777ebe8";
function App() {

  const [searchTerm,setSearchTerm] = useState("");
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    searchMovies("avengers");
  }, []);

  const searchMovies = async (title) =>{
      const response = await fetch(`${API_KEY_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
     
  }

  return (
    <div className="App">
      <h1>MovieSpace</h1>
      <div className='search-bar'>
        <input placeholder='Search Movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <img className='search-icon' src={logo} onClick={()=>searchMovies(searchTerm)} alt='search'/>
      </div>
        {movies?.length>0?(
          <div className='movies'>
              {movies.map((movie)=>(
                <MovieCard  movie={movie}/>
              ))}
          </div>
        ):(
          <div>
              <h3>No Movies Found</h3>
          </div>
        )}
    </div>
  );
}

export default App;
