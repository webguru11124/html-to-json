const htmlToJson = require('../index'); // Adjust the path based on your package's structure

describe('htmlToJson', () => {
    it('should convert a simple HTML string to JSON', () => {
        const htmlString = '<div><p>Hello, World!</p></div>';
        const expectedJson = [
            {
                tag: 'div',
                children: [
                    {
                        tag: 'p',
                        children: [
                            {
                                text: 'Hello, World!'
                            }
                        ]
                    }
                ]
            }
        ];

        const jsonObj = htmlToJson(htmlString);
        expect(jsonObj).toEqual(expectedJson);
    });

    // Add more test cases as needed
});
