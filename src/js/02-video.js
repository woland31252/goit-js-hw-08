
import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);
// const CURRENT_TIME = 'videoplayer-current-time';

// const onPlay = function (data) {
//   localStorage.setItem(CURRENT_TIME, data.seconds);
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// const savedTime = localStorage.getItem(CURRENT_TIME);
// if (savedTime) {
//   player.setCurrentTime(savedTime);
// }
const vimPlayer = document.getElementById('vimeo-player');
const curentTime = 'videoplayer-current-time';
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};
player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});

player.on('play', onPlay);