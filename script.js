
//////////////////////////Slider/////////////////////////////////////
const sidebar = document.querySelector('.mobile-nav-right');
function showSidebar() {
    sidebar.style.display = "flex";
}
function hideSidebar() {
    sidebar.style.display = "none";
}

// //////////////////////////////////////////////////////////
// var step = 100;
// var scrolling = true;

// $(".back").bind("click", function (e) {
//     e.preventDefault();
//     $(".card-wrapper").animate({
//         scrollLeft: "-=" + step + "px"
//     });
// });

// $(".next").bind("click", function (e) {
//     e.preventDefault();
//     $(".card-wrapper").animate({
//         scrollLeft: "+=" + step + "px"
//     });
// });
// $(".back-2").bind("click", function (e) {
//     e.preventDefault();
//     $(".card-container").animate({
//         scrollLeft: "-=" + step + "px"
//     });
// });

// $(".next-2").bind("click", function (e) {
//     e.preventDefault();
//     $(".card-container").animate({
//         scrollLeft: "+=" + step + "px"
//     });
// });

// ///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded",function(){

    const cardWrapper = document.querySelector('.card-wrapper');
    const main = document.querySelector('.main');

    function openWindow(data){
      main.style.display = 'none';
      document.body.removeChild(main);
      const artistPage = document.createElement('div');
      artistPage.classList = 'artist-page';
      const top = document.createElement('div');
      top.classList = 'top';
      const bottom = document.createElement('div');
      bottom.classList = 'bottom';
      const songContainer = document.createElement('div');
      bottom.classList = 'song-container';
      bottom.style.display = 'flex';
      bottom.style.flexWrap = 'wrap';

      top.innerHTML = `
            <div class="artist-img">
                <img src="${data.artistimg}" alt="">
            </div>
            <div class="artist-desc">
                <div class="artist-name">
                    <p>Public Playlist</p>
                    <h3>${data.artistname}</h3>
                </div>
                <div class="artist-icon">
                    <ion-icon name="play-circle-outline"></ion-icon>
                    <ion-icon name="download-outline"></ion-icon>
                    <ion-icon name="download"></ion-icon>
                    <ion-icon name="heart"></ion-icon>
                    
                </div>
            </div>
      `;

      const songArray = data.song;
      songArray.forEach(song => {
        const songCard = document.createElement('div');
        songCard.classList = 'song-card';
        songCard.innerHTML = `
                   <div class="logo-img">
                        <img src="${song.logo}" alt="">
                    </div>
                    <div class="desc">
                        <p>${song.duration}</p>
                        <ion-icon name="play-circle"></ion-icon>
                    </div>
                    <div class="song-name">
                        ${song.name}
                    </div>
        `;
        songContainer.appendChild(songCard);
      })


      document.body.appendChild(artistPage);
      artistPage.appendChild(top);
      artistPage.appendChild(bottom);
      bottom.appendChild(songContainer);


    }

    

    fetch('newdata.json')
      .then(response => response.json())
      .then(data =>{
        data.forEach(s =>{
            if (s.hasOwnProperty('artistname')) {
               
                const card = document.createElement('div')
                card.classList = 'card';
                card.innerHTML = `
                <img src="${s.artistimg}" alt="">
                <p>${s.artistname}</p>
                `;

                card.addEventListener('click',function(e){
                    openWindow(s);
                })

                cardWrapper.appendChild(card);
                
            }

        });
      });
});
