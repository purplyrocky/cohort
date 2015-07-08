//Start by creating an array of your top 10 favorite movies, the titles should be all lowercase
//Create a function called capitalize that will accept a string as an argument, capitalize that string, and return the capitalized value. Please consider edge cases.
//Create a loop that will loop over all movies in your movies array.
//Inside each loop, you should capitalize the movie name and set the value in the array.
//After the loop has been completed, log the movies to the console. The result should be that the first letter of each movie has been capitalized.

var movies = ['cannot', 'think', 'of', 'ten', 'movies', 'jaws', 'robocop', 'terminator', 'why', 'me'];

function capitalize(str){
	if(!str || typeof str !== "string") {
		return str;
	}else{
		return str[0].toUpperCase() + str.slice(1);
    
    }
}

for(var i = 0; i < movies.length; i++){
	var capMovies = movies[i].split(' ');
	for(var j = 0; j < capMovies.length; j++) {
	{
			capMovies[j] = capitalize(capMovies[j]);
		}
	}
	capMovies = capMovies.join(' ');
	movies[i] = capMovies;
}
console.log(movies);
document.querySelector('.results').innerHTML = '<p>' + movies + '</p>';