export default class TVSeries{
    constructor(id = 0, name = "", posterUrl = "", overview = "", firstAirDate = "", 
        genres = [], numberOfEpisodes, numberOfSeasons, status){
        this.id = id;
        this.name = name;
        this.posterUrl = posterUrl;
        this.overview  = overview;
        this.firstAirDate = firstAirDate;
        this.genres = genres;
        this.numberOfEpisodes = numberOfEpisodes;
        this.numberOfSeasons = numberOfSeasons;
        this.status = status;
    }
}
