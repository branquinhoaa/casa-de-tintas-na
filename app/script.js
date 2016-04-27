$(window).resize(function(){
    
    var width = $(window).width();
    if (width < 500){
        $('#login').addClass('hide');
        $('#register').addClass('hide');
        $('#figures').removeClass('hide');
    } else {
        $('#login').removeClass('hide');
        $('#register').removeClass('hide');
        $('#figures').addClass('hide');
    }
});
