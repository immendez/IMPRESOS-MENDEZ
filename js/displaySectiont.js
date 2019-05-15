
    /*******************************************************************
    ********************************************************************
    **********controlador de Slider navegación en la pagina web*********
    ********************************************************************
    ********************************************************************/
     

    function displaySectiont(nav)
    {
    	/*Enlazado correctamente el js*/

    	/*alert("hola22")*/

    	var Sections = new Array(4);
    	    Sections[0] = "Inicio";
    	    Sections[1] = "Conocenos";
    	    Sections[2] = "Trabajos";
    	    Sections[3] = "Portafolio";
    	    Sections[4] = "Concacto";
    	    

    	    var ver=0;
            var buscar=0;
    	    var bkgr_body=0;
    	    var bkgr_menu=0;
            var menu=0;

    	    for(var i=0;i<5;i++)
    	    {/*
        if (document.getElementById("home").style.display == "block"){
          document.getElementById("home").style.display = "none";
        }
           */    
            buscar = document.getElementById(Sections[i]);
            //alert("buscando " + sections[i]);
            ver = buscar.style.display;
            //alert(show);

               if(buscar.style.display == "block")
               {
                //alert("section encontrada!!!");
               	buscar.style.display = "none";
	               	 if(nav == "next")
	               	 {
                      i++;
                      if (i > 4) i=0;
	               	 }
			               	 if (nav == "prev")
			               	 {
	                         i--;
	                         if (i< 0 ) i = 4;
			               	 }

			               	buscar = document.getElementById(Sections[i]);
			               	buscar.style.display = "block";
			               	break;
		               	               }
    	    }/*fin del for*/

            /*codigo para cambiar el menu*/
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

             
                
    }/*fin función displaySectiont color que se mantendra en podas las paginas menos en el inicio #0404B4*/
