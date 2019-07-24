import * as vscode from 'vscode';
import { createFolder, createFile } from './file';
import { componentTemplate, testTemplate, indexTemplate } from './template';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.createReactComponent', async (uri: vscode.Uri) => {
        const componentName = await vscode.window.showInputBox({
            prompt: `Create component in ${uri.path}`,
            placeHolder: 'MyComponent',
        });

        if (componentName !== undefined && componentName.length > 0) {
            const dir = `${uri.path}/${componentName}`;
            const options = { name: componentName };

            createFolder(dir, vscode.window);
            createFile(`${dir}/${componentName}.tsx`, componentTemplate(options), vscode.window);
            createFile(`${dir}/${componentName}.test.tsx`, testTemplate(options), vscode.window);
            createFile(`${dir}/index.ts`, indexTemplate(options), vscode.window);
        } else {
            vscode.window.showErrorMessage('Must provide component name');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
