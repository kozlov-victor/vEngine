varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 sample = texture2D(uSampler, coord);
    gl_FragColor = sample * uColor;
}

--------------

//You can make these attributes too to avoid having to change them between draw calls.
uniform vec2 atlasCoord; //Top left corner of the atlas image
uniform vec2 atlasSize; //Size of the atlas image

attribute vec2 localTexCoords; //From 0 to 1, repeats outside that range

void main(){
    vec4 textureSample = texture2D(sampler, atlasCoord + fract(localTexCoords)*atlasSize);
    ...
}




-----------------


// texture and color

precision mediump float;

varying vec2 v_texcoord;

uniform sampler2D texture;
uniform float u_alpha;
uniform vec2 u_offsetCoords;
uniform vec2 atlasSize;


void main() {
    vec2 localTextCoord = mod(v_texcoord + fract(u_offsetCoords),vec2(1,1));
    gl_FragColor = texture2D(texture, localTextCoord);
    gl_FragColor.a *= u_alpha;
}


// vec4 textureSample = texture2D(sampler, atlasCoord + fract(localTexCoords)*atlasSize);