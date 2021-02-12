(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{38:function(t,e,n){},39:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var r,a=n(0),i=n.n(a),s=n(18),o=n.n(s),c=(n(38),n(39),n(40),n(5)),u=n(6),h=n(10),d=n(9),l=(n(41),n(52)),f=n(32),v=n(7),p=function(){function t(){Object(c.a)(this,t),this.arr=[]}return Object(u.a)(t,[{key:"push",value:function(t){this.arr.push(t)}},{key:"pop",value:function(){return this.arr.pop()}},{key:"isEmpty",value:function(){return 0===this.arr.length}}]),t}(),b=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,[{key:"findStartNode",value:function(t){for(var e,n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r].start){e=t[n][r];break}return e}},{key:"findEndNode",value:function(t){for(var e,n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)if(t[n][r].end){e=t[n][r];break}return e}},{key:"getAdjList",value:function(t){for(var e=[],n=0;n<t.length;n++){e[n]=[];for(var r=0;r<t[n].length;r++)e[n][r]=[],t[n][r].wall||(t[n-1]&&t[n-1][r]&&!t[n-1][r].wall&&e[n][r].push(t[n-1][r]),t[n][r-1]&&!t[n][r-1].wall&&e[n][r].push(t[n][r-1]),t[n+1]&&t[n+1][r]&&!t[n+1][r].wall&&e[n][r].push(t[n+1][r]),t[n][r+1]&&!t[n][r+1].wall&&e[n][r].push(t[n][r+1]))}return e}}]),t}(),j=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"findPath",value:function(t){var e=Object(v.a)(t),n=this.findStartNode(e),r=this.findEndNode(e),a=this.getAdjList(e),i=new p;i.push(n);for(var s=1;!i.isEmpty();){var o=i.pop();if(o.x===r.x&&o.y===r.y){r.order=s;break}o.visited||(o.visited=!0,o.order=s,s++,a[o.x][o.y].forEach((function(t){i.push(t)})))}return e}},{key:"toString",value:function(){return"DFS"}}]),n}(b),g=function(){function t(){Object(c.a)(this,t),this.arr=[]}return Object(u.a)(t,[{key:"enqueue",value:function(t){this.arr.push(t)}},{key:"dequeue",value:function(){return this.arr.shift()}},{key:"isEmpty",value:function(){return 0===this.arr.length}}]),t}(),O=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"findPath",value:function(t){var e=Object(v.a)(t),n=this.findStartNode(e),r=this.findEndNode(e),a=this.getAdjList(e),i=new g;n.visited=!0,i.enqueue(n);for(var s=1;!i.isEmpty();){var o=i.dequeue();if(o.x===r.x&&o.y===r.y){r.order=s;break}a[o.x][o.y].forEach((function(t){t.visited||(t.visited=!0,i.enqueue(t),t.order=s,s++)}))}return e}},{key:"toString",value:function(){return"BFS"}}]),n}(b),y=function(){function t(){Object(c.a)(this,t),this.arr=[]}return Object(u.a)(t,[{key:"enqueue",value:function(t,e){this.arr.push({prio:t,item:e}),this.sort()}},{key:"sort",value:function(){this.arr.sort((function(t,e){return t.prio-e.prio}))}},{key:"dequeue",value:function(){var t;return null===(t=this.arr.shift())||void 0===t?void 0:t.item}},{key:"isEmpty",value:function(){return 0===this.arr.length}},{key:"contains",value:function(t){var e=!1;return this.arr.forEach((function(n){t!=n.item||(e=!0)})),e}},{key:"updateKey",value:function(t,e){this.arr.forEach((function(n){e!=n.item||(n.prio=t)})),this.sort()}}]),t}(),m=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"findPath",value:function(t){var e=this,n=Object(v.a)(t),r=this.findStartNode(n),a=this.findEndNode(n),i=this.getAdjList(n),s=new y;n.forEach((function(t){t.forEach((function(t){t.distance=1/0,t.prevNode=void 0}))})),r.distance=0,r.visited=!0,s.enqueue(r.distance,r);for(var o=function(){var t=s.dequeue();i[t.x][t.y].forEach((function(n){var r=t.distance+e.distance(t,n);r<n.distance&&(n.distance=r,n.prevNode=t,s.enqueue(n.distance,n))}))};!s.isEmpty();)o();for(var c=[a],u=a;void 0!=u.prevNode;)c=[u=u.prevNode].concat(Object(v.a)(c));for(var h=1,d=0;d<c.length;d++)a!=c[0]&&(c[d].visited=!0,c[d].order=h,h++);return n}},{key:"distance",value:function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}},{key:"toString",value:function(){return"Dijkstra"}}]),n}(b),k=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"findPath",value:function(t){var e=this,n=Object(v.a)(t),r=this.findStartNode(n),a=this.findEndNode(n),i=this.getAdjList(n),s=new y;new Set;n.forEach((function(t){t.forEach((function(t){t.distance=0,t.prevNode=void 0}))})),r.distance=0,s.enqueue(0,r);var o=function(){var t=s.dequeue();if(t.x===a.x&&t.y===a.y)return"break";t.visited=!0,i[t.x][t.y].forEach((function(n){if(!n.visited){var r=t.distance+e.distance(t,n);s.contains(n)&&r>=n.distance||(n.prevNode=t),n.distance=r;var i=r+e.h(n,a);s.contains(n)?s.updateKey(i,n):s.enqueue(i,n)}}))};do{if("break"===o())break}while(!s.isEmpty());for(var c=[a],u=a;void 0!=u.prevNode;)c=[u=u.prevNode].concat(Object(v.a)(c));for(var h=1,d=0;d<c.length;d++)a!=c[0]&&(c[d].visited=!0,c[d].order=h,h++);return n}},{key:"distance",value:function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}},{key:"h",value:function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}},{key:"toString",value:function(){return"A*"}}]),n}(b),x=(n(42),n(43),n(2)),N=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e={};return e=this.props.node.start?{backgroundColor:"lightgreen"}:this.props.node.end?{backgroundColor:"red"}:this.props.node.wall?{backgroundColor:"grey"}:this.props.node.visited?{backgroundColor:"green"}:{backgroundColor:"lightblue"},Object(x.jsx)("div",{onTouchMove:function(){return t.props.onMouseOver(t.props.node)},onMouseOver:function(){return t.props.onMouseOver(t.props.node)},className:"node",style:e,children:this.props.node.order||0===this.props.node.order?Object(x.jsx)("p",{className:"orderText",children:this.props.node.order}):null})}}]),n}(i.a.Component),E=n(28),S=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).STARTX=10,r.STARTY=13,r.ENDX=40,r.ENDY=13,r.state={nodes:r.initNodes(),holdMouseDown:!1,startX:r.STARTX,startY:r.STARTY,endX:r.ENDX,endY:r.ENDY},r}return Object(u.a)(n,[{key:"initNodes",value:function(){for(var t=[],e=0;e<this.props.height;e++){t[e]=[];for(var n=0;n<this.props.width;n++){var r={x:e,y:n,start:!1,end:!1,wall:!1};e==this.STARTY&&n==this.STARTX?r.start=!0:e==this.ENDY&&n==this.ENDX&&(r.end=!0),t[e][n]=r}}return t}},{key:"calculatePath",value:function(){this.clearOrder(),this.clearVisited(),this.setState({nodesVisited:void 0});var t=this.props.algorithm.findPath(this.state.nodes);this.setState({nodes:t,nodesVisited:t[this.state.endY][this.state.endX].order})}},{key:"clearWalls",value:function(){var t=Object(v.a)(this.state.nodes);t.forEach((function(t){t.forEach((function(t){t.wall=!1}))})),this.setState({nodes:t})}},{key:"clearDistanceAndPrevNode",value:function(){var t=Object(v.a)(this.state.nodes);t.forEach((function(t){t.forEach((function(t){t.distance=void 0,t.prevNode=void 0}))})),this.setState({nodes:t,nodesVisited:void 0})}},{key:"clearOrder",value:function(){var t=Object(v.a)(this.state.nodes);t.forEach((function(t){t.forEach((function(t){t.order=void 0}))})),this.setState({nodes:t,nodesVisited:void 0})}},{key:"clearVisited",value:function(){var t=Object(v.a)(this.state.nodes);t.forEach((function(t){t.forEach((function(t){t.visited=!1}))})),this.setState({nodes:t,nodesVisited:void 0})}},{key:"clearEverything",value:function(){this.clearWalls(),this.clearVisited(),this.clearOrder(),this.clearDistanceAndPrevNode()}},{key:"clearPath",value:function(){this.clearVisited(),this.clearOrder()}},{key:"changeBackgroundWall",value:function(t){if(this.state.holdMouseDown){var e=Object(v.a)(this.state.nodes);e[t.x][t.y].wall=!0,this.setState({nodes:e})}}},{key:"changeStartNode",value:function(t,e){var n=Object(v.a)(this.state.nodes);n.forEach((function(n){n.forEach((function(n){n.start&&(n.start=!1),n.x===e&&n.y===t&&(n.start=!0)}))})),this.setState({nodes:n,startX:t,startY:e})}},{key:"changeEndNode",value:function(t,e){var n=Object(v.a)(this.state.nodes);n.forEach((function(n){n.forEach((function(n){n.end&&(n.end=!1),n.x===e&&n.y===t&&(n.end=!0)}))})),this.setState({nodes:n,endX:t,endY:e})}},{key:"resetStartAndEnd",value:function(){this.changeStartNode(this.STARTX,this.STARTY),this.changeEndNode(this.ENDX,this.ENDY)}},{key:"render",value:function(){for(var t=this,e={gridTemplateColumns:"repeat(".concat(this.props.width,", minmax(10px, 1fr))"),gridTemplateRows:"repeat(".concat(this.props.height,", minmax(10px, 1fr))")},n=[],r=0;r<this.props.height;r++)for(var a=0;a<this.props.width;a++)n.push(Object(x.jsx)(N,{node:this.state.nodes[r][a],onMouseOver:this.changeBackgroundWall.bind(this)},"".concat(r,",").concat(a)));return Object(x.jsxs)("div",{className:"gridBtn",children:[Object(x.jsxs)("div",{className:"startEndInput",children:[Object(x.jsxs)("label",{htmlFor:"start",children:["Start: ",Object(x.jsx)("input",{type:"number",min:"0",max:"50",name:"start",placeholder:"x",onChange:function(e){return t.changeStartNode(Number.parseInt(e.target.value),t.state.startY)}}),Object(x.jsx)("input",{type:"number",min:"0",max:"25",placeholder:"y",onChange:function(e){return t.changeStartNode(t.state.startX,Number.parseInt(e.target.value))}})]}),Object(x.jsxs)("label",{htmlFor:"end",className:"labelEnd",children:["End: ",Object(x.jsx)("input",{type:"number",min:"0",max:"50",placeholder:"x",onChange:function(e){return t.changeEndNode(Number.parseInt(e.target.value),t.state.endY)}}),Object(x.jsx)("input",{type:"number",min:"0",max:"25",placeholder:"y",onChange:function(e){return t.changeEndNode(t.state.endX,Number.parseInt(e.target.value))}})]}),Object(x.jsx)(E.a,{className:"btn btn-warning",onClick:function(){return t.resetStartAndEnd()},children:"Reset Start and End"})]}),Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)(E.a,{className:"btn btn-success",onClick:function(){return t.calculatePath()},children:"Calculate!"}),Object(x.jsx)(E.a,{className:"btn btn-warning",onClick:function(){return t.clearWalls()},children:"Clear Walls"}),Object(x.jsx)(E.a,{className:"btn btn-secondary",onClick:function(){return t.clearPath()},children:"Clear Path"}),Object(x.jsx)(E.a,{className:"btn btn-danger",onClick:function(){return t.clearEverything()},children:"Clear everything"})]}),Object(x.jsx)("p",{id:"infoText",children:"Hold down the mouse on the grid to place walls!"}),Object(x.jsx)("div",{onMouseDown:function(){return t.setState({holdMouseDown:!0})},onMouseUp:function(){return t.setState({holdMouseDown:!1})},className:"grid-container",style:e,children:n}),this.state.nodesVisited?Object(x.jsxs)("p",{className:"pathLengthText",children:["L\xe4nge des gefundenen Pfades: ",this.state.nodesVisited]}):Object(x.jsx)("p",{className:"pathLengthText",children:"Keinen Pfad zum Endknoten gefunden!"})]})}}]),n}(i.a.Component);!function(t){t[t.DFS=0]="DFS",t[t.BFS=1]="BFS",t[t.Astar=2]="Astar",t[t.Dijkstra=3]="Dijkstra"}(r||(r={}));var w=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).WIDTH=50,r.HEIGHT=26,r.state={algorithm:new j},r}return Object(u.a)(n,[{key:"changeAlgorithm",value:function(t){switch(t){case r.DFS:this.setState({algorithm:new j});break;case r.BFS:this.setState({algorithm:new O});break;case r.Astar:this.setState({algorithm:new k});break;case r.Dijkstra:this.setState({algorithm:new m})}}},{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:"site",children:[Object(x.jsxs)("div",{className:"buttonBar",children:[Object(x.jsxs)(l.a,{id:"dropdown-item-button",variant:"secondary",title:"".concat(this.state.algorithm.toString()),children:[Object(x.jsx)(f.a.Item,{as:"button",onClick:function(){return t.changeAlgorithm(r.DFS)},children:"Depth-first-search (DFS)"}),Object(x.jsx)(f.a.Item,{as:"button",onClick:function(){return t.changeAlgorithm(r.BFS)},children:"Breadth-first-search (BFS)"}),Object(x.jsx)(f.a.Item,{as:"button",onClick:function(){return t.changeAlgorithm(r.Dijkstra)},children:"Dijkstra"}),Object(x.jsx)(f.a.Item,{as:"button",onClick:function(){return t.changeAlgorithm(r.Astar)},children:"A*"})]}),this.state.algorithm?Object(x.jsxs)("p",{className:"algorithmText",children:["Current algorithm: ",this.state.algorithm.toString()]}):Object(x.jsx)("p",{className:"algorithmText",children:"No algorithm chosen"})]}),Object(x.jsx)(S,{width:this.WIDTH,height:this.HEIGHT,algorithm:this.state.algorithm})]})}}]),n}(i.a.Component);var D=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),r(t),a(t),i(t),s(t)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.a4767afb.chunk.js.map