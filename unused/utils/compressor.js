class Compressor {

    static _traverse(obj, dictKeys, keyHolder, callback) {
        if (obj == null) return null;
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            let out = [], i = 0, len = obj.length;
            for (; i < len; i++) {
                out[i] = Compressor._traverse(obj[i], dictKeys, keyHolder, callback);
            }
            return out;
        }
        else if (typeof obj === 'object') {
            let out = {};
            for (let i in obj) {
                let newKey = callback(i, out, dictKeys, keyHolder);
                out[newKey] = Compressor._traverse(obj[i], dictKeys, keyHolder, callback);
            }
            return out;
        }
        return obj;
    }

    static compressJSON(obj) {
        let dictKeys = {};
        let keyHolder = {cnt: 0};
        obj = Compressor._traverse(obj, dictKeys, keyHolder, (i, out, dict, keyHolder) => {
            let compressedKey = i;
            if (compressedKey.length > 1) {
                if (dict[i]) compressedKey = dict[compressedKey];
                else {
                    compressedKey = `_${keyHolder.cnt++}`;
                    dict[i] = compressedKey;
                }
            }
            return compressedKey;
        });
        let dictReversed = {};
        Object.keys(dictKeys).forEach(key => {
            dictReversed[dictKeys[key]] = key;
        });
        return {d: dictReversed, o: obj};
    }

    static decompressJSON(json) {
        let dict = json.d;
        let obj = json.o;
        obj = Compressor._traverse(obj, dict, undefined, (compressedKey, out, dict, keyHolder) => {
            return dict[compressedKey];
        });
        return obj;
    }

}

module.exports = Compressor;