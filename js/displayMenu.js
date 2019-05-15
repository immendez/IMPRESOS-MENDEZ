
    /*******************************************************************
    ********************************************************************
    ************Mostra & ocultar la card menu para movil****************
    ********************************************************************
    ********************************************************************/
    /*
	        alertSize();
  function alertSize() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
      //No-IE
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
      //IE 6+
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
      //IE 4 compatible
      myWidth = document.body.clientWidth;
      myHeight = document.body.clientHeight;
    }

    var menu = document.getElementById("card_menu");
    var display = menu.style.display;
    //alert(display)
    if (myWidth < 767){
      menu.style.display = "none"; //none
    }
    else{
      menu.style.display = "block";
      //if (display == "none" || display == "") menu.style.display = "none";
    }

  } 

  function changeProperty(elem, property, start, end){

  }
*/
  
function displayMenu(){
var display;
var card_menu = document.getElementById("card_menu");
display = card_menu.style.display;

if (display == "none" || display.length == 0) {
card_menu.style.display = "block";
} else {
card_menu.style.display = "none";
} 
}

