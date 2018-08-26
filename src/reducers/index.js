
import { combineReducers } from 'redux'
import progress from './progress'
import levelOneData from './levelOneData'
import levelNumber from './levelNumber'
import randomGif from './randomGif'

export default combineReducers({
  progress,
  levelOneData,
  levelNumber,
  randomGif
})
