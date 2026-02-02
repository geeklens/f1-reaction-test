/**
 * Interface representing aggregate player performance metrics.
 */
export interface PlayerStats {
	totalGames: number
	avgAccuracy: number
	topScore: number
	bestReactionTime: number | null
	rankLabel: string
	globalRank: number
	winStreak: number
}

/**
 * Pure logic layer for aggregating and fetching player statistics.
 * Currently reads from LocalStorage, but designed for easy swap to an API.
 */
export const StatsModule = {
	/**
	 * Fetches the current stats.
	 * Wrapping in a function allows for future async implementation without UI breakage.
	 */
	getAggregateStats(): PlayerStats {
		// In a real app, this would iterate through game history.
		// For now, it pulls from our primary game storage.
		const bestReaction =
			typeof window !== 'undefined'
				? localStorage.getItem('neural_reaction_best')
				: null

		return {
			totalGames: 124, // Mock base
			avgAccuracy: 98.4,
			topScore: 1240,
			bestReactionTime: bestReaction ? Number(bestReaction) : null,
			rankLabel: 'Elite Pilot',
			globalRank: 452,
			winStreak: 7,
		}
	},
}
