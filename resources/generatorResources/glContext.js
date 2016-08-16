
(function(){

    var GlUtils = {};


    (function(){

        var defaultShaderType = [
            "VERTEX_SHADER",
            "FRAGMENT_SHADER"
        ];

        function error(msg) {
            console.error(msg);
        }

        function loadShader(gl, shaderSource, shaderType) {
            // Create the shader object
            var shader = gl.createShader(shaderType);

            // Load the shader source
            gl.shaderSource(shader, shaderSource);

            // Compile the shader
            gl.compileShader(shader);

            // Check the compile status
            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
                // Something went wrong during compilation; get the error
                var lastError = gl.getShaderInfoLog(shader);
                error("*** Error compiling shader '" + shader + "':" + lastError);
                gl.deleteShader(shader);
                return null;
            }

            return shader;
        }


        function createProgram(gl, shaders) {
            var program = gl.createProgram();
            shaders.forEach(function(shader) {
                gl.attachShader(program, shader);
            });
            gl.linkProgram(program);

            // Check the link status
            var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (!linked) {
                // something went wrong with the link
                var lastError = gl.getProgramInfoLog(program);
                error("Error in program linking:" + lastError);
                gl.deleteProgram(program);
                return null;
            }
            return program;
        }

        GlUtils.createProgramFromSources = function(gl, shaderSources) {
            var shaders = [];
            for (var ii = 0; ii < shaderSources.length; ++ii) {
                shaders.push(loadShader(
                    gl, shaderSources[ii], gl[defaultShaderType[ii]]));
            }
            return createProgram(gl, shaders);
        };

        GlUtils.make2DProjection = function(width, height, depth) {
            // Note: This matrix flips the Y axis so 0 is at the top.
            return [
                2 / width, 0, 0, 0,
                0, -2 / height, 0, 0,
                0, 0, 2 / depth, 0,
                -1, 1, 0, 1
            ];
        };

        GlUtils.makeTranslation = function(tx, ty, tz) {
            return [
                1,  0,  0,  0,
                0,  1,  0,  0,
                0,  0,  1,  0,
                tx, ty, tz,  1
            ];
        };

        GlUtils.makeXRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);

            return [
                1, 0, 0, 0,
                0, c, s, 0,
                0, -s, c, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeYRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);

            return [
                c, 0, -s, 0,
                0, 1, 0, 0,
                s, 0, c, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeZRotation = function(angleInRadians) {
            var c = Math.cos(angleInRadians);
            var s = Math.sin(angleInRadians);
            return [
                c, s, 0, 0,
                -s, c, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ];
        };

        GlUtils.makeScale = function(sx, sy, sz) {
            return [
                sx, 0,  0,  0,
                0, sy,  0,  0,
                0,  0, sz,  0,
                0,  0,  0,  1
            ];
        };

        GlUtils.matrixMultiply = function(a, b) {
            var a00 = a[0*4+0];
            var a01 = a[0*4+1];
            var a02 = a[0*4+2];
            var a03 = a[0*4+3];
            var a10 = a[1*4+0];
            var a11 = a[1*4+1];
            var a12 = a[1*4+2];
            var a13 = a[1*4+3];
            var a20 = a[2*4+0];
            var a21 = a[2*4+1];
            var a22 = a[2*4+2];
            var a23 = a[2*4+3];
            var a30 = a[3*4+0];
            var a31 = a[3*4+1];
            var a32 = a[3*4+2];
            var a33 = a[3*4+3];
            var b00 = b[0*4+0];
            var b01 = b[0*4+1];
            var b02 = b[0*4+2];
            var b03 = b[0*4+3];
            var b10 = b[1*4+0];
            var b11 = b[1*4+1];
            var b12 = b[1*4+2];
            var b13 = b[1*4+3];
            var b20 = b[2*4+0];
            var b21 = b[2*4+1];
            var b22 = b[2*4+2];
            var b23 = b[2*4+3];
            var b30 = b[3*4+0];
            var b31 = b[3*4+1];
            var b32 = b[3*4+2];
            var b33 = b[3*4+3];
            return [a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30,
                a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31,
                a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32,
                a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33,
                a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30,
                a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31,
                a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32,
                a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33,
                a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30,
                a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31,
                a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32,
                a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33,
                a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30,
                a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31,
                a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32,
                a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33];
        }

    })();


    ve_local.GlContext = function(){

        var gl;
        var mCanvas;
        var mScaleX = 1, mScaleY = 1;
        var matrixLocation;
        var textureMatrixLocation;

        var vShader = '\
            attribute vec4 a_position;\
            attribute vec2 a_texcoord;\
            \
            uniform mat4 u_matrix;\
            uniform mat4 u_textureMatrix;\
            \
            varying vec2 v_texcoord;\
            \
            void main() {\
                gl_Position = u_matrix * a_position;\
                v_texcoord = (u_textureMatrix * vec4(a_texcoord, 0, 1)).xy;\
            }\
            ';

        var fShader = '\
            precision mediump float;\
            \
            varying vec2 v_texcoord;\
            \
            uniform sampler2D texture;\
            \
            void main() {\
                gl_FragColor = texture2D(texture, v_texcoord);\
            }\
            ';

        this.init = function(canvas){

            mCanvas = canvas;
            gl = canvas.getContext("webgl",{ alpha: false });
            var program = GlUtils.createProgramFromSources(gl, [vShader, fShader]);
            gl.useProgram(program);

            // look up where the vertex data needs to go.
            var positionLocation = gl.getAttribLocation(program, "a_position");
            var texcoordLocation = gl.getAttribLocation(program, "a_texcoord");

            // lookup uniforms
            matrixLocation = gl.getUniformLocation(program, "u_matrix");
            textureMatrixLocation = gl.getUniformLocation(program, "u_textureMatrix");

            // Create a buffer.
            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.enable(gl.BLEND);

            // Put a unit quad in the buffer
            var positions = [
                0, 0,
                0, 1,
                1, 0,
                1, 0,
                0, 1,
                1, 1
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            // Create a buffer for texture coords
            buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.enableVertexAttribArray(texcoordLocation);
            gl.vertexAttribPointer(texcoordLocation, 2, gl.FLOAT, false, 0, 0);

            // Put texcoords in the buffer
            var texcoords = [
                0, 0,
                0, 1,
                1, 0,
                1, 0,
                0, 1,
                1, 1
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoords), gl.STATIC_DRAW);

        };



        this.loadTextureInfo = function(url,opts,callBack) {
            if (opts.type=='base64') {
                url = ve.utils.getBase64prefix('image',opts.fileName) + url;
            }
            var tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex);
            // Fill the texture with a 1x1 blue pixel.
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
                new Uint8Array([0, 0, 255, 255]));

            // let's assume all images are not a power of 2
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

            var textureInfo = {
                width: 1,   // we don't know the size until it loads
                height: 1,
                texture: tex
            };
            var img = new Image();
            img.onload = function() {
                textureInfo.width = img.width;
                textureInfo.height = img.height;

                gl.bindTexture(gl.TEXTURE_2D, textureInfo.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                callBack(textureInfo);
            };
            //<code><%if (opts.debug){%>img.onerror=function(e){throw 'can not load image with url '+ url};<%}%>
            img.src = url;
            document.body.appendChild(img);
        };

        this.drawImage = function(
            textureInfo,
            srcX, srcY, srcWidth, srcHeight,
            dstX, dstY, dstWidth, dstHeight) {

            var tex = textureInfo.texture;
            var texWidth = textureInfo.width;
            var texHeight = textureInfo.height;


            if (dstX === undefined) {
                dstX = srcX;
            }
            if (dstY === undefined) {
                dstY = srcY;
            }
            if (srcWidth === undefined) {
                srcWidth = texWidth;
            }
            if (srcHeight === undefined) {
                srcHeight = texHeight;
            }
            if (dstWidth === undefined) {
                dstWidth = srcWidth;
            }
            if (dstHeight === undefined) {
                dstHeight = srcHeight;
            }

            gl.bindTexture(gl.TEXTURE_2D, tex);

            // this matirx will convert from pixels to clip space
            var projectionMatrix = GlUtils.make2DProjection(mCanvas.width, mCanvas.height, 1);

            // this matrix will scale our 1 unit quad
            // from 1 unit to dstWidth, dstHeight units
            var scaleMatrix = GlUtils.makeScale(dstWidth*mScaleX, dstHeight*mScaleY, 1);

            // this matrix will translate our quad to dstX, dstY
            var translationMatrix = GlUtils.makeTranslation(dstX*mScaleX, dstY*mScaleY, 0);

            // multiply them all togehter
            var matrix = GlUtils.matrixMultiply(scaleMatrix, translationMatrix);
            matrix = GlUtils.matrixMultiply(matrix, projectionMatrix);

            // Set the matrix.
            gl.uniformMatrix4fv(matrixLocation, false, matrix);

            // Because texture coordinates go from 0 to 1
            // and because our texture coordinates are already a unit quad
            // we can select an area of the texture by scaling the unit quad
            // down
            var texScaleMatrix = GlUtils.makeScale(srcWidth / texWidth, srcHeight / texHeight, 1);
            var texTranslationMatrix = GlUtils.makeTranslation(srcX / texWidth, srcY / texHeight, 0);

            // multiply them together
            var texMatrix = GlUtils.matrixMultiply(texScaleMatrix, texTranslationMatrix);

            // Set the texture matrix.
            gl.uniformMatrix4fv(textureMatrixLocation, false, texMatrix);

            // draw the quad (2 triangles, 6 vertices)
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        };

        this.clear = function() {
            //gl.colorMask(false, false, false, true);
            gl.clearColor(1, 1, 1, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
        };

        this.scale = function(scaleX,scaleY){
            mScaleX = scaleX;
            mScaleY = scaleY;
            gl.viewport(0, 0, mCanvas.width, mCanvas.height);
        };

    }


})();