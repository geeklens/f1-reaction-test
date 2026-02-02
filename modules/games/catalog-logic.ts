import { GameMetadata, GameCategory } from './types'

/**
 * Pure function to filter games by search query and category.
 * Extracted from component logic for better performance, testability, and
 * predictability outside the React render cycle.
 */
export function filterGames(
	games: GameMetadata[],
	searchQuery: string,
	selectedCategory: GameCategory | 'All',
): GameMetadata[] {
	const sanitizedQuery = searchQuery.toLowerCase().trim()

	return games.filter(game => {
		const matchesSearch =
			sanitizedQuery === '' || game.title.toLowerCase().includes(sanitizedQuery)

		const matchesCategory =
			selectedCategory === 'All' || game.category === selectedCategory

		return matchesSearch && matchesCategory
	})
}

/**
 * Extracts unique categories from a list of games.
 * Memoized implicitly when used with useMemo in the component.
 */
export function getUniqueCategories(
	games: GameMetadata[],
): (GameCategory | 'All')[] {
	const categories = games.map(g => g.category)
	return ['All', ...Array.from(new Set(categories))]
}
