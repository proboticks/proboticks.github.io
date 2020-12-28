$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        var target = $(this.hash);
        if (target.length) {
            $("html, body").animate({
                    scrollTop: target.offset().top
                },
                600
            );
        }
    });
});

// $('nav_bar_buttons').on('click', function() {
//     console.log("Pressed");

//     $('nav_bar').find('li.active').removeClass('active');
//     $(this).parent('li').addClass('active');
// });

// $('#nav_bar_buttons').on('click', function() {

//     console.log("Pressed");

//     $('#topheader .navbar-nav').find('li.active').removeClass('active');
//     $(this).parent('li').addClass('active');
// });

$(document).ready(function() {
    $('li').on('click', function() {
        $('li').removeClass('active');
        $(this).addClass('active');

    });
});


function project_bar() {
    var e = document.getElementById("project_bar_buttons");
    var x = document.getElementById("research_button");
       if(e.style.display == 'block')
       {
        $('#project_bar_buttons').fadeOut(400);
        x.style.backgroundColor = '#2F3C48';
       }
       else
       {
        $('#project_bar_buttons').fadeIn(400);
        x.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
       }
}

