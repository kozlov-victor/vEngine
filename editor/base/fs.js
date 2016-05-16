

var fs = require('fs');
var path = require('path');

module.exports.copyFileSync = function (source, target) {

    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }

    fs.createReadStream(source).pipe(fs.createWriteStream(targetFile));
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

module.exports.createFolderSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code != 'EEXIST') throw e;
    }
};

module.exports.renameSync = function(oldName,newName){
    fs.renameSync(oldName,newName);
};