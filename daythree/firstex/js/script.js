//Alter your original movies array, to be an array of arrays, where each array contains the title, running time, and year released
//Create a function that will accept three arguments - movie title, running time (in minutes), and year released.
//The function should take those arguments and return an object that has title, runningTime and year as keys.
//Loop over your movie array, and use the apply function to call your function, passing to it the current movie array you are on
//Stick the new object that your function returns into a new array
//Loop the new array and log the movie title, runningTime and year to the console.

var movies = [
	['Lion King', '89 min', '1994'],
	['Men in Black', '98 min', '1997'],
	['Harry Potter and the Prisoner of Azkaban', '142 min', '2004'],
	['Lilo and Stitch', '85 min', '2002'],
	['X-Men First Class', '132 min', '2011'],
	['Anchorman', '94 min', '2004'],
	['Hot Rod', '88 min', '2007'],
	['Bride Wars', '89 min', '2009'],
	['Princess Diaries', '115 min', '2001'],
	['Hellboy', '122 min', '2004']
];
var movieObjs = [];

function movieObjCreator(name, mins, yr) {
	movieObj = {title: name, time: mins, year: yr};
	return movieObj;
}

for(i = 0; i < movies.length; i++){
  var movie = movies[i];
  movieObjs.push(movieObjCreator.apply({}, movie));
}

for(i = 0; i < movies.length; i++){
  var movie = movieObjs[i];
  //console.log(movie.title, movie.time, movie.year);
}

//Refactor the previous movie example to also prompt the user for a movie title, and if it finds a matching
//title, alert something like "MovieTitle was released in movieYear" (substituting actual values for MovieTitle and movieYear).

var userMovie = prompt('pick a movie');
for(i = 0; i < movieObjs.length; i++){
  var movie = movieObjs[i];
  if(movie.title.toLowerCase() === userMovie.toLowerCase()) {
    alert(movie.title + ' has a running time of ' + movie.time + ' and was released in ' + movie.year);
  movieFound = true;
    break;
  }
}

if(!movieFound) {
  alert('could not find movie');
} else {
  movieFound = false;
}