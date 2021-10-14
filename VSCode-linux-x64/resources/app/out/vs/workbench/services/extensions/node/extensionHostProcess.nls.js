/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/define("vs/workbench/services/extensions/node/extensionHostProcess.nls",{"vs/base/common/date":["in {0}","now","{0} sec ago","{0} secs ago","{0} sec","{0} secs","{0} min ago","{0} mins ago","{0} min","{0} mins","{0} hr ago","{0} hrs ago","{0} hr","{0} hrs","{0} day ago","{0} days ago","{0} day","{0} days","{0} wk ago","{0} wks ago","{0} wk","{0} wks","{0} mo ago","{0} mos ago","{0} mo","{0} mos","{0} yr ago","{0} yrs ago","{0} yr","{0} yrs"],"vs/base/common/errorMessage":["{0}: {1}","A system error occurred ({0})","An unknown error occurred. Please consult the log for more details.","An unknown error occurred. Please consult the log for more details.","{0} ({1} errors in total)","An unknown error occurred. Please consult the log for more details."],"vs/base/node/processes":["Can't execute a shell command on a UNC drive."],"vs/editor/common/config/editorOptions":["The editor will use platform APIs to detect when a Screen Reader is attached.","The editor will be permanently optimized for usage with a Screen Reader. Word wrapping will be disabled.","The editor will never be optimized for usage with a Screen Reader.","Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.","Controls whether a space character is inserted when commenting.","Controls if empty lines should be ignored with toggle, add or remove actions for line comments.","Controls whether copying without a selection copies the current line.","Controls whether the cursor should jump to find matches while typing.","Never seed search string from the editor selection.","Always seed search string from the editor selection, including word at cursor position.","Only seed search string from the editor selection.","Controls whether the search string in the Find Widget is seeded from the editor selection.","Never turn on Find in Selection automatically (default).","Always turn on Find in Selection automatically.","Turn on Find in Selection automatically when multiple lines of content are selected.","Controls the condition for turning on Find in Selection automatically.","Controls whether the Find Widget should read or modify the shared find clipboard on macOS.","Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.","Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.","Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property.","Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.","Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property.","Controls the font size in pixels.",'Only "normal" and "bold" keywords or numbers between 1 and 1000 are allowed.','Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.',"Show peek view of the results (default)","Go to the primary result and show a peek view","Go to the primary result and enable peek-less navigation to others","This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead.","Controls the behavior the 'Go to Definition'-command when multiple target locations exist.","Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.","Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.","Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.","Controls the behavior the 'Go to References'-command when multiple target locations exist.","Alternative command id that is being executed when the result of 'Go to Definition' is the current location.","Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.","Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.","Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.","Alternative command id that is being executed when the result of 'Go to Reference' is the current location.","Controls whether the hover is shown.","Controls the delay in milliseconds after which the hover is shown.","Controls whether the hover should remain visible when mouse is moved over it.","Enables the code action lightbulb in the editor.","Enables the inlay hints in the editor.","Controls font size of inlay hints in the editor. A default of 90% of `#editor.fontSize#` is used when the configured value is less than `5` or greater than the editor font size.","Controls font family of inlay hints in the editor. When set to empty, the `#editor.fontFamily#` is used.",`Controls the line height. 
 - Use 0 to automatically compute the line height from the font size.
 - Values between 0 and 8 will be used as a multiplier with the font size.
 - Values greater than or equal to 8 will be used as effective values.`,"Controls whether the minimap is shown.","The minimap has the same size as the editor contents (and might scroll).","The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling).","The minimap will shrink as necessary to never be larger than the editor (no scrolling).","Controls the size of the minimap.","Controls the side where to render the minimap.","Controls when the minimap slider is shown.","Scale of content drawn in the minimap: 1, 2 or 3.","Render the actual characters on a line as opposed to color blocks.","Limit the width of the minimap to render at most a certain number of columns.","Controls the amount of space between the top edge of the editor and the first line.","Controls the amount of space between the bottom edge of the editor and the last line.","Enables a pop-up that shows parameter documentation and type information as you type.","Controls whether the parameter hints menu cycles or closes when reaching the end of the list.","Enable quick suggestions inside strings.","Enable quick suggestions inside comments.","Enable quick suggestions outside of strings and comments.","Controls whether suggestions should automatically show up while typing.","Line numbers are not rendered.","Line numbers are rendered as absolute number.","Line numbers are rendered as distance in lines to cursor position.","Line numbers are rendered every 10 lines.","Controls the display of line numbers.","Number of monospace characters at which this editor ruler will render.","Color of this editor ruler.","Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.","The vertical scrollbar will be visible only when necessary.","The vertical scrollbar will always be visible.","The vertical scrollbar will always be hidden.","Controls the visibility of the vertical scrollbar.","The horizontal scrollbar will be visible only when necessary.","The horizontal scrollbar will always be visible.","The horizontal scrollbar will always be hidden.","Controls the visibility of the horizontal scrollbar.","The width of the vertical scrollbar.","The height of the horizontal scrollbar.","Controls whether clicks scroll by page or jump to click position.","Controls whether to automatically show inline suggestions in the editor.","Controls whether bracket pair colorization is enabled or not. Use 'workbench.colorCustomizations' to override the bracket highlight colors.","Controls whether bracket pair guides are enabled or not.","Controls whether the editor should render indent guides.","Controls whether the editor should highlight the active indent guide.","Insert suggestion without overwriting text right of the cursor.","Insert suggestion and overwrite text right of the cursor.","Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.","Controls whether filtering and sorting suggestions accounts for small typos.","Controls whether sorting favors words that appear close to the cursor.","Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).","Controls whether an active snippet prevents quick suggestions.","Controls whether to show or hide icons in suggestions.","Controls the visibility of the status bar at the bottom of the suggest widget.","Controls whether to preview the suggestion outcome in the editor.","Controls whether suggest details show inline with the label or only in the details widget","This setting is deprecated. The suggest widget can now be resized.","This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.","When enabled IntelliSense shows `method`-suggestions.","When enabled IntelliSense shows `function`-suggestions.","When enabled IntelliSense shows `constructor`-suggestions.","When enabled IntelliSense shows `deprecated`-suggestions.","When enabled IntelliSense shows `field`-suggestions.","When enabled IntelliSense shows `variable`-suggestions.","When enabled IntelliSense shows `class`-suggestions.","When enabled IntelliSense shows `struct`-suggestions.","When enabled IntelliSense shows `interface`-suggestions.","When enabled IntelliSense shows `module`-suggestions.","When enabled IntelliSense shows `property`-suggestions.","When enabled IntelliSense shows `event`-suggestions.","When enabled IntelliSense shows `operator`-suggestions.","When enabled IntelliSense shows `unit`-suggestions.","When enabled IntelliSense shows `value`-suggestions.","When enabled IntelliSense shows `constant`-suggestions.","When enabled IntelliSense shows `enum`-suggestions.","When enabled IntelliSense shows `enumMember`-suggestions.","When enabled IntelliSense shows `keyword`-suggestions.","When enabled IntelliSense shows `text`-suggestions.","When enabled IntelliSense shows `color`-suggestions.","When enabled IntelliSense shows `file`-suggestions.","When enabled IntelliSense shows `reference`-suggestions.","When enabled IntelliSense shows `customcolor`-suggestions.","When enabled IntelliSense shows `folder`-suggestions.","When enabled IntelliSense shows `typeParameter`-suggestions.","When enabled IntelliSense shows `snippet`-suggestions.","When enabled IntelliSense shows `user`-suggestions.","When enabled IntelliSense shows `issues`-suggestions.","Whether leading and trailing whitespace should always be selected.","Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.","Only accept a suggestion with `Enter` when it makes a textual change.","Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.","Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default.","Editor content","Use language configurations to determine when to autoclose brackets.","Autoclose brackets only when the cursor is to the left of whitespace.","Controls whether the editor should automatically close brackets after the user adds an opening bracket.","Remove adjacent closing quotes or brackets only if they were automatically inserted.","Controls whether the editor should remove adjacent closing quotes or brackets when deleting.","Type over closing quotes or brackets only if they were automatically inserted.","Controls whether the editor should type over closing quotes or brackets.","Use language configurations to determine when to autoclose quotes.","Autoclose quotes only when the cursor is to the left of whitespace.","Controls whether the editor should automatically close quotes after the user adds an opening quote.","The editor will not insert indentation automatically.","The editor will keep the current line's indentation.","The editor will keep the current line's indentation and honor language defined brackets.","The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages.","The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.","Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.","Use language configurations to determine when to automatically surround selections.","Surround with quotes but not brackets.","Surround with brackets but not quotes.","Controls whether the editor should automatically surround selections when typing quotes or brackets.","Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.","Controls whether the editor shows CodeLens.","Controls the font family for CodeLens.","Controls the font size in pixels for CodeLens. When set to `0`, the 90% of `#editor.fontSize#` is used.","Controls whether the editor should render the inline color decorators and color picker.","Enable that the selection with the mouse and keys is doing column selection.","Controls whether syntax highlighting should be copied into the clipboard.","Control the cursor animation style.","Controls whether the smooth caret animation should be enabled.","Controls the cursor style.","Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.","`cursorSurroundingLines` is enforced only when triggered via the keyboard or API.","`cursorSurroundingLines` is enforced always.","Controls when `cursorSurroundingLines` should be enforced.","Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.","Controls whether the editor should allow moving selections via drag and drop.","Scrolling speed multiplier when pressing `Alt`.","Controls whether the editor has code folding enabled.","Use a language-specific folding strategy if available, else the indentation-based one.","Use the indentation-based folding strategy.","Controls the strategy for computing folding ranges.","Controls whether the editor should highlight folded ranges.","Controls whether the editor automatically collapses import ranges.","Controls whether clicking on the empty content after a folded line will unfold the line.","Controls the font family.","Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.","Controls whether the editor should automatically format the line after typing.","Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.","Controls whether the cursor should be hidden in the overview ruler.","Controls the letter spacing in pixels.","Controls whether the editor has linked editing enabled. Depending on the language, related symbols, e.g. HTML tags, are updated while editing.","Controls whether the editor should detect links and make them clickable.","Highlight matching brackets.","A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.","Zoom the font of the editor when using mouse wheel and holding `Ctrl`.","Merge multiple cursors when they are overlapping.","Maps to `Control` on Windows and Linux and to `Command` on macOS.","Maps to `Alt` on Windows and Linux and to `Option` on macOS.","The modifier to be used to add multiple cursors with the mouse. The Go To Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. [Read more](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).","Each cursor pastes a single line of the text.","Each cursor pastes the full text.","Controls pasting when the line count of the pasted text matches the cursor count.","Controls whether the editor should highlight semantic symbol occurrences.","Controls whether a border should be drawn around the overview ruler.","Focus the tree when opening peek","Focus the editor when opening peek","Controls whether to focus the inline editor or the tree in the peek widget.","Controls whether the Go to Definition mouse gesture always opens the peek widget.","Controls the delay in milliseconds after which quick suggestions will show up.","Controls whether the editor auto renames on type.","Deprecated, use `editor.linkedEditing` instead.","Controls whether the editor should render control characters.","Render last line number when the file ends with a newline.","Highlights both the gutter and the current line.","Controls how the editor should render the current line highlight.","Controls if the editor should render the current line highlight only when the editor is focused.","Render whitespace characters except for single spaces between words.","Render whitespace characters only on selected text.","Render only trailing whitespace characters.","Controls how the editor should render whitespace characters.","Controls whether selections should have rounded corners.","Controls the number of extra characters beyond which the editor will scroll horizontally.","Controls whether the editor will scroll beyond the last line.","Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.","Controls whether the Linux primary clipboard should be supported.","Controls whether the editor should highlight matches similar to the selection.","Always show the folding controls.","Only show the folding controls when the mouse is over the gutter.","Controls when the folding controls on the gutter are shown.","Controls fading out of unused code.","Controls strikethrough deprecated variables.","Show snippet suggestions on top of other suggestions.","Show snippet suggestions below other suggestions.","Show snippets suggestions with other suggestions.","Do not show snippet suggestions.","Controls whether snippets are shown with other suggestions and how they are sorted.","Controls whether the editor will scroll using an animation.","Font size for the suggest widget. When set to `0`, the value of `#editor.fontSize#` is used.","Line height for the suggest widget. When set to `0`, the value of `#editor.lineHeight#` is used. The minimum value is 8.","Controls whether suggestions should automatically show up when typing trigger characters.","Always select the first suggestion.","Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently.","Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.","Controls how suggestions are pre-selected when showing the suggest list.","Tab complete will insert the best matching suggestion when pressing tab.","Disable tab completions.","Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.","Enables tab completions.","Unusual line terminators are automatically removed.","Unusual line terminators are ignored.","Unusual line terminators prompt to be removed.","Remove unusual line terminators that might cause problems.","Inserting and deleting whitespace follows tab stops.","Characters that will be used as word separators when doing word related navigations or operations.","Lines will never wrap.","Lines will wrap at the viewport width.","Lines will wrap at `#editor.wordWrapColumn#`.","Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.","Controls how lines should wrap.","Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.","No indentation. Wrapped lines begin at column 1.","Wrapped lines get the same indentation as the parent.","Wrapped lines get +1 indentation toward the parent.","Wrapped lines get +2 indentation toward the parent.","Controls the indentation of wrapped lines.","Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width.","Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.","Controls the algorithm that computes wrapping points."],"vs/platform/configuration/common/configurationRegistry":["Default Language Configuration Overrides","Configure settings to be overridden for {0} language.","Configure editor settings to be overridden for a language.","This setting does not support per-language configuration.","Cannot register an empty property","Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.","Cannot register '{0}'. This property is already registered."],"vs/platform/extensionManagement/common/extensionManagement":["Extensions","Preferences"],"vs/platform/extensions/common/extensionValidator":["Could not parse `engines.vscode` value {0}. Please use, for example: ^1.22.0, ^1.22.x, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.","Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.","Extension is not compatible with Code {0}. Extension requires: {1}."],"vs/platform/externalTerminal/node/externalTerminalService":["VS Code Console","Script '{0}' failed with exit code {1}","'{0}' not supported","Press any key to continue...","'{0}' failed with exit code {1}","can't find terminal application '{0}'"],"vs/platform/files/common/files":["Unknown Error","{0}B","{0}KB","{0}MB","{0}GB","{0}TB"],"vs/platform/markers/common/markers":["Error","Warning","Info"],"vs/platform/theme/common/iconRegistry":["The id of the font to use. If not set, the font that is defined first is used.","The font character associated with the icon definition.","Icon for the close action in widgets.","Icon for goto previous editor location.","Icon for goto next editor location."],"vs/platform/workspaces/common/workspaces":["Code Workspace"],"vs/workbench/api/common/extHostDiagnostics":["Not showing {0} further errors and warnings."],"vs/workbench/api/common/extHostExtensionService":["Cannot load test runner.","Path {0} does not point to a valid extension test runner."],"vs/workbench/api/common/extHostProgress":["{0} (Extension)"],"vs/workbench/api/common/extHostStatusBar":["{0} (Extension)","Extension Status"],"vs/workbench/api/common/extHostTerminalService":["Could not find the terminal with id {0} on the extension host"],"vs/workbench/api/common/extHostTreeViews":["No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","No tree view with id '{0}' registered.","Element with id {0} is already registered"],"vs/workbench/api/common/extHostWorkspace":["Extension '{0}' failed to update workspace folders: {1}"],"vs/workbench/api/node/extHostDebugService":["Debug Process"],"vs/workbench/api/node/extHostTunnelService":["Private","Public"],"vs/workbench/common/editor":["Text Editor","Built-in","Whether the active editor is dirty","Whether the active editor is not in preview mode","Whether the active editor is pinned","Whether the active editor is readonly","Whether the active editor can revert","The identifier of the active editor","The available editor identifiers that are usable for the active editor","Whether a text compare editor is visible","Whether a text compare editor is active","Whether a side by side editor is active","The number of opened editor groups","Whether the active editor group is empty","The index of the active editor group","Whether the active editor group is the last group","Whether the active editor group is locked","Whether there are multiple editor groups opened","Whether an editor is open","Whether Zen mode is enabled","Whether centered layout is enabled","Whether editors split vertically","Whether the editor area is visible"],"vs/workbench/common/views":["Default view icon.","A view with id '{0}' is already registered","The identifier of the view that has keyboard focus"],"vs/workbench/contrib/debug/common/abstractDebugAdapter":["Timeout after {0} ms for '{1}'"],"vs/workbench/contrib/debug/node/debugAdapter":["Debug adapter executable '{0}' does not exist.","Cannot determine executable for debug adapter '{0}'.","Unable to launch debug adapter from '{0}'.","Unable to launch debug adapter."],"vs/workbench/contrib/search/common/queryBuilder":["Workspace folder does not exist: {0}"],"vs/workbench/contrib/tasks/common/taskService":["Whether CustomExecution tasks are supported. Consider using in the when clause of a 'taskDefinition' contribution.","Whether ShellExecution tasks are supported. Consider using in the when clause of a 'taskDefinition' contribution.","Whether ProcessExecution tasks are supported. Consider using in the when clause of a 'taskDefinition' contribution."],"vs/workbench/services/configurationResolver/common/variableResolver":["Variable {0} can not be resolved. Please open an editor.","Variable {0}: can not find workspace folder of '{1}'.","Variable {0} can not be resolved. No such folder '{1}'.","Variable {0} can not be resolved in a multi folder workspace. Scope this variable using ':' and a workspace folder name.","Variable {0} can not be resolved. Please open a folder.","Variable {0} can not be resolved because no environment variable name is given.","Variable {0} can not be resolved because setting '{1}' not found.","Variable {0} can not be resolved because '{1}' is a structured value.","Variable {0} can not be resolved because no settings name is given.","Variable {0} can not be resolved. Make sure to have a line selected in the active editor.","Variable {0} can not be resolved. Make sure to have some text selected in the active editor.","Variable {0} can not be resolved because the command has no value."]});

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ee8c7def80afc00dd6e593ef12f37756d8f504ea/core/vs/workbench/services/extensions/node/extensionHostProcess.nls.js.map
