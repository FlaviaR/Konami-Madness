//This little js file will append images in random spots of a given div when the secret code is typed by the user. 
var secret = "7076658683"; //secret code -> flavs
var input = ""; //user input
var timer; 
var img = document.createElement("img");  //our image element
img.src = "imagens/secret/secret.png";
var randImg; //keeps track of the currently selected image
var randRot; //keeps track of the generated rotation
var randTop; //keeps track of the top pos
var randLeft; //keeps track of the left pos
var count = 0; //a counter used for the div ids
var debug = true;
var toPrint = "";

//Keeps track of user input
$(document).keyup(function(e) {
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 1000);
    
    check_input();
});

//generates random values
function randomize(){
    randImg = Math.round(Math.random()*6);
    randRot = Math.round(Math.random()*80);
    if (randRot % 2 == 0) randRot*=(-1);
    randLeft = Math.round(Math.random()*300);
    randTop = Math.round(Math.random()*150);
    if (debug) toPrint += "randLeft: " + randLeft + "\n";
    if (debug) toPrint += "randTop: " + randTop + "\n";
    if (debug) toPrint += "rotation: " + randRot + "\n";

}

//We add new images depending on the generated number
function checkResult(){
    if (randImg == 1) img.src = "imagens/secret/secret.png";
    if (randImg == 2) img.src = "imagens/secret/secret1.png";
    if (randImg == 3) img.src = "imagens/secret/secret2.png";
    if (randImg == 4) img.src = "imagens/secret/secret3.png";
    if (randImg == 5) img.src = "imagens/secret/secret4.png";
    if (randImg == 6) img.src = "imagens/secret/secret5.png";

}

//Creates a div to contain the image
//This div is then appended to the given div
function createDiv(toAppend){
    var div = document.createElement("div");
    $(div).attr('id', 'secret' + count);
    $(toAppend).append(div); //where we're appending our image to
    var id = $(div).attr('id');
    var divGrow = document.getElementById(id);
    divGrow.innerHTML = "<img src = '" + img.src + "'>";
    divGrow.style.marginLeft = randLeft+"px";
    divGrow.style.marginTop = randTop+"px";
    divGrow.style.WebkitTransform = "rotate("+randRot+"deg)";
    divGrow.style.zIndex = 10;
    divGrow.style.width = "1000px";
    if (randRot % 2 == 0) divGrow.style.textAlign = "center";
    else divGrow.style.textAlign = "left";
}

//If the user input is equal to our secret code, generate random values, and append our funky images
function check_input() {
    if(input == secret) {
        randomize();
        checkResult();
        count++;
        createDiv("#secretAppend"); //where to append images
        if (debug) alert (toPrint);
    }
}