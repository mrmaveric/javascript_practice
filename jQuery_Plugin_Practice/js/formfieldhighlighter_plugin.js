jQuery.fn.vtchighlighter = function(options)
{
    var theform = $(this);
    theform.addClass("vtchighlighter");

     var settings = {
        'custom_class' : 'active_field'
     };

     return this.each(function(){
      if(options){
          $.extend(settings, options);

        }

        $(".vtchighlighter > input:text").focusin(
            function(){
                $(this).addClass(settings.custom_class);
                }
            ).focusout(
            function(){
                $(this).removeClass(settings.custom_class);
                }
            );
        });
};