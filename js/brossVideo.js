const buttons = {
    button: {
        label: 'Play',
        icon: 'play',
        click: 'play()'
    },
    button: {
        label: 'Pause',
        icon: 'pause',
        click: 'pause()'
    },
}

function abreMenuBross (e) {
    var el = document.querySelectorAll('.playerBross');
    el.forEach(function(userItem) {
        console.log(userItem)
    });
}
window.onload = function(e){ 
    iniciaPlayer()
}

function iniciaPlayer () {
    var el = document.querySelectorAll('.playerBross');
    el.forEach(function(userItem) {
        userItem.innerHTML = ""
        if (userItem.dataset.youtube !== undefined) {
            incluiYoutube(userItem)
        } else if  (userItem.dataset.dailymotion !== undefined) {
            incluiDailymotion(userItem)
        } else if  (userItem.dataset.vimeo !== undefined) {
            incluiVimeo(userItem)
        } else {
            incluiVideo(userItem)
        }
    });
    buttons.forEach(function(button) {
        console.log(button)
    });
}
function incluiVideo (userItem) {
    var div = document.createElement('video');
    var poster = userItem.dataset.poster
    div.setAttribute('controls', userItem.dataset.controls);
    div.setAttribute('poster', poster === undefined ? 'https://i.gadgets360cdn.com/large/youtube_1581315068339.jpg' : poster);
    div.setAttribute('src', userItem.dataset.video);
    div.setAttribute('id', userItem.id + 'bross');
    userItem.appendChild(div)
}

function incluiPlayer (userItem) {
    var button = document.createElement('button');
    button.setAttribute('type','button')
    button.setAttribute('onclick', "document.getElementById('"+  userItem.id + 'bross' +"').play()");
    button.appendChild(document.createTextNode('Play'));
    userItem.appendChild(button);
}
function incluiYoutube (userItem) {
    var iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "allowfullscreen", "" );
    iframe.setAttribute( "allow", "autoplay" );
    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ userItem.dataset.youtube +"?autoplay=1&rel=0&modestbranding=0" );
    userItem.appendChild(iframe);
}
function incluiVimeo (userItem) {
    var iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "webkitAllowFullScreen", "" );
    iframe.setAttribute( "mozallowfullscreen", "" );
    iframe.setAttribute( "allowFullScreen", "" );
    iframe.setAttribute( "src", "https://player.vimeo.com/video/"+ userItem.dataset.vimeo );
    userItem.appendChild(iframe);
}
function incluiDailymotion (userItem) {
    var iframe = document.createElement( "iframe" );
    iframe.setAttribute( "frameborder", "0" );
    iframe.setAttribute( "webkitAllowFullScreen", "" );
    iframe.setAttribute( "mozallowfullscreen", "" );
    iframe.setAttribute( "allowFullScreen", "" );
    iframe.setAttribute( "src", "https://www.dailymotion.com/embed/video/"+ userItem.dataset.dailymotion );
    userItem.appendChild(iframe);
}