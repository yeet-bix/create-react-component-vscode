export enum TestLibrary {
    ReactTestingLibrary = 'react-testing-library',
    Enzyme = 'enzyme',
}
interface TemplateOptions {
    name: string;
    testLibrary: TestLibrary;
}

export default TemplateOptions;
