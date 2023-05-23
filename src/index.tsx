import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title'}, 'hello react')

const app = (
    <div>
        <h1 id='text'>hello app</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem, tempore eveniet omnis optio ea fugiat asperiores iusto dolorem fugit ex? Dolorem dicta itaque doloremque cumque culpa consequuntur modi eius?</p>
    </div>)

const Title = () =>{
    return (
    <h1>hello component</h1>
    )
}
const Content = () =>{
    return (
    <React.Fragment>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore sapiente repellendus quis corporis perferendis laudantium aperiam tempora ab aliquam! Rerum ullam soluta quos? Est cupiditate enim iste error sit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore sapiente repellendus quis corporis perferendis laudantium aperiam tempora ab aliquam! Rerum ullam soluta quos? Est cupiditate enim iste error sit.</p>
    </React.Fragment>
    )
}
const App = () =>{
    return (
        <>
            <Title/>
            <Content/>
        </>
            )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode><App /></React.StrictMode>)