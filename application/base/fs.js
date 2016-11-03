

var fs = require('fs');
var path = require('path');

module.exports.copyFileSync = function (source, target) {
    var pathArr = target.split('/');
    pathArr.pop();
    var targetPath = pathArr.join('/');
    if (!module.exports.existsSync(targetPath)) createFolderSync(targetPath);
    fs.createReadStream(source).pipe(fs.createWriteStream(target));
};

module.exports.existsSync = function(target){
    return fs.existsSync(target);
};

module.exports.deleteFileSync = function (source) {
    fs.existsSync(source) && fs.unlinkSync(source);
};

module.exports.readFileSync = function (path) {
    return fs.readFileSync(path, "utf8");
};

module.exports.createFileSync = function(path,content){
    if (fs.existsSync(path)) return;
    fs.writeFileSync(path, content||'');
};

module.exports.writeFileSync = function (path, content) {
    fs.writeFileSync(path, content);
};

module.exports.copyFolderSync = function cpf(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (exists && isDirectory) {
        !fs.existsSync(dest) && fs.mkdirSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            cpf(path.join(src, childItemName),
                path.join(dest, childItemName));
        });
    } else {
        fs.linkSync(src, dest);
    }
};



module.exports.readDirSync = function(path,contentType){

    function _read(path,res){
        fs.readdirSync(path).forEach(function(file){
            if (fs.statSync(path+'/'+file).isDirectory()) {
                _read(path+'/'+file,res);
            } else {
                res.push({name:file,fullName: path+'/'+file, content:fs.readFileSync(path+'/'+file, contentType)});
            }
        });
    }

    var res = [];
    _read(path,res);
    return res;
};

module.exports.getDirListSync = function(srcpath){
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
};

module.exports.deleteFolderSync = function delFldr(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                delFldr(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

var createFolderSync = function (path) {
    try {
        var pathSeq = '';
        path.split('/').forEach(function(fldr){
            pathSeq+=fldr;
            if (!fs.existsSync(pathSeq)) fs.mkdirSync(pathSeq);
            pathSeq+='/';
        });
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
};

module.exports.createFolderSync = createFolderSync;

module.exports.renameSync = function(oldName,newName){
    fs.renameSync(oldName,newName);
};