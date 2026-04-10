const legacyBase = `${import.meta.env.BASE_URL}legacy`

function ensureLegacyCss() {
  const existing = document.getElementById('legacy-planner-style')
  if (existing) return

  const link = document.createElement('link')
  link.id = 'legacy-planner-style'
  link.rel = 'stylesheet'
  link.href = `${legacyBase}/planner.css`
  document.head.appendChild(link)
}

function injectLegacyScript() {
  const existing = document.getElementById('legacy-planner-script')
  if (existing) existing.remove()

  const script = document.createElement('script')
  script.id = 'legacy-planner-script'
  script.src = `${legacyBase}/planner.js`
  document.body.appendChild(script)
}

export async function mountApp(target) {
  target.innerHTML = `
    <div class="app-shell">
      <div id="legacy-app-root"></div>
    </div>
  `

  const legacyRoot = document.getElementById('legacy-app-root')
  if (!legacyRoot) return

  ensureLegacyCss()
  const response = await fetch(`${legacyBase}/layout.html`)
  if (!response.ok) {
    throw new Error(`Failed to load legacy layout: ${response.status}`)
  }
  legacyRoot.innerHTML = await response.text()
  injectLegacyScript()
}
