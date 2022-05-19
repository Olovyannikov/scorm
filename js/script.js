document.addEventListener('DOMContentLoaded', () => {
   const $videos = document.querySelectorAll('.video-container');

   $videos.forEach(video => {
       video.addEventListener('click', (e) => {
           const _video = video.querySelector('video');
           const control = video.querySelector('.play-btn');
           if (_video.paused) {
               video.classList.add('play');
               _video.play();
               control.style.display = 'none';
           } else {
               video.classList.remove('play');
               _video.pause();
               control.style.display = 'block';
           }
       })
   })
});