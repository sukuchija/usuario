
function usuario(){
    var no="jhonatan";
    var con="12345";
    var usuario = document.getElementById("exampleInputEmail1").value;
    var contraseña = document.getElementById("exampleInputPassword1").value;
    if(no==usuario && con==contraseña){
        window.location.assign("pagina2.html")
    }
    

}