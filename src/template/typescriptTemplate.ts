import TemplateOptions, { TestLibrary } from './templateOptions';

const typescriptComponentTemplate = ({ name }: TemplateOptions) => `import React from 'react';

export interface Props {}

function ${name}({ }: Props) {
    return <>${name}</>
};

export default ${name};
`;

const typescriptTestTemplate = (templateOptions: TemplateOptions) => {
    const { testLibrary } = templateOptions;
    return testLibrary === TestLibrary.Enzyme
        ? enzymeTemplate(templateOptions)
        : reactTestingLibraryTemplate(templateOptions);
};

const reactTestingLibraryTemplate = ({
    name,
}: TemplateOptions) => `import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ${name}, { Props } from './${name}';

describe('${name}', () => {
    afterEach(cleanup);

    const defaultProps: Props = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<${name} {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText(${name})).toBeTruthy();
    });
});
`;

const enzymeTemplate = ({ name }: TemplateOptions) => `import { shallow } from 'enzyme';
import React from 'react';
import ${name}, { Props } from './${name}';

describe('${name}', () => {
    const defaultProps: Props = {};

    it('should render', () => {
        const props = {...defaultProps};
        const wrapper = shallow(<${name} {...props} />);

        expect(wrapper).toMatchSnapshot();
    });
});
`;

export { typescriptComponentTemplate, typescriptTestTemplate };
