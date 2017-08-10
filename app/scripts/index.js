let $ = require('jquery');
let handlebars = require('handlebars');
let puppyTemplate = require('./templates/puppy.hbs');

let puppies = [
  {name: 'Oscar', pic: 'http://68.media.tumblr.com/tumblr_lnv7t4syE31qb0fx9o1_500.jpg'},
  {name: 'Scooby', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbY4f4apAMR0k6JYx7_f9eVcYnimkJejkWdDDoPPgTfbOlX96j'}
];

let $container = $('.puppy-container');

puppies.forEach(function(puppy){
  let html = puppyTemplate(puppy);
  $container.append(html);
});
