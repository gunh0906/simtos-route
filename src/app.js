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
      <div class="app-banner">
        <p>SIMTOS \uBD80\uC2A4 \uACBD\uB85C \uC6F9\uC571</p>
        <h1>\uB2E8\uC77C HTML\uC744 \uC6F9\uC571 \uAD6C\uC870\uB85C \uC62E\uAE34 \uCCAB \uBC84\uC804</h1>
        <span>\uB2E4\uC74C \uB2E8\uACC4\uC5D0\uC11C \uAC80\uC0C9, \uC800\uC7A5\uC5C5\uCCB4, \uACBD\uB85C, \uC9C0\uB3C4 \uAE30\uB2A5\uC744 \uAC1C\uBCC4 \uBAA8\uB4C8\uB85C \uB354 \uCABC\uAC24 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
      </div>
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
