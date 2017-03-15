'use strict';

$(document).ready(function () {
  window.mySwipwer = new Swiper('.swiper-container', {
    autoplay: 3000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    simulateTouch: false,
    onSlideChangeEnd: function () {
      $('body').css('background-color', $('.swiper-slide-active').css('background-color'));
    }
  });
// Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName('dropdown-content');
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function roomArrangement() {
    document.getElementById('myDropdown').classList.toggle('show');
}
