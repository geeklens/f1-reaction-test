/**
 * Pure functions for Neural Reaction logic.
 * These are completely decoupled from React and side effects,
 * making them 100% testable in any environment.
 */

/**
 * Calculates if a new time is a personal best.
 */
export function checkPersonalBest(
	newTime: number,
	bestTime: number | null,
): boolean {
	if (bestTime === null) return true
	return newTime < bestTime
}

/**
 * Formats reaction time for display.
 */
export function formatMs(ms: number | null): string {
	if (ms === null) return '--'
	return `${ms.toFixed(0)}`
}

/**
 * Generates a random delay for the F1 lights-out sequence.
 * (Min 1000ms, Max 3500ms for authentic feel)
 */
export function generateLightsOutDelay(): number {
	return 1000 + Math.random() * 2500
}

/**
 * Validates if a click was a "Jump Start" based on current engine status.
 */
export function isJumpStart(status: string): boolean {
	return status === 'countdown'
}
