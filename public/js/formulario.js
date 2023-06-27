
$(document).ready(function(){

    $('#btn_enviar').click(function(){
     var name= $("#txt_nombre").val();
     var lastname= $("#txt_apellido").val();
     var email= $("#correoelectronico").val();

     var mensaje= 'Nombre: ' + name + '\nApellido: ' + lastname+ '\nCorreo: ' +email;
        alert(mensaje);
    });

});












