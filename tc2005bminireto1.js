function loadImage() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //   const img = document.createElement("img");
    //   // var resURL = xhttp.responseURL;
    //   // console.log(resURL)
    //   img.setAttribute("src", xhttp.responseURL);
    //   img.setAttribute("width", 896);
    //   img.setAttribute("height",504);
    //   img.setAttribute("alt", "DLS Formation");
    //   img.setAttribute("display", "block");
    //   img.setAttribute("margin-left", "auto");
    // //   img.margin-left = auto;

    //     // display: block;
    //     // margin-left: auto;
    //     // margin-right: auto;
    
  
    //   // img.src = xhttp.responseURL;
    //   document.getElementById("tacticsdiv").appendChild(img);


      const img = document.getElementById("formacionphoto");
      // var resURL = xhttp.responseURL;
      // console.log(resURL)
      img.setAttribute("src", xhttp.responseURL);
      img.setAttribute("width", 896);
      img.setAttribute("height",504);
      img.setAttribute("alt", "DLS Formation");
      img.setAttribute("display", "block");
      img.setAttribute("margin-left", "auto");
      img.setAttribute("margin-right", "auto");
    //   img.margin-left = auto;

        // display: block;
        // margin-left: auto;
        // margin-right: auto;
    
  
      // img.src = xhttp.responseURL;
    //   document.getElementById("tacticsdiv").appendChild(img);
      
    }
    xhttp.open("GET", "formacion.jpeg");
    // xhttp.responseType = "document"
    xhttp.send();
}