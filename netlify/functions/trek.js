const trekkers = require('../../data.json');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "*",
            "Access-Control-Allow-Origin": "https://naughty-dubinsky-1c07af.netlify.app/",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(trekkers)
    };
}