export enum TestLibrary {
    ReactTestingLibrary = 'react-testing-library',
    Enzyme = 'enzyme',
}
interface TemplateOptions {
    name: string;
    testLibrary: TestLibrary;
    cleanup: boolean;
}

export default TemplateOptions;
