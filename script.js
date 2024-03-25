const sidebar = document.querySelector('.mobile-view-sidebar');
function showSidebar() {
    sidebar.style.display = "flex";
}
function hideSidebar() {
    sidebar.style.display = "none";
}

var arr = [
    {songName : "Tum hi ho", url:"./music/tum hi ho.m4a", duration: "4:22", img: "./images/tum hi ho.jpg"},
    {songName : "Saibo", url:"./music/saibo.m4a", duration: "3:17", img: "./images/saibo.jpg"},
    {songName : "Chikni Chameli", url:"./music/chikni chameli.m4a", duration: "5:03", img: "./images/chikni chameli.jpg"},
    {songName : "Khairiyat", url:"./music/khairiyat.m4a", duration: "4:40", img: "./images/khairiyat.jpg"},
    {songName : "Raftaarein", url:"./music/raftaarein song.m4a", duration: "4:17", img: "./images/raftaarein song.jpeg"}
]

var audio = new Audio()
var selectedSong = 0;
var play = document.querySelector("#play");
var back = document.querySelector("#back")
var next = document.querySelector("#next")
var flag = 0
var playerPL = document.querySelector(".pl");

function mainFunc() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `
        <div class="ss-card" id="${index}">
                    <div class="ss-l">
                        <img src="${elem.img}" alt="">
                        <div class="ss-detail">
                          <h2>${elem.songName}</h2>
                          <p>Arijit Singh</p>
                        </div>
                    </div>
                    <div class="ss-r">
                        <h2>${elem.duration}</h2>
                        <i class="ri-draggable"></i>
                    </div>
                </div>
        `
    })

    document.querySelector(".ss-container").innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    playerPL.innerHTML = `
    <img src="${arr[selectedSong].img}" alt="">
    <div class="ss-detail">
        <h2>${arr[selectedSong].songName}</h2>
        <p>Arijit Singh</p>
    </div>`
}
mainFunc()

document.querySelector(".ss-container").addEventListener("click", function (e) {
    selectedSong = e.target.id
    console.log(e.target.id)
    mainFunc();
    play.innerHTML = `<i class='ri-pause-large-fill'></i>`
    flag = 1
    audio.play()
})



play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class='ri-pause-large-fill'></i>`
        mainFunc()
        audio.play()
        flag = 1
    }
    else{
        play.innerHTML = `<i class='ri-play-large-fill'></i>`
        mainFunc()
        audio.pause()
        flag = 0
    }
})

next.addEventListener("click" , function(){
    if(selectedSong < arr.length -1){
        selectedSong++
        mainFunc()
        audio.play()
        back.style.opacity = 1
    }
    else{
        next.style.opacity = 0
        
    }
})

back.addEventListener("click" , function(){
    if(selectedSong > 0 ){
        selectedSong--
        mainFunc()
        audio.play()
        next.style.opacity = 1
    }
    else{
        back.style.opacity = 0
        
    }
})

