/*Menu de navegación para version no movil*/

function navSection(nav)
{
    var Sections = new Array(5);
            Sections[0] = "Inicio";
    	    Sections[1] = "Conocenos";
    	    Sections[2] = "Trabajos";
    	    Sections[3] = "Portafolio";
    	    Sections[4] = "Concacto";

    var ver;
    var buscar;
    var bkgr_body;
    var bkgr_menu;

    for (var i=0; i<5; i++)
    {
      buscar = document.getElementById(Sections[i]);
      buscar.style.display = "none";

	      if ( Sections[i] == nav)
	      {
	        buscar.style.display = "block";
	            if(Sections[i] == "Inicio")
                {
	            	bkgr_body = "#395B81";
	            	bkgr_menu = "#395B81";

                 }

	            else
	            {
	            	bkgr_body = "#D4D4D4";
	            	bkgr_menu = "#3E3E3E";
	            }
	             buscar.style.background = bkgr_body;
	             menu = document.getElementsByTagName("header")[0];
	             menu.style.background = bkgr_menu; 
  
	        
	        
	       
	      }
    } 
}
