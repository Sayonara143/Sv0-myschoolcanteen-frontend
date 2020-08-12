$(document).ready(function(){ 
    $('.students').hover( 
        function() {
            $('.studentsButton').css('opacity', 1) 
        },
        function() {
            $('.studentsButton').css('opacity', 0) 
        }
    )
    $('.history').hover( 
        function() {
            $('.historyButton').css('opacity', 1) 
        },
        function() {
            $('.historyButton').css('opacity', 0) 
        }
    )
    $('.chart').hover( 
        function() {
            $('.chartButton').css('opacity', 1) 
        },
        function() {
            $('.chartButton').css('opacity', 0) 
        }
    )
    $('.settings').hover( 
        function() {
            $('.settingsButton').css('opacity', 1) 
        },
        function() {
            $('.settingsButton').css('opacity', 0) 
        }
    )
    $('.out').hover( 
        function() {
            $('.outButton').css('opacity', 1) 
        },
        function() {
            $('.outButton').css('opacity', 0) 
        }
    )
})