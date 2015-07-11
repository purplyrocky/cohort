///Add an empty ul element on your HTML page.
//Create a form in your HTML page with the following fields:
//Movie Title (text)
//Running Time (text, number)
//Year Released (text, number)
//Genre (radio)
//Description (textarea)

//Create a Movie constructor function with the following signature
//new Movies(movie, runtime, year, genre, desc)
function Movie(title, runtime, year, genres, desc) {
  this.title = title;
  this.runtime = runtime;
  this.year = year;
  this.genres = genres;
  this.desc = desc;
}
//Add the following functions to the Movie constructors prototype:
//runTHrs - Should return the running time in hours

//preview - Should return the first 50 characters of the desc followed by a "..."
Movie.prototype = {
	preview: function preview(){
		var preDesc = this.desc.slice(0, 50);
		return preDesc + "...";
	},
	timeHrs: function timeHrs(){
		var remainingMin = this.runtime % 60;
		var hrs = Math.floor(this.runtime / 60);
		return hrs + "hr " + remainingMin + "min";
	}
};


//Create a submit event listener on our form that will gather the form values, and create a new instance of the Movie constructor based on the values from our form.
document.querySelector('#btn').addEventListener('click', function(evt){
	var movieTitle = document.getElementById('title').value;
	var runTime = document.getElementById('time').value;
	var yr = document.getElementById('year').value;
	var genreInput = document.getElementsByName('genre');
	for(var i = 0; i < genreInput.length; i++){
		var genre = genreInput[i];
		if(genre.checked){
			genreInput = genre.value;
		}
	}
	var description = document.querySelector('#desc').value;	

	var movieIns = new Movie(movieTitle, runTime, yr, genreInput, description);

	console.log(movieIns);

	var li = e("li", movieIns.title + ' ' + movieIns.timeHrs(), {rel:movieIns.preview()}, {});
    var ul = document.getElementById("ul");
	ul.appendChild(li);


	li.addEventListener("click", function () {
		alert(this.getAttribute("rel"));

		evt.preventDefault();
	});

	evt.preventDefault();
});
//Create a new <li> element (remember our e function? might be handy here). Set the text of the li element to be the movie title.
function e(nodeType, text, attributes, styles){
    var element = document.createElement(nodeType);
        element.textContent = text || "";
    for(var attr in attributes){
        if(attributes.hasOwnProperty(attr)){
            element.setAttribute(attr, attributes[attr]);
        }   
    }
    for(var newStyle in styles){
        if(styles.hasOwnProperty(newStyle)){
            element.style[newStyle] = styles[newStyle];
        }
    }
    return element;
}
//Set a click event listener on our <li> elements, so that when we click on each one, it will alert the preview (remember, our Movie instance should have a preview function that returns the first 50 characters of the description).
//Append the li as a child of the ul we created in the first step.
//Click on the newly added li and make sure the proper movie description is alerted.
//Reset all the input values
//The goal here is to be able to add any number of movies, and with each addition the movie appears in the ul, and is clickable to view the preview.
