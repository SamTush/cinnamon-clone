window.addEventListener('scroll', function() {
  var header = document.querySelector('nav');
  header.classList.toggle('scrolled', window.scrollY > 0);
});
