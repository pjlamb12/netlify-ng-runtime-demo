exports.handler = function(event, context, callback) {
  const { attribute } = process.env;

  return callback(null, { body: { attribute }, statusCode: 200 });
};
