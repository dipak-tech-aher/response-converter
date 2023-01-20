# response-conversions

==================rest2soap=========================

    import {rest2soap} from 'response-converter'
    # input json object
    # output xml
    # example
    
    const jsonObj =rest2soap(json);


==================soap2rest=========================

import {soap2rest} from 'response-converter'

    # input xml object
    # output json
    # example

    const jsonObj = rest2soap(xml);

==================text2json=========================

import {text2json} from 'response-converter'

    # input text-file path as string
    # output json
    # example

    const jsonObj = rest2soap('sourcePathOfFile/test.txt');

==================ftp2json=========================

import {ftp2json} from 'response-converter'

    # input ftpConfig object ftpRemoteFilePath path as string
    # output json
    
    # example 

    const ftpConfig = {
      host: "127.0.0.1",
      user: "******",
      password: "*****"
    }

    const ftpRemoteFilePath = '/home/text.txt';

    const jsonObj = ftp2json(ftpConfig,ftpRemoteFilePath);


