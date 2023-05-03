// var slideIndex = 1;
// showSlides(slideIndex);

// function openModal() {
//   var modal = document.getElementById("myModal");
//   var img = document.getElementsByClassName("mySlides")[slideIndex-1];
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");
//   modal.style.display = "block";
//   modalImg.src = img.src;
//   captionText.innerHTML = img.alt;
//   modalImg.parentElement.style.display = "flex";
// }

// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

window.addEventListener('load', function() {
  var content = document.getElementById('content');
  content.style.opacity = '1';
  content.style.transform = 'translateY(0)';
});

window.addEventListener('load', function() {
  var content = document.getElementById('naslov');
  content.style.opacity = '1';
});

window.addEventListener('load', function() {
  var content = document.getElementById('fade1');
  content.style.opacity = '1';
});

