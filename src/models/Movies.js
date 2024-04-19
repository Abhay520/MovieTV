import Movie from './Movie.js'

export class Movies{
    static authorization_id = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWEzMWM5N2NlMDFlMjVmZTY0N2ZkMzhhMWY5NDlhYyIsInN1YiI6IjY2MjE2OGI4ZTY0MGQ2MDE4NmMzNzgxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCrdsDtkYT3K5l2DmWngmNIIiQd6ps5TDcisjJLDWa4';
    static showMovie = async(movieID) => {
        return await addMovie(this.movieList, this.authorization_id, movieID);
    }
    static showTrendingMoviesDay = async() => {
        return await getList('Movie','https://api.themoviedb.org/3/trending/movie/day',this.authorization_id);
    }
    static showTrendingMoviesWeek = async() => {
        return await getList('Movie','https://api.themoviedb.org/3/trending/movie/week', this.authorization_id);
    }
    static showTrendingTVSeriesDay = async() => {
        return await getList('TV','https://api.themoviedb.org/3/trending/tv/day', this.authorization_id);
    }
    static showTrendingTVSeriesWeek = async() => {
        return await getList('TV','https://api.themoviedb.org/3/trending/tv/week', this.authorization_id);
    }
}

const addMovie = async(_movieList, authorization_id, movieID) =>{
    const movieUrl = 'https://api.themoviedb.org/3/movie/' + movieID;

    const fetch = require('node-fetch');
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: authorization_id
        }
    };

    return fetch(movieUrl, options)
        .then(res => res.json())
        .then(json => {
            return new Movie(json.id, json.original_language, json.title, json.poster_path, json.overview, 
                                    json.release_date,json.genres, json.popularity);
            
        })
        .catch(err => console.error('error:' + err));

}

const getList = async(type, url, authorization_id,) => {

    const fetch = require('node-fetch');
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: authorization_id
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(json => {
            let results = json.results;
            let list = [];
            if(type === 'Movie'){
                for(let i = 0; i < results.length; i++){
                    let movie = new Movie(results[i].id, results[i].original_language, results[i].title,
                        'https://image.tmdb.org/t/p/w500/' + results[i].poster_path, results[i].overview, 
                        results[i].release_date,results[i].genre_ids, results[i].popularity);
                        list.push(movie);
                }
            }
            else if(type === 'TV'){
                for(let i = 0; i < results.length; i++){
                    let movie = new Movie(results[i].id, results[i].original_language, results[i].name,
                        'https://image.tmdb.org/t/p/w500/' + results[i].poster_path, results[i].overview, 
                        results[i].release_date,results[i].genre_ids, results[i].popularity);
                    list.push(movie);
                }
            }
            console.log(list);
            return list;
        })
        .catch(err => console.error('error:' + err));
}
