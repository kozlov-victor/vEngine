
let lcd = {
    letterData: ["","1818181818181800001818","36363636","00006666ff6666ff6666","187effd8f87e1f1bff7e18","70d8db760c18306edb1b0e","386cccccd87070d8cfc67f","0e0c1c18","0c1830303030303030180c","30180c0c0c0c0c0c0c1830","0000995a3cff3c5a99","0000181818ffff181818","000000000000001c1c1830","0000000000ffff","00000000000000003838","030306060c0c181830306060","3c66c3c7cfdbf3e3c3663c","183878181818181818187e","7ee703060c183060c0c0ff","7ee70303077e070303e77e","0c1c3c6cccff0c0c0c0c0c","ffc0c0c0c0fe070303e77e","7ee7c0c0c0fec7c3c3e77e","ff030303060c1830303030","7ee7c3c3e77ee7c3c3e77e","7ee7c3c3e77f030303e77e","00000000383800003838","0000001c1c00001c1c1830","060c183060c06030180c06","00000000ffff00ffff","6030180c0603060c183060","7ec3c303060c1818000018","0000007ec3ddd3dbcf603f","183c66c3c3c3ffc3c3c3c3","fec7c3c3c7fec7c3c3c7fe","7ee7c0c0c0c0c0c0c0e77e","fccec7c3c3c3c3c3c7cefc","ffc0c0c0c0fcc0c0c0c0ff","ffc0c0c0fcc0c0c0c0c0c0","7ee7c0c0c0c0cfc3c3e77e","c3c3c3c3c3ffc3c3c3c3c3","7e1818181818181818187e","0606060606060606c6ee7c","c3c6ccd8f0e0f0d8ccc6c3","c0c0c0c0c0c0c0c0c0c0ff","c3e7ffffdbc3c3c3c3c3c3","e3e3f3f3fbdbdfcfcfc7c7","7ee7c3c3c3c3c3c3c3e77e","fec7c3c3c7fec0c0c0c0c0","3c66c3c3c3c3c3dbdf6e3f","fec7c3c3c7fef0d8ccc6c3","7ee7c0c0e07e070303e77e","ff18181818181818181818","c3c3c3c3c3c3c3c3c3e77e","c3c3c3c3c3c366663c3c18","c3c3c3c3c3dbdbffffe7c3","c366663c3c183c3c6666c3","c366663c3c181818181818","ff0303060c7e3060c0c0ff","3c3030303030303030303c","6060303018180c0c06060303","3c0c0c0c0c0c0c0c0c0c3c","183c66c3","0000000000000000000000ffff","70303818","000000007ec3037fc3c37f","c0c0c0c0c0fec3c3c3c3fe","000000007ec3c0c0c0c37e","03030303037fc3c3c3c37f","000000007ec3c3fec0c07f","1e33303030fc3030303030","000000007ec3c3c37f0303c37e","c0c0c0c0fec3c3c3c3c3c3","0018000018181818181818","000c00000c0c0c0c0c0c0c6c38","c0c0c0c0c6ccd8f0f8ccc6","781818181818181818187e","00000000fedbdbdbdbdbdb","00000000fcc6c6c6c6c6c6","000000007cc6c6c6c6c67c","00000000fec3c3c3c3fec0c0c0","000000007fc3c3c3c37f030303","00000000fee0c0c0c0c0c0","000000007fc0c07e0303fe","00303030fc30303030361c","00000000c6c6c6c6c6c67e","00000000c3c366663c3c18","00000000c3c3c3dbffe7c3","00000000c3663c183c66c3","00000000c366663c18306060c0","00000000ff060c183060ff","0f18181838f0381818180f0000","18181818181818181818181818","f01818181c0f1c181818f0","00000060f18f06"],
    sprites: {
        man: [
            [
                0b00110,
                0b00110,
                0b00000,
                0b01110,
                0b00111,
                0b00110,
                0b01011,
                0b11001
            ],
            [
                0b00110,
                0b00110,
                0b00000,
                0b00110,
                0b00110,
                0b00110,
                0b00110,
                0b01110
            ]
        ]
    },
    pixels: [],
    game: null,
    create(parent){
        this.letters = [];
        this.uncompress=(source,dest)=>{
            this.letterData.forEach((d,i)=>{
                this.letters[i]=[];
                let arr = d.match(/[\s\S]{1,2}/g);
                if (!arr) return;
                arr.forEach((item,j)=>{
                    this.letters[i][j]=parseInt(item,16);
                })
            });
        };
        this.letterData.forEach((d,i)=>{
            this.letters[i]=[];
            let arr = d.match(/[\s\S]{1,2}/g);
            if (!arr) return;
            arr.forEach((item,j)=>{
                this.letters[i][j]=parseInt(item,16);
            })
        });
        this.game = parent.game;
        for (let j=0;j<16;j++) {
            this.pixels[j] = [];
            for (let i=0;i<8*13;i++) {
                if (!this.pixels[j][i]) this.pixels[j][i] = [];
                let obj = {};
                obj.pos = {x:parent.object.pos.x+i*6 + 74,y:parent.object.pos.y+j*6 + 75};
                obj.alpha = 0.1;
                obj.color = '#bbb';
                this.pixels[j][i] = obj;
            }
        }
    },
    draw(){
        let context = this.game._renderer;
        for (let j=0;j<16;j++) {
            for (let i=0;i<8*13;i++) {
                let obj = this.pixels[j][i];
                context.setAlpha(obj.alpha);
                context.fillRect(obj.pos.x,obj.pos.y,5,5,obj.color);
                obj.alpha = 0.1;
            }
        }
    },
    drawSprite(x,y,spriteArr,w,h,toConsole) {
        let consoleOut = '';
        for (let j=0;j<h;j++) {
            let row = spriteArr[j];
            let mask = 1<<(w-1);
            for (let i=0;i<w;i++) {
                let res = ((mask & row)>0)?1:0;
                if (res && this.pixels[y+j] && this.pixels[y+j][x+i]) this.pixels[y+j][x+i].alpha = 1;
                mask>>=1;
                if (toConsole) consoleOut+=res?'*':' ';
            }
            if (toConsole) consoleOut+='\n';
        }
        return consoleOut;
    },
    printLetter(x,y,index,toConsole){
        return this.drawSprite(x,y,this.letters[index],8,13,toConsole);
    },
    printString(x,y,str,toConsole){
        let res = '';
        str.split('').map(c=>c.charCodeAt(0)).forEach(code=>{
            res+=this.printLetter(x,y,code-32,toConsole);
            x+=9;
        });
        return {res,x,y};
    },
};


let breadBoard = {
    clamp(val,l,h){
        if (val<l) return l;
        if (val>h) return h;
        return val;
    },
    cellFromXY(x,y){
        let cellX = ~~((x - this.parent.object.pos.x - 60) / 50);
        let cellY = ~~((y - this.parent.object.pos.y - 200) / 50);
        cellX = this.clamp(cellX,0,this.w - 1);
        cellY = this.clamp(cellY,0,this.h - 1);
        return {cellX,cellY};
    },
    posFromCellXY(cellX,cellY){
        let posX = cellX * 50 + this.parent.object.pos.x + 60;
        let posY = cellY * 50 + this.parent.object.pos.y + 200;
        return {posX,posY};
    },
    objects:[],
    w:13,
    h:4,
    limit: 0,
    isConnected: false,
    getObjMatrix(objIndex){
        switch (objIndex) {
            case 1:
                return [
                    [0,1,0],
                    [1,0,1],
                    [0,0,0]
                ];
            case 2:
                return [
                    [0,1,0],
                    [1,0,1],
                    [0,1,0]
                ];
            case 3:
                return [
                    [0,0,0],
                    [1,0,1],
                    [0,0,0]
                ];
            case 4:
                return [
                    [0,0,0],
                    [1,0,1],
                    [0,0,0]
                ];
            case 5:
                return [
                    [0,0,0],
                    [1,0,1],
                    [0,0,0]
                ];
            case 6:
                return [
                    [0,0,0],
                    [1,0,0],
                    [0,1,0]
                ];
        }
    },
    _checkConnectedItem(instance,instanceMat,test,testMat){
        if (!test) return;
        if (test.checked) return;
        let isMatrixConnected = (
            instance.matrix[instanceMat.j][instanceMat.i] &&
            test.matrix[testMat.j][testMat.i]
        );
        if (!isMatrixConnected) return;
        if (
            instance.main || instance.connected || test.main || test.connected
        ) {
            test.connected = true;
            //instance.connected = true;
        }
        test.checked = true;
        test.blendMode = (test.connected||test.main)?'overlay':'';
        this.checkConnected(test);
    },
    checkConnected(instance){
        if (instance.main) {
            instance.connected = true;
            instance.alpha = 0.7;
        }
        let left = this.objects[instance.j][instance.i-1];
        let right = this.objects[instance.j][instance.i+1];
        let top = this.objects[instance.j-1] && this.objects[instance.j-1][instance.i];
        let bottom = this.objects[instance.j+1] && this.objects[instance.j+1][instance.i];
        this._checkConnectedItem(instance,{j:1,i:0},left,{j:1,i:2});
        this._checkConnectedItem(instance,{j:1,i:2},right,{j:1,i:0});
        this._checkConnectedItem(instance,{j:0,i:1},top,{j:2,i:1});
        this._checkConnectedItem(instance,{j:2,i:1},bottom,{j:0,i:1});
        instance.blendMode = (instance.connected||instance.main)?'overlay':'';
        instance.checked = true;
    },
    iterateAll(fn){
        for (let j=0;j<this.h;j++) {
            for (let i=0;i<this.w;i++) {
                if (this.objects[j] && this.objects[j][i]) {
                    fn(this.objects[j][i]);
                }
            }
        }
    },
    checkAllConnected(){
        this.iterateAll(obj=>{
            obj.checked = obj.connected = false;
            obj.blendMode = '';
        });
        this.checkConnected(this.mainObject);
        let res = true;
        this.iterateAll(obj=>{
            res = res && obj.connected;
        });
        this.isConnected = res;
    },
    rotateMatrix(m){
        let res = [];
        for (let j = 0;j<m.length;j++) {
            res[j] = [];
            for (let i = 0;i<m[j].length;i++) {
                res[j][i] = m[m[j].length - i - 1][j];
            }
        }
        return res;
    },
    create(parent){
        this.limit+=3;
        this.isConnected = false;
        this.iterateAll(obj=>{
           obj.kill();
        });
        this.parent = parent;
        this.game = parent.game;
        let mainObjDefined = false;
        let lastObject = null;
        let cnt = 0;
        for (let j=0;j<this.h;j++) {
            this.objects[j] = [];
            for (let i=0;i<this.w;i++) {
                if (cnt>this.limit) continue;
                if (Math.random()<0.5) {
                    this.objects[j][i] = null;
                    continue;
                }
                let objIndex = 1+~~(Math.random()*6);
                let baseInstance = this.game._repository.getArray('GameObjectProto').find(it=>it.name==='connection_'+objIndex);
                let instance = baseInstance.clone();
                cnt++;
                instance.pos = {
                    x: parent.object.pos.x + i*50 + 60,
                    y: parent.object.pos.y + j*50 + 200,
                };
                instance.j = j;
                instance.i = i;
                if (!mainObjDefined && Math.random()>0.8) {
                    instance.main = true;
                    this.mainObject = instance;
                    mainObjDefined = true;
                } else {
                    lastObject = instance;
                }
                instance.matrix = this.getObjMatrix(objIndex);
                this.objects[j][i] = instance;
                instance.on('doubleClick',()=>{
                    if (instance._rotationLocked) return;
                    if (instance._moveLocked) return;
                    instance._rotationLocked = true;
                    let angleTo = instance.angle+Math.PI/2;
                    instance.tween(
                        {
                            complete:()=>{
                                instance._rotationLocked = false;
                                instance.matrix = this.rotateMatrix(instance.matrix);
                                this.checkAllConnected();
                            },
                            to:{angle:angleTo},
                            time:500
                        }
                    );
                });
                instance.on('dragStart',e=>{
                    if (instance._moveLocked) e.preventDefault();
                });
                instance.on('dragStop',e=>{
                    instance._moveLocked = true;
                    let currCellXY = this.cellFromXY(e.x + e.mX,e.y + e.mY);
                    let oldCellXY = this.cellFromXY(e.dragStartX,e.dragStartY);
                    let oldPosXY = this.posFromCellXY(oldCellXY.cellX,oldCellXY.cellY);
                    let newPosXY = this.posFromCellXY(currCellXY.cellX,currCellXY.cellY);
                    let instanceOverIt = this.objects[currCellXY.cellY] && this.objects[currCellXY.cellY][currCellXY.cellX];
                    if (instanceOverIt) {
                        instance.tween({
                            complete:()=>{instance._moveLocked = false},
                            target:instance.pos,
                            to:{x:oldPosXY.posX,y:oldPosXY.posY},
                            time: 500
                        });
                    } else {
                        instance.tween({
                            complete:()=>{
                                instance._moveLocked = false;
                                instance.j = currCellXY.cellY;
                                instance.i = currCellXY.cellX;
                                this.checkAllConnected();
                            },
                            target:instance.pos,
                            time: 500,
                            to:{x:newPosXY.posX,y:newPosXY.posY}
                        });
                        this.objects[oldCellXY.cellY][oldCellXY.cellX] = null;
                        this.objects[currCellXY.cellY][currCellXY.cellX] = instance;
                    }
                });
                this.game.getCurrScene().layers[0].addGameObject(instance);
            }
        }
        if (!mainObjDefined) {
            lastObject.main = true;
            this.mainObject = lastObject;
        }
        this.checkAllConnected();
    }
};

export class BoardBehaviour {

    constructor() {
        this.txtPos = 0;
        this.txt = '';
    }

    onCreate() {
        lcd.create(this);
        breadBoard.create(this);
        this.object._game.getCurrScene().on('click',()=>{
            if (breadBoard.isConnected) {
                breadBoard.create(this);
            }
        });
        console.log(lcd.printString(0, 0, 'js13k', true).res);
    }

    onUpdate() {
        let time = this.game.getDeltaTime();
        if (breadBoard.isConnected) {
            this.txt = 'CONNECTED!!!';
            lcd.printString(0, 3, this.txt);
        } else {
            this.txt = 'LOST connection!!!';
            this.txtPos -= time / 1000 * 20; // px per sec
            if (this.txtPos < (-this.txt.length * 9 - 5)) this.txtPos = 8 * 13 + 5;
            let iPos = ~~(this.txtPos);
            let {x, y} = lcd.printString(iPos, 3, this.txt);
            if (iPos < 0) iPos = -iPos;
            let sprIndex = iPos % 6;
            sprIndex = sprIndex <= 3 ? 0 : 1;
            lcd.drawSprite(x, y + 3, lcd.sprites.man[sprIndex], 5, 8);
        }
        lcd.draw();
    }
}
    