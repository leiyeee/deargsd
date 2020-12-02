$(function(){
        $('#music').hover(
            function() { 
                $(this).prev()[0].play()
            },
            function() { 
                $(this).prev()[0].pause()
            }
        )
    })