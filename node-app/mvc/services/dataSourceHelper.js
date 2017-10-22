"use strict";

const fs = require.main.require('./node-app/base/fs');


class DataSourceHelper {

    loadModel(path) {
        return JSON.parse(fs.readFileSync(path))
    }

    saveModel(path, model) {
        fs.writeFileSync(path,JSON.stringify(model,null,4));
    }


    uuid(projectName) {
        let meta = JSON.parse(fs.readFileSync(`workspace/${projectName}/meta.json`));
        meta.idSeq++;
        fs.writeFileSync(`workspace/${projectName}/meta.json`,JSON.stringify(meta));
        return meta.idSeq;
    }
}

module.exports = new DataSourceHelper();