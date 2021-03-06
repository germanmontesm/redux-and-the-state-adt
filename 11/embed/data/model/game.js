import bimap from 'crocks/pointfree/bimap'
import compose from 'crocks/helpers/compose'
import converge from 'crocks/combinators/converge'
import curry from 'crocks/helpers/curry'
import fanout from 'crocks/helpers/fanout'
import identity from 'crocks/combinators/identity'
import liftA2 from 'crocks/helpers/liftA2'
import option from 'crocks/pointfree/option'

import { getAt, getState, unsetAt } from '../helpers'

// buildCard :: String -> String -> Card
const buildCard = curry((color, shape) => ({
  id: `${color}-${shape}`, color, shape
}))

// getColors :: () -> State AppState [ String ]
const getColors = () =>
  getState('colors')
    .map(option([]))

// getShapes :: () -> State AppState [ String ]
const getShapes = () =>
  getState('shapes')
    .map(option([]))

// buildCards :: [ String ] -> [ String ] -> [ Card ]
const buildCards =
  liftA2(buildCard)

// generateCards :: () -> State AppState [ Card ]
export const generateCards = converge(
  liftA2(buildCards),
  getColors,
  getShapes
)

// Deck :: Pair [ Card ] [ Card ]
