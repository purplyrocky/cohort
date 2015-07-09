//Start with your movie array of arrays.
//Convert each array in the movie array into a movie object using a constructor function
//Add a checkIn, checkOut and status functions to your Movie functions prototype
//The checkIn function should set the this.checkedIn property to true
//The checkOut function should set the this.checkedIn property to false
//The status function should look to see if that movie is checked in our out, and return a string stating it's status
//Create a loop that will run 5 times
//Inside the loop prompt the user for a movie title they would like to checkout checkin. (remember, you must spell it the same as in your array)
//Find the movie object with that title and call the the appropriate function.
//Finally log out the movie array and lets look at the status of each of those.
/*global prompt*/
//noprotect

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

function Movie(name, mins, yr){
  this.title = name;
  this.time = mins;
  this.year = yr;
}

Movie.prototype = {
  checkIn: function(){
    this.checkedIn = true;
  },
  checkOut: function() {
    this.checkedOut = false;
  },
  status: function status(){
    return this.checkedIn ? 'checked in' : 'checked out';
  } 
};

for(i = 0; i < movies.length; i++) {
  var movie = movies[i];
  movies[i] = new Movie(movie[0], movie[1], movie[2]);
}

for(j = 0; j < 5; j++){
  var userMovie = prompt('which movie would you like to check in or out?');
  
  for(i = 0; i < movies.length; i++) {
  var movie = movies[i];
    
  if(movie.title === userMovie) {
    
    if(movie.checkedIn){
      //call checkout
      movie.checkOut();
    } else {
      movie.checkIn();
    }
    break;
  }
 }
}

for(i = 0; i < movies.length; i++) {
  var movie = movies[i];
  console.log(movie.title + ' is ' + movie.status());
}