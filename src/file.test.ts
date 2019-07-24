import * as sinon from 'sinon';
import * as fs from 'fs';
import { expect } from 'chai';
import { createFolder, createFile } from './file';

describe('file', () => {
    afterEach(() => sinon.restore());

    const window = {
        showErrorMessage: sinon.fake(),
        showWarningMessage: sinon.fake(),
    };

    describe('createFolder', () => {
        it("should create folder if it doesn't exist", () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(false));
            const mkdirSyncSpy = sinon.spy(fs, 'mkdirSync');

            createFolder('some/folder', window);

            expect(mkdirSyncSpy.calledWith('some/folder')).to.be.true;
        });
        it('should show warning message if folder exists', () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(true));

            createFolder('some/folder', window);

            expect(window.showWarningMessage.called).to.be.true;
        });
        it('should show error message if an exception is thrown', () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(false));
            sinon.replace(fs, 'mkdirSync', sinon.fake.throws(new Error()));

            createFolder('some/folder', window);

            expect(window.showErrorMessage.calledWith('Something went wrong creating folder folder')).to.be.true;
        });
    });

    describe('createFile', () => {
        it("should create folder if it doesn't exist", () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(false));
            const writeFileSyncSpy = sinon.spy(fs, 'writeFileSync');

            createFile('some/file', 'some contents', window);

            expect(writeFileSyncSpy.calledWith('some/file', 'some contents')).to.be.true;
        });
        it('should show warning message if folder exists', () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(true));

            createFile('some/file', 'some contents', window);

            expect(window.showWarningMessage.calledWith('File file already exists')).to.be.true;
        });
        it('should show error message if an exception is thrown', () => {
            sinon.replace(fs, 'existsSync', sinon.fake.returns(false));
            sinon.replace(fs, 'writeFileSync', sinon.fake.throws(new Error()));

            createFile('some/file', 'some contents', window);

            expect(window.showErrorMessage.calledWith('Something went wrong creating file file')).to.be.true;
        });
    });
});
