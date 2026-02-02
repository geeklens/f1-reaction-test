import { GameModule } from './types'
import { NeuralReactionModule } from './neural-reaction/module'
import { CyberAdventureModule } from './cyber-adventure/module'
import { VoidHunterModule } from './void-hunter/module'
import { ZenithQuestModule } from './zenith-quest/module'
import { NeonRacerModule } from './neon-racer/module'
import { TacticalMindModule } from './tactical-mind/module'

/**
 * All registered games in the system.
 * To add a new game, simply create its module and add it here.
 */
export const ALL_GAMES: Record<string, GameModule> = {
	'neural-reaction': NeuralReactionModule,
	'cyber-adventure': CyberAdventureModule,
	'void-hunter': VoidHunterModule,
	'zenith-quest': ZenithQuestModule,
	'neon-racer': NeonRacerModule,
	'tactical-mind': TacticalMindModule,
}
