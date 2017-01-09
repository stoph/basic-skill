exports.handler = function( event, context ) {
    context.succeed({ response: {
        outputSpeech: {
            type: "PlainText",
            text: "Hello world"
        }
    } });
};
