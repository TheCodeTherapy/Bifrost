import { Colors, ThemeConfiguration, TokenColor } from '../interface'
import data from './themeData'
async function createEditorTokens(config: ThemeConfiguration) {
  return config.editorTheme in data.editorThemes
    ? (await data.editorThemes[config.editorTheme]()).default
    : (await data.editorThemes['Bifröst']()).default
}
const uniqBy = (arr, fn, set = new Set()) =>
  arr.filter((el) =>
    ((v) => !set.has(v) && set.add(v))(
      typeof fn === 'function' ? fn(el) : el[fn]
    )
  )
function mergeTheme(baseArray, overrides) {
  const mergeArr = [...baseArray, ...overrides]
  const newArr = uniqBy(mergeArr, 'scope')
  overrides.forEach((item) => {
    newArr.forEach((cell) => {
      if (cell.scope === item.scope) {
        cell.settings = {
          ...cell.settings,
          ...item.settings,
        }
      }
    })
  })
  return JSON.parse(JSON.stringify(newArr))
}
function configFactory(configuration) {
  let result: TokenColor[] = JSON.parse(
    JSON.stringify(data.tokenColors.default)
  )

  if (configuration.bold) {
    result = mergeTheme(result, data.tokenColors.bold)
  }
  if (configuration.italic) {
    result = mergeTheme(result, data.tokenColors.italic)
  }

  // Fill in color placeholders with concrete color values
  const colorObj: Colors = configuration.vivid
    ? data.textColors.vivid
    : data.textColors.classic
  for (const key in colorObj) {
    if (configuration[key]) {
      colorObj[key] = configuration[key]
    }
  }

  result.forEach((token) => {
    if (token.settings.foreground) {
      if (token.settings.foreground in colorObj) {
        token.settings.foreground = colorObj[token.settings.foreground]
      }
    }
  })
  return {
    semanticTokenColors: {
      'annotation:dart': {
        foreground: colorObj.numericConstants,
      },
      enumMember: {
        foreground: colorObj.assignmentOperators,
      },
      macro: {
        foreground: colorObj.numericConstants,
      },
      memberOperatorOverload: {
        foreground: colorObj.storageTypes,
      },
      'parameter.label:dart': {
        foreground: colorObj.pointerOperators,
      },
      'property:dart': {
        foreground: colorObj.numericConstants,
      },
      tomlArrayKey: {
        foreground: colorObj.constants,
      },
      'variable:dart': {
        foreground: colorObj.numericConstants,
      },
      'variable.constant': {
        foreground: colorObj.numericConstants,
      },
      'variable.defaultLibrary': {
        foreground: colorObj.constants,
      },
    },
    tokenColors: result,
  }
}
export class Theme {
  name = 'Bifröst'
  type = 'dark'
  semanticHighlighting = true
  semanticTokenColors
  tokenColors
  colors

  constructor(configuration: ThemeConfiguration) {
    const themeTokens = configFactory(configuration)
    this.semanticTokenColors = themeTokens.semanticTokenColors
    this.tokenColors = themeTokens.tokenColors
    // this.colors = createEditorTokens(configuration)
  }
  static async init(config) {
    const result = {
      ...new Theme(config),
      colors: await createEditorTokens(config),
    }
    return result
  }
}
