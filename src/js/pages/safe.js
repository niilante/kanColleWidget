$(function(){
    setTimeout(function(){
        $('body').css({
            //'transform':'scale(0.8)'
            'position': 'fixed'
        });
        $('body').animate({
            'top'     : '-75px',
            'left'    : '-70px'
        },500);
    },500);

    // キーバインド登録
    $(document).on('keyup',function(e){
        if(e.shiftKey && e.ctrlKey && e.keyCode === 48){
            chrome.runtime.sendMessage({purpose: 'screenshot'});
        }
    });

    // adjust to windows
    if (Util.system.isWindows()) {
        var diffWidth = window.outerWidth - window.innerWidth;
        var diffHeight = window.outerHeight - window.innerHeight;
        window.resizeTo(window.outerWidth + diffWidth, window.outerHeight + diffHeight);
    }
    history.forward();

    $(document).on('keyup',function(e){

        if (! e.shiftKey) return;
        if (! e.ctrlKey) return;

        if (e.keyCode === 48) {
            chrome.runtime.sendMessage(null, {purpose: 'screenshot'});
        }
    });

});
