
import {nodeRequire, forEach, filter} from "./fns";

const fs = nodeRequire('fs');
const path = nodeRequire('path');

export interface FileData {
    name:string,
    fullName:string,
    fullPath:string,
    content:any,
    nameNoExt:string,
    ext:string
}

class FS {
    async copyFile(source, target) {
        return new Promise(async (resolve,reject)=>{
            let pathArr = target.split('/');
            pathArr.pop();
            let targetPath = pathArr.join('/');
            let exists = await this.exists(targetPath);
            if (!exists && targetPath) await this.createFolder(targetPath);
            let ws = fs.createWriteStream(target);
            let rs = fs.createReadStream(source);
            ws.on("error", function(err) {
                done(err);
            });
            ws.on("error", function(err) {
                done(err);
            });
            ws.on("close", function() {
                done();
            });
            ws.on("error", function(err) {
                done(err);
            });
            rs.pipe(ws);


            function done(err?) {
                if (err) {
                    console.error('copyFile error',err);
                    reject(err);
                }
                else resolve();
            }
        });

    }

    async exists(target){
        return new Promise((resolve,reject)=>{
            fs.exists(target,(exists)=>{
                resolve(exists);
            });
        });
    }

    async deleteFile(source) {
        let exists = await this.exists(source);
        if (exists) return new Promise((resolve,reject)=>{
            fs.unlink(source,error=>{
                if (error) {
                    console.error('deleteFile error',error);
                    reject(error);
                }
                else resolve();
            })
        });
    }

    async readFile(path,asBin?) {
        return new Promise((resolve,reject)=>{
            fs.readFile(path, asBin?undefined:"utf8",(err,content)=>{
                if (err) {
                    console.error('readFile error',err);
                    reject(err);
                }
                else resolve(content);
            });
        });
    }

    async createFile(path,content){
        await this.deleteFile(path);
        await this.writeFile(
            path,
            content||''
        );
    }

    async writeFile(path, content,asBin?) {
        let opts = asBin?undefined:{encoding: "utf-8"};
        return new Promise((resolve,reject)=>{
            fs.writeFile(path,content,opts,(err)=>{
                if (err) {
                    console.error('writeFile error',err);
                    reject(err);
                }
                else resolve();
            });
        });
    }

    async _copyFilesToFolder( source, target ) {
        let exists = await this.exists(target);
        return new Promise(async (resolve,reject)=>{
            let targetFile = target;
            //if target is a directory a new file with the same name will be created
            if (exists) {
                let isDir = await this._isDirectory(target);
                if (isDir) targetFile = path.join( target, path.basename( source ) );
                fs.readFile(source,(err,file)=>{
                    if (err) reject(err);
                    else fs.writeFile(targetFile, file,(error)=>{
                        if (error) reject(error);
                        else resolve();
                    });
                });

            } else {
                reject(`${target} not exists`);
            }
        });
    }

    private async _isDirectory(path){
        let exists = await this.exists(path);
        if (!exists) return false;
        return new Promise((resolve,reject)=>{
            fs.lstat(path,(err,stat)=>{
               if (err) reject(err);
               else resolve(stat.isDirectory());
            });
        });
    }

    async copyFolder( source, target ) {
        return new Promise((resolve,reject)=>{
            //check if folder needs to be created or integrated
            let targetFolder = path.join( target, path.basename( source ) );
            Promise.resolve().then(()=>{
                return this.exists(targetFolder)
            }).then((exists)=>{
                if (!exists) return new Promise((resolve,reject)=>{
                    fs.mkdir( targetFolder,error=>{
                       if (error) {
                           console.error('copyFolder targetFolder error',targetFolder);
                           console.error('copyFolder mkdir error',error);
                           reject(error);
                       }
                       else resolve();
                    });
                });
            }).then(()=>{
                return new Promise((resolve,reject)=>{
                    fs.readdir(source,(err,files)=>{
                        if (err) {
                            console.error('readdir source error',source);
                            console.error('copyFolder readdir error',err);
                            reject(err);
                        }
                        else resolve(files);
                    });
                });
            }).then(async (files:Array<any>)=>{
                await forEach(files,async file=>{
                    let curSource = path.join( source, file );
                    let isDirectory = await this._isDirectory(curSource);
                    if (isDirectory) await this.copyFolder(curSource, targetFolder);
                    else await this._copyFilesToFolder(curSource, targetFolder);
                });
                resolve();
            }).catch(err=>{
                console.error('copyFolder catch error',err);
                reject(err);
            });
        });
    }


    async _read(path,res,contentType?,deep?){
        return new Promise((resolve,reject)=>{
            try {
                fs.readdir(path,async (error,files)=>{
                    if (error) {
                        console.error(error);
                        return reject(error);
                    }
                    await forEach(files,async file=>{
                        let isDir = await this._isDirectory(path+'/'+file);
                        if (isDir) {
                            if (deep) await this._read(path+'/'+file,res);
                        }
                        else {
                            let fullPath = (path+'/'+file).split('/').filter(s=>{return !!s.length}).join('/');
                            if (path.indexOf('/')==0) fullPath = '/'+fullPath;
                            let content = await this.readFile(fullPath, contentType);
                            let splitted = file.split('.');
                            let ext = '', nameNoExt = file;
                            if (splitted.length>=1) {
                                ext = splitted.pop();
                                nameNoExt = splitted.join('.');
                            }
                            res.push({name:file,fullName: fullPath, content,ext,nameNoExt});
                        }
                    });
                    resolve(res);
                });
            } catch (e){
                reject(e);
            }
        });
    }

    async readDir(path,contentType?,deep:boolean = true):Promise<Array<FileData>>{
        let res = [];
        await this._read(path,res,contentType,deep);
        return res;
    }

    async getDirList(srcpath){
        return new Promise((resolve,reject)=>{
            fs.readdir(srcpath,async (error,files:Array<any>)=>{
                try {
                    if (error) {
                        console.error('getDirList error',error);
                        reject(error);
                        return;
                    }
                    files = await filter(files,async file=>{
                        let isDir = (await this._isDirectory(path.join(srcpath, file)) as boolean);
                        return isDir;
                    });
                    resolve(files);
                } catch (e){
                    reject(e);
                }
            })
        });
    }

     async deleteFolder(path) {

        let rmdir = async (path)=>{
            return new Promise((resolve,reject)=>{
                fs.rmdir(path,error=>{
                    if (error) reject(error);
                    else resolve();
                });
            });
        };

         let unlink = async (path)=>{
             return new Promise((resolve,reject)=>{
                 fs.unlink(path,error=>{
                     if (error) reject(error);
                     else resolve();
                 });
             });
         };

        let exists = await this.exists(path);
        if (!exists) return;

        return new Promise((resolve,reject)=>{
            fs.readdir(path,async (error,files)=>{
                if (error) {
                    console.error('deleteFolder error',error);
                    reject(error);
                    return;
                }
                try {
                    await forEach(files,async (file)=>{
                        let curPath = path + "/" + file;
                        let isDir = await this._isDirectory(curPath);
                        if(isDir) { // recurse
                            await this.deleteFolder(curPath);
                        } else { // delete file
                            await unlink(curPath);
                        }
                    });
                    await rmdir(path);
                    resolve();
                } catch (e){
                    reject(e);
                }
            });
        });

    };

    async createFolder(path) {

        await this.deleteFolder(path);

        let mkdir = async (path)=>{
            return new Promise((resolve,reject)=>{
                fs.mkdir(path,error=>{
                    if (error && error.code !== 'EEXIST') reject(error);
                    else resolve();
                });
            });
        };

        let pathSeq = '';
        await forEach(path.split('/'),async (fldr)=>{
            if (!fldr) return;
            pathSeq+=fldr;
            let exists = await this.exists(pathSeq);
            if (!exists) await mkdir(pathSeq);
            pathSeq+='/';
        });
        if (path) await mkdir(path);
    }

    async rename(oldName,newName){
        return new Promise((resolve,reject)=>{
            fs.rename(oldName,newName,error=>{
                if (error) {
                    console.error('rename error',error);
                    reject(error);
                }
                else resolve();
            });
        });
    }

}

export default new FS();