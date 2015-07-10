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
function e(nodeType, text, attributes, styles, selector){
    var element = document.createElement(nodeType);
        element.textContent = text;
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
    var container = document.querySelector(selector);
    if(container){
        container.appendChild(element);
    }
    return element;
}
for(i = 0; i < movies.length; i++){
    var li = e("li", movies[i][0], {}, {}, '#ul');
    li.addEventListener('click', function(){
        alert(this.textContent);
    });
}