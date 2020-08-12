$(document).ready(function(){ 
    $('.container').on('click','.change__Cancel',function(){
        $('#email').remove();
        $('.background').remove();
    })
    $('.changeEmail__button').on('click', function(){
        $('<div/>', {
            class: 'change',
            id: 'email',
            append: $('<br>')
                 .add ($('<input>',{ id:'email__input',class:'change__input',placeholder: "Введите email" }))
                 .add ($('<div/>',{ class:'change__Cancel button',text: "Отмена" }))
                 .add ($('<div/>',{ id:'email__Save', class:'change__Save button',text: "Сохранить"}))
          }).appendTo('.container');
          $('<div/>', {class: 'background'}).appendTo('body');
    });
    $('.container').on('click','#email__Save',function(){
        let email = $('#email__input').val();
        console.log(email);
        $.ajax({ 
            url: "https://canteenbobrova.glitch.me/api/v1/users/change/email", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {"email": email },
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
        $('#email').remove();
        $('.background').remove();
    })
})