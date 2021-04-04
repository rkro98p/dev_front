window.onload=lanzadera;

function lanzadera(){
    var element=document.getElementById("a_maq");
    var aux=null;
    for(var i=0;i<element.childNodes.length;i++){
        if(element.childNodes[i].className == "materia-info")
            aux=element.childNodes[i];
            break;
        }
    element.addEventListener('click',function(aux){
        console.log('hola');
        // if (aux)
    },false);

}