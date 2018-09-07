declare const __webpack_require__: any, __non_webpack_require__: any;

export const nodeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;

export async function filter(arr:Array<any>, callback:Function) {
    const fail = Symbol();
    return (await Promise.all(arr.map(async item => (await callback(item)) ? item : fail))).filter(i=>i!==fail)
}

export async function forEach(array:Array<any>, callback:Function) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}