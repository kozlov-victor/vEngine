"use strict";

const fs = require.main.require('./node-app/base/fs');


let _uidCnt = 0;

class DataSourceHelper {

    loadModel(path) {
        return JSON.parse(fs.readFileSync(path))
    }

    saveModel(path, col) {
        fs.writeFileSync(path,JSON.stringify(col,null,4));
    }


    _uid(){
        return ''+(~~(Math.random()*10));
    }
    uuid() {
        let timeStr = new Date().getTime().toString();
        return this._uid() + this._uid() + this._uid() + this._uid() + '_' + timeStr.substring(timeStr.length - 4) + '_' + (_uidCnt++);
    }
}

module.exports = new DataSourceHelper();