import { expect } from 'chai';
import { componentTemplate, Options } from './template';

describe('template', () => {
    describe('componentTemplate', () => {
        it('should interpolate name', () => {
            const options: Options = { name: 'TestComponent' };
            const templateString = componentTemplate(options);

            expect(templateString).to.contain('function TestComponent({ }: Props) {');
            expect(templateString).to.contain('export default TestComponent;');
        });
    });
});
