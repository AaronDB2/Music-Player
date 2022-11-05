const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
	{
		nameSong: 'jacinto-1',
		imageName: 'img-1',
		displayName: 'Electric Chill Machine',
		artist: 'Jacinto Design',
	},
	{
		nameSong: 'jacinto-2',
		imageName: 'img-2',
		displayName: 'Seven Nation Army (Remix)',
		artist: 'Jacinto Design',
	},
	{
		nameSong: 'jacinto-3',
		imageName: 'img-3',
		displayName: 'Goodnight, Disco Queen',
		artist: 'Jacinto Design',
	},
	{
		nameSong: 'metric-1',
		imageName: 'metric-1',
		displayName: 'Front Row (Remix)',
		artist: 'Metric/Jacinto Design',
	}
];

// Check if Playing 
let isPlaying = false;

// Play music
function playSong() {
	isPlaying = true;
	playBtn.classList.replace('fa-play', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
	music.play();
}

// Pause music
function pauseSong() {
	isPlaying = false;
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.setAttribute('title', 'Play');
	music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.nameSong}.mp3`;
	image.src = `img/${song.imageName}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length -1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// Next Song
function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);