let $ = require('jquery');
let handlebars = require('handlebars');
let puppyTemplate = require('./templates/puppy.hbs');

let puppies = [
  {name: 'Oscar', pic: 'http://68.media.tumblr.com/tumblr_lnv7t4syE31qb0fx9o1_500.jpg'},
  {name: 'Scooby', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbY4f4apAMR0k6JYx7_f9eVcYnimkJejkWdDDoPPgTfbOlX96j'},
  {name: 'Kepler', pic: 'http://darlingdapperdachshund.com/assets/images/kepler/9.jpg'},
  {name: 'Meril', pic: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjuuffPgs3VAhUD7mMKHZ0CCkwQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fvegefarm%2Fvegefarm-hipster-puppies%2F&psig=AFQjCNHb75Grxf8wAUIq-MECkeWKBWZTcA&ust=1502466661168860"},
  {name: 'Bobby', pic: "http://static.boredpanda.com/blog/wp-content/uploads/2016/02/toby-the-hipster-dog-5__880.jpg"}
];

let $container = $('.puppy-container');

puppies.forEach(function(puppy){
  let html = puppyTemplate(puppy);
  $container.append(html);
});
