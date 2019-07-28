import TemplateOptions from './templateOptions';

export const indexTemplate = ({ name }: TemplateOptions) => `export { default } from './${name}';`;
