/**
 * Created by ChloeGyuriKim on 19/01/15.
 */
$(document).ready(function(){
    $('nav a').powerTip({
        popupId: 'navTip'
    });

    $('.gallery img').powerTip({
        placement: 'sw-alt'
    });

    $('.info-box')
     .on('click', function(e){
            e.preventDefault();
        }).powerTip({
            placement:'e',
            mouseOnToPopup: true,
            smartPlacement: true,
            popupId: 'infoTip'
        });
});