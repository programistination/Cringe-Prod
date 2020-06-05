var lastScrollTop = 0;
var header = document.getElementById('main-header');

window.addEventListener('scroll', function () {
   var scrollTop = this.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop) {
      header.style.top = '-100px';
   } else {
      header.style.top = '0';
      header.style.background = 'var(--links)';
      header.style.boxShadow = '0 0 10px -2px rgba(0,0,0,0.9)';
   }
   lastScrollTop = scrollTop;

   if (window.pageYOffset == 0) {
      header.style.background = 'none';
      header.style.boxShadow = 'none';
   }
});
