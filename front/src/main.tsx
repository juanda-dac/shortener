import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'

import { store } from './store/index.ts'
import { Provider } from 'react-redux'

import 'sweetalert2/dist/sweetalert2.min.css'



createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
)
