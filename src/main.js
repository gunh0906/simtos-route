import './style.css'
import { mountApp } from './app.js'

const app = document.querySelector('#app')

if (!app) {
  throw new Error('Could not find #app root')
}

mountApp(app).catch((error) => {
  console.error(error)
  app.innerHTML = `
    <div class="app-shell">
      <div class="app-banner">
        <p>SIMTOS Route Webapp</p>
        <h1>Legacy planner failed to load</h1>
        <span>${error.message}</span>
      </div>
    </div>
  `
})
