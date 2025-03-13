const trackList = [
    { name: 'Track 1', file: 'track1.mp3' },
    { name: 'Track 2', file: 'track2.mp3' },
    { name: 'Track 3', file: 'track3.mp3' }
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
  