document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: '{CSS_PATH}',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
