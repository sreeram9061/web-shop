import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { BrowserRouter } from 'react-router-dom'
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import { endPointsDatas } from './redux/endPoints.ts'
import "./styles/index.scss"
import "./styles/mediaquery.scss"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
