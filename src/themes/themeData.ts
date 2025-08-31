import { adjustLuminance, desaturateColor } from './helpers'

const defaultBG = '#171245'
const darkerBG = '#120030'
const flatBG = '#303030'

const desaturation = 30
const defaultLum = 0.5

const useLum = false
const useLuminanceMap = true
const useDesaturation = false

export const bifrostBackgrounds = {
  activityBarBackground: defaultBG,
  dropdownBackground: defaultBG,
  editorBackground: defaultBG,
  editorGroupBackground: defaultBG,
  editorLineHighlightBackground: defaultBG,
  panelSectionHeaderBackground: defaultBG,
  sidebarBackground: defaultBG,
  sidebarSectionHeaderBackground: defaultBG,
  statusBarBackground: defaultBG,
  statusBarNoFolderBackground: defaultBG,
  tabActiveBackground: defaultBG,
  tabHoverBackground: defaultBG,
  tabInactiveBackground: defaultBG,
  tabsBackground: defaultBG,
  terminalBackground: defaultBG,
  titleBarActiveBackground: defaultBG,
  titleBarInactiveBackground: defaultBG,
}

export const bifrostDarkerBackgrounds = {
  activityBarBackground: darkerBG,
  dropdownBackground: darkerBG,
  editorBackground: darkerBG,
  editorGroupBackground: darkerBG,
  editorLineHighlightBackground: darkerBG,
  panelSectionHeaderBackground: darkerBG,
  sidebarBackground: darkerBG,
  sidebarSectionHeaderBackground: darkerBG,
  statusBarBackground: darkerBG,
  statusBarNoFolderBackground: darkerBG,
  tabActiveBackground: darkerBG,
  tabHoverBackground: darkerBG,
  tabInactiveBackground: darkerBG,
  tabsBackground: darkerBG,
  terminalBackground: darkerBG,
  titleBarActiveBackground: darkerBG,
  titleBarInactiveBackground: darkerBG,
}

export const bifrostFlatBackgrounds = {
  activityBarBackground: flatBG,
  dropdownBackground: flatBG,
  editorBackground: flatBG,
  editorGroupBackground: flatBG,
  editorLineHighlightBackground: flatBG,
  panelSectionHeaderBackground: flatBG,
  sidebarBackground: flatBG,
  sidebarSectionHeaderBackground: flatBG,
  statusBarBackground: flatBG,
  statusBarNoFolderBackground: flatBG,
  tabActiveBackground: flatBG,
  tabHoverBackground: flatBG,
  tabInactiveBackground: flatBG,
  tabsBackground: flatBG,
  terminalBackground: flatBG,
  titleBarActiveBackground: flatBG,
  titleBarInactiveBackground: flatBG,
}

export const bifrostMixBackgrounds = {
  activityBarBackground: '#22252b',
  dropdownBackground: '#1e2227',
  editorBackground: '#22252b',
  editorGroupBackground: '#181a1f',
  editorLineHighlightBackground: '#2c313c',
  panelSectionHeaderBackground: '#1e2227',
  sidebarBackground: '#1e2227',
  sidebarSectionHeaderBackground: '#22252b',
  statusBarBackground: '#1e2227',
  statusBarNoFolderBackground: '#1e2227',
  tabActiveBackground: '#22252b',
  tabHoverBackground: '#2c313a',
  tabInactiveBackground: '#1e2227',
  tabsBackground: '#1e2227',
  terminalBackground: '#22252b',
  titleBarActiveBackground: '#22252b',
  titleBarInactiveBackground: '#22252b',
}

export const bifrostNightFlatBackgrounds = {
  activityBarBackground: '#1e2227',
  dropdownBackground: '#1e2227',
  editorBackground: '#1e2227',
  editorGroupBackground: '#181a1f',
  editorLineHighlightBackground: '#2c313c',
  panelSectionHeaderBackground: '#1e2227',
  sidebarBackground: '#1e2227',
  sidebarSectionHeaderBackground: '#1e2227',
  statusBarBackground: '#1e2227',
  statusBarNoFolderBackground: '#1e2227',
  tabActiveBackground: '#1e2227',
  tabHoverBackground: '#2c313a',
  tabInactiveBackground: '#1e2227',
  tabsBackground: '#1e2227',
  terminalBackground: '#1e2227',
  titleBarActiveBackground: '#1e2227',
  titleBarInactiveBackground: '#1e2227',
}

export const baseColors = {
  arithmeticOperator: '#ffff00',
  assignmentOperators: '#ffff00',
  blockDelimiters: '#00BDBD',
  comments: '#888899',
  constants: '#FF8686',
  embeddedCodeDelimiters: '#FF70FF',
  enumConstants: '#FF9F40',
  enumType: '#B8D7A3',
  functionNames: '#e7c09c',
  glslArithmeticOperator: '#ffff00',
  glslAssignmentOperator: '#ffff00',
  glslBitwiseOperator: '#FF9F40',
  glslComparativeOperator: '#FFFFFF',
  glslConstModifier: '#569CD6',
  glslDefaultText: '#CCCCDD',
  glslIncrementDecrementOperator: '#ffff00',
  glslNumericConstant: '#faa29a',
  glslPrecisionModifier: '#569CD6',
  glslPreprocessorDirective: '#C586C0',
  glslStorageModifier: '#569CD6',
  glslStorageType: '#C892FF',
  glslSupportFunction: '#e7c09c',
  glslSupportVariable: '#a7c9ff',
  illegalSyntax: '#00C500',
  illegalTokens: '#AFAF00',
  keywords: '#C586C0',
  markupElements: '#888899',
  members: '#DCDCAA',
  methods: '#DCDCAA',
  modifiers: '#569CD6',
  namespace: '#4EC9B0',
  numericConstants: '#faa29a',
  parameters: '#9CDCFE',
  pointerOperators: '#ff5050',
  properties: '#9CDCFE',
  relationalOperators: '#FFFFFF',
  storageTypes: '#C892FF',
  strings: '#E69A00',
  structType: '#4FC1FF',
  typeAnnotation: '#FF8686',
  typeNames: '#ffb366',
  variables: '#a7c9ff',
}

const luminanceMap = {
  arithmeticOperator: defaultLum,
  assignmentOperators: defaultLum,
  blockDelimiters: defaultLum,
  comments: 0.2,
  constants: defaultLum,
  embeddedCodeDelimiters: defaultLum,
  enumConstants: defaultLum,
  enumType: defaultLum,
  functionNames: defaultLum,
  glslArithmeticOperator: defaultLum,
  glslAssignmentOperator: defaultLum,
  glslBitwiseOperator: defaultLum,
  glslComparativeOperator: defaultLum,
  glslConstModifier: defaultLum,
  glslDefaultText: defaultLum,
  glslIncrementDecrementOperator: defaultLum,
  glslNumericConstant: defaultLum,
  glslPrecisionModifier: defaultLum,
  glslPreprocessorDirective: defaultLum,
  glslStorageModifier: defaultLum,
  glslStorageType: defaultLum,
  glslSupportFunction: defaultLum,
  glslSupportVariable: defaultLum,
  illegalSyntax: defaultLum,
  illegalTokens: defaultLum,
  keywords: defaultLum,
  markupElements: defaultLum,
  members: defaultLum,
  methods: defaultLum,
  modifiers: defaultLum,
  namespace: defaultLum,
  numericConstants: defaultLum,
  parameters: defaultLum,
  pointerOperators: defaultLum,
  properties: defaultLum,
  relationalOperators: defaultLum,
  storageTypes: defaultLum,
  strings: defaultLum,
  structType: defaultLum,
  typeAnnotation: defaultLum,
  typeNames: defaultLum,
  variables: defaultLum,
}

function getColor(useLum: boolean, color: keyof typeof baseColors) {
  const col =  useLum
    ? adjustLuminance(baseColors[color], useLuminanceMap ? luminanceMap[color] : defaultLum)
    : baseColors[color]
  return useDesaturation ? desaturateColor(col, desaturation) : col
}

const classicColors = {
  arithmeticOperator: getColor(useLum, 'arithmeticOperator'),
  assignmentOperators: getColor(useLum, 'assignmentOperators'),
  blockDelimiters: getColor(useLum, 'blockDelimiters'),
  comments: getColor(useLum, 'comments'),
  constants: getColor(useLum, 'constants'),
  embeddedCodeDelimiters: getColor(useLum, 'embeddedCodeDelimiters'),
  enumConstants: getColor(useLum, 'enumConstants'),
  enumType: getColor(useLum, 'enumType'),
  functionNames: getColor(useLum, 'functionNames'),
  glslArithmeticOperator: getColor(useLum, 'glslArithmeticOperator'),
  glslAssignmentOperator: getColor(useLum, 'glslAssignmentOperator'),
  glslBitwiseOperator: getColor(useLum, 'glslBitwiseOperator'),
  glslComparativeOperator: getColor(useLum, 'glslComparativeOperator'),
  glslConstModifier: getColor(useLum, 'glslConstModifier'),
  glslDefaultText: getColor(useLum, 'glslDefaultText'),
  glslIncrementDecrementOperator: getColor(useLum, 'glslIncrementDecrementOperator'),
  glslNumericConstant: getColor(useLum, 'glslNumericConstant'),
  glslPrecisionModifier: getColor(useLum, 'glslPrecisionModifier'),
  glslPreprocessorDirective: getColor(useLum, 'glslPreprocessorDirective'),
  glslStorageModifier: getColor(useLum, 'glslStorageModifier'),
  glslStorageType: getColor(useLum, 'glslStorageType'),
  glslSupportFunction: getColor(useLum, 'glslSupportFunction'),
  glslSupportVariable: getColor(useLum, 'glslSupportVariable'),
  illegalSyntax: getColor(useLum, 'illegalSyntax'),
  illegalTokens: getColor(useLum, 'illegalTokens'),
  keywords: getColor(useLum, 'keywords'),
  markupElements: getColor(useLum, 'markupElements'),
  members: getColor(useLum, 'members'),
  methods: getColor(useLum, 'methods'),
  modifiers: getColor(useLum, 'modifiers'),
  namespace: getColor(useLum, 'namespace'),
  numericConstants: getColor(useLum, 'numericConstants'),
  parameters: getColor(useLum, 'parameters'),
  pointerOperators: getColor(useLum, 'pointerOperators'),
  properties: getColor(useLum, 'properties'),
  relationalOperators: getColor(useLum, 'relationalOperators'),
  storageTypes: getColor(useLum, 'storageTypes'),
  strings: getColor(useLum, 'strings'),
  structType: getColor(useLum, 'structType'),
  typeAnnotation: getColor(useLum, 'typeAnnotation'),
  typeNames: getColor(useLum, 'typeNames'),
  variables: getColor(useLum, 'variables'),
}

const vividColors = {
  arithmeticOperator: getColor(useLum, 'arithmeticOperator'),
  assignmentOperators: getColor(useLum, 'assignmentOperators'),
  blockDelimiters: getColor(useLum, 'blockDelimiters'),
  comments: getColor(useLum, 'comments'),
  constants: getColor(useLum, 'constants'),
  embeddedCodeDelimiters: getColor(useLum, 'embeddedCodeDelimiters'),
  enumConstants: getColor(useLum, 'enumConstants'),
  enumType: getColor(useLum, 'enumType'),
  functionNames: getColor(useLum, 'functionNames'),
  glslArithmeticOperator: getColor(useLum, 'glslArithmeticOperator'),
  glslAssignmentOperator: getColor(useLum, 'glslAssignmentOperator'),
  glslBitwiseOperator: getColor(useLum, 'glslBitwiseOperator'),
  glslComparativeOperator: getColor(useLum, 'glslComparativeOperator'),
  glslConstModifier: getColor(useLum, 'glslConstModifier'),
  glslDefaultText: getColor(useLum, 'glslDefaultText'),
  glslIncrementDecrementOperator: getColor(useLum, 'glslIncrementDecrementOperator'),
  glslNumericConstant: getColor(useLum, 'glslNumericConstant'),
  glslPrecisionModifier: getColor(useLum, 'glslPrecisionModifier'),
  glslPreprocessorDirective: getColor(useLum, 'glslPreprocessorDirective'),
  glslStorageModifier: getColor(useLum, 'glslStorageModifier'),
  glslStorageType: getColor(useLum, 'glslStorageType'),
  glslSupportFunction: getColor(useLum, 'glslSupportFunction'),
  glslSupportVariable: getColor(useLum, 'glslSupportVariable'),
  illegalSyntax: getColor(useLum, 'illegalSyntax'),
  illegalTokens: getColor(useLum, 'illegalTokens'),
  keywords: getColor(useLum, 'keywords'),
  markupElements: getColor(useLum, 'markupElements'),
  members: getColor(useLum, 'members'),
  methods: getColor(useLum, 'methods'),
  modifiers: getColor(useLum, 'modifiers'),
  namespace: getColor(useLum, 'namespace'),
  numericConstants: getColor(useLum, 'numericConstants'),
  parameters: getColor(useLum, 'parameters'),
  pointerOperators: getColor(useLum, 'pointerOperators'),
  properties: getColor(useLum, 'properties'),
  relationalOperators: getColor(useLum, 'relationalOperators'),
  storageTypes: getColor(useLum, 'storageTypes'),
  strings: getColor(useLum, 'strings'),
  structType: getColor(useLum, 'structType'),
  typeAnnotation: getColor(useLum, 'typeAnnotation'),
  typeNames: getColor(useLum, 'typeNames'),
  variables: getColor(useLum, 'variables'),
}

enum colorType {
  arithmeticOperator = 'arithmeticOperator', //                         arithmetic operators (*, +, -, etc.)
  assignmentOperators = 'assignmentOperators', //                       operators (assignment, etc.)
  relationalOperators = 'relationalOperators', //                       relational operators (==, !=, <, >, etc.)
  constants = 'constants', //                                           constants
  enumConstants = 'enumConstants', //                                   enum constants/members
  blockDelimiters = 'blockDelimiters', //                               block delimiters ({[ etc
  variables = 'variables', //                                           variables
  functionNames = 'functionNames', //                                   function names
  storageTypes = 'storageTypes', //                                     storage typed (proc, truct, etc.)
  typeNames = 'typeNames', //                                           type names (entity.name.type)
  numericConstants = 'numericConstants', //                             numeric constants
  strings = 'strings', //                                               strings
  pointerOperators = 'pointerOperators', //                             pointer operators (^, &)
  typeAnnotation = 'typeAnnotation', //                                 type annotation operators (:)
  markupElements = 'markupElements', //                                 markupElements
  illegalSyntax = 'illegalSyntax', //                                   illegal syntax
  illegalTokens = 'illegalTokens', //                                   illegal tokens
  comments = 'comments', //                                             comments
  embeddedCodeDelimiters = 'embeddedCodeDelimiters', //                 embedded code delimiters
  namespace = 'namespace', //                                           namespace declarations
  enumType = 'enumType', //                                             enum type declarations
  structType = 'structType', //                                         struct type declarations
  parameters = 'parameters', //                                         function/procedure parameters
  members = 'members', //                                               struct fields/members
  keywords = 'keywords', //                                             language keywords
  modifiers = 'modifiers', //                                           access modifiers, attributes
  properties = 'properties', //                                         object properties
  methods = 'methods', //                                               methods (vs regular functions)
  glslPreprocessorDirective = 'glslPreprocessorDirective', //           GLSL #version, #define, etc.
  glslNumericConstant = 'glslNumericConstant', //                       GLSL numeric literals (100, 9.0)
  glslStorageModifier = 'glslStorageModifier', //                       GLSL uniform, attribute, varying
  glslStorageType = 'glslStorageType', //                               GLSL vec3, mat4, sampler2D
  glslConstModifier = 'glslConstModifier', //                           GLSL const qualifier
  glslAssignmentOperator = 'glslAssignmentOperator', //                 GLSL +=, -=, *=, /=
  glslArithmeticOperator = 'glslArithmeticOperator', //                 GLSL +, -, *, /, %
  glslSupportFunction = 'glslSupportFunction', //                       GLSL normalize, dot, cross
  glslSupportVariable = 'glslSupportVariable', //                       GLSL gl_FragColor, gl_Position
  glslPrecisionModifier = 'glslPrecisionModifier', //                   GLSL precision qualifiers
  glslBitwiseOperator = 'glslBitwiseOperator', //                       GLSL bitwise operators (&, |, ^, <<, >>)
  glslDefaultText = 'glslDefaultText', //                               GLSL default text color for unspecified code
  glslComparativeOperator = 'glslComparativeOperator', //               GLSL comparative operators (<, >, <=, >=, ==, !=)
  glslIncrementDecrementOperator = 'glslIncrementDecrementOperator', // GLSL increment/decrement (++, --)
}

export default {
  editorThemes: {
    Ayu: () => import('./data/ayu'),
    'Bifröst': () => import('./data/bifrost'),
    'Bifröst Darker': () => import('./data/bifrostDarker'),
    'Bifröst Flat': () => import('./data/bifrostFlat'),
    'Bifröst Mix': () => import('./data/bifrostMix'),
    'Bifröst Night Flat': () => import('./data/bifrostNightFlat'),
    'Dark Modern': () => import('./data/darkModern'),
    Gnome: () => import('./data/gnome'),
    'Just Black': () => import('./data/justBlack'),
    Nord: () => import('./data/nord'),
    Ocean: () => import('./data/ocean'),
    Panda: () => import('./data/panda'),
    Retro: () => import('./data/retro'),
    Shadow: () => import('./data/shadow'),
    Solarized: () => import('./data/solarized'),
    'Solarized Flat': () => import('./data/solarizedFlat'),
    Tokyo: () => import('./data/tokyo'),
    'VS Code': () => import('./data/vscode'),
  },
  textColors: {
    classic: classicColors,
    vivid: vividColors,
  },
  tokenColors: {
    bold: [
      {
        name: 'Markup: Heading',
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Markup: Strong',
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Sections',
        scope: 'entity.name.section',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'CSS: Important Keyword',
        scope: 'keyword.other.important',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Functions',
        scope: [
          'entity.name.function',
          'meta.require',
          'support.function.any-method',
          'variable.function',
        ],
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        name: 'markup.bold.markdown',
        scope: 'markup.bold.markdown',
        settings: {
          fontStyle: 'bold',
        },
      },
    ],
    default: [
      {
        name: 'Pointer operators',
        scope: 'keyword.operator.address',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Type annotation operators',
        scope: 'keyword.operator.type.annotation',
        settings: {
          foreground: colorType.typeAnnotation,
        },
      },
      {
        name: 'Arithmetic operators',
        scope: [
          'keyword.operator.arithmetic',
          'keyword.operator.arithmetic.ts',
          'keyword.operator.odin',
          'keyword.operator',
        ],
        settings: {
          foreground: colorType.arithmeticOperator,
        },
      },
      {
        name: 'Block delimiters',
        scope: [
          'punctuation.definition.block',
          'punctuation.definition.block.odin',
          'punctuation.section.block',
        ],
        settings: {
          foreground: colorType.blockDelimiters,
        },
      },
      {
        scope: 'meta.embedded',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'unison punctuation',
        scope:
          'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'haskell variable generic-type',
        scope: 'variable.other.generic-type.haskell',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'haskell storage type',
        scope: 'storage.type.haskell',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'support.variable.magic.python',
        scope: 'support.variable.magic.python',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'punctuation.separator.parameters.python',
        scope:
          'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'variable.parameter.function.language.special.self.python',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'variable.parameter.function.language.special.cls.python',
        scope: 'variable.parameter.function.language.special.cls.python',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'storage.modifier.lifetime.rust',
        scope: 'storage.modifier.lifetime.rust',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'support.function.std.rust',
        scope: 'support.function.std.rust',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'entity.name.lifetime.rust',
        scope: 'entity.name.lifetime.rust',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'variable.language.rust',
        scope: 'variable.language.rust',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'support.constant.edge',
        scope: 'support.constant.edge',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'regexp constant character-class',
        scope: 'constant.other.character-class.regexp',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'keyword.operator',
        scope: ['keyword.operator.word'],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'regexp operator.quantifier',
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Text',
        scope: 'variable.parameter.function',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Comment Markup Link',
        scope: 'comment markup.link',
        settings: {
          foreground: colorType.markupElements,
        },
      },
      {
        name: 'markup diff',
        scope: 'markup.changed.diff',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'diff',
        scope:
          'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'inserted.diff',
        scope: 'markup.inserted.diff',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'deleted.diff',
        scope: 'markup.deleted.diff',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'c++ function',
        scope: 'meta.function.c,meta.function.cpp',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'c++ block',
        scope:
          'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'js/ts punctuation separator key-value',
        scope: 'punctuation.separator.key-value',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'js/ts import keyword',
        scope: 'keyword.operator.expression.import',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'math js/ts',
        scope: 'support.constant.math',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'math property js/ts',
        scope: 'support.constant.property.math',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'js/ts variable.other.constant',
        scope: 'variable.other.constant',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'java type',
        scope: [
          'storage.type.annotation.java',
          'storage.type.object.array.java',
        ],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'java source',
        scope: 'source.java',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'java modifier.import',
        scope:
          'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'java modifier.import',
        scope: 'meta.method.java',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'java modifier.import',
        scope:
          'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'java instanceof',
        scope: 'keyword.operator.instanceof.java',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'java variable.name',
        scope: 'meta.definition.variable.name.java',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Odin enum constants',
        scope: 'constant.other.odin',
        settings: {
          foreground: colorType.enumConstants,
        },
      },
      {
        name: 'operator logical',
        scope: 'keyword.operator.logical',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'operator bitwise',
        scope: 'keyword.operator.bitwise',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'operator channel',
        scope: 'keyword.operator.channel',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'support.constant.property-value.scss',
        scope:
          'support.constant.property-value.scss,support.constant.property-value.css',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'CSS/SCSS/LESS Operators',
        scope:
          'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'css color standard name',
        scope:
          'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'css comma',
        scope: 'punctuation.separator.list.comma.css',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'css attribute-name.id',
        scope: 'support.constant.color.w3c-standard-color-name.css',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'css property-name',
        scope: 'support.type.vendored.property-name.css',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'js/ts module',
        scope:
          'support.module.node,support.type.object.module,support.module.node',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'entity.name.type.module',
        scope: 'entity.name.type.module',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'js variable readwrite',
        scope:
          'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'js/ts json',
        scope: 'support.constant.json',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'js/ts Keyword',
        scope: [
          'keyword.operator.expression.instanceof',
          'keyword.operator.new',
          'keyword.operator.ternary',
          'keyword.operator.optional',
          'keyword.operator.expression.keyof',
        ],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'js/ts console',
        scope: 'support.type.object.console',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'js/ts support.variable.property.process',
        scope: 'support.variable.property.process',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'js console function',
        scope: 'entity.name.function,support.function.console',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'keyword.operator.misc.rust',
        scope: 'keyword.operator.misc.rust',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'keyword.operator.sigil.rust',
        scope: 'keyword.operator.sigil.rust',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'operator',
        scope: 'keyword.operator.delete',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'js dom',
        scope: 'support.type.object.dom',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'js dom variable',
        scope: 'support.variable.dom,support.variable.property.dom',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'keyword.operator',
        scope:
          'keyword.operator.arithmetic,keyword.operator.decrement,keyword.operator.increment',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'relational and comparison operators',
        scope: 'keyword.operator.comparison,keyword.operator.relational',
        settings: {
          foreground: colorType.relationalOperators,
        },
      },
      {
        name: 'C operator assignment',
        scope:
          'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Punctuation',
        scope: 'punctuation.separator.delimiter',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Other punctuation .c',
        scope: 'punctuation.separator.c,punctuation.separator.cpp',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'C type posix-reserved',
        scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'keyword.operator.sizeof.c',
        scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'python parameter',
        scope: 'variable.parameter.function.language.python',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'python type',
        scope: 'support.type.python',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'python logical',
        scope: 'keyword.operator.logical.python',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'pyCs',
        scope: 'variable.parameter.function.python',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'python block',
        scope:
          'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'python function-call.generic',
        scope: 'meta.function-call.generic.python',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'python placeholder reset to normal string',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Operators',
        scope: 'keyword.operator',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Compound Assignment Operators',
        scope: 'keyword.operator.assignment.compound',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Compound Assignment Operators js/ts',
        scope:
          'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'Keywords',
        scope: 'keyword',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Namespaces',
        scope: 'entity.name.namespace',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Variables',
        scope: 'variable',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Variables',
        scope: 'variable.c',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Language variables',
        scope: 'variable.language',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Java Variables',
        scope: 'token.variable.parameter.java',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Java Imports',
        scope: 'import.storage.java',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package.keyword',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Packages',
        scope: 'token.package',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Functions',
        scope: [
          'entity.name.function',
          'meta.require',
          'support.function.any-method',
          'variable.function',
        ],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Classes',
        scope: 'entity.name.type.namespace',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Classes',
        scope: 'support.class, entity.name.type.class',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Class name',
        scope: 'entity.name.class.identifier.namespace.type',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Class name',
        scope: [
          'entity.name.class',
          'variable.other.class.js',
          'variable.other.class.ts',
        ],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Class name php',
        scope: 'variable.other.class.php',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Type Name',
        scope: 'entity.name.type',
        settings: {
          foreground: colorType.typeNames,
        },
      },
      {
        name: 'Keyword Control',
        scope: 'keyword.control',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Control Elements',
        scope: 'control.elements, keyword.operator.less',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Methods',
        scope: 'keyword.other.special-method',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Storage',
        scope: 'storage',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Storage JS TS',
        scope: 'token.storage',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
        scope:
          'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Java Storage',
        scope: 'token.storage.type.java',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Support',
        scope: 'support.function',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'Support type',
        scope: 'support.type.property-name',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: '[VSCODE-CUSTOM] toml support',
        scope:
          'support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.property-value',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Support type',
        scope: 'support.constant.font-name',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Meta tag',
        scope: 'meta.tag',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Strings',
        scope: 'string',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'Constant other symbol',
        scope: 'constant.other.symbol',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'Integers',
        scope: 'constant.numeric',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Constants',
        scope: 'constant',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Constants',
        scope: 'punctuation.definition.constant',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Tags',
        scope: 'entity.name.tag',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Attributes',
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Attribute IDs',
        scope: 'entity.other.attribute-name.id',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Attribute class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Selector',
        scope: 'meta.selector',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Headings',
        scope: 'markup.heading',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Headings',
        scope:
          'markup.heading punctuation.definition.heading, entity.name.section',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Units',
        scope: 'keyword.other.unit',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Bold',
        scope: 'markup.bold,todo.bold',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Bold',
        scope: 'punctuation.definition.bold',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'markup Italic',
        scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'emphasis md',
        scope: 'emphasis md',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown headings',
        scope: 'entity.name.section.markdown',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
        scope: 'punctuation.definition.heading.markdown',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'punctuation.definition.list.begin.markdown',
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown heading setext',
        scope: 'markup.heading.setext',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
        scope: 'punctuation.definition.bold.markdown',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.markdown',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw punctuation',
        scope: 'punctuation.definition.raw.markdown',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
        scope: 'punctuation.definition.list.markdown',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
        scope: [
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
          'punctuation.definition.metadata.markdown',
        ],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'beginning.punctuation.definition.list.markdown',
        scope: ['beginning.punctuation.definition.list.markdown'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
        scope: 'punctuation.definition.metadata.markdown',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
        scope:
          'markup.underline.link.markdown,markup.underline.link.image.markdown',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
        scope:
          'string.other.link.title.markdown,string.other.link.description.markdown',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw',
        scope: 'markup.raw.monospace.asciidoc',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition',
        scope: 'punctuation.definition.asciidoc',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc List Punctuation Definition',
        scope: 'markup.list.asciidoc',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc underline link',
        scope: 'markup.link.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Asciidoc link name',
        scope: 'string.unquoted.asciidoc,markup.other.url.asciidoc',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Regular Expressions',
        scope: 'string.regexp',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'Embedded',
        scope: 'punctuation.section.embedded, variable.interpolation',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Embedded',
        scope:
          'punctuation.section.embedded.begin,punctuation.section.embedded.end',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal',
        settings: {
          foreground: colorType.illegalTokens,
        },
      },
      {
        name: 'illegal',
        scope: 'invalid.illegal.bad-ampersand.html',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        scope: 'invalid.illegal.unrecognized-tag.html',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Broken',
        scope: 'invalid.broken',
        settings: {
          foreground: colorType.illegalTokens,
        },
      },
      {
        name: 'Deprecated',
        scope: 'invalid.deprecated',
        settings: {
          foreground: colorType.illegalTokens,
        },
      },
      {
        name: 'html Deprecated',
        scope: 'invalid.deprecated.entity.other.attribute-name.html',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'Unimplemented',
        scope: 'invalid.unimplemented',
        settings: {
          foreground: colorType.illegalTokens,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
        scope:
          'source.json meta.structure.dictionary.json > string.quoted.json',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
        scope:
          'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
        scope:
          'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
        scope:
          'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Property Name',
        scope: 'support.type.property-name.json',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
        scope: 'support.type.property-name.json punctuation',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'laravel blade tag',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'laravel blade @',
        scope:
          'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'use statement for other classes',
        scope:
          'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'error suppression',
        scope: 'keyword.operator.error-control.php',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'php instanceof',
        scope: 'keyword.operator.type.php',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'style double quoted array index normal begin',
        scope: 'punctuation.section.array.begin.php',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'style double quoted array index normal end',
        scope: 'punctuation.section.array.end.php',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'php illegal.non-null-typehinted',
        scope: 'invalid.illegal.non-null-typehinted.php',
        settings: {
          foreground: colorType.illegalSyntax,
        },
      },
      {
        name: 'php types',
        scope:
          'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'php call-function',
        scope:
          'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'php function-resets',
        scope:
          'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'support php constants',
        scope: 'support.constant.core.rust',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'support php constants',
        scope:
          'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'php goto',
        scope: 'entity.name.goto-label.php,support.other.php',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'php logical/bitwise operator',
        scope:
          'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'php regexp operator',
        scope: 'keyword.operator.regexp.php',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'php comparison',
        scope: 'keyword.operator.comparison.php',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'php heredoc/nowdoc',
        scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'python function decorator @',
        scope: 'meta.function.decorator.python',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'python function support',
        scope:
          'support.token.decorator.python,meta.function.decorator.identifier.python',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'parameter function js/ts',
        scope: 'function.parameter',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'brace function',
        scope: 'function.brace',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'parameter function ruby cs',
        scope: 'function.parameter.ruby, function.parameter.cs',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'constant.language.symbol.ruby',
        scope: 'constant.language.symbol.ruby',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'constant.language.symbol.hashkey.ruby',
        scope: 'constant.language.symbol.hashkey.ruby',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'rgb-value',
        scope: 'rgb-value',
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'rgb value',
        scope: 'inline-color-decoration rgb-value',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'rgb value less',
        scope: 'less rgb-value',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'sass selector',
        scope: 'selector.sass',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'ts primitive/builtin types',
        scope:
          'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'block scope',
        scope: 'block.scope.end,block.scope.begin',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'cs storage type',
        scope: 'storage.type.cs',
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'cs local variable',
        scope: 'entity.name.variable.local.cs',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        scope: 'token.info-token',
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        scope: 'token.warn-token',
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        scope: 'token.error-token',
        settings: {
          foreground: colorType.illegalSyntax,
        },
      },
      {
        scope: 'token.debug-token',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Import module JS',
        scope: ['keyword.operator.module'],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'js Flowtype',
        scope: ['support.type.type.flowtype'],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'js Flow',
        scope: ['support.type.primitive'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'js class prop',
        scope: ['meta.property.object'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'js func parameter',
        scope: ['variable.parameter.function.js'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'js template literals begin',
        scope: ['keyword.other.template.begin'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'js template literals end',
        scope: ['keyword.other.template.end'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'js template literals variable braces begin',
        scope: ['keyword.other.substitution.begin'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'js template literals variable braces end',
        scope: ['keyword.other.substitution.end'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'js operator.assignment',
        scope: ['keyword.operator.assignment'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'go operator',
        scope: ['keyword.operator.assignment.go'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'go operator',
        scope: [
          'keyword.operator.arithmetic.go',
          'keyword.operator.address.go',
        ],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'c arithmetic',
        scope: [
          'keyword.operator.arithmetic.c',
          'keyword.operator.arithmetic.cpp',
        ],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'Go package name',
        scope: ['entity.name.package.go'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'elm prelude',
        scope: ['support.type.prelude.elm'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'elm constant',
        scope: ['support.constant.elm'],
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: 'template literal',
        scope: ['punctuation.quasi.element'],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'html/pug (jade) escaped characters and entities',
        scope: ['constant.character.entity'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
        scope: [
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.pseudo-class',
        ],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'Clojure globals',
        scope: ['entity.global.clojure'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Clojure symbols',
        scope: ['meta.symbol.clojure'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Clojure constants',
        scope: ['constant.keyword.clojure'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'CoffeeScript Function Argument',
        scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Ini Default Text',
        scope: ['source.ini'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'Makefile prerequisities',
        scope: ['meta.scope.prerequisites.makefile'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Makefile text colour',
        scope: ['source.makefile'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Groovy import names',
        scope: ['storage.modifier.import.groovy'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Groovy Methods',
        scope: ['meta.method.groovy'],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'Groovy Variables',
        scope: ['meta.definition.variable.name.groovy'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Groovy Inheritance',
        scope: ['meta.definition.class.inherited.classes.groovy'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'HLSL Semantic',
        scope: ['support.variable.semantic.hlsl'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'HLSL Types',
        scope: [
          'support.type.texture.hlsl',
          'support.type.sampler.hlsl',
          'support.type.object.hlsl',
          'support.type.object.rw.hlsl',
          'support.type.fx.hlsl',
          'support.type.object.hlsl',
        ],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'SQL Variables',
        scope: ['text.variable', 'text.bracketed'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'types',
        scope: ['support.type.swift', 'support.type.vb.asp'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'heading 1, keyword',
        scope: ['entity.name.function.xi'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'heading 2, callable',
        scope: ['entity.name.class.xi'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'heading 3, property',
        scope: ['constant.character.character-class.regexp.xi'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'heading 4, type, class, interface',
        scope: ['constant.regexp.xi'],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        name: 'heading 5, enums, preprocessor, constant, decorator',
        scope: ['keyword.control.xi'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        name: 'heading 6, number',
        scope: ['invalid.xi'],
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'string',
        scope: ['beginning.punctuation.definition.quote.markdown.xi'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'markup',
        scope: ['beginning.punctuation.definition.list.markdown.xi'],
        settings: {
          foreground: colorType.comments,
        },
      },
      {
        name: 'link',
        scope: ['constant.character.xi'],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'accent',
        scope: ['accent.xi'],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        name: 'wikiword',
        scope: ['wikiword.xi'],
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        name: "language operators like '+', '-' etc",
        scope: ['constant.other.color.rgb-value.xi'],
        settings: {
          foreground: colorType.illegalTokens,
        },
      },
      {
        name: 'elements to dim',
        scope: ['punctuation.definition.tag.xi'],
        settings: {
          foreground: colorType.markupElements,
        },
      },
      {
        name: 'C++/C#',
        scope: [
          'entity.name.label.cs',
          'entity.name.scope-resolution.function.call',
          'entity.name.scope-resolution.function.definition',
        ],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'Markdown underscore-style headers',
        scope: [
          'entity.name.label.cs',
          'markup.heading.setext.1.markdown',
          'markup.heading.setext.2.markdown',
        ],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'meta.brace.square',
        scope: [' meta.brace.square'],
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: colorType.comments,
        },
      },
      {
        name: '[VSCODE-CUSTOM] Markdown Quote',
        scope: 'markup.quote.markdown',
        settings: {
          foreground: colorType.markupElements,
        },
      },
      {
        name: 'punctuation.definition.block.sequence.item.yaml',
        scope: 'punctuation.definition.block.sequence.item.yaml',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        scope: [
          'constant.language.symbol.elixir',
          'constant.language.symbol.double-quoted.elixir',
        ],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        scope: ['entity.name.variable.parameter.cs'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        scope: ['entity.name.variable.field.cs'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Deleted',
        scope: 'markup.deleted',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'Inserted',
        scope: 'markup.inserted',
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        name: 'Underline',
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        name: 'punctuation.section.embedded.begin.php',
        scope: [
          'punctuation.section.embedded.begin.php',
          'punctuation.section.embedded.end.php',
        ],
        settings: {
          foreground: colorType.embeddedCodeDelimiters,
        },
      },
      {
        name: 'support.other.namespace.php',
        scope: ['support.other.namespace.php'],
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Latex variable parameter',
        scope: ['variable.parameter.function.latex'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'variable.other.object',
        scope: ['variable.other.object'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'variable.other.constant.property',
        scope: ['variable.other.constant.property'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'entity.other.inherited-class',
        scope: ['entity.other.inherited-class'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        name: 'c variable readwrite',
        scope: 'variable.other.readwrite.c',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        name: 'php scope',
        scope:
          'entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php',
        settings: {
          foreground: colorType.pointerOperators,
        },
      },
      {
        name: 'Assembly',
        scope: ['constant.numeric.decimal.asm.x86_64'],
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        scope: ['support.other.parenthesis.regexp'],
        settings: {
          foreground: colorType.numericConstants,
        },
      },
      {
        scope: ['constant.character.escape'],
        settings: {
          foreground: colorType.assignmentOperators,
        },
      },
      {
        scope: ['string.regexp'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        scope: ['log.info'],
        settings: {
          foreground: colorType.strings,
        },
      },
      {
        scope: ['log.warning'],
        settings: {
          foreground: colorType.constants,
        },
      },
      {
        scope: ['log.error'],
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        scope: 'keyword.operator.expression.is',
        settings: {
          foreground: colorType.storageTypes,
        },
      },
      {
        scope: 'entity.name.label',
        settings: {
          foreground: colorType.variables,
        },
      },
      {
        scope: [
          'support.class.math.block.environment.latex',
          'constant.other.general.math.tex',
        ],
        settings: {
          foreground: colorType.functionNames,
        },
      },
      {
        scope: ['constant.character.math.tex'],
        settings: {
          foreground: colorType.strings,
        },
      },
      // GLSL tokenColors rules
      {
        name: 'GLSL: Preprocessor Directives',
        scope: ['keyword.directive.preprocessor.glsl'],
        settings: {
          foreground: colorType.glslPreprocessorDirective,
        },
      },
      {
        name: 'GLSL: Numeric Constants',
        scope: ['constant.numeric.glsl'],
        settings: {
          foreground: colorType.glslNumericConstant,
        },
      },
      {
        name: 'GLSL: Storage Modifiers',
        scope: ['storage.modifier.glsl'],
        settings: {
          foreground: colorType.glslStorageModifier,
        },
      },
      {
        name: 'GLSL: Storage Types',
        scope: ['storage.type.glsl'],
        settings: {
          foreground: colorType.glslStorageType,
        },
      },
      {
        name: 'GLSL: Assignment Operators',
        scope: ['keyword.operator.assignment.glsl'],
        settings: {
          foreground: colorType.glslAssignmentOperator,
        },
      },
      {
        name: 'GLSL: Arithmetic Operators',
        scope: ['keyword.operator.arithmetic.glsl'],
        settings: {
          foreground: colorType.glslArithmeticOperator,
        },
      },
      {
        name: 'GLSL: Support Functions',
        scope: ['support.function.glsl'],
        settings: {
          foreground: colorType.glslSupportFunction,
        },
      },
      {
        name: 'GLSL: Support Variables',
        scope: ['support.variable.glsl'],
        settings: {
          foreground: colorType.glslSupportVariable,
        },
      },
      {
        name: 'GLSL: Precision Modifiers',
        scope: ['storage.modifier.precision.glsl'],
        settings: {
          foreground: colorType.glslPrecisionModifier,
        },
      },
      {
        name: 'GLSL: Bitwise Operators',
        scope: ['keyword.operator.bitwise.glsl'],
        settings: {
          foreground: colorType.glslBitwiseOperator,
        },
      },
      {
        name: 'GLSL: Comparative Operators',
        scope: ['keyword.operator.comparative.glsl'],
        settings: {
          foreground: colorType.glslComparativeOperator,
        },
      },
      {
        name: 'GLSL: Increment/Decrement Operators',
        scope: ['keyword.operator.increment-or-decrement.glsl'],
        settings: {
          foreground: colorType.glslIncrementDecrementOperator,
        },
      },
      {
        name: 'GLSL: Default Text',
        scope: ['source.glsl'],
        settings: {
          foreground: colorType.glslDefaultText,
        },
      },
    ],
    italic: [
      {
        name: 'Comments',
        scope: 'comment, punctuation.definition.comment',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'js/ts italic',
        scope:
          'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'comment',
        scope: 'comment.line.double-slash,comment.block.documentation',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'markup.italic.markdown',
        scope: 'markup.italic.markdown',
        settings: {
          fontStyle: 'italic',
        },
      },
    ],
  },
}
