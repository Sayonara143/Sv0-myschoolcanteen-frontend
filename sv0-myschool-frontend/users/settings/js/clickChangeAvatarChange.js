$(document).ready(function(){ 
    let file;
    $('.container').on('click','.change__Cancel',function(){
        $('#avatar').remove();
        $('.background').remove();
    })
    $('.textUpdate').on('click', function(){
        $('<div/>', {
            class: 'change',
            id: 'avatar',
            append: $('<br>')
                 .add ($('<input>',{ type: 'file', name:"file",id: 'avatar__input', class:'change__input',placeholder: "Введите пароль" }))
                 .add ($('<div/>',{ class:'change__Cancel button',text: "Отмена" }))
                 .add ($('<div/>',{ id: 'avatar__Save',class:'change__Save button',text: "Сохранить"}))
          }).appendTo('.container');
          $('<div/>', {class: 'background'}).appendTo('body');
    });
    //$('input[type=file]').on('change',function(){
    $('.container').on('change','#avatar__input',function(){
        file = this.files;
        console.log(file[0])
    });
    $('.container').on('click','#avatar__Save',function(){
        let data = new FormData();
        data.append( 'file',file[0] );
        console.log(data)
    
        $.ajax({ 
            url: "https://canteenbobrova.glitch.me/api/v1/users/change/avatarChange", 
            dataType: "json", // Для использования JSON формата получаемых данных
            method: "POST", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: data,
            cache: false,
            processData: false, 
            contentType: false,
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
    })


})