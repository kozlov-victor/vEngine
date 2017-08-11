'use strict';

const fs = require.main.require('./node-app/base/fs');

class IndexController{

    /**
     * @Method("index");
     * @Request({"type":"get"});
     * @Response({"type":"view"})
     */
    index(){
        return {
            defaultCodeScript:fs.readFileSync('assets/js/defaultCodeScript.js')
        }
    }

    /**
     * @Method("editor");
     * @Request({"type":"get"});
     * @Response({"type":"view"})
     */
    editor(){

    }
}

module.exports.controller = IndexController;
