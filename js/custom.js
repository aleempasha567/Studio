$(document).ready(function() {
  $('#submitForm').on('click', function(e) {
    e.preventDefault();
    $('.form-content').hide();
    $('.sucess-content').show();
  })
});
