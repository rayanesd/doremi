$(document).ready(function(){
  $(".menu1").mouseenter(function(){
    $(this).fadeTo("fast", 0.30);
  });
  $(".menu1").mouseleave(function(){
    $(this).fadeTo("fast", 100);
  });
});
