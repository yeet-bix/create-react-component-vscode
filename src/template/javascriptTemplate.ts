import TemplateOptions from './templateOptions';

const javascriptComponentTemplate = ({ name }: TemplateOptions) => `import React from 'react';

function ${name}({}) {
    return <>${name}</>
};

export default ${name};
`;

const javascriptTestTemplate = ({ name }: TemplateOptions) => `import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ${name} from './${name}';

describe('${name}', () => {
    afterEach(cleanup);

    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<${name} {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText(${name})).toBeTruthy();
    });
});
`;

export { javascriptComponentTemplate, javascriptTestTemplate };
