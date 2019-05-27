/* global $ */
//check off specific todos by clicking
// have to use click on ul, so function will work on all
// added li's
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on trash can to delete todo
$("ul").on("click","span", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").on("keypress",function(e){
  // console.log("Key pressed!");
  if(e.which === 13){
    //grabbing new todo text from input
    var todoText = ($(this).val());
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});