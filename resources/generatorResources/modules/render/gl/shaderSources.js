
exports.SRC = {
    TEXTURE_SHADER: [
        [
            'attribute vec4 a_position; ',
            'attribute vec2 a_texcoord; ',

            'uniform mat4 u_matrix; ',
            'uniform mat4 u_textureMatrix; ',

            'varying vec2 v_texcoord; ',

            'void main() { ',
            'gl_Position = u_matrix * a_position; ',
            '   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy; ',
            '}'
        ].join(''),
        [
            'precision mediump float; ',

            'varying vec2 v_texcoord;',

            'uniform sampler2D texture;',

            'void main() { ',
            '    gl_FragColor = texture2D(texture, v_texcoord);',
            '} '
        ].join('')
    ]

};