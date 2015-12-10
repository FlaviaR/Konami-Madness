//This little js file will append images in random spots of a given div when the secret code is typed by the user. 
var secret = "7076658683"; //secret code -> flavs
var input = ""; //user input
var timer; 
var maintainDiv = 7000; //will maintain the div on the screen for 7000ms (default)

var img = document.createElement("img");  //our image element
img.src = "";

var randImg; //keeps track of the currently selected image
var randRot; //keeps track of the generated rotation
var randTop; //keeps track of the top pos
var randLeft; //keeps track of the left pos

var count = 0; //a counter used for the div ids
var imageList = []; //our image list -- contains paths

var debug = false;
var toPrint = "";

//Keeps track of user input
$(document).keyup(function(e) {
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    
    check_input();
});

//Change the default code
//@param code - a given string (caps lock)
function specifyCode(code){
    var codeUpper = code.toUpperCase(); //make the given code be upper case
    var str = "";
    for (i = 0; i < codeUpper.length; i++){
        str += codeUpper.charCodeAt(i);
    }
    secret = str;
}

//Add an image to the image array
//@param path - the images path
function addImages(path){
    imageList.push(path);
}

//Set how long the image will be animated 
//@param time - the desired amount of time in milliseconds
function setAnimationTime(time){
	maintainDiv = time;
}

//generates random values for the angle rotations and image position
function randomize(){
    randImg = Math.round(Math.random()*(imageList.length - 1)); 
    randRot = Math.round(Math.random()*80);
    if (randRot % 2 == 0) randRot*=(-1); //cw or ccw
    else if (randRot % 3 == 0) randRot = 0;
    randLeft = Math.round(Math.random()*window.innerWidth); //this also does some cool sizing
    randTop = Math.round(Math.random()*window.innerHeight);
    if (debug) toPrint += "randLeft: " + randLeft + "\n";
    if (debug) toPrint += "randTop: " + randTop + "\n";
    if (debug) toPrint += "rotation: " + randRot + "\n";

}

//We add new images depending on the generated number
function checkResult(){
    img.src = imageList[randImg];
}

//make a div dissapear after some time
function setTimer(id){
    setTimeout(function(){
        $('#'+id).fadeOut(); 
    }, maintainDiv); //we <3 jquery 
    
    setTimeout(function(){
        $('#'+id).remove();  //remove div after 8 seconds - has to be done after fadeout function
    }, (maintainDiv + 1000)); //we <3 jquery 
    
}


//perform random animations on a div
function animate(id){
    var rand = Math.round(Math.random()*3);
    if (rand == 1) document.getElementById(id).className = "bounce";
    else if (rand == 2) document.getElementById(id).className = "pulse";
    else document.getElementById(id).className = "shake";
}

//function timer(id){
//    alert(id);
//    setTimeout(function(){document.getElementById(id).style.display = "none";}, 1200);
//}

//Creates a div to contain the image
//This div is then appended to the div "toAppend"
function createDiv(toAppend){
    var id = 'secret' + count;
    var div = document.createElement("div");
    
    $(div).attr('id', id);
    $(toAppend).append(div); //where we're appending our image to
    
    var id = $(div).attr('id');
    var divGrow = document.getElementById(id);
    
    divGrow.innerHTML = "<img src = '" + img.src + "'>";
    divGrow.style.marginLeft = randLeft+"px";
    divGrow.style.marginTop = randTop+"px";
    
    animate(id);
    
    if (divGrow.className != "bounce") divGrow.style.WebkitTransform = "rotate("+randRot+"deg)";
    divGrow.style.zIndex = 10;
    if (randRot % 2 == 0 || randRot == 0) divGrow.style.textAlign = "center";
    else divGrow.style.textAlign = "right";
    divGrow.style.position = "fixed";
    
    setTimer(id);
}

//If the user input is equal to our secret code, generate random values, and append our funky images to our website
function check_input() {
    if(input == secret) {
        randomize();
        checkResult();
        count++;
        createDiv("#secretAppend"); //where to append images
        
        if (debug) alert (toPrint);
    }
}

$( document ).ready(function() { //Create a div to append the images to
        var div = document.createElement('div');
        div.id = 'secretAppend';
        div.className = 'secret';
        document.getElementsByTagName('body')[0].appendChild(div);
});
