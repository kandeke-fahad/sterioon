

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxcyXWA5jhryVuOy2OJYLX3QRUEjQ1G4Bv95R3cw0YM7ZqK5AJUM-mby5eW5zf20mNyDg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML = "Message sent successfully"
setTimeout(function(){
    msg.innerHTML = ""
},5000)
form.reset()
})
.catch(error => console.error('Error!', error.message))
})




/* SLIDE SHOW */

let slideIndex = 1;
showSlides(slideIndex);

//nxt prev ctrls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail img ctrls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length){slideIndex = 1}
    if (n < 1){slideIndex = slides.length}

    for (i = 0; i < slides.length; i++ ){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
    captionText.innerHTML = dots[slideIndex - 1].alt;

    setTimeout(showSlides, 2000);
}