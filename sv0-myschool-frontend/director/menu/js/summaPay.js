let one;
let two;
let three;
let four;
let five;
let six;
let summaText;
// 1920px
let one1920;
let two1920;
let three1920;
let four1920;
let five1920;
let six1920;
let summaText1920;
$(document).ready(function(){   
    
    $("#onePay").change( function (){
        summa();
    })
    $("#twoPay").change( function (){
        summa();
    })
    $("#threePay").change( function (){
        summa();
    })
    $("#fourPay").change( function (){
        summa();
    })
    $("#fivePay").change( function (){
        summa();
    })
    $("#sixPay").change( function (){
        summa();
    })
    // 1920px
    $("#onePay1920").change( function (){
        summa1920();
    })
    $("#twoPay1920").change( function (){
        summa1920();
    })
    $("#threePay1920").change( function (){
        summa1920();
    })
    $("#fourPay1920").change( function (){
        summa1920();
    })
    $("#fivePay1920").change( function (){
        summa1920();
    })
    $("#sixPay1920").change( function (){
        summa1920();
    })
    function summa(){
        // присваваем занчение перменным
        one = $('#onePay').val();
        two = $('#twoPay').val();
        three = $('#threePay').val();
        four = $('#fourPay').val();
        five = $('#fivePay').val();
        six = $('#sixPay').val();
        // переворачеваем каждую переменную , чтобы посчитать стоимость
        one = String(one).split("").reverse('').join('');
        one = one.split("/",1).join("");
        one = one.split("").reverse('').join("");

        two = String(two).split("").reverse('').join('');
        two = two.split("/",1).join("");
        two = two.split("").reverse('').join("");

        three = String(three).split("").reverse('').join('');
        three = three.split("/",1).join("");
        three = three.split("").reverse('').join("");

        four = String(four).split("").reverse('').join('');
        four = four.split("/",1).join("");
        four = four.split("").reverse('').join("");

        five = String(five).split("").reverse('').join('');
        five = five.split("/",1).join("");
        five = five.split("").reverse('').join("");

        six = String(six).split("").reverse('').join('');
        six = six.split("/",1).join("");
        six = six.split("").reverse('').join("");

        summaText = Number(one)+Number(two)+Number(three)+Number(four)+Number(five)+Number(six);
        $('#Payid').text(summaText + " руб");
    }
    function summa1920(){
        // присваваем занчение перменным
        one1920 = $('#onePay1920').val();
        two1920 = $('#twoPay1920').val();
        three1920 = $('#threePay1920').val();
        four1920 = $('#fourPay1920').val();
        five1920 = $('#fivePay1920').val();
        six1920 = $('#sixPay1920').val();
        // переворачеваем каждую переменную , чтобы посчитать стоимость
        one1920 = String(one1920).split("").reverse('').join('');
        one1920 = one1920.split("/",1).join("");
        one1920 = one1920.split("").reverse('').join("");

        two1920 = String(two1920).split("").reverse('').join('');
        two1920 = two1920.split("/",1).join("");
        two1920 = two1920.split("").reverse('').join("");

        three1920 = String(three1920).split("").reverse('').join('');
        three1920 = three1920.split("/",1).join("");
        three1920 = three1920.split("").reverse('').join("");

        four1920 = String(four1920).split("").reverse('').join('');
        four1920 = four1920.split("/",1).join("");
        four1920 = four1920.split("").reverse('').join("");

        five1920 = String(five1920).split("").reverse('').join('');
        five1920 = five1920.split("/",1).join("");
        five1920 = five1920.split("").reverse('').join("");

        six1920 = String(six1920).split("").reverse('').join('');
        six1920 = six1920.split("/",1).join("");
        six1920 = six1920.split("").reverse('').join("");

        summaText1920 = Number(one1920)+Number(two1920)+Number(three1920)+Number(four1920)+Number(five1920)+Number(six1920);
        $('#Payid1920').text(summaText1920 + " руб");
    }
 }); 