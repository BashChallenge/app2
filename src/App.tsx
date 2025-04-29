import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hello from 'components/Hello';
// import App3Component from 'app3/Component';

const App = () => (
  <div className="container">
    <Hello value={1}/>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)