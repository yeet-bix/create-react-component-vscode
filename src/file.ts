import { basename } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

interface VSCodeWindow {
    showErrorMessage(message: string): Thenable<string>;
    showWarningMessage(message: string): Thenable<string>;
}

const createFolder = (path: string, window: VSCodeWindow): void => {
    const folderName = basename(path);
    try {
        existsSync(path) ? window.showWarningMessage(`Folder ${folderName} already exists`) : mkdirSync(path);
    } catch (err) {
        window.showErrorMessage(`Something went wrong creating ${folderName} folder`);
    }
};

const createFile = (path: string, contents: string, window: VSCodeWindow) => {
    const fileName = basename(path);
    try {
        existsSync(path) ? window.showWarningMessage(`File ${fileName} already exists`) : writeFileSync(path, contents);
    } catch (err) {
        window.showErrorMessage(`Something went wrong creating ${fileName} file`);
    }
};

export { createFolder, createFile };
