var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var xImage = document.getElementById('x');
var yImage = document.getElementById('y');
var zImage = document.getElementById('z');
//var myImage = document.querySelector('img');
//var yImage = document.getElementById('#y');
//var zImage = document.getElementById('#z');
//var mySrc = myImage.getAttribute('src');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length)
  return array[random];
}
 
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText; 
  var xItem = randomValueFromArray(insertX); 
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
 
  newStory = newStory.replace(':insertx:',xItem); 
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
	
	//X images
	if(xItem == 'Willy the Goblin'){
  xImage.setAttribute ('src','http://www.boardgamegoblin.com/Goblin-1.JPG');
	}else if(xItem == 'Big Daddy'){
  xImage.setAttribute ('src','https://image.spreadshirtmedia.com/image-server/v1/compositions/1013041260/views/1,width=300,height=300,appearanceId=2,backgroundColor=E8E8E8,version=1485256808/big-daddy-the-man-the-myth-the-legend-t-shirt-t-shirts-men-s-t-shirt.jpg');
	}else {
  xImage.setAttribute ('src','https://cdn2.newsok.biz/cache/r960-799265e8038f1d9e4a53682251fd4087.jpg');
	}
	
	//Y images
	if(yItem == 'the soup kitchen'){
  yImage.setAttribute ('src','http://s2.quickmeme.com/img/ea/ea272215b3167e83b12f3ddf092518da28a2c6e61ff79ed8b6623958afef28be.jpg');
	}else if(yItem == 'Disneyland'){
  yImage.setAttribute ('src','http://weknowmemes.com/wp-content/uploads/2013/11/chloe-meme-6.jpg');
	}else {
  yImage.setAttribute ('src','http://images.memes.com/meme/615128');
	}
    
//Z images
	if(zItem == 'spontaneously combusted'){
  zImage.setAttribute ('src','https://img.memecdn.com/tards-grumpyness-causes-spontaneous-combustion_o_986649.webp');
	}else if(zItem == 'melted into a puddle on the sidewalk'){
  zImage.setAttribute ('src','http://images.guff.com/gallery/image//summer-heat-waves-hilarious-melting-ice-cream');
	}else {
  zImage.setAttribute ('src','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrNi4UfdLq3YzZCoG5K1_870iSAZDGADDXEn7CMPugh5YLQo_IUuRcGQ');
	}    
	
	
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name); 
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone'; 
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature); 
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory; 
  story.style.visibility = 'visible';
}




/*var myImage = document.querySelector('img');

randomize.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(xItem === 'Willy the Goblin') {
      myImage.setAttribute ('src','http://www.boardgamegoblin.com/Goblin-1.JPG');
    } else {
      myImage.setAttribute ('src','https://www.thesun.co.uk/wp-content/uploads/2016/04/1876477.main_image.jpg?w=620&strip=all');
    }
}



var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','http://www.boardgamegoblin.com/Goblin-1.JPG');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
//clear(localStorage);
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}*/	
	
	
	