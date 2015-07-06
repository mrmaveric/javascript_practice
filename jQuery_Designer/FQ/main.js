/**
 * Created by ChloeGyuriKim on 19/01/15.
 */
$(document).ready(function(){
    $('body').removeClass('jsOff').addClass('jsOn');
    dynamicFAQ();
});

function dynamicFAQ(){
    $('dt').on('click', function(){
       $(this).toggleClass('open').next().slideToggle();
    });
}