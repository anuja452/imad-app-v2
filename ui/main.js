console.log('Loaded!');

var element= document.getElementById("main-txt");
element.innerHTML="new value";

var img = document.getElementById('img');
img.onclick = function() {
    img.style.marginLeft='100px';
};