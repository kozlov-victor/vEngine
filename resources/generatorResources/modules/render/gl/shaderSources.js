module.exports.SHADERS_SRC = {
    DRAW_WITH_TEXTURE:[
        [
            'attribute vec3 a_position;',
            'attribute vec2 a_texcoord;',

            'uniform mat4 u_matrix;',
            'uniform mat4 u_textureMatrix;',

            'varying vec2 v_texcoord;',

            'void main() {',
            'gl_Position = u_matrix * vec4(a_position,1);',
            '   v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;',
            '}'
        ].join('\n'),

        [
            'precision mediump float;',

            'varying vec2 v_texcoord;',

            'uniform sampler2D texture;',
            'uniform vec4 u_color; ',
            'uniform float u_colorImpact;',

            'void main() {',
            '   gl_FragColor = texture2D(texture, v_texcoord);',
            '}'
        ].join('\n')
    ]

};