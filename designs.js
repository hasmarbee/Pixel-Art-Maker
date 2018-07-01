// declare yoour variables
let height,width,color,table,h1,h2;
 height=$('#inputHeight')
 width=$('#inputWeight')
 table=$('#pixelCanvas');
	
// Select size input

/*TODO: create an event listener that creates a table when the submit button is cicked */

// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit(function(event){

height=$('#inputHeight').val();

width=$('#inputWeight').val();
	
event.preventDefault();

makeGrid(height,width);

})


/* TODO: write a function called makeGrid,use a for loop to create a table*/

function makeGrid(h,w){
	
	$('tr').remove();
   for(let row=1; row<=h; row++){ 
   table.append('<tr id=rows' + row + '> </tr>');
       
	   for(let col=1; col<=w; col++){
	   $('#rows' + row).append('<td> </td>');
	   
	   }
   }
   // pick a color and make it the background a of a cell in the grid when clicked
   /* TODO: create an event listener that gives each cell a background when a co;or is picke and when the cell is clicked */
   
   $('td').on('click', function(){
	   color=$('#colorPicker').val();
	   if($(this).attr("style")){
	   $(this).removeAttr('style')
	   }else{ 
	   $(this).attr( 'style', 'background-color:' + color)
	   }
   })
   
};

// select 'h1'
h1=$('h1');

//select 'h2'

h2=$('h2');


h1.css('color','purple');

h2.css('color','purple');



 


