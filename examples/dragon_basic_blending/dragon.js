/**
 * Webgl widgets legacy code (http://serge-joggen.github.io/webgl-widgets-legacy)
 *
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
function Dragon(gl,dragon) {
    if (!Dragon.prototype.indexBuffer) {
        Dragon.prototype.init(gl,dragon);
    }
};

Dragon.prototype = {

    vertices: null
    ,
    indices: null
    ,
    textureCoords:null
        ,
    
    positionBuffer:null,
    indexBuffer: null,
    textureBuffer: null,
    init: function (gl,dragon) {
        var that = Dragon.prototype;

        that.vertices = dragon.vertices;
        that.indices = dragon.indices;
       
        console.log("initing dragon");
        that.positionBuffer = gl.createBuffer();
        that.positionBuffer.itemSize = 3;
        that.positionBuffer.numItems = that.vertices.length / that.positionBuffer.itemSize;
        gl.bindBuffer(gl.ARRAY_BUFFER, that.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array( that.vertices), gl.STATIC_DRAW);

      
        that.indexBuffer = gl.createBuffer();
        that.indexBuffer.itemSize = 1;
        that.indexBuffer.numItems = that.indices.length / that.indexBuffer.itemSize;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, that.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array( that.indices), gl.STATIC_DRAW);
       

    },
    draw: function (gl, prog) {

        var that = Dragon.prototype;

        gl.bindBuffer(gl.ARRAY_BUFFER, that.positionBuffer);
        gl.vertexAttribPointer(prog.aVertexPosition, 3, gl.FLOAT, false, 4 * (3 + 3 + 2), 0);
        gl.vertexAttribPointer(prog.aNormalPosition, 3, gl.FLOAT, false, 4 * (3 + 3 + 2), 3* 4);
        gl.vertexAttribPointer(prog.aUV, 2, gl.FLOAT, false, 4 * (3+3+2), (3+3)*4);


        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, that.indexBuffer);
        gl.drawElements(gl.TRIANGLES, that.indexBuffer.numItems, gl.UNSIGNED_INT, 0);
  

    }

};


function Background(gl) {
    if (!Background.prototype.indexBuffer) {
        Background.prototype.init(gl);
    }
};

Background.prototype = {

    vertices: null
    ,
    indices: null
    ,
    textureCoords: null
        ,

    positionBuffer: null,
    indexBuffer: null,
    textureBuffer: null,
    init: function (gl)  {
        var that = Background.prototype;

       that.positionBuffer = gl.createBuffer();
       gl.bindBuffer(gl.ARRAY_BUFFER, that.positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,
                      new Float32Array([-1, 1, -1, -1, 1, -1, 1, 1]),
          gl.STATIC_DRAW);

        that.indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, that.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
                      new Uint16Array([0, 1, 2, 0, 2, 3]),
          gl.STATIC_DRAW);


    },
    draw: function (gl, prog) {

        var that = Background.prototype;

        gl.bindBuffer(gl.ARRAY_BUFFER, that.positionBuffer);
        gl.vertexAttribPointer(prog.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, that.indexBuffer);
        gl.drawElements(gl.TRIANGLES,6, gl.UNSIGNED_SHORT, 0);


    }

};