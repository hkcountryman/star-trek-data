const trekkers = require('../../data.json');

exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "*",
            "Access-Control-Allow-Origin": "https://615b3f3ddc63e220665f857f--naughty-dubinsky-1c07af.netlify.app/com",
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(trekkers)
    };
}