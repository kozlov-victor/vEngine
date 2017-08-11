modules['{{name}}'] =
    {code: function(module){
    let exports = module.exports;
    //<code>{{{code}}}
    //<code>{{#if opts.debug}}
    //<code> if typeof exports === 'function') throw "can not export function at module <%=name%>"
    //<code>{{/if}}
}};