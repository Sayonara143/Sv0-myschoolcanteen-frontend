$(document).ready(function(){ 
    $('.addUser').on('click', function() {
        window.location.href='../addUser/index.html' 
    })

    $('.history').on('click', function() {
        window.location.href='../history/index.html' 
    })
 
    $('.chart').on('click', function() {
        window.location.href='../chart/index.html' 
    })
    $('.students').on('click', function() {
        window.location.href='../student/index.html' 
    })
    
    $('.settings').on('click', function (){
        window.location.href = '../settings/index.html'
    });
})