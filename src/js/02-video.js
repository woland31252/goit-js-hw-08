
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(e) {
  console.log(e.seconds);
  const time = e.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const currentTime = localStorage.getItem('videoplayer-current-time');
const startTime = JSON.parse(currentTime);
console.log(startTime);
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });