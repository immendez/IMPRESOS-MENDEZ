function SearchJobs(typeJob){

      var options = new Array(5);
      
      options[0] = "todos";
      options[1] = "offset";
      options[2] = "sublimación";
      options[3] = "Lonas";
      options[4] = "Más";
      options[5] = "tarjeta_barnizada";
/*
      for (var i = 0; i < 5; i++){
        
        element = document.getElementById(options[i]);
        element.style.color = "#24518C";
        element.style.background = "none";
      }


      element = document.getElementById("search_" + typeCourse);
      element.style.color = "#f7f7f7";
      element.style.background = "#24518C";
*/
      alljobs = document.getElementById("jobs");
      alljobs = alljobs.getElementsByTagName('article');


      for (i = 0; i < alljobs.length; i++){
        
        if (typeJob == alljobs[i].className.substring(0, typeJob.length))
          alljobs[i].style.display = "inline-block";
        else
          alljobs[i].style.display = "none";

        if (typeJob == "todos")          
          alljobs[i].style.display = "inline-block";
        if (typeJob == "offset")          
          alljobs[i].style.display = "inline-block";

      }

      categorias = document.getElementById("categorias");
      categorias = categorias.getElementsByTagName('h2');


      for (i = 0; i < categorias.length; i++){
          categorias[i].style.color = "black";
          categorias[i].style.background = "white";

          if (typeJob.toUpperCase() == categorias[i].innerText){
            categorias[i].style.color = "white";
            categorias[i].style.background = "#CB4724";
  
          }
      }
        
    }
    
