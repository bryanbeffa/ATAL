var imageViewer = document.getElementById("imageViewer");
var menu = document.getElementById("menu");
var image = document.getElementById("imageView");

var isOpenViewer = false;

showGallery(0);

//metodo che serve a nascondere tutte le gallerie non selezionate
function showGallery(id){
    var gallerie = document.getElementsByClassName("gallery");

    for(var i = 0; i < gallerie.length; i++){
        gallerie[i].style.display = "none";
    }

    gallerie[id].style.display = "block";
}

//metodo che crea un'anteprima 
function viewImage(path, titolo){
    setImageViewerSize();

    //nascondo il menu 
    menu.style.display = "none";

    //mostro il viewer
    imageViewer.style.display = "block";

    //carico l'immagine
    image.src = path;


    //mostro l'immagine
    image.style.display = "block";

    //centro verticalmente l'immagine
    var imageHeight =  image.offsetHeight;
    var viewerHeight = imageViewer.offsetHeight;

    //setto il titlo dell'immagine
    document.getElementById("imageTitle").innerHTML = titolo;

    image.style.marginTop = ((viewerHeight-imageHeight)/2) + "px";

    isOpenViewer = true;
}

//funzione che setta la dimensione del viewer delle immagini
function setImageViewerSize(){
    var windowHeight = window.innerHeight;

    imageViewer.style.height = windowHeight + "px";

    //centro verticalmente l'immagine
    var imageHeight =  image.offsetHeight;
    var viewerHeight = imageViewer.offsetHeight;

    image.style.marginTop = ((viewerHeight-imageHeight)/2) + "px";

    if(!isOpenViewer){
        closeImageViewer();
    }
}

//funzione che chiude l'image viewer
function closeImageViewer(){
    //mostro il menu 
    menu.style.display = "block";

    //nascondo il viewer
    imageViewer.style.display = "none";

    isOpenViewer = false;
}

