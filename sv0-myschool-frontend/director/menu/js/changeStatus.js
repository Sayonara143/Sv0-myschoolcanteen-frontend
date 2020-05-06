$(document).ready(function(){ 
    let flag = 0;
    $(".left").on('click', function(){
        if(flag == 0){
            flag = !flag;
            $('.titleStatusOne').css('opacity', 0) ;
            $('.blockFree').css('opacity', 0);
            $('.buttonFreeSave').css('opacity',0) ;
            $('.titleStatusTwo').css('opacity', 1);
            $('.blockPay').css('opacity',1) ;
            $('.buttonPaySave').css('opacity',1) ;
            

        }
        else{
            flag = !flag;
            $('.titleStatusTwo').css('opacity', 0);
            $('.blockPay').css('opacity',0) ;
            $('.buttonPaySave').css('opacity',0) ;
            $('.titleStatusOne').css('opacity', 1) ;
            $('.blockFree').css('opacity', 1);
            $('.buttonFreeSave').css('opacity',1) ;
        }
    })
    $(".rigth").on('click', function(){
        if(flag == 0){
            flag = !flag;
            $('.titleStatusOne').css('opacity', 0) ;
            $('.blockFree').css('opacity', 0);
            $('.buttonFreeSave').css('opacity',0) ;
            $('.titleStatusTwo').css('opacity', 1);
            $('.blockPay').css('opacity', 1) ;
            $('.buttonPaySave').css('opacity',1) ;
        }
        else{
            flag = !flag;
            $('.titleStatusTwo').css('opacity',0);
            $('.blockPay').css('opacity', 0) ;
            $('.buttonPaySave').css('opacity',0) ;
            $('.titleStatusOne').css('opacity', 1) ;
            $('.blockFree').css('opacity', 1);
            $('.buttonFreeSave').css('opacity',1) ;
        }
    })
})