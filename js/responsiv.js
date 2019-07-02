$(function (){
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
    $('.form_wizard header .progress_one .progress-bar')
           .css('width',100/countStep+'%');
    $('.nxt_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        if($(window).width() <= 950){
            $('.form_wizard header .steps_list_view .item .desc:visible').hide();
            $('.form_wizard header .steps_list_view .item .desc').eq(nbr_step).fadeIn("slow");
        }
        $('.form_wizard header .steps_list_view .item').eq(nbr_step - 1)
                .removeClass('loading');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step - 1)
                .addClass('active');
        img_active = $('.form_wizard header .steps_list_view .item').eq(nbr_step - 1)
                .find('img').attr('src-init');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step - 1)
                .find('img').attr('src',img_active);
        
        $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .removeClass('disable');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .addClass('loading');
        
        $('.form_wizard .form_body .form_item:visible').hide();
        $('.form_wizard .form_body .form_item').eq(nbr_step).fadeIn("slow");
        
        
        $('.mobile_label_steps_display .item:visible').hide();
        $('.form_wizard header .progress_one .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        if($(window).width() <= 950){
            $('.form_wizard header .steps_list_view .item .desc:visible').hide();
            $('.form_wizard header .steps_list_view .item .desc').eq(nbr_step).fadeIn("slow");
        }
        $('.form_wizard header .steps_list_view .item').eq(nbr_step + 1)
                .removeClass('loading');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step + 1)
                .addClass('disable');
        
        $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .removeClass('active');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .addClass('loading');
        img_active = $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .find('img').attr('src-active');
        $('.form_wizard header .steps_list_view .item').eq(nbr_step)
                .find('img').attr('src',img_active);
        
        
        $('.form_wizard .form_body .form_item:visible').hide();
        $('.form_wizard .form_body .form_item').eq(nbr_step).fadeIn("slow");
        
        
        $('.mobile_label_steps_display .item:visible').hide();
        $('.mobile_label_steps_display .item').eq(nbr_step).show();
        
        $('.form_wizard header .progress_one .progress-bar')
           .css('width',(100/countStep)*(nbr_step + 1)+'%');
   
    });
});