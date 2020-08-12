$(document).ready(function(){ 
    let passwordOne ;
    let passwordTwo ;
    $('.container').on('click','.change__Cancel',function(){
        $('#password').remove();
        $('.background').remove();
    })
    $('.changePassword__button').on('click', function(){
        $('<div/>', {
            class: 'change',
            id: 'password',
            append: $('<br>')
                 .add ($('<input>',{ id: 'password__One__input', class:'change__One__input',placeholder: "Введите пароль" }))
                 .add ($('<div/>',{ class:'change__Cancel button',text: "Отмена" }))
                 .add ($('<input>',{ id: 'password__Two__input', class:'change__Two__input',placeholder: "Повторите пароль" }))
                 .add ($('<div/>',{ id: 'pasword__Save',class:'change__Save__password button',text: "Сохранить"}))
          }).appendTo('.container');
          $('<div/>', {class: 'background'}).appendTo('body');
    });
    $('.container').on('click','#pasword__Save',function(){
        passwordOne = $('#password__One__input').val();
        passwordTwo = $('#password__Two__input').val();
        console.log(passwordOne);
        console.log(passwordTwo);
        if(String(passwordOne) == String(passwordTwo)){
            $.ajax({ 
                url: "https://canteenbobrova.glitch.me/api/v1/users/change/password", 
                //dataType: "json", // Для использования JSON формата получаемых данных
                method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
                data: {"password": passwordTwo },
                headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
                success: function (data){
                    console.log(data);
                },
                error: function (jqXHR,  textStatus, errorThrown){
                    if(jqXHR.status == 401){
                        alert('Ваше сессия завершена');
                        window.location.href = "../../authorization/index.html"
                    }
                }
                
            });
            $('#password').remove();
            $('.background').remove();
        }
       
     })
})