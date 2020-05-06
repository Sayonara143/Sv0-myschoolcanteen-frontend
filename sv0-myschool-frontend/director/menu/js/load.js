$(document).ready(function(){   
    let url_image;
    $.ajax({ 
        url: "https://cooperative-universal-homegrown.glitch.me/api/v1/director/sync", // надо сделать запрос на получение всех админнов
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){  
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });
    $(".buttonSaveFree").on("click", function(){https://cooperative-universal-homegrown.glitch.me/api/v1/director/createCalendarFood
        $.ajax({ 
            url: "https://cooperative-universal-homegrown.glitch.me/api/v1/director/createCalendarFood", 
            //dataType: "json", // Для использования JSON формата получаемых данных
               method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
            data: {},
            headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
            success: function (data){  
            },
            error: function (jqXHR,  textStatus, errorThrown){
                if(jqXHR.status == 401){
                    alert('Ваше сессия завершена');
                    window.location.href = "../../authorization/index.html"
                }
                
            }
            
        });
    })

}); 