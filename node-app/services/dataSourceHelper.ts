
import fs from '../base/fs';

class DataSourceHelper {

    async loadModel(path) {
        return await JSON.parse(await fs.readFile(path) as string)
    }

    async saveModel(path, model) {
        await fs.writeFile(path,JSON.stringify(model,null,4));
    }


    async uuid(projectName) {
        let meta = JSON.parse(await fs.readFile(`workspace/${projectName}/meta.json`) as string);
        meta.idSeq++;
        await fs.writeFile(`workspace/${projectName}/meta.json`,JSON.stringify(meta));
        return meta.idSeq;
    }
}

export const dataSourceHelper:DataSourceHelper = new DataSourceHelper();