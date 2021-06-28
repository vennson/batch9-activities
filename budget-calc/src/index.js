import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
  <SpeechProvider appId='5abbf69f-e5f4-4a59-9e92-230fe2583367' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)