
var commonBehaviour = {};

//<code><%for (var i=0;i<commonBehaviour.length;i++){%>
//<code>commonBehaviour['<%- commonBehaviour[i].name %>'] = <%- commonBehaviour[i].content %>
//<code><%if (i<commonBehaviour.length-1){%>;<%}%>
//<code><%}%>

module.exports.commonBehaviour = commonBehaviour;