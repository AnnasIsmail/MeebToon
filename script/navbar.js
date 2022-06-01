$(document).ready(function(){

    $(".categ").hover(function(){
        $(".panah-bawah").removeClass('kelasPanahBawah');
        $(".panah-bawah").removeClass('panah-bawah-warna');
        $(".panah-bawah").addClass('kelasPanahBawahHover');
    }, function(){
        $(".panah-bawah").removeClass('kelasPanahBawahHover');
        $(".panah-bawah").addClass('kelasPanahBawah');
    });
    
    $(".categ").click(function(){
        if($(".drop-down").css('display') == 'grid'){
            $(".drop-down").css('display', 'none');
        }else{
            $(".drop-down").css('display', 'grid');
        }
    });
    
    $('.navbar-home').click(function(){
        $('#root').load('home.html');
    });

    $('.navbar-top-author').click(function(){
        $('#root').load('topAuthor.html');
    });

    $('.navbar-top-mebtoon').click(function(){
        $('#root').load('topMebtoon.html');
    });

    $('.navbar-subscribe').click(function(){
        $('#root').load('subscribe.html');
    });

    $('.navbar-category-show-all').click(function(){
        $('#root').load('categoryShowAll.html');
    });

    $('#burgerMenu').click(function (){
        const navRight = $('#navRight');
        if(navRight.hasClass('nav-responsive') === true){
            navRight.removeClass('nav-responsive');
        }else{
            navRight.addClass('nav-responsive');
        }
    })


});