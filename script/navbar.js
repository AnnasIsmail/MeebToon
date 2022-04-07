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
    
});