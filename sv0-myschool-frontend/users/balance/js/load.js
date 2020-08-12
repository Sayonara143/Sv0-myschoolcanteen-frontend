$(document).ready(function(){   
    let url_image;
    let url = "https://canteenbobrova.glitch.me/api/v1/users/getYourBalance";
    $.ajax({ 
        url: "https://canteenbobrova.glitch.me/api/v1/users/getYourBalance", 
        //dataType: "json", // Для использования JSON формата получаемых данных
       	method: "GET", // Что бы воспользоваться POST методом, меняем данную строку на POST   
        data: {},
        headers: {"Authorization" : "Authorization" +' '+ localStorage.accessToken},
        success: function (data){
            console.log(data);
            url_image = "https://canteenbobrova.glitch.me/"+ data.path;
            $(".balance__know").text("Баланс: " + data.balance);
            $(".nameUser").text(data.surname + "" + data.name);	
            $(".img__avatar").attr("src", url_image);   
        },
        error: function (jqXHR,  textStatus, errorThrown){
            if(jqXHR.status == 401){
                alert('Ваше сессия завершена');
                window.location.href = "../../authorization/index.html"
            }
            
        }
        
    });
    // create async function
//     const get =  async () => {
//         ////////////////////////////////////////////
//         ///////////////////////////////////////////////
//         //fetch settingi method, headers .....
//         // let responce перменная в которую мы сохраняем сам запрос и что с него придет при вызове запроса
//         let response = await fetch(url,
//             {
//                 method: 'GET',
//                 headers: 
//                         {"Authorization" : "Authorization" +' '+ localStorage.accessToken}
//             });
// //////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
//             //обработка responce 
//         if (response.ok) { // если HTTP-статус в диапазоне 200-299
//         // получаем тело ответа (см. про этот метод ниже)
//             let json = await response.json()
//             console.log(json)
//         } else {
//             alert("Ошибка HTTP: " + response.status);

//         }
//     }
//     //вызываю функцию 
//     get();
}); 