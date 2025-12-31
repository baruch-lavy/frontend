import '../src/assets/styles/App.css'
import  { Provider } from 'react-redux'
import { store } from './store/store'

import { ToyIndex } from './pages/ToyIndex'

function App() {

  return (
    <Provider store={store}>
    <>
      <h1>Root Cmp</h1>
      <ToyIndex/>
    </>
    </Provider>
  )
}

export default App
