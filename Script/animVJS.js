window.addEventListener('scroll', function() {
  document.querySelectorAll('.descriptions__item').array.forEach(element => {
    let image = element.offsetTop;
    let topOfWindow = window.scrollTop;
    if (image < topOfWindow+200) {
      element.classList.add('ass');
    }
  });
});