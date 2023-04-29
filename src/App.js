
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Main = () => {
  const [movie, setTitle] = useState ([]);

  const getRequest = async () => {
    const url = `http://www.omdbapi.com/?s=The Lord of the Rings&apikey=d3537f6c`
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setTitle(responseJson.Search)
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieList movie={movie} />
      </div>
    </div>
  );
}



const MovieList = (props) => {
  return (
    <div className='d-flex'>
      {props.movie.map((movie, index) => (
        <div className='image-container d-flex justify-content-start m-3' key={index}>
          <img src={movie.Poster} alt={movie.Title}></img>
        </div>
      ))}
    </div>
  );
}



function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
