var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  " :inserta:, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


var insertX = ["Willy the Goblin"+"<img src='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'>", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen"+"<img src='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'>", "Disneyland", "the White House"];

var insertZ = ["spontaneously combusted"+"<img src='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'>", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
//  var aItem = randomValueFromArray(insertA);
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':inserta:', AItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('94 farenheit', temperature);
    var newStory = newStory.replace('300 pounds', weight);

  }

 
  // story.textContent = newStory;
  story.innerHTML = newStory;
  story.style.visibility = 'visible';
}


//geolocation//geolocation//

  if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

 //Where in the world are you? 
$('.randomize').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});

/* 
* Test Locations
* Austin lat/long: 30.2676,-97.74298
* Austin WOEID: 2357536
*/
$(document).ready(function() {
  loadWeather('Seattle',''); //@params location, woeid
});

function loadWeather(location) {
  $.simpleWeather({
    location: location,
    success: function(weather) {
       html = '<h2><i class="'+weather.code+'"></i> '+'</h2>';
      
      AItem = '<li class="currently">It was a '+weather.currently+' day in '+weather.city+', '+weather.region+'</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}



