(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},22:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(6),c=n.n(s),u=(n(22),n(1)),o=n.n(u),i=n(3),l=n(7),p=n(8),b=n(10),m=n(9),C=n(11),E=n(5),f=(n(30),function(e){var t,n=e.count,r=e.incClick,s=e.resetClick,c=e.countMax===n?"red":"";return t=n<-1||e.incDisable&&e.resetDisable?a.a.createElement("div",{className:"counter-count"},'enter value and press "SET"'):a.a.createElement("div",{className:"counter-count counter-count--size ".concat(c)},n),a.a.createElement("div",{className:"counter__inner"},a.a.createElement("div",null,t),a.a.createElement("div",{className:"counter-btn"},a.a.createElement("button",{className:"counter-btn__inc",disabled:e.incDisable,onClick:r},"INC"),a.a.createElement("button",{className:"counter-btn__reset",disabled:e.resetDisable,onClick:s},"RESET")))}),v=function(){return{type:"INC_DISABLE"}},d=function(){return{type:"INC_ACTIVE"}},D=function(){return{type:"RESET_DISABLE"}},x=function(e){return{type:"INC",payload:e}},_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(b.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).incClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.props.count<n.props.countMax)){e.next=3;break}return e.next=3,n.props.inc(n.props.count+1);case 3:n.isDis();case 4:case"end":return e.stop()}}),e)}))),n.resetClick=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.reset(n.props.countStart);case 2:n.isDis();case 3:case"end":return e.stop()}}),e)}))),n.isDis=function(){n.props.count>n.props.countMax-1&&n.props.incDis(),n.props.count<n.props.countMax&&n.props.incActive(),n.props.count>n.props.countStart&&n.props.resetActive(),n.props.count<n.props.countStart+1&&n.props.resetDis()},n}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(f,{incClick:this.incClick,resetClick:this.resetClick,count:this.props.count,countMax:this.props.countMax,incDisable:this.props.incDisable,resetDisable:this.props.resetDisable})}}]),t}(a.a.Component),h=Object(E.b)((function(e){return{count:e.counter.count,countMax:e.setCounter.maxCounter,countStart:e.setCounter.startCounter,incDisable:e.counter.counterIncDisable,resetDisable:e.counter.counterResetDisable}}),{incDis:v,incActive:d,resetDis:D,resetActive:function(){return{type:"RESET_ACTIVE"}},inc:x,reset:function(e){return{type:"RESET",payload:e}}})(_),S=(n(31),function(e){var t=e.err?"error":"";return a.a.createElement("div",{className:"set__inner"},a.a.createElement("div",{className:"set__info"},a.a.createElement("div",null,a.a.createElement("div",{className:"set__title"},"Max"),a.a.createElement("div",{className:"set__title"},"Start")),a.a.createElement("div",{className:"set__inputs"},a.a.createElement("div",null,a.a.createElement("input",{className:t,onChange:e.getMaxCounter,value:e.maxCounter,type:"number"})),a.a.createElement("div",{className:"set__inputs--input"},a.a.createElement("input",{className:t,onChange:e.getStartCounter,value:e.startCounter,type:"number"})))),a.a.createElement("div",{className:"counter-btn set__down"},a.a.createElement("button",{disabled:e.setDisable,onClick:e.setStartCounter},"SET")))}),O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(b.a)(this,Object(m.a)(t).call(this,e))).getStartCounter=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.startValue=Number(t.target.value),e.next=3,n.props.startCount(n.startValue);case 3:n.isDis();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getMaxCounter=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.maxValue=Number(t.target.value),e.next=3,n.props.maxCount(n.maxValue);case 3:n.isDis();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.setStartCounter=function(){n.props.inc(n.startValue),n.isDis(),n.props.incActive()},n.isDis=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.startValue!==n.maxValue){e.next=5;break}return n.error=!0,e.next=4,n.props.setDis();case 4:return e.abrupt("return");case 5:n.props.startCounter===n.startValue&&n.props.maxCounter===n.maxValue?(n.error=!1,n.props.setActive(),n.props.incDis(),n.props.resetDis()):n.props.setDis();case 6:case"end":return e.stop()}}),e)}))),n.maxValue=0,n.startValue=0,n.error=!1,n}return Object(C.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(S,{getStartCounter:this.getStartCounter,getMaxCounter:this.getMaxCounter,setStartCounter:this.setStartCounter,maxCounter:this.props.maxCounter,startCounter:this.props.startCounter,setDisable:this.props.setDisable,err:this.error})}}]),t}(r.Component),N=Object(E.b)((function(e){return{maxCounter:e.setCounter.maxCounter,startCounter:e.setCounter.startCounter,setDisable:e.setCounter.counterSetDisable}}),{maxCount:function(e){return{type:"MAX_COUNT",payload:e}},startCount:function(e){return{type:"START_COUNT",payload:e}},setDis:function(){return{type:"SET_DISABLE"}},setActive:function(){return{type:"SET_ACTIVE"}},inc:x,incDis:v,incActive:d,resetDis:D})(O);var j=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"app__set-count"},a.a.createElement(N,null)),a.a.createElement("div",{className:"app__counter"},a.a.createElement(h,null)))},y=n(4),T=n(2),A={count:null,counterIncDisable:!0,counterResetDisable:!0},I={maxCounter:null,startCounter:null,counterSetDisable:!0},k=Object(y.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC":return Object(T.a)({},e,{count:t.payload});case"INC_DISABLE":return Object(T.a)({},e,{counterIncDisable:!0});case"INC_ACTIVE":return Object(T.a)({},e,{counterIncDisable:!1});case"RESET_DISABLE":return Object(T.a)({},e,{counterResetDisable:!0});case"RESET_ACTIVE":return Object(T.a)({},e,{counterResetDisable:!1});case"RESET":return Object(T.a)({},e,{count:t.payload});default:return e}},setCounter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAX_COUNT":return Object(T.a)({},e,{maxCounter:t.payload});case"START_COUNT":return Object(T.a)({},e,{startCounter:t.payload});case"SET_ACTIVE":return Object(T.a)({},e,{counterSetDisable:!1});case"SET_DISABLE":return Object(T.a)({},e,{counterSetDisable:!0});default:return e}}}),g=Object(y.c)(k);c.a.render(a.a.createElement(E.a,{store:g},a.a.createElement(j,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b6967846.chunk.js.map