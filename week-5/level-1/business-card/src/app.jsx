import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BusinessCard></BusinessCard>
      </div>
      
    </>
  )
}

function BusinessCard() {
  return <div>
    <h1>Chhatrapalsinh Zala</h1>
    <h5>Software Engineer..</h5>
    <b>Tech Stack</b>
    <ul>
      <li>Python</li>
      <li>Django</li>
      <li>Flask</li>
    </ul>

    <a type='button' href="">Twitter</a>
    <a type='button' href="">LinkedIn</a>
  </div>
}