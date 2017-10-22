
const fs = require.main.require('./node-app/base/fs');
const dataSourceHelper = require('./dataSourceHelper');

module.exports.createProject = function(projectName){

    let mainSceneName = 'mainScene';
    let mainSceneId = 1;
    let mainLayerId = ++mainSceneId;
    let initialRepoStructure = {
        Scene: [
            {
                id: mainSceneId,
                name: mainSceneName,
                type: 'Scene',
                layers: [
                    {
                        type: 'Layer',
                        id: mainLayerId
                    }
                ],
            }
        ],
        Layer: [
            {
                id: mainLayerId,
                name: 'layer1',
                type: 'Layer'
            }
        ]
    };

    fs.createFolderSync(`workspace/${projectName}/resources`);
    fs.createFolderSync(`workspace/${projectName}/scripts`);
    let mainSceneScript = fs.readFileSync(`assets/js/defaultCodeScript.js`);
    mainSceneScript = mainSceneScript.replace('${name}',mainSceneName[0].toUpperCase()+mainSceneName.substr(1));
    fs.createFileSync(`workspace/${projectName}/scripts/${mainSceneName}.js`,mainSceneScript);

    dataSourceHelper.saveModel(`workspace/${projectName}/repository.json`,initialRepoStructure);
    dataSourceHelper.saveModel(
        `workspace/${projectName}/gameProps.json`,
        {
            width           :         800,
            height          :         600,
            scaleStrategy   :         0,
            startSceneId    :         mainSceneId
        }
    );
    dataSourceHelper.saveModel(`workspace/${projectName}/meta.json`,{idSeq:mainLayerId});

    return {};

};

module.exports.exist = projectName=>{

    return fs.existsSync(`workspace/${projectName}`);

};