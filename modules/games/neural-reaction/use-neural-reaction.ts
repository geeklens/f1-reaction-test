import { useState, useRef, useEffect, useCallback } from 'react'
import { checkPersonalBest, generateLightsOutDelay } from './utils/engine-logic'
import { neuralAudio } from './utils/audio-engine'

export type GameStatus =
	| 'idle'
	| 'countdown'
	| 'running'
	| 'finished'
	| 'false-start'

export function useNeuralReaction() {
	const [status, setStatus] = useState<GameStatus>('idle')
	const [lightsCount, setLightsCount] = useState(0)
	const [reactionTime, setReactionTime] = useState<number | null>(null)
	const [lastTime, setLastTime] = useState<number | null>(null)
	const [bestTime, setBestTime] = useState<number | null>(null)

	const statusRef = useRef<GameStatus>('idle')
	const startTimeRef = useRef<number>(0)
	const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null)
	const reactionTimeoutRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		statusRef.current = status
	}, [status])

	useEffect(() => {
		const storedBest = localStorage.getItem('neural_reaction_best')
		if (storedBest) {
			const best = Number(storedBest)
			setBestTime(best)
			setLastTime(best)
		}
	}, [])

	const clearAllTimers = useCallback(() => {
		if (countdownIntervalRef.current) {
			clearInterval(countdownIntervalRef.current)
			countdownIntervalRef.current = null
		}
		if (reactionTimeoutRef.current) {
			clearTimeout(reactionTimeoutRef.current)
			reactionTimeoutRef.current = null
		}
	}, [])

	const start = useCallback(() => {
		if (
			statusRef.current !== 'idle' &&
			statusRef.current !== 'finished' &&
			statusRef.current !== 'false-start'
		) {
			return
		}

		clearAllTimers()
		setStatus('countdown')
		setLightsCount(0)
		setReactionTime(null)

		let count = 0
		countdownIntervalRef.current = setInterval(() => {
			count++
			setLightsCount(count)
			neuralAudio.playLightOn()

			if (count === 5) {
				if (countdownIntervalRef.current) {
					clearInterval(countdownIntervalRef.current)
					countdownIntervalRef.current = null
				}

				const delay = generateLightsOutDelay()
				reactionTimeoutRef.current = setTimeout(() => {
					setLightsCount(0)
					setStatus('running')
					neuralAudio.playLightsOut()
					startTimeRef.current = performance.now()
					reactionTimeoutRef.current = null
				}, delay)
			}
		}, 800)
	}, [clearAllTimers])

	const trigger = useCallback(() => {
		const currentStatus = statusRef.current

		if (
			currentStatus === 'idle' ||
			currentStatus === 'finished' ||
			currentStatus === 'false-start'
		) {
			start()
			return
		}

		if (currentStatus === 'countdown') {
			clearAllTimers()
			setStatus('false-start')
			neuralAudio.playError()
			return
		}

		if (currentStatus === 'running') {
			const now = performance.now()
			const finalTime = now - startTimeRef.current

			setReactionTime(finalTime)
			setLastTime(finalTime)
			setStatus('finished')
			neuralAudio.playFinish()

			if (checkPersonalBest(finalTime, bestTime)) {
				setBestTime(finalTime)
				localStorage.setItem('neural_reaction_best', finalTime.toString())
			}
			return
		}
	}, [start, clearAllTimers, bestTime])

	useEffect(() => {
		return clearAllTimers
	}, [clearAllTimers])

	return {
		status,
		lightsCount,
		reactionTime,
		lastTime,
		bestTime,
		start,
		trigger,
	}
}
