const legacyBase = `${import.meta.env.BASE_URL}legacy`
const legacyVersion = '20260410-2'

function withLegacyVersion(file) {
  return `${legacyBase}/${file}?v=${legacyVersion}`
}

function ensureLegacyCss() {
  const existing = document.getElementById('legacy-planner-style')
  if (existing) return

  const link = document.createElement('link')
  link.id = 'legacy-planner-style'
  link.rel = 'stylesheet'
  link.href = withLegacyVersion('planner.css')
  document.head.appendChild(link)
}

function injectLegacyScript() {
  const existing = document.getElementById('legacy-planner-script')
  if (existing) existing.remove()

  const script = document.createElement('script')
  script.id = 'legacy-planner-script'
  script.src = withLegacyVersion('planner.js')
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
  const response = await fetch(withLegacyVersion('layout.html'), { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(`Failed to load legacy layout: ${response.status}`)
  }
  legacyRoot.innerHTML = await response.text()
  injectLegacyScript()
}
