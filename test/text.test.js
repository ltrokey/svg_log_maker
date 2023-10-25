const TextGenerator = require("../lib/text.js");

// Testing Instantiation
describe('TextGenerator', () => {
    describe('Instantiate', () => {
        it('should be an instance of TextGenerator Class', () => {
            const textGenerator = new TextGenerator()

            expect(textGenerator).toBeInstanceOf(TextGenerator)
        })
    })
})