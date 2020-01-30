var ename = "pikachu";
var elvl = 10;
var maxEHP = 100;
var EHP = 100; //enemy's health

var name = "pikachu";//this lets the player choose a custom name in the settings.
var lvl = 10;
var maxHP = 100;
var HP = 100; //players health

//var atck1 = [name, dmg, effect, life gian, max pp, current pp (how many times an attack can be used)]

var atck1 = [0]; //player attack info
var atck2 = [0];
var atck3 = [0];
var atck4 = [0];

var eatck1 = [0]; //enemy attack info
var eatck2 = [0]; 
var eatck3 = [0]; 
var eatck4 = [0];



document.getElementById("ename").innerHTML = ename;
document.getElementById("elvl").innerHTML = elvl;

document.getElementById("name").innerHTML = name;
document.getElementById("lvl").innerHTML = lvl;
document.getElementById("hp").innerHTML = hp + " / " maxHP;
