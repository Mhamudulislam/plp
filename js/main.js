
$(document).ready(function()
{

    // Curved_text
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });



    // text2
    var circle = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
            y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
        };
    };

    $('#text2').curvedText({
        curve:    circle,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
    });


    // text3
    var bezier = function (t)
    {
        var px = [100.0, 350.0, 500.0, 900.0],
            py = [400.0,  50.0, 500.0, 200.0],
            ax = [px[0], 3.0 * (px[1] - px[0]), 3.0 * (px[2] - 2.0 * px[1] + px[0]), px[3] - 3.0 * px[2] + 3.0 * px[1] - px[0]],
            ay = [py[0], 3.0 * (py[1] - py[0]), 3.0 * (py[2] - 2.0 * py[1] + py[0]), py[3] - 3.0 * py[2] + 3.0 * py[1] - py[0]],
            cx = ax[0] + ax[1] * t + ax[2] * t * t + ax[3] * t * t * t,
            cy = ay[0] + ay[1] * t + ay[2] * t * t + ay[3] * t * t * t;

        return {
            x: cx,
            y: cy
        };
    };

    $('#text3').curvedText({
        curve:    bezier,
        domain:   [0.0, 1.0],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 500.0 }
    });



    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    )
    wow.init();




    // loadmore
    $(".my_sec").slice(0, 2).show();
    $(".load_more").click(function()
    {
        $(".my_sec:hidden").slice(0, 2).show();
    })






// slick
$('.wrap_for_img').slick({
    dots:true,
});




// slick_2
$('.wrap_for_img_2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
});








// flag
var input = document.querySelector("#phone");
window.intlTelInput(input, {
utilsScript: "build/js/utils.js"
});





    // loadmore
    $(".my_sec").slice(0, 2).show();
    $(".load_more").click(function()
    {
        $(".my_sec:hidden").slice(0, 2).show();
    })





    // nivo_slider
$(window).load(function() {
$('#slider').nivoSlider();
});





});




// preloader start
$(function () {
    $(window).load(function () {
    $("#loading").fadeOut(400);
    });
});
// preloader end

