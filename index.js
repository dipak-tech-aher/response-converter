var rest2soap = require('./lib/rest-to-soap');
var soap2rest = require('./lib/soap-to-rest');
var text2json = require('./lib/text-to-json');
var ftp2json = require('./lib/ftp-to-json');

module.exports = {
  rest2soap: rest2soap,
  soap2rest: soap2rest,
  text2json: text2json,
  ftp2json: ftp2json,
};