'use strict';

var playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

var list = document.getElementById("playlist");
for (var i = 0; i < playList.length; i++) {
    var item = document.createElement("li");
    item.textContent = playList[i].author + " — " + playList[i].song;
    list.appendChild(item);
}

var buttonPlace = document.getElementById("buttonPlace");
var button = document.createElement("button");
button.textContent = "YouTube";
button.classList.add("video-button");
button.onclick = function() {
  window.location.href = "https://www.youtube.com/watch?v=dnyrEoCJP_w";
};
buttonPlace.appendChild(button);
