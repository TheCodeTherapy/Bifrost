import { join } from 'path'
import { Uri, workspace } from 'vscode'
import { TextEncoder } from 'util'
import { generateTheme } from '../themes'
import { promptToReload } from './'

export async function updateTheme() {
  const writeTheme = async (fileName: string, themeName?: string) => {
    const THEME_PATH = Uri.file(join(__dirname, '../../', 'themes', fileName))
    const theme = await generateTheme.fromSettings(themeName)
    return workspace.fs.writeFile(
      THEME_PATH,
      new TextEncoder().encode(JSON.stringify(theme, null, 2))
    )
  }

  let promiseArr = []
  promiseArr = [
    writeTheme('Bifrost.json'),
    writeTheme('Bifrost-flat.json', 'Bifröst Flat'),
    writeTheme('Bifrost-darker.json', 'Bifröst Darker'),
  ]
  await Promise.all(promiseArr)
  promptToReload()
}
