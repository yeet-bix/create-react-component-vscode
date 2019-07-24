import * as vscode from 'vscode';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { componentTemplate, testTemplate } from './template';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand(
        'extension.createReactComponent',
        async (uri: vscode.Uri) => {
            const componentName = await vscode.window.showInputBox({
                prompt: `Create component in ${uri.path}`,
                placeHolder: 'MyComponent',
            });

            if (componentName !== undefined && componentName.length > 0) {
                const dir = `${uri.path}/${componentName}`;
                if (!existsSync(dir)) {
                    mkdirSync(dir);
                    writeFileSync(
                        `${dir}/${componentName}.tsx`,
                        componentTemplate({ name: componentName }),
                    );
                    writeFileSync(
                        `${dir}/${componentName}.test.tsx`,
                        testTemplate({ name: componentName }),
                    );
                    writeFileSync(`${dir}/index.ts`, testTemplate({ name: componentName }));
                } else {
                    vscode.window.showErrorMessage('Folder already exists');
                }
            } else {
                vscode.window.showErrorMessage('Must provide component name');
            }
        },
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
