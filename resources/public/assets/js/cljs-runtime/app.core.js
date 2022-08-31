goog.provide('app.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

app.core.app = (function (){var G__40911 = (function app$core$app_render(props__30991__auto__,maybe_ref__30992__auto__){
var vec__40912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__30991__auto__),maybe_ref__30992__auto__], null);

var vec__40915 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),null,new cljs.core.Keyword(null,"url","url",276297046),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40915,(1),null);
var fetch_slug = (function (){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32907__auto__){
return promesa.protocols._bind(promesa.protocols._promise(fetch("/api/redirect/",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Content-Type","Content-Type",-692731875),"application/json"], null),new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(({"url": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)}))], null)))),(function (_response){
return promesa.protocols._bind(promesa.protocols._promise(_response.json()),(function (response){
return promesa.protocols._bind(promesa.protocols._promise(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))),(function (data){
return promesa.protocols._bind(promesa.protocols._promise(null),(function (___32892__auto__){
return promesa.protocols._promise((function (){var G__40918 = cljs.core.assoc;
var G__40919 = new cljs.core.Keyword(null,"slug","slug",2029314850);
var G__40920 = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data);
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__40918,G__40919,G__40920) : set_state.call(null,G__40918,G__40919,G__40920));
})());
}));
}));
}));
}));
}));
});
var redirect_link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state)),"/"].join('');
return helix.core.get_react().createElement("div",(function (){var obj40922 = ({"className":"bg-pink-100 grid place-items-center h-screen"});
return obj40922;
})(),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(state))?helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("a",(function (){var obj40924 = ({"href":redirect_link});
return obj40924;
})(),redirect_link)):helix.core.get_react().createElement("div",null,helix.core.get_react().createElement("input",(function (){var obj40926 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(state)),"onChange":(function (p1__40909_SHARP_){
var G__40927 = cljs.core.assoc;
var G__40928 = new cljs.core.Keyword(null,"url","url",276297046);
var G__40929 = p1__40909_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__40927,G__40928,G__40929) : set_state.call(null,G__40927,G__40928,G__40929));
}),"className":"form-control border border-solid border-gray-600","placeholder":"Enter URL"});
return obj40926;
})()),helix.core.get_react().createElement("button",(function (){var obj40931 = ({"onClick":(function (){
return fetch_slug();
}),"className":"border-2 rounded  px-4 uppercase"});
return obj40931;
})(),"Shorten Url"))));
});
if(goog.DEBUG === true){
var G__40932 = G__40911;
(G__40932.displayName = "app.core/app");

return G__40932;
} else {
return G__40911;
}
})();



app.core.init = (function app$core$init(){
var root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
return root.render(helix.core.get_react().createElement(app.core.app,null));
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
