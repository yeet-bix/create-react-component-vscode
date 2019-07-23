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

export { componentTemplate, Options };
