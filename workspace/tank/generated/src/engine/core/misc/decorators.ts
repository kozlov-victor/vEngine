
export let Transient = (params:any)=> {
    return (target:any) => {
        target.transient = params;
    };
};