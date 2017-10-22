
export let draggable = (el,objVal)=>{

    let draggableContainer = el.closest('[data-draggable-container]');
    if (!draggableContainer) throw `[data-draggable-container] not specified`;

    let draggedInfo = null;
    el.addEventListener('mousedown',e=>{
        let rect = el.getBoundingClientRect();
        draggedInfo = {el,offsetX:e.screenX - rect.left,offsetY:e.screenY - rect.top};
    });

    let onDragEnd = ()=>{
        if (!(draggedInfo && draggedInfo.pos)) return;
        objVal.onDragEnd && objVal.onDragEnd(objVal.target,draggedInfo.pos);
        draggedInfo = null;
    };

    draggableContainer.addEventListener('mouseup',e=>{
        onDragEnd();
    });
    document.addEventListener('mouseleave',e=>{
        onDragEnd();
    });
    draggableContainer.addEventListener('mousemove',e=>{
        if (!draggedInfo) return;
        e.preventDefault();
        e.stopPropagation();
        if(e.buttons!==1) {
            draggedInfo = null;
            return;
        }
        let el = draggedInfo.el;
        let clientRect = draggableContainer.getBoundingClientRect();
        let x =  ~~(e.screenX - clientRect.left - draggedInfo.offsetX);
        let y =  ~~(e.screenY - clientRect.top  - draggedInfo.offsetY);
        let newCoords = {x,y};
        if (objVal.onDragMove) objVal.onDragMove(objVal.target,newCoords);
        draggedInfo.pos = draggedInfo.pos || {};
        draggedInfo.pos.x = x;
        draggedInfo.pos.y = y;
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
    });
};