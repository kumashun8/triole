(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=(n(87),n(69)),i=n(70),u=n(80),s=n(71),p=n(81),m=n(3),d=n(73),_=n.n(d),h=function(e){var t=e.title;return r.a.createElement("p",{className:_.a.headline},t)},f=n(18),E=n.n(f),g="https://tri-ole.herokuapp.com/",v="GET_COLLECTIONS_REQUEST",O="GET_COLLECTIONS_SUCCESS",b="GET_COLLECTIONS_FAILUE",S=function(e){return{type:"GET_COLLECTIONS_SUCCESS",collections:e,tag:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",receivedAt:Date.now()}},C=function(e){return{type:"GET_COLLECTIONS_FAILUE",error:e}},L=function(){return function(e){return e({type:"GET_COLLECTIONS_REQUEST"}),E.a.get(g+"/api/v1/collections/").then(function(t){e(S(t.data)),console.log(t.data)}).catch(function(t){return e(C(t))})}},T=function(e){return function(t){return t({type:"GET_COLLECTIONS_REQUEST"}),console.log(typeof e),E.a.get(g+"/api/v1/tagged/"+e).then(function(n){t(S(n.data,e)),console.log(n.data)}).catch(function(e){return t(C(e))})}},y="POST_COLLECTION_REQUEST",w="POST_COLLECTION_SUCCESS",x="POST_COLLECTION_FAILUE",j="GET_SHOP_LIST_REQUEST",I="GET_SHOP_LIST_SUCCESS",N="GET_SHOP_LIST_FAILUE",F="CLEAR_SHOP_LIST",A=function(e){return{type:"CLEAR_SHOP_LIST",index:e}},U=function(e,t){return function(n){return n({type:"GET_SHOP_LIST_REQUEST"}),console.log(typeof e),E.a.get(g+"/api/v1/search/"+e).then(function(e){n(function(e,t){return{type:"GET_SHOP_LIST_SUCCESS",shopList:e,index:t,receivedAt:Date.now()}}(e.data.predictions,t))}).catch(function(e){return n({type:"GET_SHOP_LIST_FAILUE",error:e})})}},G="GET_SHOP_DETAIL_REQUEST",k="GET_SHOP_DETAIL_SUCCESS",P="GET_SHOP_DETAIL_FAILUE",R="CLEAR_SELECTED_SHOP",H=function(e){return{type:"CLEAR_SELECTED_SHOP",index:e}},D=function(e,t){return function(n){return n({type:"GET_SHOP_DETAIL_REQUEST"}),E.a.get(g+"/api/v1/detail/"+e).then(function(e){n(function(e,t){return{type:"GET_SHOP_DETAIL_SUCCESS",shop:e,index:t,receivedAt:Date.now()}}(e.data.result,t))}).catch(function(e){return n({type:"GET_SHOP_DETAIL_FAILUE",error:e})})}},B="UPDATE_PREVIEW",M="CLEAR_PREVIEW",W=function(e,t){return{type:"UPDATE_PREVIEW",imageFile:e,index:t}},K=function(e){return{type:"CLEAR_PREVIEW",index:e}},Q="OPEN_FORM",V="CLOSE_FORM",z=n(133),J=n(44),Z=n.n(J),Y=function(e){var t=e.text,n=e.dispatchClickAction;return r.a.createElement(z.a,{className:"x"===t?Z.a.cancel:Z.a.enter,onKeyPress:function(e){return 13===window.event.keyCode},onClick:function(e){e.preventDefault(),n()}},t)},q=Object(m.b)(function(e){return{text:"OK"}},function(e){return{dispatchClickAction:function(t){return e(A(1))}}})(Y),$=q,X=Object(m.b)(function(e){return{text:"OK"}},function(e){return{dispatchClickAction:function(t){return e(A(2))}}})(Y),ee=X,te=Object(m.b)(function(e){return{text:"OK"}},function(e){return{dispatchClickAction:function(t){return e(A(3))}}})(Y),ne=te,ae=Object(m.b)(function(e){return{text:"x"}},function(e){return{dispatchClickAction:function(t){return e(H(1))}}})(Y),re=Object(m.b)(function(e){return{text:"x"}},function(e){return{dispatchClickAction:function(t){return e(H(2))}}})(Y),ce=Object(m.b)(function(e){return{text:"x"}},function(e){return{dispatchClickAction:function(t){return e(H(3))}}})(Y),oe=function(e){var t,n=e.selectedShop,a=e.index;if(0===Object.keys(n).length)return r.a.createElement("div",null);switch(a){case 1:t=r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement($,null));break;case 2:t=r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ee,null));break;case 3:t=r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(ne,null));break;default:t=r.a.createElement("div",null)}return r.a.createElement("div",null,r.a.createElement("a",{href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name),t)},le=Object(m.b)(function(e){var t=e.selectedShop.length;return{selectedShop:e.selectedShop[t-1].shop[0],index:1}},function(e){return{dispatchSelectCancel:function(t){return e(H(1))}}})(oe),ie=n(131),ue=n(45),se=n.n(ue),pe=function(e){var t,n=e.dispatchGetAction,a=e.index,c=e.label,o=e.placeholder;return r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Label,null,c),r.a.createElement(function(){return a<10?r.a.createElement(ie.a.Control,{id:"searchInput".concat(a),placeholder:o,onChange:function(e){e.preventDefault(),t.value.trim()&&n(t.value,a)},ref:function(e){t=e}}):r.a.createElement("div",{className:se.a.myFormControl},r.a.createElement(ie.a.Control,{id:"searchInput".concat(a),placeholder:o,ref:function(e){t=e}}),r.a.createElement(z.a,{className:se.a.myFormControl_button,onClick:function(e){return n(function(e){return e.split("#").join(" ")}(t.value))}},"\u691c\u7d22"))},null))},me=Object(m.b)(function(e){return{index:1,label:"\u304a\u5e97",placeholder:"\u304a\u5e97\u3092\u691c\u7d22"}},function(e){return{dispatchGetAction:function(t,n){return e(U(t,n))}}})(pe),de=n(46),_e=n.n(de),he=function(e){var t=e.structured_formatting,n=e.place_id,a=e.handleClick;return r.a.createElement("li",{className:_e.a.shop,onClick:function(e){return a(n)}},r.a.createElement("strong",null,t.main_text),r.a.createElement("br",null),r.a.createElement("p",{className:_e.a.shop_address},t.secondary_text))},fe=function(e){var t=e.shops,n=e.dispatchGetShopDetail;return 0===t.length?r.a.createElement("div",null):r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement(he,Object.assign({key:t,handleClick:n},e))}))},Ee=Object(m.b)(function(e){var t=e.shopList.length,n=e.shopList[t-1];return{shops:n.items[0]?n.items[0]:[]}},function(e){return{dispatchGetShopDetail:function(t){return e(D(t,1))}}})(fe),ge=function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(me,null),r.a.createElement(Ee,null))},ve=Object(m.b)(function(e){var t=e.selectedShop.length;return{selectedShop:e.selectedShop[t-1].shop[1],index:2}},function(e){return{dispatchSelectCancel:function(t){return e(H(2))}}})(oe),Oe=Object(m.b)(function(e){return{index:2,label:"\u304a\u5e97",placeholder:"\u304a\u5e97\u3092\u691c\u7d22"}},function(e){return{dispatchGetAction:function(t,n){return e(U(t,n))}}})(pe),be=Object(m.b)(function(e){var t=e.shopList.length,n=e.shopList[t-1];return{shops:n.items[1]?n.items[1]:[]}},function(e){return{dispatchGetShopDetail:function(t){return e(D(t,2))}}})(fe),Se=function(){return r.a.createElement("div",null,r.a.createElement(ve,null),r.a.createElement(Oe,null),r.a.createElement(be,null))},Ce=Object(m.b)(function(e){var t=e.selectedShop.length;return{selectedShop:e.selectedShop[t-1].shop[2],index:3}},function(e){return{dispatchSelectCancel:function(t){return e(H(3))}}})(oe),Le=Object(m.b)(function(e){return{index:3,label:"\u304a\u5e97",placeholder:"\u304a\u5e97\u3092\u691c\u7d22"}},function(e){return{dispatchGetAction:function(t,n){return e(U(t,n))}}})(pe),Te=Object(m.b)(function(e){var t=e.shopList.length,n=e.shopList[t-1];return{shops:n.items[2]?n.items[2]:[]}},function(e){return{dispatchGetShopDetail:function(t){return e(D(t,3))}}})(fe),ye=function(){return r.a.createElement("div",null,r.a.createElement(Ce,null),r.a.createElement(Le,null),r.a.createElement(Te,null))},we=n(34),xe=n.n(we),je=n(128),Ie=function(e){var t=e.images,n=e.dispatchUpdate,a=e.dispatchClear,c=e.i;return r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Label,null,"\u5199\u771f"),r.a.createElement(ie.a.Control,{type:"file",accept:".jpg,.jpeg,.gif,.png",className:xe.a.preview_input,onChange:function(e){n(e.target.files[0],c)}}),r.a.createElement(je.a,{src:t.url,className:xe.a.preview_image,alt:"Image",rounded:!0}),r.a.createElement(z.a,{onClick:function(e){return a(c)},className:xe.a.preview_clearButton},"\u30af\u30ea\u30a2"))},Ne=Object(m.b)(function(e){var t=e.previews.length;return{images:e.previews[t-1].images[0],i:0}},function(e){return{dispatchUpdate:function(t,n){return e(W(t,n))},dispatchClear:function(t){return e(K(t))}}})(Ie),Fe=Object(m.b)(function(e){var t=e.previews.length;return{images:e.previews[t-1].images[1],i:1}},function(e){return{dispatchUpdate:function(t,n){return e(W(t,n))},dispatchClear:function(t){return e(K(t))}}})(Ie),Ae=Object(m.b)(function(e){var t=e.previews.length;return{images:e.previews[t-1].images[2],i:2}},function(e){return{dispatchUpdate:function(t,n){return e(W(t,n))},dispatchClear:function(t){return e(K(t))}}})(Ie),Ue=n(79),Ge="UPDATE_INPUT",ke="CLEAR_INPUT",Pe="CLEAR_ALL_INPUTS",Re=Object(m.b)(function(e,t){Object(Ue.a)(t,1)[0];return{inputedDatas:Qe(e.input).inputedDatas}},function(e){return{dispatchUpdate:function(t,n){return e(function(e,t){return{type:"UPDATE_INPUT",key:e,value:t}}(t,n))}}})(function(e){var t=e.dispatchUpdate,n=e.label,a=e.key,c=e.placeholder,o=e.rows,l=void 0===o?"1":o,i=e.as,u=void 0===i?"input":i;return r.a.createElement(ie.a.Group,{controlId:"formGroupText"},r.a.createElement(ie.a.Label,null,n),r.a.createElement(ie.a.Control,{placeholder:c,rows:l,as:u,onChange:function(e){return t(a,e.target.value)}}))}),He=n(29),De=n.n(He),Be=n(132),Me=n(134),We=function(e){if(e){var t=e.length;return t<3?"":e[t-3].long_name}return""},Ke=function(e){var t,n,a,c=e.dispatchPostAction,o=e.dispatchClearShopList,l=e.dispatchClearSelectedShop,i=e.dispatchClearPreview,u=e.dispatchCloseThis,s=e.shops,p=e.images,m=[{name:"",price:"",reco_image:{}},{name:"",price:"",reco_image:{}},{name:"",price:"",reco_image:{}}],d=[{image:r.a.createElement(Ne,null),shop:r.a.createElement(ge,null)},{image:r.a.createElement(Fe,null),shop:r.a.createElement(Se,null)},{image:r.a.createElement(Ae,null),shop:r.a.createElement(ye,null)}];return r.a.createElement("div",{className:De.a.formWrapper},r.a.createElement(ie.a,{className:De.a.collection},r.a.createElement(Re,{label:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u540d",key:"title",placeholder:"30\u6587\u5b57\u4ee5\u5185"}),r.a.createElement(ie.a.Group,{controlId:"formGroupText"},r.a.createElement(ie.a.Label,null,"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u540d"),r.a.createElement(ie.a.Control,{placeholder:"30\u6587\u5b57\u4ee5\u5185",ref:function(e){t=e}})),r.a.createElement(ie.a.Group,{controlId:"formGroupTextArea"},r.a.createElement(ie.a.Label,null,"\u8aac\u660e"),r.a.createElement(ie.a.Control,{as:"textarea",placeholder:"120\u6587\u5b57\u4ee5\u5185",rows:"3",ref:function(e){n=e}})),r.a.createElement(ie.a.Group,{controlId:"formGroupTextArea"},r.a.createElement(ie.a.Label,null,"\u30bf\u30b0"),r.a.createElement(ie.a.Control,{as:"textarea",placeholder:"\u30bf\u30b0\u306e\u9593\u306f\u30b9\u30da\u30fc\u30b9\u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044",rows:"2",ref:function(e){a=e}})),r.a.createElement(Be.a,{defaultActiveKey:1},d.map(function(e,t){return r.a.createElement(Me.a,null,r.a.createElement(Me.a.Header,null,r.a.createElement(Be.a.Toggle,{eventKey:t+1,as:z.a,variant:"light",className:De.a.marker},"\u30ec\u30b3\u30e1\u30f3\u30c9".concat(t+1,0===t?" (\u5fc5\u9808)":" "))),r.a.createElement(Be.a.Collapse,{eventKey:t+1},r.a.createElement(Me.a.Body,null,r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Label,null,"\u540d\u524d"),r.a.createElement(ie.a.Control,{placeholder:"30\u6587\u5b57\u4ee5\u5185",ref:function(e){m[t].name=e}})),r.a.createElement(ie.a.Group,null,r.a.createElement(ie.a.Label,null,"\u5024\u6bb5 [\u5186]"),r.a.createElement(ie.a.Control,{type:"number",ref:function(e){m[t].price=e}})),e.image,e.shop)))}))),r.a.createElement(z.a,{type:"button",className:De.a.submitButton,onClick:function(e){var r=function(e,t,n,a,r,c){var o=new FormData;return o.append("title",e.value),o.append("description",t.value),o.append("tags",n.value),a.map(function(e,t){return o.append("reco_name_".concat(t+1),e.name.value),o.append("reco_price_".concat(t+1),e.price.value),o.append("shop_name_".concat(t+1),r[t].name),o.append("shop_googlemap_link_".concat(t+1),r[t].url),o.append("shop_prefecture_".concat(t+1),We(r[t].address_components)),c[t].file&&o.append("reco_image_".concat(t+1),c[t].file),0}),o}(t,n,a,m,s,p);c(r),t.value="",n.value="",m.map(function(e){return e.name.value=e.price.value=""});for(var d=1;d<4;d++)o(d),l(d),i(d);u()}},"\u6295\u7a3f!!"))},Qe=function(e){return e[e.length-1]},Ve=Object(m.b)(function(e){return{collection:Qe(e.post).collection,shops:Qe(e.selectedShop).shop,images:Qe(e.previews).images}},function(e){return{dispatchPostAction:function(t){return e(function(e){return function(t){return t({type:"POST_COLLECTION_REQUEST"}),E.a.post(g+"/api/v1/collections/",e).then(function(e){t({type:"POST_COLLECTION_SUCCESS"}),t(L())}).catch(function(e){return t({type:"POST_COLLECTION_FAILUE",error:e})})}}(t))},dispatchClearShopList:function(t){return e(A(t))},dispatchClearSelectedShop:function(t){return e(H(t))},dispatchClearPreview:function(t){return e(K(t))},dispatchCloseThis:function(t){return e({type:"CLOSE_FORM"})}}})(Ke),ze=n(30),Je=n.n(ze),Ze=n(130),Ye=function(e){var t,n=e.dispatchOpen,a=e.dispatchClose,c=e.dispatchScrolling,o=e.dispatchNotScrolling,l=e.dispatchClear,i=e.show,u=e.isScrolling;return window.addEventListener("scroll",function(){clearTimeout(t),c(),t=setTimeout(function(){o()},500)}),r.a.createElement("div",{className:Je.a.myModal},r.a.createElement(z.a,{onClick:function(e){n();for(var t=0;t<3;t++)l(t)},className:u?Je.a.myModal_openButton_disable:Je.a.myModal_openButton},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement(Ze.a,{show:i,onHide:function(e){a()}},r.a.createElement(Ze.a.Header,{closeButton:!0,onClick:function(e){a()},className:Je.a.myModal_closeButton},r.a.createElement(Ze.a.Title,null,r.a.createElement(h,{title:"\u6295\u7a3f\u30d5\u30a9\u30fc\u30e0"}))),r.a.createElement(Ze.a.Body,null,r.a.createElement(Ve,null))))},qe="IS_SCROLLING",$e="IS_NOT_SCROLLING",Xe=Object(m.b)(function(e){return{show:Qe(e.form).show,isScrolling:Qe(e.window).isScrolling}},function(e){return{dispatchOpen:function(t){return e({type:"OPEN_FORM"})},dispatchClose:function(t){return e({type:"CLOSE_FORM"})},dispatchScrolling:function(t){return e({type:"IS_SCROLLING",isScrolling:!0})},dispatchNotScrolling:function(t){return e({type:"IS_NOT_SCROLLING",isScrolling:!1})},dispatchClear:function(t){return e(K(t))}}})(Ye),et=n(47),tt=n.n(et),nt=function(e){var t=e.dispatchTagged,n=e.tags;return r.a.createElement("ul",{className:tt.a.tagList},n.map(function(e){return r.a.createElement("li",{onClick:function(n){return t(e)},className:tt.a.tagList_tag},"#".concat(e))}))},at=Object(m.b)(function(e){return{}},function(e){return{dispatchTagged:function(t){return e(T(t))}}})(nt),rt=n(23),ct=n.n(rt),ot=function(e){var t=e.collection;return r.a.createElement("div",{className:ct.a.collection},t.recommends.map(function(e,t){return r.a.createElement("div",{className:ct.a.recommend},r.a.createElement("div",{className:ct.a.recommend_text},r.a.createElement("p",{className:ct.a.recommend_text_name},e.name),r.a.createElement("br",null),r.a.createElement("p",{className:ct.a.recommend_text_price},"\xa5",e.price),r.a.createElement("p",null,r.a.createElement("a",{className:ct.a.recommend_text_shop,href:e.shop.googlemap_link,target:"_blank",rel:"noopener noreferrer"},e.shop.name," (",e.shop.prefecture,")"))),r.a.createElement(je.a,{src:e.reco_image,className:ct.a.recommend_image,alt:"Image",rounded:!0}))}),r.a.createElement(at,{tags:t.tags}))},lt=n(36),it=n.n(lt),ut=function(e){var t=e.collection;return r.a.createElement("div",{className:it.a.collectionHeader},r.a.createElement("h2",{className:it.a.collectionHeader_title},t.title),r.a.createElement("p",{className:it.a.collectionHeader_description},t.description,r.a.createElement("br",null),t.tags.map(function(e){return"#"+e+" "})))},st=n(37),pt=n.n(st),mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===e)return"";var t=e.split(" ");return 1===t.length?"#".concat(t[0]):t.map(function(e){return""===e?"#":e}).join("")},dt=function(e){var t=e.collections,n=e.tag;return void 0===t?r.a.createElement("div",null):r.a.createElement("div",{width:"100vw"},r.a.createElement(h,{title:"\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u4e00\u89a7"}),r.a.createElement(h,{title:mt(n)}),r.a.createElement(Be.a,{className:pt.a.collectionList},t.map(function(e,t){return r.a.createElement(Me.a,null,r.a.createElement(Me.a.Header,{className:pt.a.headerWrapper},r.a.createElement(Be.a.Toggle,{className:pt.a.toggle,eventKey:t+1,as:z.a,variant:"light"},r.a.createElement(ut,{collection:e}))),r.a.createElement(Be.a.Collapse,{eventKey:t+1},r.a.createElement(Me.a.Body,null,r.a.createElement(ot,{key:t,index:t,collection:e}))))})))},_t=Object(m.b)(function(e){var t=Qe(e.index);return{collections:t.collections,tag:t.tag}},function(e){})(dt),ht=n(129),ft=n(48),Et=n.n(ft),gt=function(e){var t=e.loadIsFinished;return r.a.createElement(ht.a,{animation:"border",className:t?Et.a.mySpinner:Et.a.mySpinner_hide,id:"spinner"})},vt=Object(m.b)(function(e){return{loadIsFinished:Qe(e.post).isFetching}},function(e){return{}})(gt),Ot=Object(m.b)(function(e){return{index:10,label:"",placeholder:"\u30bf\u30b0\u3067\u691c\u7d22"}},function(e){return{dispatchGetAction:function(t){return e(T(t))}}})(pe),bt=n(76),St=n.n(bt),Ct=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:St.a.app,id:"app"},r.a.createElement(Xe,null),r.a.createElement(_t,null),r.a.createElement(Ot,null),r.a.createElement(vt,null))}}]),t}(r.a.Component),Lt=n(38),Tt=n.n(Lt),yt=n(77),wt=n.n(yt),xt=function(){return r.a.createElement("header",{className:Tt.a.header},r.a.createElement("div",{className:Tt.a.header_menu},r.a.createElement("img",{className:Tt.a.header_menu_home,onClick:function(e){return window.location.reload()},src:wt.a,alt:"Triole"})))},jt=n(24),It=n(6),Nt={isFetching:!1,index:-1,items:[[],[],[]]},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Nt],t=arguments.length>1?arguments[1]:void 0,n=e[e.length-1].items;switch(t.type){case j:return[].concat(Object(It.a)(e),[{isFetching:!0,items:n}]);case I:return n[t.index-1]=t.shopList,[].concat(Object(It.a)(e),[{isFetching:!1,items:n,index:t.index,lastUpdated:t.recievedAt}]);case N:return[].concat(Object(It.a)(e),[{isFetching:!1,error:t.error}]);case F:return n[t.index-1]=[],function(e){var t="searchInput".concat(e);console.log(t),document.getElementById(t).value=""}(t.index),[].concat(Object(It.a)(e),[{isFetching:!1,items:n,error:t.error}]);default:return e}},At={isFetching:!1,shop:[{},{},{}]},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[At],t=arguments.length>1?arguments[1]:void 0,n=e[e.length-1].shop;switch(t.type){case G:return[].concat(Object(It.a)(e),[{isFetching:!0,shop:n}]);case k:return n[t.index-1]=t.shop,[].concat(Object(It.a)(e),[{isFetching:!1,shop:n,lastUpdated:t.receivedAt}]);case P:return[].concat(Object(It.a)(e),[{isFetching:!1,shop:n,error:t.error}]);case R:return n[t.index-1]={},[].concat(Object(It.a)(e),[{isFetching:!1,shop:n}]);default:return e}},Gt={isFetching:!1,collection:{}},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Gt],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return[].concat(Object(It.a)(e),[{isFetching:!0}]);case w:return[].concat(Object(It.a)(e),[{isFetching:!1,lastUpdated:t.recievedAt}]);case x:return[].concat(Object(It.a)(e),[{isFetching:!1,error:t.error}]);default:return e}},Pt={isFetching:!1,collections:[]},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Pt],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return[].concat(Object(It.a)(e),[{isFetching:!0,collections:[]}]);case O:return[].concat(Object(It.a)(e),[{isFetching:!1,collections:t.collections,tag:t.tag,lastUpdated:t.recievedAt}]);case b:return[].concat(Object(It.a)(e),[{isFetching:!1,error:t.error}]);default:return e}},Ht="http://placehold.jp/200x200.png",Dt=(window.URL||window.webkitURL).createObjectURL||window.createObjectURL,Bt={images:[{url:Ht,file:{}},{url:Ht,file:{}},{url:Ht,file:{}}]},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Bt],t=arguments.length>1?arguments[1]:void 0,n=e[e.length-1].images;switch(t.type){case B:return n[t.index]={file:t.imageFile,url:Dt(t.imageFile)},[].concat(Object(It.a)(e),[{images:n}]);case M:return console.log("clear"),n[t.index]={file:{},url:Ht},console.log(n),[].concat(Object(It.a)(e),[{images:n}]);default:return e}},Wt={show:!1},Kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Wt];switch((arguments.length>1?arguments[1]:void 0).type){case Q:return[].concat(Object(It.a)(e),[{show:!0}]);case V:return[].concat(Object(It.a)(e),[{show:!1}]);default:return e}},Qt={isScrolling:!1},Vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Qt];switch((arguments.length>1?arguments[1]:void 0).type){case qe:return[].concat(Object(It.a)(e),[{isScrolling:!0}]);case $e:return[].concat(Object(It.a)(e),[{isScrolling:!1}]);default:return e}},zt={inputtedDatas:{}},Jt=Object(jt.c)({shopList:Ft,selectedShop:Ut,post:kt,index:Rt,previews:Mt,form:Kt,window:Vt,input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[zt],t=arguments.length>1?arguments[1]:void 0,n=e.inputtedDatas;switch(t.type){case Ge:return n[t.key]=t.value,[].concat(Object(It.a)(e),[{inputtedDatas:n}]);case ke:return n[t.key]="",[].concat(Object(It.a)(e),[{inputtedDatas:n}]);case Pe:return[].concat(Object(It.a)(e),[{inputtedDatas:{}}])}}}),Zt=n(78);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Yt=Object(jt.d)(Jt,Object(jt.a)(Zt.a));Yt.dispatch(L()),o.a.render(r.a.createElement(m.a,{store:Yt},r.a.createElement(xt,null),r.a.createElement(Ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,n){e.exports={collection:"collection_collection__7A--x",recommend:"collection_recommend__3oaff",recommend_text:"collection_recommend_text__3RGGe",recommend_text_name:"collection_recommend_text_name__2wW0B",recommend_text_price:"collection_recommend_text_price__3_ZJx",recommend_text_shop:"collection_recommend_text_shop__a5wCo",recommend_image:"collection_recommend_image__xV8O8"}},29:function(e,t,n){e.exports={formWrapper:"postingForm_formWrapper__1jlwv",collection_description:"postingForm_collection_description__1jTgx",collection_recommend:"postingForm_collection_recommend__QYFO8",collection_recommend_name:"postingForm_collection_recommend_name__2_ZHU",marker:"postingForm_marker__2idC4",submitButton:"postingForm_submitButton__23kzE"}},30:function(e,t,n){e.exports={myModal_openButton:"myModal_myModal_openButton__1zvbi",myModal_openButton_disable:"myModal_myModal_openButton_disable__wTIzM",myModal_closeButton:"myModal_myModal_closeButton__1D19W"}},34:function(e,t,n){e.exports={preview_image:"imageUploader_preview_image__1mR3b",preview_clearButton:"imageUploader_preview_clearButton__1RArb",preview_input:"imageUploader_preview_input__jucwn"}},36:function(e,t,n){e.exports={collectionHeader:"collectionHeader_collectionHeader__32Fes",collectionHeader_title:"collectionHeader_collectionHeader_title__hMo-2",collectionHeader_description:"collectionHeader_collectionHeader_description__2hN8W"}},37:function(e,t,n){e.exports={collectionList:"collectionList_collectionList__taHv1",headerWrapper:"collectionList_headerWrapper__2zoky",toggle:"collectionList_toggle__2BWVe"}},38:function(e,t,n){e.exports={header:"header_header__2oeTE",header_menu:"header_header_menu__3tb9x",header_menu_home:"header_header_menu_home__dGFH3"}},44:function(e,t,n){e.exports={enter:"smallButton_enter__2ctMq",cancel:"smallButton_cancel__3KFgY"}},45:function(e,t,n){e.exports={myFormControl:"searchInput_myFormControl__hDllh",myFormControl_button:"searchInput_myFormControl_button__1fwHI"}},46:function(e,t,n){e.exports={shop:"shop_shop__1Ojtb",shop_address:"shop_shop_address__3BZr0"}},47:function(e,t,n){e.exports={tagList:"tagList_tagList__1T5gM",tagList_tag:"tagList_tagList_tag__1OwKg"}},48:function(e,t,n){e.exports={mySpinner:"mySpinner_mySpinner__3vnus",mySpinner_hide:"mySpinner_mySpinner_hide__2tlR0"}},73:function(e,t,n){e.exports={headline:"headline_headline__2DBB0"}},76:function(e,t,n){e.exports={app:"app_app__1OfvF"}},77:function(e,t,n){e.exports=n.p+"static/media/triole_logo.44d13ace.png"},82:function(e,t,n){e.exports=n(126)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.8dc02b92.chunk.js.map