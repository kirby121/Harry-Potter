function cambiar() {
  document.querySelector("#primero").classList.add("desaparecer");
  document.querySelector("#segundo").classList.remove("aparecer");
}
const $etiquetaVideo = document.createElement("video");
function abrirVideo(video = undefined) {
  if(video === undefined){
    alert("Por lo visto el video aún no se encuentra disponible o ha ocurrido algún error, trabajaremos para hacer el video o resolver el problema UwU");
  }
  else{
    document.querySelector("#segundo").classList.add("aparecer");
    $etiquetaVideo.setAttribute("src" , video);
    $etiquetaVideo.setAttribute("controls" , true);
    $etiquetaVideo.setAttribute("preload" , true);
    $etiquetaVideo.setAttribute("autoplay" , true);
    $etiquetaVideo.classList.add("videoCargado");
    document.body.appendChild($etiquetaVideo);
  }
}