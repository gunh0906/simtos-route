import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const sourceFile =
  process.env.SIMTOS_SOURCE_HTML ??
  'C:/Users/AT140043/Downloads/simtos_booth_route_planner_v26_fix_hall1.html'

const targetDir = path.resolve(process.cwd(), 'public', 'legacy')

function mustMatch(label, value) {
  if (!value?.[1]) {
    throw new Error(`Could not extract ${label} from ${sourceFile}`)
  }
  return value[1].trim()
}

const html = await readFile(sourceFile, 'utf8')
const style = mustMatch('style', html.match(/<style>([\s\S]*?)<\/style>/i))
const body = mustMatch('body', html.match(/<body>([\s\S]*?)<script>/i))
const script = mustMatch('script', html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/i))

await mkdir(targetDir, { recursive: true })
await writeFile(path.join(targetDir, 'layout.html'), `${body}\n`, 'utf8')
await writeFile(path.join(targetDir, 'planner.css'), `${style}\n`, 'utf8')
await writeFile(path.join(targetDir, 'planner.js'), `${script}\n`, 'utf8')

console.log(`Synced legacy planner from ${sourceFile}`)
