//CV
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var nascMenu = document.getElementById("menu");

img.onclick = function(){
    //nascondi scroll
    document.body.style.overflow = "hidden";

    //nascondi menu
    nascMenu.style.top = "-100px";
    nascMenu.style.transition = "all 1.5s";

    modal.style.display = "block";
    modalImg.src = "assets/img/cv1.png";
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    //attiva scroll
    document.body.style.overflow = "visible";
    //mostra menu
    nascMenu.style.top = "0px";

    modal.style.display = "none";
}