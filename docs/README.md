# Bifröst

## About
[Bifröst](https://marketplace.visualstudio.com/items?itemName=TheCodeTherapy.bitfrost-code-theme) is an enhanced VS Code theme featuring comprehensive language support, refined color mappings, and specialized GLSL syntax highlighting. Originally forked from the popular OneDark Pro theme, Bifröst has evolved into a fully independent theme optimized for modern development workflows.

# Screenshots

## Default Theme - Odin Language
![Bifrost Default - Odin](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_odin.png)

## Default Theme - GLSL Shaders
![Bifrost Default - GLSL](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_glsl.png)

## Theme Variants

### Bifröst Darker
![Bifrost Darker - Odin](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_darker_odin.png)
![Bifrost Darker - GLSL](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_darker_glsl.png)

### Bifröst Flat
![Bifrost Flat - Odin](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_flat_odin.png)
![Bifrost Flat - GLSL](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_flat_glsl.png)

### Bifröst Mix
![Bifrost Mix - Odin](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_mix_odin.png)
![Bifrost Mix - GLSL](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_mix_glsl.png)

### Bifröst Night Flat
![Bifrost Night Flat - Odin](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_night_flat_odin.png)
![Bifrost Night Flat - GLSL](https://cdn.jsdelivr.net/gh/TheCodeTherapy/Bifrost/screenshots/bifrost_night_flat_glsl.png)

## Features
- **Enhanced GLSL Support**: Comprehensive syntax highlighting for shader development
- **Multiple Variants**: Bifröst, Flat, Darker, Mix, and Night Flat themes
- **Semantic Token Support**: Improved code readability with advanced tokenization
- **Customizable Colors**: Extensive color customization options
- **Wide Language Support**: Optimized for JavaScript, TypeScript, Python, C++, and more

## Install
Using the Extensions menu, search for **'Bifröst'**. Don't forget to apply the theme (see below).

## Apply
Press `ctrl(⌘) + k`, then press `ctrl(⌘) + t`, you will see a theme selection interface. Choose **'Bifröst'** or any of its variants:
- Bifröst (default)
- Bifröst Flat
- Bifröst Darker
- Bifröst Mix
- Bifröst Night Flat

## Develop
If you see any inconsistencies or missing colors, the following guide will show you how to make your own changes. You can submit your improvements as a merge request to this theme.

Clone this repo
```
$ git clone git@github.com:TheCodeTherapy/Bifrost.git
```
Then run

```
$ yarn
```

Then use vscode open and press `F5` key

Change the `src/themes/themeData.ts` or `src/themes/data/*` file then reload vscode and you will see the change

You also can use `npm run package` to package extension file, the *.vsix file will be generated, then use vscode install the vsix file

### Principle
VS Code will parse code and specify a scope for each piece of syntax. For example, the scope may be a keyword, a constant, or punctuation. **'themeData.ts'** includes the settings that tell VS Code how to format the text accordingly, using these scopes.

### Common scope list

```
comment
constant
constant.character.escape
constant.language
constant.numeric
declaration.section entity.name.section
declaration.tag
deco.folding
entity.name.function
entity.name.tag
entity.name.type
entity.other.attribute-name
entity.other.inherited-class
invalid
invalid.deprecated.trailing-whitespace
keyword
keyword.control.import
keyword.operator.js
markup.heading
markup.list
markup.quote
meta.embedded
meta.preprocessor
meta.section entity.name.section
meta.tag
storage
storage.type.method
string
string source
string.unquoted
support.class
support.constant
support.function
support.type
support.variable
text source
variable
variable.language
variable.other
variable.parameter
```

### GLSL-Specific Scopes
Bifröst includes enhanced support for GLSL (OpenGL Shading Language):

```
glslPreprocessorDirective
glslNumericConstant
glslStorageModifier
glslStorageType
glslConstModifier
glslAssignmentOperator
glslArithmeticOperator
glslSupportFunction
glslSupportVariable
glslPrecisionModifier
glslBitwiseOperator
glslComparativeOperator
glslIncrementDecrementOperator
glslDefaultText
```

### Get code scope
VS Code comes with a built-in tool to easily obtain the scope of a piece of syntax.

Press `ctrl(⌘) + shift + P`, then type `dev`, and choose **"Developer: Inspect TM Scopes"** option.

This will show you the selected token's scope. There are four sections:

- the in-scope piece of syntax
- language, token type, etc.
- the theme rule and shows the foreground color of the token
- the list of scopes for the token

### Add/Change code color
Now you know the rules for the theme, you simply need the code scope and the hex color you would like. Now edit the **'themeData.ts'** file, add/change code snippet like this:

```js
{
      "name": "c++ function",
      "scope": "meta.function.c",
      "settings": {
        "foreground":  colorObj['variables']
      }
}
```

### Reload
Then press `ctrl(⌘) + shift + P`, type **'reload'** and press `enter`. Once the window has reloaded, you will find the color of the code has changed.

## Tweaks & theming
If you want to play around with new colors, use the setting `workbench.colorCustomizations` to customize the currently selected theme.
For example, you can add this snippet in your "settings.json" file:

```json
"workbench.colorCustomizations":{
    "tab.activeBackground": "#282c34",
    "activityBar.background": "#282c34",
    "sideBar.background": "#282c34"
}
```

or use the setting `editor.tokenColorCustomizations`

```json
"editor.tokenColorCustomizations":{
    "[Bifröst]": {
      "textMateRules": [
        {
          "scope":["source.python"],
          "settings": {
            "foreground": "#e06c75"
          }
        }
      ]
    }
}
```

Please check the official documentation,
[Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference) and
[Theme Color](https://code.visualstudio.com/docs/getstarted/themes) , for more helpful information.

[More info](https://code.visualstudio.com/updates/v1_15#_user-definable-syntax-highlighting-colors)

## Contribute
Now you know how to develop the theme, you can fork this repository and send a pull request with your version. The request will be reviewed, and if successful, merged into this theme and published on the VS Code marketplace.

To publish your own theme, please refer to the official documentation: [https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers](https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers)
