export default class Movie{
    constructor(id = 0, title, posterUrl, overview, release_date,
        genres = [], budget = 0, revenue = 0, runtime = 0, ){
        this.id = id;
        this.title = title;
        this.posterUrl = posterUrl;
        this.overview  = overview;
        this.release_date = release_date;
        this.genres = genres;
        this.budget = budget;
        this.revenue = revenue;
        this.runtime = runtime;
    }
}

