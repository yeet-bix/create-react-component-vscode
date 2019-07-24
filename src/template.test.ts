import { expect } from 'chai';
import { componentTemplate, testTemplate, Options } from './template';

describe('template', () => {
    describe('componentTemplate', () => {
        it('should interpolate name', () => {
            const options: Options = { name: 'TestComponent' };
            const templateString = componentTemplate(options);

            expect(templateString).to.contain('function TestComponent({ }: Props) {');
            expect(templateString).to.contain('export default TestComponent;');
        });
    });

    describe('testTemplate', () => {
        it('should interpolate name', () => {
            const options: Options = { name: 'TestComponent' };
            const templateString = testTemplate(options);

            expect(templateString).to.contain("import TestComponent from './TestComponent';");
            expect(templateString).to.contain("describe('TestComponent', () => {");
            expect(templateString).to.contain('render(<TestComponent');
        });
    });
});
