const trackList = [
    { name: 'Alone-Color Out', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\Alone_-_Color_Out.mp3' },
    { name: 'Host-Color Out', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\Color_Out_-_Host.mp3' },
    { name: 'Do I - Leeona', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\LEEONA_-_LEEONA_-_Do_I.mp3' },
    { name: 'No Rest or Endless Rest - Lisofv', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\No_Rest_Or_Endless_Rest_-_Lisofv.mp3' },
    { name: 'Tab - Sake Bomb', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\Tab_-_Sake_Bomb_(feat._Jade_Gritty_&amp;_Aurc).mp3' },
    { name: 'Zaranka - Dust', file: 'C:\Users\Cadu\Desktop\CCT\Year 2\Cross-Platform Development\MusicPlayer\tracks\Zaranka_-_Dust_(feat._Maliander).mp3' }
  ];
  
  const trackListElement = document.getElementById('track-list');
  const audio = document.getElementById('audio');
  const currentTrack = document.getElementById('current-track');
  const progressBar = document.getElementById('progress-bar');
  const progress = document.getElementById('progress');
  
  // Load track list
  trackList.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = track.name;
    li.dataset.index = index;
    li.addEventListener('click', () => playTrack(index));
    trackListElement.appendChild(li);
  });
  
  // Play selected track
  function playTrack(index) {
    const track = trackList[index];
    audio.src = track.file;
    currentTrack.textContent = `Playing: ${track.name}`;
    audio.play();
  }
  
  // Update progress bar
  audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
  });
  