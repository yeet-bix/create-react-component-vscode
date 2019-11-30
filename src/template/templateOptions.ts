export enum TestLibrary {
    ReactTestingLibrary = 'react-testing-library',
    Enzyme = 'enzyme',
}

export enum FunctionType {
    Function = "function",
    Expression = "expression"
}

interface TemplateOptions {
    name: string;
    testLibrary: TestLibrary;
    cleanup: boolean;
    functionType: FunctionType;
}

export default TemplateOptions;
