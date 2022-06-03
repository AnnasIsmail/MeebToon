$(document).ready(function(){

    $(".categ").hover(function(){
        if(window.location.name !== "category"){
            $(".panah-bawah").removeClass('kelasPanahBawah');
            $(".panah-bawah").removeClass('panah-bawah-warna');
            $(".panah-bawah").addClass('kelasPanahBawahHover');
        }
    }, function(){
        if(window.location.name !== "category"){
            $(".panah-bawah").removeClass('kelasPanahBawahHover');
            $(".panah-bawah").addClass('kelasPanahBawah');
        }
    });
    
    $(".categ").click(function(){
        if($(".drop-down").css('display') == 'grid'){
            $(".drop-down").css('display', 'none');
        }else{
            $(".drop-down").css('display', 'grid');
        }
    });
    
    $('.left').click(function(){
        window.location.name = "home"
        $('#root').load('home.html');
    });

    $('.navbar-home').click(function(){
        window.location.name = "home"
        $('#root').load('home.html');
    });

    $('.navbar-top-author').click(function(){
        window.location.name = "topAuthor"
        $('#root').load('topAuthor.html');
    });

    $('.navbar-top-mebtoon').click(function(){
        window.location.name = "topMebtoon"
        $('#root').load('topMebtoon.html');
    });

    $('.navbar-subscribe').click(function(){
        window.location.name = "subscribe"
        $('#root').load('subscribe.html');
    });

    $('.navbar-category-show-all').click(function(){
        window.location.name = "category"
        $('#root').load('category.html');
    });

    $('#burgerMenu').click(function (){
        const navRight = $('#navRight');
        if(navRight.hasClass('nav-responsive') === true){
            navRight.removeClass('nav-responsive');
        }else{
            navRight.addClass('nav-responsive');
        }
    })

    loadTopMebtoon =(index)=>{
        $('#root').load('topMebtoon.html');
        currentCategory = index;
    }
});