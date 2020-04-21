import * as vscode from 'vscode';
import { createFolder, createFile } from './file';
import { typescriptComponentTemplate, typescriptTestTemplate } from './template/typescriptTemplate';
import { javascriptComponentTemplate, javascriptTestTemplate } from './template/javascriptTemplate';
import { indexTemplate } from './template/indexTemplate';
import TemplateOptions, { TestLibrary, FunctionType, FileType, FileExtension } from './template/templateOptions';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.createReactComponent', async (uri: vscode.Uri) => {
        const componentName = await vscode.window.showInputBox({
            prompt: `Create component in ${uri.path}`,
            placeHolder: 'MyComponent',
        });

        if (componentName !== undefined && componentName.length > 0) {
            const config = vscode.workspace.getConfiguration('createReactComponent');
            const isTypescript = config.get('language') === 'typescript';

            const options: TemplateOptions = {
                name: componentName,
                testLibrary: config.get('testingLibrary') as TestLibrary,
                cleanup: config.get('testingLibrary.cleanup') as boolean,
                functionType: config.get('functionType') as FunctionType,
                fileExtension: config.get('fileExtension') as FileExtension
            };
            const createModule = config.get('createModule') as boolean;
            const dir = createModule ? `${uri.path}/${componentName}` : uri.path;
            const indexUri = `${dir}/index.${isTypescript ? 'ts' : 'js'}`;
            const isWithX = options.fileExtension  === "withX"
            const typescriptFileExtension = isWithX ? 'tsx' : 'ts';
            const javascriptFileExtension = isWithX ? 'jsx' : 'js' ;
            const fileExtension = isTypescript ? typescriptFileExtension : javascriptFileExtension;
            const componentUri = `${dir}/${componentName}.${fileExtension}`;
            const testUri = `${dir}/${componentName}.test.${fileExtension}`;

            if (createModule) {
                createFolder(dir, vscode.window);
                createFile(indexUri, indexTemplate(options), vscode.window);
            }

            createFile(
                componentUri,
                isTypescript ? typescriptComponentTemplate(options) : javascriptComponentTemplate(options),
                vscode.window,
            );
            createFile(
                testUri,
                isTypescript ? typescriptTestTemplate(options) : javascriptTestTemplate(options),
                vscode.window,
            );

            const openFiles = config.get('openFiles') as FileType[];
            const textDocumentShowOptions: vscode.TextDocumentShowOptions = {
                preserveFocus: false,
                preview: false
            }
            if (openFiles.includes("component" as FileType)) {
                const document = await vscode.workspace.openTextDocument(componentUri);
                await vscode.window.showTextDocument(document, textDocumentShowOptions);
            }
            if (openFiles.includes("test" as FileType)) {
                const document = await vscode.workspace.openTextDocument(testUri);
                await vscode.window.showTextDocument(document, textDocumentShowOptions);
            }
            if (openFiles.includes("index" as FileType)) {
                const document = await vscode.workspace.openTextDocument(indexUri);
                await vscode.window.showTextDocument(document, textDocumentShowOptions);
            }
        } else {
            vscode.window.showErrorMessage('Must provide component name');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
