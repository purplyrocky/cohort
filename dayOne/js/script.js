//Ask the user their name
//Ask the user their email
//Ask the user their favorite movie
//Assign all the values prompted for into an object
//Log the object to the console

var whoDat = prompt('enter your name'),
    yourEmail = prompt('enter your email'),
    yourMovie = prompt('enter your favorite movie'),
    disFoo = {
      name: whoDat,
      email: yourEmail,
      movie: yourMovie
    };
    console.log(disFoo);
	document.querySelector('.results').innerHTML = '<ul><li>' + disFoo.name + '</li>' +
													'<li>' + disFoo.email + '</li>' +
													'<li>' + disFoo.movie + '</li></ul>';