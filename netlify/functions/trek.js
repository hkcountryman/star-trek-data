const trekkers = require('../../data.json');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "*",
            "Access-Control-Allow-Origin": "https://star-trek-cors-and-lambda-example.netlify.app/",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(trekkers)
    };
}