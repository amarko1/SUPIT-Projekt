window.addEventListener('load', function() {
    document.querySelector('#header').classList.add('loaded');
});
  
window.addEventListener('load', function() {
    var content = document.getElementById('content');
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  });
  
  window.addEventListener('load', function() {
    var content = document.getElementById('vrijednosti');
    content.style.opacity = '1';
  });
  
  // window.addEventListener('click', function() {
  //   var content = document.getElementById('nasaPovijest');
  //   content.style.opacity = '1';
  // });

  // const elementZaAnimaciju = document.querySelector('#nasaPovijest');
  // const opcijeZaPromatranje = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5
  // };
  
  // function animirajElement(entries, observer) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       elementZaAnimaciju.style.opacity = '1';
  //     }
  //   });
  // }
  
  // const observer = new IntersectionObserver(animirajElement, opcijeZaPromatranje);
  // observer.observe(elementZaAnimaciju);
  // window.removeEventListener('scroll', animirajElement);
  