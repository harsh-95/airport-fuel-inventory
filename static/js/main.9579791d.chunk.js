(this["webpackJsonpairport-fuel-inventory"]=this["webpackJsonpairport-fuel-inventory"]||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},34:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),i=(t(34),t(7)),s=t(10),o=t(6),u=t.n(o),m=t(16),p=t(8),d=t(11),E=t(12),f=t(15),h=t(14),v=(t(36),t(37),function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={email:"harsh@gmail.com",password:"harsh1234"},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(i.a)({},n,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.handleSignin(e.state)},e}return Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Airport Fuel Inventory")),r.a.createElement("div",{className:"formContainer"},r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Email*")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"text",name:"email",value:this.state.email,onChange:this.handleChange}))),r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Password")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}))),r.a.createElement("div",{className:"btnDiv"},r.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Signin")))))}}]),t}(n.Component)),b=t(13),y=t(1),g=[{user_id:123,name:"Harsh Gupta",email:"harsh@gmail.com",password:"harsh1234"}],N=[{airport_id:"IXC",airport_name:"Chandigarh Airport, Chandigarh",fuel_capacity:25e4,fuel_available:139234},{airport_id:"BLR",airport_name:"Kempegowda International Airport, Bangalore",fuel_capacity:25e4,fuel_available:112311},{airport_id:"IXJ",airport_name:"Satwari Airport, Jammu",fuel_capacity:25e4,fuel_available:98e3},{airport_id:"DEL",airport_name:"Indira Gandhi International Airport, Delhi",fuel_capacity:25e4,fuel_available:232100},{airport_id:"CCU",airport_name:"Netaji Subhash Chandra Airport, Kolkata",fuel_capacity:25e4,fuel_available:172819}],I=[{aircraft_id:12531,aircraft_no:"6E-322",airline:"IndiGo"},{aircraft_id:12532,aircraft_no:"SG853",airline:"Spice Jet"},{aircraft_id:12533,aircraft_no:"UK875",airline:"Vistara"},{aircraft_id:12534,aircraft_no:"AI6747",airline:"Air India"},{aircraft_id:12535,aircraft_no:"G8-185",airline:"Go Air"}],_=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=(t(38),Object(n.createContext)()),S=T.Provider,A=T.Consumer,O=function(e){return function(a){return r.a.createElement(A,null,(function(t){return r.a.createElement(e,Object.assign({},t,a))}))}},j=O((function(e){var a=e.aircraftsList,t=e.sortByColumn,n=r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return t("aircraftsList","aircraft_id")}},"Aircraft Id ",r.a.createElement("i",{className:"fas fa-sort"})),r.a.createElement("th",{onClick:function(){return t("aircraftsList","aircraft_no")}},"Aircraft No ",r.a.createElement("i",{className:"fas fa-sort"})),r.a.createElement("th",{onClick:function(){return t("aircraftsList","airline")}},"Airlines ",r.a.createElement("i",{className:"fas fa-sort"})))),r.a.createElement("tbody",{className:"center"},a?a.map((function(e,a){var t=e.aircraft_id,n=e.aircraft_no,l=e.airline;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",null,t)),r.a.createElement("td",null,r.a.createElement("span",null,n)),r.a.createElement("td",null,r.a.createElement("span",null,l)))})):null));return r.a.createElement("div",{className:"airCraftsContainerDiv"},r.a.createElement("h2",{className:"tableHeading"},"Aircrafts"),n)})),w=t(28),L=(t(39),O((function(e){var a=e.airportsList,t=e.transactionsList,l=e.sortByColumn,c=Object(n.useState)({}),i=Object(w.a)(c,2),o=i[0],u=i[1];Object(n.useEffect)((function(){console.log("airports component"),u(Object(s.a)(t).pop())}));var m=r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return l("airportsList","airport_id")}},"Airport Id ",r.a.createElement("i",{class:"fas fa-sort"})),r.a.createElement("th",{onClick:function(){return l("airportsList","airport_name")}},"Airport Name ",r.a.createElement("i",{class:"fas fa-sort"})),r.a.createElement("th",null,"Fuel Capacity"),r.a.createElement("th",{onClick:function(){return l("airportsList","fuel_available")}},"Fuel Available ",r.a.createElement("i",{class:"fas fa-sort"})))),r.a.createElement("tbody",{className:"center"},a?a.map((function(e,a){var t=e.airport_id,n=e.airport_name,l=e.fuel_available,c=e.fuel_capacity;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",null,t)),r.a.createElement("td",null,r.a.createElement("span",null,n)),r.a.createElement("td",null,r.a.createElement("span",null,c)),r.a.createElement("td",{class:"right"},r.a.createElement("span",{className:"latestTransationQty"},o&&o.airportId===t?"IN"===o.transactionType?"\u25b2"+o.quantity:"\u25bc"+o.quantity:null),r.a.createElement("span",null,l)))})):null));return r.a.createElement("div",{className:"airPortsContainerDiv"},r.a.createElement("h2",{className:"tableHeading"},"Airports"),m)}))),k=(t(40),O((function(e){var a=e.transactionsList,t=e.reverseTransaction,n=r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction Id"),r.a.createElement("th",null,"Transaction Date/Time"),r.a.createElement("th",null,"Transaction Type"),r.a.createElement("th",null,"Airport Id"),r.a.createElement("th",null,"Aircraft Id"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Transaction Id Parent"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",{className:"center"},a?a.map((function(e,a){var n=e.transactionId,l=e.transactionDateTime,c=e.transactionType,i=e.airportId,s=e.aircraftId,o=e.quantity,u=e.transactionIdParent,m=e.reversable;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",null,n)),r.a.createElement("td",null,r.a.createElement("span",null,l)),r.a.createElement("td",null,r.a.createElement("span",null,c)),r.a.createElement("td",null,r.a.createElement("span",null,i)),r.a.createElement("td",null,r.a.createElement("span",null,s)),r.a.createElement("td",null,r.a.createElement("span",null,o)),r.a.createElement("td",null,r.a.createElement("span",null,u)),r.a.createElement("td",null,m?r.a.createElement("button",{className:"reverseTranBtn",onClick:function(){return t(n)}},"Reverse the transaction"):r.a.createElement("span",{className:"reversed"},"Reversed")))})):null));return r.a.createElement("div",{className:"transactionContainerDiv"},n)}))),D=t(26),x=(t(41),O(function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={aircraftId:"",airportId:"",transactionType:"",quantity:"",errorMsg:"",showAircraftField:!1},e.handleChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(i.a)({},n,r)),"transactionType"===n&&("IN"===r?e.setState({showAircraftField:!0}):e.setState({showAircraftField:!1}))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=(t.aircraftId,t.airportId),r=t.transactionType,l=t.quantity;t.errorMsg;if(n&&r&&l){var c=!1,i="",s=e.props.airportsList.filter((function(e){return e.airport_id===n}));if("OUT"===r?s[0].fuel_available>parseInt(l)?c=!0:i="Available fuel is less than entered!":s[0].fuel_available+parseInt(l)<s[0].fuel_capacity?c=!0:i="This is exceeding the airport fuel capacity!",c){var o=Object(p.a)(Object(p.a)({},e.state),{},{transactionIdParent:"--",reversable:!0,transactionDateTime:(new Date).toLocaleTimeString("en-Us",{day:"numeric",month:"short",hour12:!0})});e.props.handleTransactionSubmit(o),e.setState({productName:"",category:"",description:"",price:"",errorMsg:""}),console.log("modal closed "),e.props.closeModal()}e.setState({errorMsg:i})}else e.setState({errorMsg:"*Please fill/select all fields"})},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this.props,a=e.aircraftsList,t=e.airportsList;return r.a.createElement("div",{className:"formContainer"},r.a.createElement("span",{className:"errorMsg"},this.state.errorMsg),r.a.createElement("form",{className:"form"},r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Airport Id*")),r.a.createElement("div",{className:"input"},r.a.createElement("select",{name:"airportId",value:this.state.airportId,onChange:this.handleChange},r.a.createElement("option",{hidden:!0},"Select Airport Id"),t?t.map((function(e,a){var t=e.airport_id,n=e.airport_name;return r.a.createElement("option",{key:a,value:t},n)})):null))),r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Transaction Type*")),r.a.createElement("div",{className:"input"},r.a.createElement("select",{name:"transactionType",value:this.state.transactionType,onChange:this.handleChange},r.a.createElement("option",{hidden:!0},"Select Transaction Type"),r.a.createElement("option",{value:"IN"},"IN"),r.a.createElement("option",{value:"OUT"},"OUT")))),this.state.showAircraftField?r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Aircraft Id*")),r.a.createElement("div",{className:"input"},r.a.createElement("select",{name:"aircraftId",value:this.state.aircraftId,onChange:this.handleChange},r.a.createElement("option",{hidden:!0},"Select Aircraft Id"),a?a.map((function(e,a){var t=e.aircraft_id;e.aircraft_no;return r.a.createElement("option",{key:a,value:t},t)})):null))):null,r.a.createElement("div",{className:"formInput"},r.a.createElement("div",{className:"label"},r.a.createElement("label",null,"Quantity*")),r.a.createElement("div",{className:"input"},r.a.createElement("input",{type:"number",name:"quantity",value:this.state.quantity,onChange:this.handleChange}))),r.a.createElement("div",{className:"btnDiv"},r.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Save"))))}}]),t}(n.Component))),F=(t(42),function(){return r.a.createElement(D.a,{trigger:r.a.createElement("button",{className:"btnOpenModal"}," Create a Transaction"),modal:!0},(function(e){return r.a.createElement(x,{closeModal:e})}))}),B=(t(43),O((function(e){var a=e.airportsList;return r.a.createElement("div",{className:"reportContainerDiv"},r.a.createElement("h2",null,"Airport Summary Report"),r.a.createElement("div",{className:"reportDiv"},r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Airport"),r.a.createElement("th",null,"Fuel Available"))),r.a.createElement("tbody",{className:"center"},a?a.map((function(e,a){e.airport_id;var t=e.airport_name,n=e.fuel_available;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("span",null,t)),r.a.createElement("td",null,r.a.createElement("span",null,n)))})):null))))}))),q=(t(44),O((function(e){var a=e.airportsList,t=e.transactionsList;return r.a.createElement("div",{className:"reportContainerDiv"},r.a.createElement("h2",null,"Fuel Summary Report"),r.a.createElement("div",{className:"reportDiv"},a?a.map((function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"fontBold"},"Airport: "),e.airport_name),t.length?r.a.createElement(n.Fragment,null,r.a.createElement("table",{cellSpacing:"5px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"wideHeading"},"Date/Time"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Fuel"),r.a.createElement("th",null,"Aircraft"))),t.length?t.map((function(a,t){var n=a.transactionDateTime,l=a.transactionType,c=a.quantity,i=a.aircraftId,s=a.airportId;return r.a.createElement("tbody",{className:"center"},e.airport_id===s?r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("span",null,n)),r.a.createElement("td",null,r.a.createElement("span",null,l)),r.a.createElement("td",null,r.a.createElement("span",null,c)),r.a.createElement("td",null,r.a.createElement("span",null,i))):null)})):null)):null,r.a.createElement("p",null,r.a.createElement("span",{className:"fontBold"},"Fuel Available: "),e.fuel_available),"--------------------------------")})):null))}))),M=(t(45),function(){return r.a.createElement("div",{className:"containerDiv"},r.a.createElement("div",{className:"headerDiv"},r.a.createElement(b.b,{to:"/",className:"btn"},"Back")),r.a.createElement(B,null),r.a.createElement(q,null))}),U=(t(51),function(){return r.a.createElement("div",{className:"headerDiv"},r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Airport Fuel Inventory")),r.a.createElement(b.b,{to:"/reports",className:"btnSeeReports"},"See Reports"))}),P=function(e){Object(f.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={transactionsList:[],transactionId:1},e.getContext=function(){return Object(p.a)(Object(p.a)({},e.state),{},{handleTransactionSubmit:e.handleTransactionSubmit,sortByColumn:e.sortByColumn,reverseTransaction:e.reverseTransaction})},e.fetchApi=Object(m.a)(u.a.mark((function a(){var t,n;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C();case 2:return t=a.sent,a.next=5,_();case 5:n=a.sent,e.setState({aircraftsList:t,airportsList:n}),console.log(t);case 8:case"end":return a.stop()}}),a)}))),e.sortByColumn=function(a,t){console.log(e.state[a]);var n=Object(s.a)(e.state[a]);n.sort(e.sortByKeys(t)),console.log(n),e.setState(Object(i.a)({},a,n))},e.sortByKeys=function(e){return console.log(e),function(a,t){return a[e]>t[e]?1:-1}},e.reverseTransaction=function(a){var t={},n=e.state.transactionsList.filter((function(e){return e.transactionId===a}))[0];(t=Object(p.a)({},n)).transactionIdParent=t.transactionId,t.transactionId=e.state.transactionId,t.transactionType="OUT"===n.transactionType?"IN":"OUT",t.transactionDateTime=(new Date).toLocaleTimeString("en-Us",{day:"numeric",month:"short",hour12:!0}),console.log(t),e.handleTransactionSubmit(t);var r=e.state.transactionsList.findIndex((function(e){return e.transactionId===a}));Object(s.a)(e.state.transactionsList)[r].reversable=!1},e.handleTransactionSubmit=function(a){var t=e.state,n=t.airportsList,r=t.transactionId;a.transactionId=r;var l=n.findIndex((function(e){return e.airport_id===a.airportId})),c=Object(s.a)(n);"OUT"===a.transactionType?(c[l].fuel_available-=parseInt(a.quantity),a.quantity):(c[l].fuel_available+=parseInt(a.quantity),a.quantity);e.setState((function(e){var t=e.transactionsList,n=e.transactionId;return{transactionsList:[].concat(Object(s.a)(t),[a]),airportsList:c,transactionId:n+1}}))},e.handleSignin=function(e){var a=e.email,t=e.password;console.log(a),g.filter((function(e){return e.email===a&&e.password===t})).length&&(window.location="/")},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.fetchApi()}},{key:"render",value:function(){var e=this;return r.a.createElement(S,{value:this.getContext()},r.a.createElement(b.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/login",render:function(a){return r.a.createElement(v,{handleSignin:e.handleSignin})}}),r.a.createElement(y.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(U,null),r.a.createElement("div",{className:"mainContainer"},r.a.createElement(j,null),r.a.createElement(L,null)),r.a.createElement(F,null),r.a.createElement(k,null))}}),r.a.createElement(y.a,{path:"/reports",component:M}),r.a.createElement(j,null)))))}}]),t}(n.Component);c.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9579791d.chunk.js.map