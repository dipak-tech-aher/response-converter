const txtToJSON = require("txt-file-to-json");

const textToJson = (localFilePath) => {
    return txtToJSON({ filePath: localFilePath });
}

module.exports = textToJson;