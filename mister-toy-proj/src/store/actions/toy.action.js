import { toyService } from '../../services/toy.service'
import {
  ADD_TOY,
  REMOVE_TOY,
  SET_FILTER_BY,
  SET_IS_LOADING,
  SET_MAX_PAGE,
  SET_TOYS,
  TOY_UNDO,
  UPDATE_TOY,
} from '../reducers/toy.reducer'
import { store } from '../store'

export function loadToys() {
  const { filterBy } = store.getState().toyModule

  store.dispatch({ type: SET_IS_LOADING, isLoading: true })

  return toyService
    .query(filterBy)
    .then(res => {
      console.log('res',res);
      return res
    })
    .then(({ toys }) => {
      store.dispatch({ type: SET_TOYS, toys })
    //   store.dispatch({ type: SET_MAX_PAGE, maxPage })
    })
    .catch(err => {
      console.log('toy action -> Cannot load toys')
      throw err
    })
    .finally(() => {
      setTimeout(() => {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
      }, 350)
    })
}

export function setFilter (filterBy = toyService.getDefaultfilter()) {
    store.dispatch({ type : SET_FILTER_BY, filterBy })
}