import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './stateManagement/GlobalContext.jsx'
import { Provider } from 'react-redux'
import store from './services/app-contex.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </GlobalProvider>,
)
