window.addEventListener('load', function() {
  var divs = document.querySelectorAll('.img-hover');

  divs.forEach(function(div) {
    div.addEventListener('mouseover', function() {
      this.classList.add('hovered');
    });

    div.addEventListener('mouseout', function() {
      this.classList.remove('hovered');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toast = new bootstrap.Toast(document.querySelector('.toast'));
  toast.show();
});




