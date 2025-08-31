import { join } from 'path'
import { TextEncoder } from 'util'
import {
  commands as Commands,
  ConfigurationTarget,
  Uri,
  workspace,
} from 'vscode'
import { ChangelogWebview } from './webviews/Changelog'
import { updateCSS, updateTheme } from './utils'

/**
 * This method is called when the extension is activated.
 * It initializes the core functionality of the extension.
 */
export async function activate() {
  const flagPath = Uri.file(join(__dirname, '../temp', 'flag.txt'))
  let flag
  try {
    // await workspace.fs.writeFile(flagPath, new TextEncoder().encode('true'))
    try {
      if (await workspace.fs.stat(flagPath)) {
        flag = true
      }
    } catch (error) {
      console.log(error)
    }
    if (!flag) {
      await workspace.fs.writeFile(flagPath, new TextEncoder().encode('true'))
      const configArr = [
        { defaultVal: false, type: 'bold' },
        { defaultVal: true, type: 'italic' },
        { defaultVal: false, type: 'vivid' },
      ]
      const configuration = workspace.getConfiguration('bifrost')
      let isDefaultConfig = configArr.every((item) => {
        return configuration.get<boolean>(item.type) === item.defaultVal
      })
      const colorConfig = configuration.get<object>(`color`)
      let colorFlagStr = ''
      for (const key in colorConfig) {
        colorFlagStr += colorConfig[key]
      }
      if (colorFlagStr != '') {
        isDefaultConfig = false
      }
      if (!isDefaultConfig) {
        updateTheme()
      }
      if (!configuration.get<boolean>('markdownStyle')) {
        updateCSS()
      }
    }
  } catch (err) {
    console.log(err)
    // do nothing
  }

  // Observe changes in the config
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('bifrost')) {
      updateTheme()
      updateCSS()
    }
  })
  Commands.registerCommand('bifrost.showChangelog', () => {
    new ChangelogWebview().show()
  })

  const settingArr = ['Vivid', 'Italic', 'Bold']
  settingArr.forEach((settingItem) => {
    Commands.registerCommand(`bifrost.set${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `bifrost.${settingItem.toLowerCase()}`,
          true,
          ConfigurationTarget.Global
        )
    })
    Commands.registerCommand(`bifrost.cancel${settingItem}`, () => {
      workspace
        .getConfiguration()
        .update(
          `bifrost.${settingItem.toLowerCase()}`,
          false,
          ConfigurationTarget.Global
        )
    })
  })
}
