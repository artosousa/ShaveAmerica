function PlaySound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

$(document).ready(function(){
  $('#randomize').show();
  $('#randomize li').each(function(){
      $(this).hide();
    });
    var min = 0;
    var max = $('#randomize li').length;
    var randomLi = Math.floor(Math.random() * (max - min)) + min;
    $('#randomize li').eq(randomLi).show(); 
  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i. test(navigator. userAgent) ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39";
    var eagleSound=document.getElementById('eagleSound');
    $('#code').show();
    $(document).keydown(function(e) {
      kkeys.push( e.keyCode );
      if ( kkeys.toString().indexOf( konami ) >= 0 ) {
        $(document).unbind('keydown',arguments.callee);
        // do something awesome
        

        $('#surprise').fadeIn(function(){
          $(this).animate({
            bottom : "0"
          }, 750, function(){
            $(this).animate({
              right: "2500"
            },2000, function(){
              $(this).css({
                'bottom': '-370px',
                'right': '0px'
              });
            });
          });
        });
        
      
      }

    });
    $(document).on('mousemove', function(e){
      $('#share').mouseenter(function(){
        $('#clippers').fadeOut();
      });
      $('#share').mouseleave(function(){
        $('#clippers').fadeIn();
      });

      $('#clippers').css({
         left:  e.pageX - 45,
         top:   e.pageY - 260
      });
      var halfWidth = $(document).width() / 2;
      var m_pos_x =  e.pageX;
      if(m_pos_x < halfWidth){
        $('#clippers').removeClass('rightSide').addClass('leftSide');
      }else{
        $('#clippers').removeClass('leftSide').addClass('rightSide');
      }
    });
    
  }else{
    // tasks to do if it is a Mobile Device.
    $('#code').hide();
    $('#clippers').hide();
    $('#forMobile').show();
    
  }
  $('#redux').eraser({
      size: 30,
      completeRatio: 0.65,
      completeFunction : function(){
        eagleSound.play();
        $('#surprise').fadeIn(100,function(){
          $(this).animate({
            bottom : "0"
          }, 750, function(){
            $(this).animate({
              right: "2500"
            },2000, function(){
              $(this).css({
                'bottom': '-370px',
                'right': '0px'
              });
            });
          });
        });
      }
    });
  function remove(event) {
    $("#redux").eraser('clear');
    event.preventDefault();
  }

  function reset(event) {
    $("#redux").eraser('reset');
    event.preventDefault();
  }

  $("#share").jsSocials({
    showLabel: true,
    showCount: false,
    shares: ["twitter", "facebook"]
      
  });
  //setInterval(function() { console.log("x= " + m_pos_x ); },3000);
});