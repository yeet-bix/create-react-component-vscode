import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        'extension.createReactComponent',
        async (uri: vscode.Uri) => {
            const componentName = await vscode.window.showInputBox({
                prompt: `Create component in ${uri.path}`,
                placeHolder: 'MyComponent',
            });

            if (componentName !== undefined && componentName.length > 0) {
                vscode.window.showInformationMessage(componentName);
            } else {
                vscode.window.showErrorMessage('Must provide component name');
            }
        },
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
