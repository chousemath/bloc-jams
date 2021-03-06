var albumPicasso = {
  title: 'alksdfj',
  artist: 'asdf',
  label: 'hhahahaha',
  year: '1231',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    {title: 'asdf', duration: '4:01'},
    {title: 'sdfg', duration: '4:02'},
    {title: 'wert', duration: '4:03'},
    {title: 'dfgh', duration: '4:04'},
    {title: 'wefd', duration: '4:05'},
  ]
};

var albumMarconi = {
  title: 'dfghdfh',
  artist: 'ertert',
  label: 'vbvbvbvb',
  year: '4321',
  albumArtUrl: 'assets/images/album_covers/02.png',
  songs: [
    {title: 'dfghadfg', duration: '4:06'},
    {title: 'xdfgsdfgadgs', duration: '4:07'},
    {title: 'asdfasdf', duration: '4:08'},
    {title: 'gdghm', duration: '4:02'},
    {title: 'htjthj,', duration: '4:01'},
  ]
};

var albumRandom = {
  title: 'ffffff',
  artist: 'aaaaaa',
  label: 'bbbbb',
  year: '222222',
  albumArtUrl: 'assets/images/album_covers/03.png',
  songs: [
    {title: 'aaaaaa', duration: '4:11'},
    {title: 'bbbbbb', duration: '4:22'},
    {title: 'cccccc', duration: '4:33'},
    {title: 'dddddd', duration: '4:44'},
    {title: 'eeeeee', duration: '4:55'},
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">' +
      '<td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>' +
      '<td class="song-item-title">' + songName + '</td>' +
      '<td class="song-item-duration">' + songLength + '</td>' +
      '</tr>'
  ;

  return template;
};

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

window.onload = function() {
  setCurrentAlbum(albumPicasso);

  songListContainer.addEventListener('mouseover', function(event) {
    // console.log(event.target);
    if (event.target.parentElement.className === 'album-view-song-item') {
      event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
    }
  });

  for (var i = 0; i < songRows.length; i++) {
    songRows[i].addEventListener('mouseleave', function(event) {
      this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
    });
  }
  console.log('loaded');
};

var toggleIndex = 0;
var toggleAlbum = function() {
  if (toggleIndex === 3) {
    toggleIndex = 0;
  }
  if (toggleIndex === 0) {setCurrentAlbum(albumPicasso);}
  if (toggleIndex === 1) {setCurrentAlbum(albumMarconi);}
  if (toggleIndex === 2) {setCurrentAlbum(albumRandom);}
  toggleIndex++;
};
