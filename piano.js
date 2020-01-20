function createOctave(){
  var div = document.getElementById ("octave4");
  var clone = div.cloneNode(true);
  var pianoOctave = document.getElementById("piano");
  pianoOctave.appendChild(clone);
  clone.id = "octave5";
  for (var i = 0; i < clone.children.length; i++){
    //changes key labels to match this octave
    clone.children[i].textContent = div.children[i].textContent.substr(0, div.children[i].textContent.length - 1) + "5";
    clone.children[i].id = div.children[i].id.substr(0, div.children[i].id.length - 1) + "5";
  }
}

function playNote(id){
    var note;
    note = new Audio(document.getElementById(id).id + ".wav");
    note.play();
  }

  var audio;

  function startMusic(id){
    var numSongs = 5;
    var songs = new Array(numSongs);

    if (audio != null){
      stopMusic();
    }

    audio = new Audio(document.getElementById(id).id);


    audio.play();
}

function playMusic(){
  audio.play();
}

function pauseMusic(){
  audio.pause();
}

function stopMusic(){
  audio.pause();
  audio.currentTime = 0;
}
