import { RESET_PROGRESS } from '../actions/progress/reset'
import { INCREASE_PROGRESS } from '../actions/progress/increase'

export default (state = 0, { type } = {}) => {
  switch(type){
    case RESET_PROGRESS:
      return 0
    case INCREASE_PROGRESS:
      if (state > 2 ) return 0
      return state += 1
    default:
      return state
  }
}
