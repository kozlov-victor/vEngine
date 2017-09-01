

const fs = require('fs');
const path = require('path');

class FS {
    copyFileSync(source, target) {
        let pathArr = target.split('/');
        pathArr.pop();
        let targetPath = pathArr.join('/');
        if (!module.exports.existsSync(targetPath)) this.createFolderSync(targetPath);
        fs.createReadStream(source).pipe(fs.createWriteStream(target));
    }

    existsSync(target){
        return fs.existsSync(target);
    }

    deleteFileSync(source) {
        fs.existsSync(source) && fs.unlinkSync(source);
    }

    readFileSync(path,asBin) {
        return fs.readFileSync(path, asBin?undefined:"utf8");
    }

    createFileSync(path,content){
        this.deleteFileSync(path);
        this.writeFileSync(
            path,
            content||''
        );
    }

    writeFileSync(path, content,asBin) {
        let opts = asBin?undefined:{encoding: "utf-8"};
        fs.writeFileSync(path,content,opts);
    }

    _copyFilesToFolderSync( source, target ) {
        var targetFile = target;
        //if target is a directory a new file with the same name will be created
        if ( fs.existsSync( target ) ) {
            if ( fs.lstatSync( target ).isDirectory() ) {
                targetFile = path.join( target, path.basename( source ) );
            }
        }
        fs.writeFileSync(targetFile, fs.readFileSync(source));
    }

    copyFolderSync( source, target ) {
        let files = [];
        //check if folder needs to be created or integrated
        let targetFolder = path.join( target, path.basename( source ) );
        if ( !fs.existsSync( targetFolder ) ) {
            fs.mkdirSync( targetFolder );
        }
        //copy
        if ( fs.lstatSync( source ).isDirectory() ) {
            files = fs.readdirSync( source );
            files.forEach(   file=> {
                let curSource = path.join( source, file );
                if ( fs.lstatSync( curSource ).isDirectory() ) {
                    this.copyFolderSync( curSource, targetFolder );
                } else {
                    this._copyFilesToFolderSync( curSource, targetFolder );
                }
            } );
        }
    }

    _read(path,res,contentType){
        fs.readdirSync(path).forEach((file)=>{
            if (fs.statSync(path+'/'+file).isDirectory()) {
                this._read(path+'/'+file,res);
            } else {
                let fullPath = (path+'/'+file).split('/').filter(s=>{return !!s.length}).join('/');
                res.push({name:file,fullName: fullPath, content:fs.readFileSync(fullPath, contentType)});
            }
        });
    }

    readDirSync(path,contentType){
        let res = [];
        this._read(path,res,contentType);
        return res;
    }

    getDirListSync(srcpath){
        return fs.readdirSync(srcpath).filter(function(file) {
            return fs.statSync(path.join(srcpath, file)).isDirectory();
        });
    }

    deleteFolderSync(path) {
        if( fs.existsSync(path) ) {
            fs.readdirSync(path).forEach((file,index)=>{
                let curPath = path + "/" + file;
                if(fs.lstatSync(curPath).isDirectory()) { // recurse
                    this.deleteFolderSync(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    createFolderSync(path) {
        this.deleteFolderSync(path);
        try {
            let pathSeq = '';
            path.split('/').forEach((fldr)=>{
                if (!fldr) return;
                pathSeq+=fldr;
                if (!fs.existsSync(pathSeq)) fs.mkdirSync(pathSeq);
                pathSeq+='/';
            });
            if (path) fs.mkdirSync(path);
        } catch (e) {
            if (e.code != 'EEXIST') throw e;
        }
    }

    renameSync(oldName,newName){
        fs.renameSync(oldName,newName);
    }

}


module.exports = new FS();