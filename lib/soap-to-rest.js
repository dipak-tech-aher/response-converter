const xj = require("xml2js");

const soap2rest = (xmldata) => {
  let result;
  xj.parseString(xmldata, function (err, results) {
    if (err) {
      result = 'Error while converting xml to Json'
    }
    result = results;
  });
  return result;
}

module.exports = soap2rest