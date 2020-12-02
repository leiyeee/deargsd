$('.soundbutton').on('mousedown', function () {     
    playWind();                                  //start wind sound
})
.on('mouseup', function () {                    
    stopWind();                                  //stops the wind sound
});


// my full functions to start and stop

function playWind () {                           //start wind audio
  $('#wind-sound')[0].volume = 0.7;
  $('#wind-sound')[0].load();
  $('#wind-sound')[0].play();
}
function stopWind () {                           //stop the wind audio
  $('#wind-sound')[0].pause();
  $('#wind-sound')[0].currentTime = 0;           //resets wind to zero/beginning
}