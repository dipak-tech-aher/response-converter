const FTPClient = require('ftp');
const c = new FTPClient();
const txtToJSON = require("txt-file-to-json");

/**
 * 
 * @param {object} ftpConfig 
 * @param {string} ftpRemoteFilePath 
 */

const ftpToJson = (ftpConfig, ftpRemoteFilePath) => {
    c.connect(ftpConfig);
    c.on('ready', function () {
        c.get(ftpRemoteFilePath, function (err, stream) {
            const myPromise = new Promise((resolve, reject) => {
                stream.on('data', function (chunk) {
                    resolve(chunk.toString());
                });
                if(err){
                    reject(err)
                }
                stream.on('end', function () {
                    // content variable now contains all file content. 
                });
            });
            myPromise.then((result) => {
                const jsonObj = txtToJSON({ data: result });
                return jsonObj
            }).catch((err) => console.log(err))
        })
    });
}

module.exports = ftpToJson;