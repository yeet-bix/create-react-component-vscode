interface Options {
    name: string;
}

const componentTemplate = ({ name }: Options) => `import React from 'react';

export interface Props {}

function ${name}({ }: Props) {
    return <>${name}</>
};

export default ${name};
`;

const testTemplate = ({
    name,
}: Options) => `import { cleanup, render } from '@testing-library/react';
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

export { componentTemplate, testTemplate, Options };
