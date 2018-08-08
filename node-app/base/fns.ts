declare const __webpack_require__, __non_webpack_require__;

export const nodeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

export async function filter(arr, callback) {
    const fail = Symbol();
    return (await Promise.all(arr.map(async item => (await callback(item)) ? item : fail))).filter(i=>i!==fail)
}

export async function forEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}