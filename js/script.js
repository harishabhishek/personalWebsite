var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

var scrollAmount = 50;

$(window).on('scroll', function(){

    if($(window).scrollTop()>=scrollAmount){
        $('#aboutMe').addClass('highlightIt');
    }
    else if($(window).scrollTop()<scrollAmount ){
      //  $('nav').addClass('top-bar');
        $('nav').removeClass('top-barS');
    }

});

function aboutMe(){
   var div =  $('#meMain');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}

function resume(){
    var div =  $('#resume');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}

function skills(){
    var div =  $('#skills');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}


function pastExp(){
    var div =  $('#experience');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}

function findMe(){
    var div =  $('#socialWrapper');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}

function contact(){
    var div =  $('#email');

    target_offset = div.offset();
    target_top = target_offset.top - 50 ;

    $('html, body').animate({scrollTop:target_top}, 500);

}

function backtotop(){
    $('html, body').animate({scrollTop:0}, 500);
}



