// import '.assets/styles/App.css'
import './assets/styles/main.css'
import  { Provider } from 'react-redux'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { store } from './store/store'

import { ToyIndex } from './pages/ToyIndex'
import { AppHeader } from './cmponents/AppHeader'
import { ToyEdit } from './pages/ToyEdit'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        <Routes>
          <Route element={<ToyIndex />} path='/toy'/>
          <Route element={<ToyEdit/>} path='/toy/edit/:toyId?'/>
        </Routes>
      </Router>
    </Provider> 
  )
}

export default App
