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

interface TemplateOptions {
    name: string;
    testLibrary: TestLibrary;
    cleanup: boolean;
    functionType: FunctionType;
}

export default TemplateOptions;
