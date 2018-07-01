// Select color input
let height,width,color,table,h1,h2;
//height=$("#inputHeight").val();
 //width=$("#inputWeight").val();
//table=$("#pixelCanvas");
	
// Select size input
$("#sizePicker").submit(function(event){
	//table.children().remove();
	height=$("#inputHeight").val();
 width=$("#inputWeight").val();
table=$("#pixelCanvas");
	
	event.preventDefault();
	
	
	makeGrid(height,width);
	
})


function makeGrid(h,w){
	
	$("tr").remove();
   for(let row=1; row<=h; row++){ 
   table.append("<tr id=rows" + row + "> </tr>");
       for(let col=1; col<=w; col++){
	   $("#rows" + row).append("<td> </td>");
	   
	   }
   }
   $("td").on('click', function(){
	  // event.preventDefault();
	   color=$("#colorPicker").val();
	   if($(this).attr("style")){
	   $(this).removeAttr("style")
	   }else{ 
	   $(this).attr( "style", "background-color:" + color)
	   }
   })
   
    
};
h1=$("h1");
h2=$("h2");
h1.css("color","purple");
h2.css('color',"purple");

	


 
console.log(height);
console.log(width);
console.log(table);
// When size is submitted by the user, call makeGrid()


	

// Your code goes here!


