<h2 align="center">
  ⚛️<br>
  <b>Create React Component</b><br>
  <p></p>
  <img src="https://raw.githubusercontent.com/yeet-bix/create-react-component-vscode/master/images/demo.gif">
</h2>

> A simple but powerful vscode extension that removes the hassle of writing annoying boilerplate everytime you want to create component.

### Features

#### Right Click Generate

-   Adds the **Create React Component** command when right clicking any folder. Generates a component based on the current [settings](https://github.com/yeet-bix/create-react-component-vscode/blob/master/README.md#Settings 'Settings').

<br>

---

### Settings

| Name                                          | Description                                                                                                                              |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `createReactComponent.language`               | Specifies what language to generate the component <br><br> Options: <br> - `typescript` (_default_) <br> - `javascript`                  |
| `createReactComponent.testLibrary`            | Specifies what testing library to import <br><br> Options: <br> - `react-testing-library` (_default_) <br> - `enzyme`                    |
| `createReactComponent.testingLibrary.cleanup` | Specifies whether or not to generate cleanup when using react-testing-library <br><br> Options: <br> - `true` <br> - `false` (_default_) |
| `createReactComponent.module`                 | Specifies whether or not to create a module <br><br> Options: <br> - `true` (_default_) <br> - `false`                                   |
| `createReactComponent.functionType`           | Specifies whether to use a normal function or function expression for the component <br><br> Options <br> - `function` (default) <br> - `expression` |