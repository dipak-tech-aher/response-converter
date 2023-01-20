const jx = require("xml-js");

 const restToSoap =  (jsonObj)=> {
    const json = JSON.stringify(jsonObj);
    return jx.json2xml(json, { compact: true, spaces: 4 });
}

module.exports = restToSoap;