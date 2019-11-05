
function collapseToggle(){
    $("nav .nav-main .nav-bottom .menu-btn").click(function(){
        $("nav .nav-menu").animate({
            width: 'toggle'
        });
    });
}

function defaultToggle(){
    $("nav .nav-menu").animate({
        width: 'toggle'
    });
}

$(document).ready(function(){
    defaultToggle();
    collapseToggle();
});