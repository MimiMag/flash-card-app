import { INCREASE_LEVEL } from "../actions/level/increase";

export default (state = 1, { type } = {}) => {
  switch (type) {
    case INCREASE_LEVEL:
      return state += 1
    default:
      return state
  }
}
