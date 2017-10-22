

const dom  = require('../dom');

module.exports = function(content) {
    let doc = dom.createDocument(content);
    return `module.exports = ${JSON.stringify(doc.innerHTML)};`;
};