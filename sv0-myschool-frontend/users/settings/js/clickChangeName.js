$(document).ready(function(){ 
    $('.container').on('click','.change__Cancel',function(){
        $('#name').remove();
        $('.background').remove();
    })
    $('.changeName__button').on('click', function(){
        $('<div/>', {
            class: 'change',
            id: 'name',
            append: $('<br>')
                 .add ($('<input>',{ class:'change__input',placeholder: "Фамилия Имя Отчество" }))
                 .add ($('<div/>',{ class:'change__Cancel button',text: "Отмена" }))
                 .add ($('<div/>',{ class:'change__Save button',text: "Сохранить"}))
          }).appendTo('.container');
          $('<div/>', {class: 'background'}).appendTo('body');
    });
    $('.container').on('click','.change__Save',function(){
        let name = $('.change__input').val();
        console.log(name);
        $.ajax({ 
            url: "https://canteenbobrova.glitch.me/api/v1/users/change/name", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {"name": name },
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
        $('#name').remove();
        $('.background').remove();
    })
})