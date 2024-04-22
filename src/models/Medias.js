import Movie from './Movie.js'
import TVSeries from './TVSeries.js';
import Media from './Media.js';

export class Medias{
    static authorization_id = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWEzMWM5N2NlMDFlMjVmZTY0N2ZkMzhhMWY5NDlhYyIsInN1YiI6IjY2MjE2OGI4ZTY0MGQ2MDE4NmMzNzgxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCrdsDtkYT3K5l2DmWngmNIIiQd6ps5TDcisjJLDWa4';
    static showMovie = async(id) => {
        return await getInfo('Movie', this.authorization_id, id);
    }
    static showTVSeries = async(id) => {
        return await getInfo('TV', this.authorization_id, id);
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
    static showHighestRatedMovies = async() => {
        return await getList('Movie','https://api.themoviedb.org/3/movie/top_rated', this.authorization_id);
    }
    static showHighestRatedTVSeries = async() => {
        return await getList('TV','https://api.themoviedb.org/3/tv/top_rated', this.authorization_id);
    }
    static showMostPopularMovies = async() => {
        return await getList('Movie','https://api.themoviedb.org/3/movie/popular', this.authorization_id);
    }
    static showMostPopularTVSeries = async() => {
        return await getList('TV','https://api.themoviedb.org/3/tv/popular', this.authorization_id);
    }
}

const getInfo = async(type, authorization_id, id) =>{
    let url;
    if(type === 'Movie'){
        url = 'https://api.themoviedb.org/3/movie/' + id;
    }
    else if(type === 'TV'){
        url = 'https://api.themoviedb.org/3/tv/' + id;
    }

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
            let results = json;
            if(type === 'Movie'){
                console.log(results.genres);
                return new Movie(results.id, results.title,
                    'https://image.tmdb.org/t/p/w500/' + results.poster_path, results.overview, 
                    results.release_date,results.genres, results.budget, results.revenue, results.runtime);
            }
            else if(type === 'TV'){
                return new TVSeries(results.id, results.name,
                    'https://image.tmdb.org/t/p/w500/' + results.poster_path, results.overview, 
                    results.first_air_date,results.genres, results.number_of_episodes, 
                    results.number_of_seasons, results.status);
            }
        })
        .catch(err => console.error('error:' + err));

}

const getList = async(type, url, authorization_id) => {

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
                    let movie = new Media(results[i].id, results[i].title,
                        'https://image.tmdb.org/t/p/w500/' + results[i].poster_path, "Movie");
                        list.push(movie);
                }
            }
            else if(type === 'TV'){
                for(let i = 0; i < results.length; i++){
                    let movie = new Media(results[i].id, results[i].name,
                        'https://image.tmdb.org/t/p/w500/' + results[i].poster_path, "TV");
                    list.push(movie);
                }
            }
            console.log(list);
            return list;
        })
        .catch(err => console.error('error:' + err));
}
