import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Conteiner/App/App'

// const title = React.createElement('h1', { id: 'title'}, 'hello react')



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
