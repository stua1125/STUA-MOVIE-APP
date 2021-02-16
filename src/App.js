import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // async , await 으로 비동기 시
  // function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다.
  // await는 async 함수 안에서만 동작합니다.
  getMovies = async () => {
    // es6 표기방법
    const {
      data: {
        data: {movies}
      }
    }  = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    // console.log(movies.data.data.movies)
    console.log(movies)
    this.setState({movies, isLoading:false});

  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading 
    ? <div className="loader"> 
        <span className="loader__text">is loading...</span>
      </div>
    : (
      <div className="movies">
        {
          movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
            )
          )
        }
      </div>        
      
      )}
      </section>
    );
      }
    }



export default App;
