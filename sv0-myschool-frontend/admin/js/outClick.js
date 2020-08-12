$(document).ready(function(){
    $(".out").on("click",function (){
        $('.modal').css('display', "block"); 
        $('.modal-overlay').css('display', "block"); 
    })
    $(".buttonFalse").on("click",function (){
        $('.modal').css('display', "none"); 
        $('.modal-overlay').css('display', "none"); 
    })
    $(".buttonTrue").on("click",function (){
        //ajax delete refresh and accessToken
       localStorage.accessToken = '';
       localStorage.refreshToken = '';
       window.location = "../../authorization/index.html";

    })
});