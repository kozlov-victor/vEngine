
module.exports = function(content) {
    let str = content.split('\n').map(s=>{
        s = s.split('\t').join(' ');
        s = s.trim();
        return s;
    }).join('\n');
    return `exports.default = ${JSON.stringify(str)};`;
};