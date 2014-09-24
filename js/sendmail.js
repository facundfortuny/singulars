(function(){
    $(".send_bttn").click(function() {
 
        var name = $(".name").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            subject = $(".subject").val();
            message = $(".message").val();
 
        if (name == "") {
            $(".name").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            return false;
        }else if(subject == ""){
            $(".subject").focus();
            return false;
        }else if(message == ""){
            $(".message").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'name='+ name + '&email=' + email + '&subject=' + subject + '&message=' + message;
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: datos,
                success: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '130px' }, 300);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '200px' }, 300);                 
                }
            });
            return false;
        }
 
    });
})();
