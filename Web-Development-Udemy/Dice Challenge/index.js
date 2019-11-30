function getRandomDice(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomSrc(){
    var randomNumber = getRandomDice(1,6);
    return "images/dice" + randomNumber + ".png";
}

var src1 = getRandomSrc();
var img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", src1);


var src2 = getRandomSrc();
var img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", src2);

var num1 = parseInt(src1.charAt(11));
var num2 = parseInt(src2.charAt(11));

console.log(num1)
console.log(num2)

var heading  = document.querySelector("h1");
if(num1 > num2){
    heading.innerHTML = "Player 1 win!";
}
else if(num2 > num1)
{
    heading.innerHTML = "Player 2 win!";
}
else
    {
        heading.innerHTML = "Draw!";
    }


