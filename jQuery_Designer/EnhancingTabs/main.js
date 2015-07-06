$(document).ready(function(){
    $('body').removeClass('jsOff').addClass('jsOn');

$('#tabs a').on('click', function(e){
        $('#tabs a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
}).filter(':first').click();
});