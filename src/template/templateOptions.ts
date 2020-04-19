export enum TestLibrary {
    ReactTestingLibrary = 'react-testing-library',
    Enzyme = 'enzyme',
}

export enum FunctionType {
    Function = "function",
    Expression = "expression"
}

export enum FileType {
    Component = "component",
    Test = "test",
    Index = "index"
}

export enum FileExtension {
    WithX = "withX",
    WithoutX = "withoutX",
}

interface TemplateOptions {
    name: string;
    testLibrary: TestLibrary;
    cleanup: boolean;
    functionType: FunctionType;
    fileExtension: FileExtension;
}

export default TemplateOptions;
