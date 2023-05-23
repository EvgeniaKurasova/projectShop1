import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Title'
import Content from './Content'

// const title = React.createElement('h1', { id: 'title'}, 'hello react')

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={1} />
            <Content text1={'Lorem'} text2={'lorem'} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
