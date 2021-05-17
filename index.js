var x = Math.floor(Math.random()*6)+1;

var randomImageSource = "images/dice" + x + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var y = Math.floor(Math.random()*6)+1;

var randomImageSource1 = "images/dice" + y + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource1);

if (x>y) {
  document.querySelector("h1").innerHTML="Player1 is the winner";
}
else if (x<y) {
  document.querySelector("h1").innerHTML="Player2 is the winner";
}
else {
  document.querySelector("h1").innerHTML="Its a draw";
}
