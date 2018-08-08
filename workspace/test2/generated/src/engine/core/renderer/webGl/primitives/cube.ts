
import {AbstractPrimitive} from './abstractPrimitive'

const prepareBuffers = size=>{

    let vertices = [
        // Front face
        -size, -size,  size,
        size, -size,  size,
        size,  size,  size,
        -size,  size,  size,

        // Back face
        -size, -size, -size,
        -size,  size, -size,
        size,  size, -size,
        size, -size, -size,

        // Top face
        -size,  size, -size,
        -size,  size,  size,
        size,  size,  size,
        size,  size, -size,

        // Bottom face
        -size, -size, -size,
        size, -size, -size,
        size, -size,  size,
        -size, -size,  size,

        // Right face
        size, -size, -size,
        size,  size, -size,
        size,  size,  size,
        size, -size,  size,

        // Left face
        -size, -size, -size,
        -size, -size,  size,
        -size,  size,  size,
        -size,  size, -size
    ];

    let textureCoords = [
        // Front face
        0.0, 0.0,
        1, 0.0,
        1, 1,
        0.0, 1,

        // Back face
        1, 0.0,
        1, 1,
        0.0, 1,
        0.0, 0.0,

        // Top face
        0.0, 1,
        0.0, 0.0,
        1, 0.0,
        1, 1,

        // Bottom face
        1, 1,
        0.0, 1,
        0.0, 0.0,
        1, 0.0,

        // Right face
        1, 0.0,
        1, 1,
        0.0, 1,
        0.0, 0.0,

        // Left face
        0.0, 0.0,
        1, 0.0,
        1, 1,
        0.0, 1
    ];

    let cubeVertexIndices = [
        0, 1, 2,      0, 2, 3,    // Front face
        4, 5, 6,      4, 6, 7,    // Back face
        8, 9, 10,     8, 10, 11,  // Top face
        12, 13, 14,   12, 14, 15, // Bottom face
        16, 17, 18,   16, 18, 19, // Right face
        20, 21, 22,   20, 22, 23  // Left face
    ];

    let vertexNormals = [
        // Front face
        0.0,  0.0,  1,
        0.0,  0.0,  1,
        0.0,  0.0,  1,
        0.0,  0.0,  1,

        // Back face
        0.0,  0.0, -1,
        0.0,  0.0, -1,
        0.0,  0.0, -1,
        0.0,  0.0, -1,

        // Top face
        0.0,  1,  0.0,
        0.0,  1,  0.0,
        0.0,  1,  0.0,
        0.0,  1,  0.0,

        // Bottom face
        0.0, -1,  0.0,
        0.0, -1,  0.0,
        0.0, -1,  0.0,
        0.0, -1,  0.0,

        // Right face
        1,  0.0,  0.0,
        1,  0.0,  0.0,
        1,  0.0,  0.0,
        1,  0.0,  0.0,

        // Left face
        -1,  0.0,  0.0,
        -1,  0.0,  0.0,
        -1,  0.0,  0.0,
        -1,  0.0,  0.0
    ];

    return {
        vertexArr:vertices,
        normalArr: vertexNormals,
        texCoordArr: textureCoords,
        indexArr: cubeVertexIndices
    }

};

export class Cube extends AbstractPrimitive {

    // todo normalize to format: https://www.npmjs.com/package/wavefront-obj-parser

    constructor(){
        super();
        const size = 10;
        let bufferArrs = prepareBuffers(size);
        this.vertexArr = bufferArrs.vertexArr;
        this.normalArr = bufferArrs.normalArr;
        this.texCoordArr = bufferArrs.texCoordArr;
        this.indexArr = bufferArrs.indexArr;
    }

}