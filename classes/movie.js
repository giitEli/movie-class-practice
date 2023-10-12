const Actor = require("./actor.js")

class Movie {
    constructor (title, duration, rating) {
        this.title = title
        this.duration = duration
        this.rating = rating
        this.cast = [];
    }
    isLong() {
        return this.duration > 150
    }
    updateRating(newRating) {
        if(typeof newRating !== "number"){
            throw new TypeError("Rating must be a number.")
        }
        this.rating = newRating
    }
    static actorInMovie(movie, actorName){
        let boolean = false;
        movie.cast.forEach(actor => {
            if(actor.name === actorName){
                boolean = true;
            }
        });
        return boolean;
    }
}



module.exports = Movie
