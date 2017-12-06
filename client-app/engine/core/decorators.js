
export function Transient(params) {
    return (target) => {
        target.transient = params;
    };
}