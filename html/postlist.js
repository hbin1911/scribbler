var del = document.getElementById('deleteModal');

var delbtn1 = document.getElementsByClassName('left-btn')[0];

var delbtn2 = document.getElementsByClassName('right-btn')[0];

var clickbtn = document.getElementById('trash');
var clickbtn1 = document.getElementById('trash1');
var clickbtn2 = document.getElementById('trash2');
var clickbtn3 = document.getElementById('trash3');
var clickbtn4 = document.getElementById('trash4');

clickbtn.onclick = function(){
    del.style.display = "block";
}
delbtn2.onclick = function(){
    del.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == del) {
      del.style.display = "none";
    }
}
clickbtn1.onclick = function(){
    del.style.display = "block";
}
clickbtn2.onclick = function(){
    del.style.display = "block";
}
clickbtn3.onclick = function(){
    del.style.display = "block";
}
clickbtn4.onclick = function(){
    del.style.display = "block";
}

delbtn1.onclick = function(){
    if(element = document.getElementById("card1")){
        element.remove();
        del.style.display = "none";
    }
    else if(element = document.getElementById("card2")){
        element.remove();
        del.style.display = "none";
    }
    else if(element = document.getElementById("card3")){
        element.remove();
        del.style.display = "none";
    }
    else if(element = document.getElementById("card4")){
        element.remove();
        del.style.display = "none";
    }
    else if(element = document.getElementById("card5")){
        element.remove();
        del.style.display = "none";
    }
    else{
        del.style.display = "none";
    }
    
    
}


    
