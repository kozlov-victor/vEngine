
export let Transient = params=> {
    return (target) => {
        target.transient = params;
    };
};