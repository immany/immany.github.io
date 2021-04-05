var player;
var done = false;
var pixelSet = false;
var pctElapsed = 0;
var started = 0;
var sent25 = 0;
var sent50 = 0;
var sent75 = 0;
var sent100 = 0;


function createYT(videoSKU) {

    window.videoSKU = videoSKU

    // Incorporate dependecies
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
}

// Callback YT dependiency loaded
function onYouTubeIframeAPIReady(){

    player = new YT.Player('player', {
        height: '400',
        width: '100%',
        videoId: videoSKU,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}



// 4. The API will call this function when the video player is ready.
function onPlayerReady(event){

    if(started == 0){
        window._satellite.track('videostarted');
        started = 1;
    }
    
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // Quick dirty hack 10 seconds after page load does not mean 10 seconds of video was played
        // setTimeout(setAAMPixel, 10000);

        // Create a proper time, compute elapsed time and take action when > 50% video was played
        mytimer = setInterval(function(){
            totalDuration = player.getDuration();
            timeElapsed = player.getCurrentTime();
            pctElapsed = Math.round((timeElapsed / totalDuration) * 100);
        
            if(pctElapsed == 25 && sent25 == 0){
                sendVideoViewed("25");
                sent25 = 1;
            }; 
            if(pctElapsed == 50 && sent50 == 0){
                sendVideoViewed("50");
                sent50 = 1;
            }; 
            if(pctElapsed == 75 && sent75 == 0){
                sendVideoViewed("75");
                sent75 = 1;
            };
            if(pctElapsed == 100 && sent100 == 0){
                sendVideoViewed("100");
                sent100 = 1;
            }; 
        } , 0);

        done = true;
    }
} 

function stopVideo() {
    player.stopVideo();
}

function sendVideoViewed(pct) {
    localStorage.setItem("videoPctViewed", pct);
    localStorage.setItem("videoViewedEventType", "videoViewed"+pct);
    window._satellite.track('videoviewed');
}
