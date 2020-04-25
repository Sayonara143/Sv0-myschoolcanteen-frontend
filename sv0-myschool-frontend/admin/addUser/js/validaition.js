
function validPassword(boolean){  
    let password1 = $('.password1').val();
    let password2 = $('.password2').val();
    boolean = true
    if(!(password1 == password2)){
        boolean = false;
        alert('Пароли не совпадают')
    }
    return boolean;
   
}
function validPasswordLenght(boolean){  
    let password1 = $('.password1').val();
    boolean = true
    if(!(password1.length>8)){
        boolean = false;
        alert('Пароль короткий')
    }
    return boolean;
   
}
let surname = $('.surname').val();
let name = $('.name').val();
let patronymic = $('.patronimyc').val();
let login = $('.login').val();
let numberPhone = $('.numberPhone').val();
function validDataLenght(boolean){  
    let s = 1<($('.surname').val())
    let n = 1<$('.name').val();
    let p = 1<$('.patronimyc').val();
    let l = 1<$('.login').val();
    let nP = 11<$('.numberPhone').val();
    boolean = true
    if(!(s&n&p&l&nP)){
        boolean = false;
        alert('Данные введены непрваильно')
    }
    return boolean;
   
}
 export{
    validPassword,
    validPasswordLenght,
    validDataLenght
 }