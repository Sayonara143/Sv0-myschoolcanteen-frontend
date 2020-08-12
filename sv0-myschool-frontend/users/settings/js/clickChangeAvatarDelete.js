$(document).ready(function(){ 

    $('.textDelete').on('click', function(){
        $.ajax({ 
            url: "https://canteenbobrova.glitch.me/api/v1/users/change/avatarDelete", 
            //dataType: "json", // Для использования JSON формата получаемых данных
            method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {},
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
