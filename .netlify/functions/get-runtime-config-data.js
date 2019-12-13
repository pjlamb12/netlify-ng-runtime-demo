exports.handler = function(event, context, callback) {
  const { attribute } = process.env;

  console.log("function hit, returning: ", { attribute });

  return callback(null, {
    body: JSON.stringify({ attribute }),
    statusCode: 200
  });
};
