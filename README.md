## 基于node和nunjucks模板引擎构造的MVC框架
>自更新的开发环境需全局安装node-supervisor 
````js
  npm install supervisor -g
````
>建议使用VScode,加装Easy LESS拓展
#### 个人偏好的VScode设置
````js
{
    "editor.fontSize": 16,
    "terminal.integrated.shell.windows": "C:\\windows\\Sysnative\\cmd.exe",
    "files.eol": "\n",//ESlint 适应airbnb规则
    "editor.tabSize": 2,//ESlint 适应airbnb规则
    "workbench.iconTheme": "vscode-icons",
    "less.compile": {//Easy Less设置
        "out": "${workspaceRoot}\\static\\css\\"
      },
    "vsicons.dontShowNewVersionMessage": true,
    "emmet.triggerExpansionOnTab": true
}
````
#### 顺便记录一把个人偏好的VScode按键设置 :-D
````js
[
    {
        "key": "ctrl+d",
        "command": "editor.action.deleteLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+k",
        "command": "-editor.action.deleteLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+oem_2",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+a",
        "command": "-editor.action.blockComment",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+f",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+f",
        "command": "-editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+alt+f",
        "command": "workbench.action.findInFiles",
        "when": "!searchInputBoxFocus"
    },
    {
        "key": "ctrl+shift+f",
        "command": "-workbench.action.findInFiles",
        "when": "!searchInputBoxFocus"
    },
    {
        "key": "shift+enter",
        "command": "editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+enter",
        "command": "-editor.action.insertLineAfter",
        "when": "editorTextFocus && !editorReadonly"
    }
]
````
