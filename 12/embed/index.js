import log from './logger'

import { generateCards } from './data/model/game'

const state = {
  colors: [ 'orange', 'green', 'blue', 'yellow' ],
  shapes: [ 'square', 'triangle', 'circle' ],
  seed: 23
}

log(
  generateCards()
)
