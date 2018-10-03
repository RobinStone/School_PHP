var index = 1;

var tmr = setInterval(function() {
    var mod = $('.slider-item').eq(index);
    
    for(var i=0;i<=3;i++){
        mod = $('.slider-item').eq(i);
    $(mod).removeClass('active');
    }
    
    mod = $('.slider-item').eq(index);
    $(mod).addClass('active');
    
    index++;
    if (index > 3) {index = 0;}
    console.log(index);
}, 6000);