var name = prompt("What is your name?");



$("h1").append(name + "'s To-Do List:");



// Check Off Specific Item By Clicking

$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");

});



// Click on X to delete Item

$("ul").on("click", "span", function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();

	});

	event.stopPropagation();

});



$("input[type='text']").keypress(function(event){

	if(event.which === 13){

		//grabbing new item text from input

		var todoText = $(this).val();

		$(this).val("");

		//create new li and add to ul

		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");

	}

});



$(".fa-plus").click(function(){

	$("input[type='text']").fadeToggle();

})

