document.body.style.backgroundColor = "red";
document.getElementById("hh1").style.backgroundColor = "blue";
document.body.style.fontFamily ="sans-serif";

document.getElementById("nickname").innerHTML = "nikkdj";
document.getElementById("favorites").innerHTML = "food";
document.getElementById("hometown").innerHTML = "cabuyao";


var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "white";
      items[i].className = 'listitem';
      items[i].style.color  = "red"; 
                                          }
 var pic = document.createElement('img');
    pic.src = 'yato.png';
    document.body.appendChild(pic);