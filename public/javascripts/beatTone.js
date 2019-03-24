console.log("hello poopy");

window.onload = function() {

function onkeydown(e){
  Tone.context.resume().then(() => {
    synth.triggerAttack(keyToPitch[e.key], Tone.context.currentTime)
  });
}
function onkeyup(e){
  Tone.context.resume().then(() => {
    synth.triggerRelease(keyToPitch[e.key])
  });
}


var context = new AudioContext();
  // Setup all nodes

      //if (started) return;
//started = true;
//const audio = document.querySelector('audio');
const synth = new Tone.Synth();
const actx  = Tone.context;
const dest  = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);

synth.connect(dest);
synth.toMaster();

const chunks = [];

const notes = 'CDEFGAB'.split('').map(n => `${n}4`);
let note = 0;
Tone.Transport.scheduleRepeat(time => {
  if (note === 0) recorder.start();
  if (note > notes.length) {
    synth.triggerRelease(time)
    recorder.stop();
    Tone.Transport.stop();
  } else synth.triggerAttack(notes[note], time);
  note++;
}, '4n');

recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = evt => {
  let blob = new Blob(chunks, { type: 'audio/mp3; codecs=opus' });
  //audio.src = URL.createObjectURL(blob);
  var url = window.URL.createObjectURL(blob);
  // var a = document.createElement("a");
  // document.body.appendChild(a);
  // a.style = "display: none";
  // a.href = url;
  // a.download = fileName;
  // a.click();
  window.URL.revokeObjectURL(url);
  var a = $("<a style='display: none;'/>");
  a.attr("href", url);
  a.attr("download", "test.mp3");
  $("body").append(a);
  a[0].click();
  window.URL.revokeObjectURL(url);
  a.remove();
  //console.log('MP3 URl: ', url);
};


Tone.Transport.bpm.value = 400


Tone.Transport.start();

}
