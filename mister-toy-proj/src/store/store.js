import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux'
import { toyReducer } from './reducers/toy.reducer.js'

const rootReducer = combineReducers({
  toyModule: toyReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers())

// For debug:
store.subscribe(() => {
    console.log('**** Store state changed: ****')
    console.log('storeState:\n', store.getState())
})

window.gStore = store