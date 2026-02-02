/**
 * Web Audio API based sound engine for Neural Reaction.
 * Provides low-latency synthesized sounds without external assets.
 */

class NeuralAudioEngine {
	private ctx: AudioContext | null = null

	private init() {
		if (typeof window === 'undefined') return
		if (!this.ctx) {
			this.ctx = new (
				window.AudioContext || (window as any).webkitAudioContext
			)()
		}
	}

	private playTone(
		freq: number,
		duration: number,
		volume: number = 0.1,
		type: OscillatorType = 'sine',
	) {
		this.init()
		if (!this.ctx) return

		// Resume context if suspended (common in browsers)
		if (this.ctx.state === 'suspended') {
			this.ctx.resume()
		}

		const osc = this.ctx.createOscillator()
		const gain = this.ctx.createGain()

		osc.type = type
		osc.frequency.setValueAtTime(freq, this.ctx.currentTime)

		gain.gain.setValueAtTime(volume, this.ctx.currentTime)
		gain.gain.exponentialRampToValueAtTime(
			0.001,
			this.ctx.currentTime + duration,
		)

		osc.connect(gain)
		gain.connect(this.ctx.destination)

		osc.start()
		osc.stop(this.ctx.currentTime + duration)
	}

	/**
	 * Played when a single F1 light row turns on
	 */
	playLightOn() {
		this.playTone(440, 0.1, 0.05, 'square') // Authentic "beep"
	}

	/**
	 * Played when lights go out (the "GO" signal)
	 */
	playLightsOut() {
		this.playTone(880, 0.15, 0.07, 'square') // Higher pitch for GO
	}

	/**
	 * Played when user successfully finishes
	 */
	playFinish() {
		// A fast success arpeggio
		const startTime = this.ctx?.currentTime || 0
		this.playTone(554.37, 0.1, 0.05) // C#5
		setTimeout(() => this.playTone(659.25, 0.1, 0.05), 100) // E5
		setTimeout(() => this.playTone(880, 0.3, 0.06), 200) // A5
	}

	/**
	 * Played on false start
	 */
	playError() {
		this.playTone(150, 0.3, 0.1, 'sawtooth') // Buzz
	}
}

export const neuralAudio = new NeuralAudioEngine()
