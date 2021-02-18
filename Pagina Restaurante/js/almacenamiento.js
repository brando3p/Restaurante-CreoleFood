var allDato=[];

//almacenamos en el array allDato los datos del localStorage.getItem("frm")
if(localStorage.getItem("frm")!=null){
allDato = JSON.parse(localStorage.getItem("frm"));
//mostramos los datos
mostrarDatos();
}
function guardarDatos(){
    //validamos que los campos esten llenos
    validarDatos();

    var datos=[];
    //agregando valores al arreglo
    datos.push(document.getElementById("fecha").value);
    datos.push(document.getElementById("hora").value);
    datos.push(document.getElementById("personas").value);    

    //almaceno el array datos dentro del array allDatos
    allDato.push(datos);
    
    /*pasamos el array alldatos a un arreglo que permite guardar
    en un arreglo JSON*/
    arjson=JSON.stringify(allDato);

    //guardamos los datos dentro del arreglo JSON
    localStorage.setItem("frm",arjson);
    
   
    mostrarDatos();
    //borramos lo datos de todo los campos
    limpiarDatos();
}

//funcion para ingresar los datos

//funcion para mostrar los datos
function mostrarDatos(){
    campos=JSON.parse(localStorage.getItem("frm"));

    //borramos todo los elementos con la clase trk
    $(".trx").remove();

        for(x=0;x<campos.length;x++){
$("#table").append("<tr class='trx'> <td>"+campos[x][0]+"</td> <td>"+campos[x][1]+"</td><td>"+campos[x][2]+"</td> ")
        }
}
//validamos los datos 
function validarDatos(){
    //todo los campos
    fecha=$("#fecha").val();
    hora=$("#hora").val();
    personas=$("#personas").val();

    //validacion fecha
    if(fecha.length<10){
        alert("Falta Fecha");
        return false;
    }
    //validamos hora
    if(hora.length<4){
        alert("Falta Hora")
        return false;
    }
    //validamos persona
    if(personas.length<1){
        alert("Falta numero de personas")
        return false;
    }
}
//borramos los datos
function limpiarDatos(){
    //igualamos los campos a vacio
    $("#fecha").val("");
    $("#hora").val("");
    $("#personas").val("");
}
function borrarDatos(){
   localStorage.removeItem("frm")
}