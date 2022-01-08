function borderImage(x) {
    x.style.border = "2px solid white";
} 

angular
.module('photoGalleryModule', [])
.controller('photoGalleryCtrl', function ($scope) {

var photoSource = [
                    ["https://i.ibb.co/DkJnj5P/doll.jpg","https://i.ibb.co/DkJnj5P/doll.jpg"],
                    [ "https://i.ibb.co/cw5Kr6g/doll1.jpg","https://i.ibb.co/cw5Kr6g/doll1.jpg"]                  
               ]; 

 var body = "<table width='100%' height='100%'>";

    var row=2;
    var col=2;     
    
     for(var i=0;i<row;i++){

         body += "<tr>";  

        for(var j=0;j<col;j++)
        {
        	
            body +="<td> <img width='100%' height='100px' id='"+i+j+"' src='" + photoSource[i][j] + "'onmouseover=borderImage(this);></td>";
        }
        body += "</tr>";
     }

     body += "</table>";

     console.log(body);

     $("#divPhoto").html(body);

      
    
});


