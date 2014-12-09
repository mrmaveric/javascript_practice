$(function(){
  /*터치 슬라이드 비쥬얼 영역*/
   window.mySwipe=$('#mySwipe')({
      auto :3000,
      continuous : true,
      callback: function(index, element){

          $(".touch_bullet .active")
              .attr("src",$(".touch_bullet .active")
              .attr("src").replace("on.png","off.png"))
              .removeClass("active");
          $(".touch_bullet img").eq(index)
              .attr("src",$(".touch_bullet img").eq(index)
                  .attr("src").replace("off.png","on.png"))
              .addClass("active");
      }
   }).data('Swipe');
    
    
  /*비쥬얼 이전, 다음 버튼*/

  $(".touch_left_btn a").on("click",function(){
      mySwipe.prev();
      return false;
  });

  $(".touch_right_btn a").on("click",function(){
     mySwipe.next();
      return false;

  });
    
    
  /*롤링 버튼 배너*/
  $("#roll_banner_wrap dd").not(":first").hide();

    var onBtn = $("#roll_banner_wrap dt a:first");

  $("#roll_banner_wrap dt a").on("click", function () {
      $("#roll_banner_wrap dd:visible").hide();

      $("img",onBtn).attr("src",
      $("img",onBtn).attr("src").replace("over.gif","out.git"));

      var num=$("#roll_banner_wrap dt a").index(this);
      $("#roll_banner_wrap dd").eq(num).show();
      $("img",this).attr("src",
      $("img",this).attr("src").replace("out.gif","over.gif"));

      onBtn=$(this);

      return false;
  });

  $(".playBtn").on("click",function(){
      clearTimeout(auto1);
      auto1=setTimeout(autoPlay,1000);

      $("img",this).attr("src",$("img",this).attr("src").replace("off.gif","on.gif"));

      $(".stopBtn img").attr("src",
      $(".stopBtn img").attr("src").replace("on.gif","off.gif"));

      return false;
  });

  $(".stopBtn").on("click",function(){
      clearTimeout(auto1);
      $("img",this).attr("src",
      $("img",this).attr("src").replace("off.gif","on.gif"));

      $(".playBrn img").attr("src",
      $(".playBtn img").attr("src").replace("on.gif","off.gif"));

      return false;
  });

  var btnNum =0;
  function autoPlay(){
      btnNum++;

      if(btnNum>=4) btnNum=0;
      $("#roll_banner_wrap dt a").eq(btnNum).trigger("click");

      auto1=setTimeout(autoPlay,4000);
  }

  var auto1= setTimeout(autoPlay,3000);
  /*탭메뉴*/
  
  /* 베스트북 슬라이더 */


   /*팝업 연동*/
  

});