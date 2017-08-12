


import repository from './engine/repository'

repository.addDescriptions([
    {
        id:1,
        type:'SpriteSheet',
        testCol: [{id:2,type:'BaseModel'},{id:3,type:'BaseModel'},{id:4,type:'BaseModel'}]
    },
    {
        id:2,
        type:'BaseModel'
    },
    {
        id:3,
        type:'BaseModel'
    },
    {
        id:4,
        type:'BaseModel'
    }
]);

window.o = repository.getObject(1,'SpriteSheet');
window.o1 = o.clone();
console.log(o1);