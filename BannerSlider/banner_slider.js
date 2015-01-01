/**
 * Created by ChloeGyuriKim on 11/12/14.
 */

// the size of 1 banner
var BANNER_WIDTH = 980;

//the time of showing off on one banner

var SHOW_DURATION=500;

//the contents element that we move

var $banner_content;

//the whole banner numbers
var nBannerLength =0;
//the current index of banner
var nCurrentBannerIndex= 0;


$(document).ready(function(){

    //extend the size of banner content container
    $banner_content = $("#banner_content");

    nBannerLength = $banner_content.children("img").length;
    $banner_content.width(BANNER_WIDTH*$banner_content.children("img").length);

    $("#btn_prev_banner").bind("click",function(){

        //the banner index value will come up
        var nIndex = nCurrentBannerIndex-1;
        //if no banner comes up, it will the latest index value
        if(nIndex<0)
            nIndex = nBannerLength-1;

        nCurrentBannerIndex =nIndex;

        //moving banners

        var nPosition = -BANNER_WIDTH*nCurrentBannerIndex;

        //slide effect starts
        $banner_content.stop();
        $banner_content.animate({
            left:nPosition
        },
        SHOW_DURATION,
            "easeOutQuint"

        );
    })

    $("#btn_next_banner").bind("click",function(){
        //find next index value of next banner
        var nIndex = nCurrentBannerIndex+1;
        //if no banner comes up, it will the latest index value
        if(nIndex>=nBannerLength)
            nIndex =0;
        nCurrentBannerIndex = nIndex;

        //moving banners
        var nPosition = -BANNER_WIDTH*nCurrentBannerIndex;
        $banner_content.stop();
        $banner_content.animate({
          left:nPosition
        },
        SHOW_DURATION,
            "easeOutQuint"
        );
    })
});