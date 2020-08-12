$(document).ready(function(){ 
    $('.container').on('click','.change__Cancel',function(){
        $('#numberPhone').remove();
        $('.background').remove();
    })
    $('.changePhone__button').on('click', function(){
        $('<div/>', {
            class: 'change',
            id: 'numberPhone',
            append: $('<br>')
                 .add ($('<input>',{ id: 'numberPhone__input',class:'change__input',placeholder: "Номер Телефона" }))
                 .add ($('<div/>',{ class:'change__Cancel button',text: "Отмена" }))
                 .add ($('<div/>',{ id: 'numberPhone__Save',class:'change__Save button',text: "Сохранить"}))
          }).appendTo('.container');
          $('<div/>', {class: 'background'}).appendTo('body');
    });
    $('.container').on('click','#numberPhone__Save',function(){
        let numberPhone = $('#numberPhone__input').val();
        console.log(numberPhone);
        $.ajax({ 
            url: "https://canteenbobrova.glitch.me/api/v1/users/change/numberPhone", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {"numberPhone": numberPhone },
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
        $('#numberPhone').remove();
        $('.background').remove();
    })
})