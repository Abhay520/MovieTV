export default class Movie{
    constructor(id = 0, lang = "", title = "", posterUrl = "", overview = "", release_date = "", genre = [], popularity = 0){
        this.id = id;
        this.lang = lang;
        this.title = title;
        this.posterUrl = posterUrl;
        this.overview  = overview;
        this.release_date = release_date;
        this.genre = genre;
        this.popularity = popularity;
    }
}