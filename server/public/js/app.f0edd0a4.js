(function(e){function t(t){for(var o,s,c=t[0],i=t[1],_=t[2],h=0,l=[];h<c.length;h++)s=c[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(l.length)l.shift()();return a.push.apply(a,_||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var _=0;_<c.length;_++)t(c[_]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02d8":function(e,t,n){"use strict";var o=n("25ab"),r=n.n(o);r.a},"1c23":function(e,t,n){"use strict";n("28a5");t["a"]={methods:{setAuthCookie:function(e){for(var t in e){var n=new Date;n.setTime(n.getTime()+6048e5);var o="expires="+n.toUTCString();document.cookie=t+"="+e[t]+";"+o+";path=/"}},getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie),o=n.split(";"),r=0;r<o.length;r++){var a=o[r];while(" "==a.charAt(0))a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""},getAuthCookie:function(){var e={name:this.getCookie("name"),secret:this.getCookie("secret")};return e}}}},2181:function(e,t,n){"use strict";var o=n("d411"),r=n.n(o);r.a},"25ab":function(e,t,n){},"3c93":function(e,t,n){"use strict";var o=n("5e59"),r=n.n(o);r.a},"43db":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chessboard-wrapper"},[n("div",{staticClass:"chessboard"},[n("chessboard",{attrs:{fen:e.fen},on:{onMove:e.youMove}})],1),n("div",{staticClass:"chess-history"},[n("h3",[e._v(e._s(e.player2))]),n("h3",[e._v(e._s(e.player1))])])])},r=[],a=n("c681"),s=a["a"],c=(n("3c93"),n("2877")),i=Object(c["a"])(s,o,r,!1,null,null,null);t["a"]=i.exports},5679:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("431a"),vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(vue_prism_editor__WEBPACK_IMPORTED_MODULE_1__),_mixins_js_request_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("e87b"),_mixins_js_auth_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("1c23"),_components_ChessBoard__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("43db");__webpack_exports__["a"]={mixins:[_mixins_js_request_js__WEBPACK_IMPORTED_MODULE_2__["a"],_mixins_js_auth_js__WEBPACK_IMPORTED_MODULE_3__["a"]],components:{PrismEditor:vue_prism_editor__WEBPACK_IMPORTED_MODULE_1___default.a,ChessBoard:_components_ChessBoard__WEBPACK_IMPORTED_MODULE_4__["a"]},data:function(){return{key:"",test:!1,code:"// Hàm move nhận đầu vào là thông tin bàn cờ, trả về nước đi tiếp theo\n// Ví dụ bàn cờ có vua của bạn (K) và vua đối phương (k)\n// board = [\n//     {piece: 'K',  position: 'd2'},\n//     {piece: 'k',  position: 'e8'}\n// ]\nfunction move(board) {\n    return { // Di chuyển vua của bạn (K) từ d2 tới d3\n        start: 'd2',\n        stop: 'd3'\n    }\n}"}},created:function(){""!=this.$store.state.code.trim()&&(this.code=this.$store.state.code)},methods:{login:function(){var e=this;this.request("login","post",{secret:this.key}).then((function(e){return 200==e.status?e.json():Promise.reject("Incorrect login details")})).then((function(t){var n=t;""!=t.code.trim()&&"Người dùng thử"!=t.name?e.code=t.code:e.code="// Hàm move nhận đầu vào là thông tin bàn cờ, trả về nước đi tiếp theo\n// Ví dụ bàn cờ có vua của bạn (K) và vua đối phương (k)\n// board = [\n//     {piece: 'K',  position: 'd2'},\n//     {piece: 'k',  position: 'e8'}\n// ]\nfunction move(board) {\n    return { // Di chuyển vua của bạn (K) từ d2 tới d3\n        start: 'd2',\n        stop: 'd3'\n    }\n}",delete n.status,delete n.code,e.setAuthCookie(n),localStorage.code=e.code,e.$store.commit("changeName",n.name),e.$store.commit("changeSecret",n.secret),e.$store.commit("changeCode",e.code)})).catch((function(e){console.log(e),alert("Đăng nhập thất bại.")}))},logout:function(){this.setAuthCookie({name:"",secret:""}),localStorage.code="",this.$store.commit("changeName",""),this.$store.commit("changeSecret",""),this.$store.commit("changeCode","")},save:function(){var e=this;this.request("save","post",{code:this.code,secret:this.$store.state.secret}).then((function(t){if(200!=t.status)return Promise.reject("Incorrect login details");alert("Đã lưu."),localStorage.code=e.code,e.$store.commit("changeCode",e.code)})).catch((function(e){console.log(e),alert("Đã xảy ra lỗi. Vui lòng thử lại.")}))},doTest:function doTest(){try{eval("window.move2 = "+this.code),this.test=!0}catch(e){alert("Chương trình có lỗi cú pháp. Vui lòng kiểm tra lại.")}}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("98c9"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Thi đấu")]),e._v(" |\n      "),n("router-link",{attrs:{to:"/about"}},[e._v("Ghi danh")])],1),n("router-view")],1),n("vue-particles",{attrs:{color:"#ffd600",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#303030",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"repulse"}})],1)},s=[],c=(n("7f7f"),n("1c23")),i={mixins:[c["a"]],created:function(){var e=this.getAuthCookie();this.$store.commit("changeName",e.name),this.$store.commit("changeSecret",e.secret),void 0!=localStorage.code&&this.$store.commit("changeCode",localStorage.code)}},_=i,u=(n("5c0b"),n("5c64"),n("2877")),h=Object(u["a"])(_,a,s,!1,null,null,null),l=h.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"App logo",src:n("cf05")}}),o("h3",[e._v("Chào mừng tới")]),o("h1",[e._v("Đấu trường danh vọng")]),o("button",{on:{click:e.battle}},[e._v("Vào trận")])])},f=[],v={name:"home",methods:{battle:function(){window.chesswar?alert("Battle"):alert("Đấu trường chưa mở. Hãy ghi danh và quay lại sau.")}}},m=v,b=(n("c53b"),Object(u["a"])(m,p,f,!1,null,"318dfbe5",null)),g=b.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[""==e.$store.state.name?[n("p",[e._v("Đăng nhập để tiếp tục")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.key,expression:"key",modifiers:{trim:!0}}],attrs:{placeholder:"Mã bí mật"},domProps:{value:e.key},on:{input:function(t){t.target.composing||(e.key=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{on:{click:e.login}},[e._v("Đăng nhập")])]:e.test?[n("ChessBoard",{attrs:{player1:"Bạn",player2:e.$store.state.name,player1Move:"",player2Move:e.code,debug:!0}}),n("button",{on:{click:function(t){e.test=!1}}},[e._v("Trở về")])]:[n("p",[e._v("Chào mừng "+e._s(e.$store.state.name))]),n("span",[e._v("Cài đặt thuật toán của nhóm tại đây")]),n("PrismEditor",{attrs:{language:"js",lineNumbers:!0},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),n("div",{staticClass:"action-btn"},[n("button",{on:{click:e.save}},[e._v("Lưu")]),n("button",{on:{click:e.doTest}},[e._v("Đấu thử")]),n("button",{on:{click:e.logout}},[e._v("Đăng xuất")])])]],2)},M=[],y=n("5679"),O=y["a"],w=(n("02d8"),n("2181"),Object(u["a"])(O,E,M,!1,null,"682e8b68",null)),C=w.exports;o["a"].use(d["a"]);var P=new d["a"]({routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:C}]}),k=n("2f62");o["a"].use(k["a"]);var D=new k["a"].Store({state:{name:"",secret:"",code:""},mutations:{changeName:function(e,t){e.name=t},changeSecret:function(e,t){e.secret=t},changeCode:function(e,t){e.code=t}},actions:{}});o["a"].use(r["a"]),o["a"].config.productionTip=!1,new o["a"]({router:P,store:D,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("e332"),r=n.n(o);r.a},"5c64":function(e,t,n){"use strict";var o=n("6ee5"),r=n.n(o);r.a},"5e59":function(e,t,n){},"6ee5":function(e,t,n){},c53b:function(e,t,n){"use strict";var o=n("db2f"),r=n.n(o);r.a},c681:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_chessboard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("66f9"),vue_chessboard_dist_vue_chessboard_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1ec6"),vue_chessboard_dist_vue_chessboard_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(vue_chessboard_dist_vue_chessboard_css__WEBPACK_IMPORTED_MODULE_1__),chess_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("c5ad"),chess_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(chess_js__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__["a"]={components:{chessboard:vue_chessboard__WEBPACK_IMPORTED_MODULE_0__["chessboard"]},props:{player1:String,player1Move:String,player2:String,player2Move:String,debug:Boolean},created:function created(){if(this.fen=this.chess.fen(),0!=this.player1Move.trim())try{eval("window.move1 = "+this.player1Move)}catch(e){}if(0!=this.player2Move.trim())try{eval("window.move2 = "+this.player2Move)}catch(e){}var that=this;window.gameInterval=setInterval((function(){if(!that.debug||!that.player1Turn)if(that.player1Turn){if(void 0!=window.move1){var e=window.move1(that.getCurrentBoard("w")),t=that.chess.fen();if(that.chess.move({from:e.start,to:e.stop}),that.chess.fen()==t){var n=that.chess.moves(),o=n[Math.floor(Math.random()*n.length)];that.chess.move(o)}that.fen=that.chess.fen()}else alert("Đã xảy ra lỗi.");that.debug||(that.player1Turn=!1)}else{if(void 0!=window.move2){var r=window.move2(that.getCurrentBoard("b")),a=that.chess.fen();if(that.chess.move({from:r.start,to:r.stop}),that.chess.fen()==a){var s=that.chess.moves(),c=s[Math.floor(Math.random()*s.length)];that.chess.move(c)}that.fen=that.chess.fen()}else alert("Đã xảy ra lỗi.");that.player1Turn=!0}}),2e3)},data:function(){return{chess:new chess_js__WEBPACK_IMPORTED_MODULE_2___default.a,player1Turn:!0,removeFirst:!1,fen:""}},methods:{youMove:function(e){this.debug&&"black"==e.turn&&this.removeFirst?(this.chess.load(e.fen),this.player1Turn=!1):this.removeFirst=!0},getCurrentBoard:function(e){for(var t=[],n="abcdefgh",o=0;o<n.length;o++)for(var r=1;r<=8;r++)null!=this.chess.get("".concat(n[o]).concat(r))&&t.push({piece:e==this.chess.get("".concat(n[o]).concat(r)).color?this.chess.get("".concat(n[o]).concat(r)).type.toUpperCase():this.chess.get("".concat(n[o]).concat(r)).type,position:"".concat(n[o]).concat(r)});return t}}}},cf05:function(e,t,n){e.exports=n.p+"img/logo.eafad630.png"},d411:function(e,t,n){},db2f:function(e,t,n){},e332:function(e,t,n){},e87b:function(e,t,n){"use strict";t["a"]={methods:{request:function(e,t,n){return fetch("/"+e,{method:t,body:JSON.stringify(n)})}}}}});
//# sourceMappingURL=app.f0edd0a4.js.map