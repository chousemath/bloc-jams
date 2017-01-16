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

var createSongRow = function(songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">' +
      '<td class="song-item-number">' + songNumber + '</td>' +
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

window.onload = function() {
  setCurrentAlbum(albumPicasso);
};
