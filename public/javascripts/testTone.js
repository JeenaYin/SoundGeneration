var synth = new Tone.MetalSynth().toMaster()

function triggerSynth(time){
	synth.triggerAttackRelease('16n', time)
}

Tone.Transport.schedule(triggerSynth, 0)
Tone.Transport.schedule(triggerSynth, 2 * Tone.Time('8t'))
Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + Tone.Time('8t'))
Tone.Transport.schedule(triggerSynth, Tone.Time('4n') + 2 * Tone.Time('8t'))
Tone.Transport.schedule(triggerSynth, Tone.Time('0:2') + Tone.Time('8t'))
Tone.Transport.schedule(triggerSynth, Tone.Time('0:3') + Tone.Time('8t'))

Tone.Transport.loopEnd = '1m'
Tone.Transport.loop = true

//start/stop the transport
document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())

//start/stop the transport
document.querySelector('tone-slider').addEventListener('change', e => Tone.Transport.bpm.value = e.detail)
