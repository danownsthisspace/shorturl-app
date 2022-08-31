goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40462 = arguments.length;
var i__5770__auto___40463 = (0);
while(true){
if((i__5770__auto___40463 < len__5769__auto___40462)){
args__5775__auto__.push((arguments[i__5770__auto___40463]));

var G__40464 = (i__5770__auto___40463 + (1));
i__5770__auto___40463 = G__40464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40174){
var G__40175 = cljs.core.first(seq40174);
var seq40174__$1 = cljs.core.next(seq40174);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40175,seq40174__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40182 = cljs.core.seq(sources);
var chunk__40183 = null;
var count__40184 = (0);
var i__40185 = (0);
while(true){
if((i__40185 < count__40184)){
var map__40192 = chunk__40183.cljs$core$IIndexed$_nth$arity$2(null,i__40185);
var map__40192__$1 = cljs.core.__destructure_map(map__40192);
var src = map__40192__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40193){var e_40465 = e40193;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40465);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40465.message)].join('')));
}

var G__40466 = seq__40182;
var G__40467 = chunk__40183;
var G__40468 = count__40184;
var G__40469 = (i__40185 + (1));
seq__40182 = G__40466;
chunk__40183 = G__40467;
count__40184 = G__40468;
i__40185 = G__40469;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40182);
if(temp__5720__auto__){
var seq__40182__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40182__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40182__$1);
var G__40470 = cljs.core.chunk_rest(seq__40182__$1);
var G__40471 = c__5568__auto__;
var G__40472 = cljs.core.count(c__5568__auto__);
var G__40473 = (0);
seq__40182 = G__40470;
chunk__40183 = G__40471;
count__40184 = G__40472;
i__40185 = G__40473;
continue;
} else {
var map__40194 = cljs.core.first(seq__40182__$1);
var map__40194__$1 = cljs.core.__destructure_map(map__40194);
var src = map__40194__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40195){var e_40474 = e40195;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40474);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40474.message)].join('')));
}

var G__40475 = cljs.core.next(seq__40182__$1);
var G__40476 = null;
var G__40477 = (0);
var G__40478 = (0);
seq__40182 = G__40475;
chunk__40183 = G__40476;
count__40184 = G__40477;
i__40185 = G__40478;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40196 = cljs.core.seq(js_requires);
var chunk__40197 = null;
var count__40198 = (0);
var i__40199 = (0);
while(true){
if((i__40199 < count__40198)){
var js_ns = chunk__40197.cljs$core$IIndexed$_nth$arity$2(null,i__40199);
var require_str_40479 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40479);


var G__40480 = seq__40196;
var G__40481 = chunk__40197;
var G__40482 = count__40198;
var G__40483 = (i__40199 + (1));
seq__40196 = G__40480;
chunk__40197 = G__40481;
count__40198 = G__40482;
i__40199 = G__40483;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40196);
if(temp__5720__auto__){
var seq__40196__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40196__$1);
var G__40484 = cljs.core.chunk_rest(seq__40196__$1);
var G__40485 = c__5568__auto__;
var G__40486 = cljs.core.count(c__5568__auto__);
var G__40487 = (0);
seq__40196 = G__40484;
chunk__40197 = G__40485;
count__40198 = G__40486;
i__40199 = G__40487;
continue;
} else {
var js_ns = cljs.core.first(seq__40196__$1);
var require_str_40488 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40488);


var G__40489 = cljs.core.next(seq__40196__$1);
var G__40490 = null;
var G__40491 = (0);
var G__40492 = (0);
seq__40196 = G__40489;
chunk__40197 = G__40490;
count__40198 = G__40491;
i__40199 = G__40492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40201){
var map__40202 = p__40201;
var map__40202__$1 = cljs.core.__destructure_map(map__40202);
var msg = map__40202__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40203(s__40204){
return (new cljs.core.LazySeq(null,(function (){
var s__40204__$1 = s__40204;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__40204__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__40209 = cljs.core.first(xs__6277__auto__);
var map__40209__$1 = cljs.core.__destructure_map(map__40209);
var src = map__40209__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40209__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40204__$1,map__40209,map__40209__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__40202,map__40202__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40203_$_iter__40205(s__40206){
return (new cljs.core.LazySeq(null,((function (s__40204__$1,map__40209,map__40209__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__40202,map__40202__$1,msg,info,reload_info){
return (function (){
var s__40206__$1 = s__40206;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__40206__$1);
if(temp__5720__auto____$1){
var s__40206__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40206__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40206__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40208 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40207 = (0);
while(true){
if((i__40207 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40207);
cljs.core.chunk_append(b__40208,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40493 = (i__40207 + (1));
i__40207 = G__40493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40208),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40203_$_iter__40205(cljs.core.chunk_rest(s__40206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40208),null);
}
} else {
var warning = cljs.core.first(s__40206__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40203_$_iter__40205(cljs.core.rest(s__40206__$2)));
}
} else {
return null;
}
break;
}
});})(s__40204__$1,map__40209,map__40209__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__40202,map__40202__$1,msg,info,reload_info))
,null,null));
});})(s__40204__$1,map__40209,map__40209__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__40202,map__40202__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40203(cljs.core.rest(s__40204__$1)));
} else {
var G__40494 = cljs.core.rest(s__40204__$1);
s__40204__$1 = G__40494;
continue;
}
} else {
var G__40495 = cljs.core.rest(s__40204__$1);
s__40204__$1 = G__40495;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40210_40496 = cljs.core.seq(warnings);
var chunk__40211_40497 = null;
var count__40212_40498 = (0);
var i__40213_40499 = (0);
while(true){
if((i__40213_40499 < count__40212_40498)){
var map__40216_40500 = chunk__40211_40497.cljs$core$IIndexed$_nth$arity$2(null,i__40213_40499);
var map__40216_40501__$1 = cljs.core.__destructure_map(map__40216_40500);
var w_40502 = map__40216_40501__$1;
var msg_40503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216_40501__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216_40501__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216_40501__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40216_40501__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40506)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40504),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40505),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40503__$1)].join(''));


var G__40507 = seq__40210_40496;
var G__40508 = chunk__40211_40497;
var G__40509 = count__40212_40498;
var G__40510 = (i__40213_40499 + (1));
seq__40210_40496 = G__40507;
chunk__40211_40497 = G__40508;
count__40212_40498 = G__40509;
i__40213_40499 = G__40510;
continue;
} else {
var temp__5720__auto___40511 = cljs.core.seq(seq__40210_40496);
if(temp__5720__auto___40511){
var seq__40210_40512__$1 = temp__5720__auto___40511;
if(cljs.core.chunked_seq_QMARK_(seq__40210_40512__$1)){
var c__5568__auto___40513 = cljs.core.chunk_first(seq__40210_40512__$1);
var G__40514 = cljs.core.chunk_rest(seq__40210_40512__$1);
var G__40515 = c__5568__auto___40513;
var G__40516 = cljs.core.count(c__5568__auto___40513);
var G__40517 = (0);
seq__40210_40496 = G__40514;
chunk__40211_40497 = G__40515;
count__40212_40498 = G__40516;
i__40213_40499 = G__40517;
continue;
} else {
var map__40217_40518 = cljs.core.first(seq__40210_40512__$1);
var map__40217_40519__$1 = cljs.core.__destructure_map(map__40217_40518);
var w_40520 = map__40217_40519__$1;
var msg_40521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40217_40519__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40217_40519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40217_40519__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40217_40519__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40524)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40522),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40523),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40521__$1)].join(''));


var G__40525 = cljs.core.next(seq__40210_40512__$1);
var G__40526 = null;
var G__40527 = (0);
var G__40528 = (0);
seq__40210_40496 = G__40525;
chunk__40211_40497 = G__40526;
count__40212_40498 = G__40527;
i__40213_40499 = G__40528;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40200_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40200_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40218){
var map__40219 = p__40218;
var map__40219__$1 = cljs.core.__destructure_map(map__40219);
var msg = map__40219__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40219__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40219__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40220 = cljs.core.seq(updates);
var chunk__40222 = null;
var count__40223 = (0);
var i__40224 = (0);
while(true){
if((i__40224 < count__40223)){
var path = chunk__40222.cljs$core$IIndexed$_nth$arity$2(null,i__40224);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40334_40529 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40338_40530 = null;
var count__40339_40531 = (0);
var i__40340_40532 = (0);
while(true){
if((i__40340_40532 < count__40339_40531)){
var node_40533 = chunk__40338_40530.cljs$core$IIndexed$_nth$arity$2(null,i__40340_40532);
if(cljs.core.not(node_40533.shadow$old)){
var path_match_40534 = shadow.cljs.devtools.client.browser.match_paths(node_40533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40534)){
var new_link_40535 = (function (){var G__40366 = node_40533.cloneNode(true);
G__40366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40366;
})();
(node_40533.shadow$old = true);

(new_link_40535.onload = ((function (seq__40334_40529,chunk__40338_40530,count__40339_40531,i__40340_40532,seq__40220,chunk__40222,count__40223,i__40224,new_link_40535,path_match_40534,node_40533,path,map__40219,map__40219__$1,msg,updates,reload_info){
return (function (e){
var seq__40367_40536 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40369_40537 = null;
var count__40370_40538 = (0);
var i__40371_40539 = (0);
while(true){
if((i__40371_40539 < count__40370_40538)){
var map__40375_40540 = chunk__40369_40537.cljs$core$IIndexed$_nth$arity$2(null,i__40371_40539);
var map__40375_40541__$1 = cljs.core.__destructure_map(map__40375_40540);
var task_40542 = map__40375_40541__$1;
var fn_str_40543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375_40541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375_40541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40545 = goog.getObjectByName(fn_str_40543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40544)].join(''));

(fn_obj_40545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40545.cljs$core$IFn$_invoke$arity$2(path,new_link_40535) : fn_obj_40545.call(null,path,new_link_40535));


var G__40546 = seq__40367_40536;
var G__40547 = chunk__40369_40537;
var G__40548 = count__40370_40538;
var G__40549 = (i__40371_40539 + (1));
seq__40367_40536 = G__40546;
chunk__40369_40537 = G__40547;
count__40370_40538 = G__40548;
i__40371_40539 = G__40549;
continue;
} else {
var temp__5720__auto___40550 = cljs.core.seq(seq__40367_40536);
if(temp__5720__auto___40550){
var seq__40367_40551__$1 = temp__5720__auto___40550;
if(cljs.core.chunked_seq_QMARK_(seq__40367_40551__$1)){
var c__5568__auto___40552 = cljs.core.chunk_first(seq__40367_40551__$1);
var G__40553 = cljs.core.chunk_rest(seq__40367_40551__$1);
var G__40554 = c__5568__auto___40552;
var G__40555 = cljs.core.count(c__5568__auto___40552);
var G__40556 = (0);
seq__40367_40536 = G__40553;
chunk__40369_40537 = G__40554;
count__40370_40538 = G__40555;
i__40371_40539 = G__40556;
continue;
} else {
var map__40376_40557 = cljs.core.first(seq__40367_40551__$1);
var map__40376_40558__$1 = cljs.core.__destructure_map(map__40376_40557);
var task_40559 = map__40376_40558__$1;
var fn_str_40560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376_40558__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40376_40558__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40562 = goog.getObjectByName(fn_str_40560,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40561)].join(''));

(fn_obj_40562.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40562.cljs$core$IFn$_invoke$arity$2(path,new_link_40535) : fn_obj_40562.call(null,path,new_link_40535));


var G__40563 = cljs.core.next(seq__40367_40551__$1);
var G__40564 = null;
var G__40565 = (0);
var G__40566 = (0);
seq__40367_40536 = G__40563;
chunk__40369_40537 = G__40564;
count__40370_40538 = G__40565;
i__40371_40539 = G__40566;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40533);
});})(seq__40334_40529,chunk__40338_40530,count__40339_40531,i__40340_40532,seq__40220,chunk__40222,count__40223,i__40224,new_link_40535,path_match_40534,node_40533,path,map__40219,map__40219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40534], 0));

goog.dom.insertSiblingAfter(new_link_40535,node_40533);


var G__40567 = seq__40334_40529;
var G__40568 = chunk__40338_40530;
var G__40569 = count__40339_40531;
var G__40570 = (i__40340_40532 + (1));
seq__40334_40529 = G__40567;
chunk__40338_40530 = G__40568;
count__40339_40531 = G__40569;
i__40340_40532 = G__40570;
continue;
} else {
var G__40571 = seq__40334_40529;
var G__40572 = chunk__40338_40530;
var G__40573 = count__40339_40531;
var G__40574 = (i__40340_40532 + (1));
seq__40334_40529 = G__40571;
chunk__40338_40530 = G__40572;
count__40339_40531 = G__40573;
i__40340_40532 = G__40574;
continue;
}
} else {
var G__40575 = seq__40334_40529;
var G__40576 = chunk__40338_40530;
var G__40577 = count__40339_40531;
var G__40578 = (i__40340_40532 + (1));
seq__40334_40529 = G__40575;
chunk__40338_40530 = G__40576;
count__40339_40531 = G__40577;
i__40340_40532 = G__40578;
continue;
}
} else {
var temp__5720__auto___40579 = cljs.core.seq(seq__40334_40529);
if(temp__5720__auto___40579){
var seq__40334_40580__$1 = temp__5720__auto___40579;
if(cljs.core.chunked_seq_QMARK_(seq__40334_40580__$1)){
var c__5568__auto___40581 = cljs.core.chunk_first(seq__40334_40580__$1);
var G__40582 = cljs.core.chunk_rest(seq__40334_40580__$1);
var G__40583 = c__5568__auto___40581;
var G__40584 = cljs.core.count(c__5568__auto___40581);
var G__40585 = (0);
seq__40334_40529 = G__40582;
chunk__40338_40530 = G__40583;
count__40339_40531 = G__40584;
i__40340_40532 = G__40585;
continue;
} else {
var node_40586 = cljs.core.first(seq__40334_40580__$1);
if(cljs.core.not(node_40586.shadow$old)){
var path_match_40587 = shadow.cljs.devtools.client.browser.match_paths(node_40586.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40587)){
var new_link_40588 = (function (){var G__40377 = node_40586.cloneNode(true);
G__40377.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40587),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40377;
})();
(node_40586.shadow$old = true);

(new_link_40588.onload = ((function (seq__40334_40529,chunk__40338_40530,count__40339_40531,i__40340_40532,seq__40220,chunk__40222,count__40223,i__40224,new_link_40588,path_match_40587,node_40586,seq__40334_40580__$1,temp__5720__auto___40579,path,map__40219,map__40219__$1,msg,updates,reload_info){
return (function (e){
var seq__40378_40589 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40380_40590 = null;
var count__40381_40591 = (0);
var i__40382_40592 = (0);
while(true){
if((i__40382_40592 < count__40381_40591)){
var map__40386_40593 = chunk__40380_40590.cljs$core$IIndexed$_nth$arity$2(null,i__40382_40592);
var map__40386_40594__$1 = cljs.core.__destructure_map(map__40386_40593);
var task_40595 = map__40386_40594__$1;
var fn_str_40596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386_40594__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40386_40594__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40598 = goog.getObjectByName(fn_str_40596,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40597)].join(''));

(fn_obj_40598.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40598.cljs$core$IFn$_invoke$arity$2(path,new_link_40588) : fn_obj_40598.call(null,path,new_link_40588));


var G__40599 = seq__40378_40589;
var G__40600 = chunk__40380_40590;
var G__40601 = count__40381_40591;
var G__40602 = (i__40382_40592 + (1));
seq__40378_40589 = G__40599;
chunk__40380_40590 = G__40600;
count__40381_40591 = G__40601;
i__40382_40592 = G__40602;
continue;
} else {
var temp__5720__auto___40603__$1 = cljs.core.seq(seq__40378_40589);
if(temp__5720__auto___40603__$1){
var seq__40378_40604__$1 = temp__5720__auto___40603__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40378_40604__$1)){
var c__5568__auto___40605 = cljs.core.chunk_first(seq__40378_40604__$1);
var G__40606 = cljs.core.chunk_rest(seq__40378_40604__$1);
var G__40607 = c__5568__auto___40605;
var G__40608 = cljs.core.count(c__5568__auto___40605);
var G__40609 = (0);
seq__40378_40589 = G__40606;
chunk__40380_40590 = G__40607;
count__40381_40591 = G__40608;
i__40382_40592 = G__40609;
continue;
} else {
var map__40387_40610 = cljs.core.first(seq__40378_40604__$1);
var map__40387_40611__$1 = cljs.core.__destructure_map(map__40387_40610);
var task_40612 = map__40387_40611__$1;
var fn_str_40613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387_40611__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40387_40611__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40615 = goog.getObjectByName(fn_str_40613,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40614)].join(''));

(fn_obj_40615.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40615.cljs$core$IFn$_invoke$arity$2(path,new_link_40588) : fn_obj_40615.call(null,path,new_link_40588));


var G__40616 = cljs.core.next(seq__40378_40604__$1);
var G__40617 = null;
var G__40618 = (0);
var G__40619 = (0);
seq__40378_40589 = G__40616;
chunk__40380_40590 = G__40617;
count__40381_40591 = G__40618;
i__40382_40592 = G__40619;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40586);
});})(seq__40334_40529,chunk__40338_40530,count__40339_40531,i__40340_40532,seq__40220,chunk__40222,count__40223,i__40224,new_link_40588,path_match_40587,node_40586,seq__40334_40580__$1,temp__5720__auto___40579,path,map__40219,map__40219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40587], 0));

goog.dom.insertSiblingAfter(new_link_40588,node_40586);


var G__40620 = cljs.core.next(seq__40334_40580__$1);
var G__40621 = null;
var G__40622 = (0);
var G__40623 = (0);
seq__40334_40529 = G__40620;
chunk__40338_40530 = G__40621;
count__40339_40531 = G__40622;
i__40340_40532 = G__40623;
continue;
} else {
var G__40624 = cljs.core.next(seq__40334_40580__$1);
var G__40625 = null;
var G__40626 = (0);
var G__40627 = (0);
seq__40334_40529 = G__40624;
chunk__40338_40530 = G__40625;
count__40339_40531 = G__40626;
i__40340_40532 = G__40627;
continue;
}
} else {
var G__40628 = cljs.core.next(seq__40334_40580__$1);
var G__40629 = null;
var G__40630 = (0);
var G__40631 = (0);
seq__40334_40529 = G__40628;
chunk__40338_40530 = G__40629;
count__40339_40531 = G__40630;
i__40340_40532 = G__40631;
continue;
}
}
} else {
}
}
break;
}


var G__40632 = seq__40220;
var G__40633 = chunk__40222;
var G__40634 = count__40223;
var G__40635 = (i__40224 + (1));
seq__40220 = G__40632;
chunk__40222 = G__40633;
count__40223 = G__40634;
i__40224 = G__40635;
continue;
} else {
var G__40636 = seq__40220;
var G__40637 = chunk__40222;
var G__40638 = count__40223;
var G__40639 = (i__40224 + (1));
seq__40220 = G__40636;
chunk__40222 = G__40637;
count__40223 = G__40638;
i__40224 = G__40639;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40220);
if(temp__5720__auto__){
var seq__40220__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40220__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40220__$1);
var G__40640 = cljs.core.chunk_rest(seq__40220__$1);
var G__40641 = c__5568__auto__;
var G__40642 = cljs.core.count(c__5568__auto__);
var G__40643 = (0);
seq__40220 = G__40640;
chunk__40222 = G__40641;
count__40223 = G__40642;
i__40224 = G__40643;
continue;
} else {
var path = cljs.core.first(seq__40220__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40388_40644 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40392_40645 = null;
var count__40393_40646 = (0);
var i__40394_40647 = (0);
while(true){
if((i__40394_40647 < count__40393_40646)){
var node_40648 = chunk__40392_40645.cljs$core$IIndexed$_nth$arity$2(null,i__40394_40647);
if(cljs.core.not(node_40648.shadow$old)){
var path_match_40649 = shadow.cljs.devtools.client.browser.match_paths(node_40648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40649)){
var new_link_40650 = (function (){var G__40420 = node_40648.cloneNode(true);
G__40420.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40420;
})();
(node_40648.shadow$old = true);

(new_link_40650.onload = ((function (seq__40388_40644,chunk__40392_40645,count__40393_40646,i__40394_40647,seq__40220,chunk__40222,count__40223,i__40224,new_link_40650,path_match_40649,node_40648,path,seq__40220__$1,temp__5720__auto__,map__40219,map__40219__$1,msg,updates,reload_info){
return (function (e){
var seq__40421_40651 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40423_40652 = null;
var count__40424_40653 = (0);
var i__40425_40654 = (0);
while(true){
if((i__40425_40654 < count__40424_40653)){
var map__40429_40655 = chunk__40423_40652.cljs$core$IIndexed$_nth$arity$2(null,i__40425_40654);
var map__40429_40656__$1 = cljs.core.__destructure_map(map__40429_40655);
var task_40657 = map__40429_40656__$1;
var fn_str_40658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40429_40656__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40429_40656__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40660 = goog.getObjectByName(fn_str_40658,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40659)].join(''));

(fn_obj_40660.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40660.cljs$core$IFn$_invoke$arity$2(path,new_link_40650) : fn_obj_40660.call(null,path,new_link_40650));


var G__40661 = seq__40421_40651;
var G__40662 = chunk__40423_40652;
var G__40663 = count__40424_40653;
var G__40664 = (i__40425_40654 + (1));
seq__40421_40651 = G__40661;
chunk__40423_40652 = G__40662;
count__40424_40653 = G__40663;
i__40425_40654 = G__40664;
continue;
} else {
var temp__5720__auto___40665__$1 = cljs.core.seq(seq__40421_40651);
if(temp__5720__auto___40665__$1){
var seq__40421_40666__$1 = temp__5720__auto___40665__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40421_40666__$1)){
var c__5568__auto___40667 = cljs.core.chunk_first(seq__40421_40666__$1);
var G__40668 = cljs.core.chunk_rest(seq__40421_40666__$1);
var G__40669 = c__5568__auto___40667;
var G__40670 = cljs.core.count(c__5568__auto___40667);
var G__40671 = (0);
seq__40421_40651 = G__40668;
chunk__40423_40652 = G__40669;
count__40424_40653 = G__40670;
i__40425_40654 = G__40671;
continue;
} else {
var map__40430_40672 = cljs.core.first(seq__40421_40666__$1);
var map__40430_40673__$1 = cljs.core.__destructure_map(map__40430_40672);
var task_40674 = map__40430_40673__$1;
var fn_str_40675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430_40673__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430_40673__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40677 = goog.getObjectByName(fn_str_40675,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40676)].join(''));

(fn_obj_40677.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40677.cljs$core$IFn$_invoke$arity$2(path,new_link_40650) : fn_obj_40677.call(null,path,new_link_40650));


var G__40678 = cljs.core.next(seq__40421_40666__$1);
var G__40679 = null;
var G__40680 = (0);
var G__40681 = (0);
seq__40421_40651 = G__40678;
chunk__40423_40652 = G__40679;
count__40424_40653 = G__40680;
i__40425_40654 = G__40681;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40648);
});})(seq__40388_40644,chunk__40392_40645,count__40393_40646,i__40394_40647,seq__40220,chunk__40222,count__40223,i__40224,new_link_40650,path_match_40649,node_40648,path,seq__40220__$1,temp__5720__auto__,map__40219,map__40219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40649], 0));

goog.dom.insertSiblingAfter(new_link_40650,node_40648);


var G__40682 = seq__40388_40644;
var G__40683 = chunk__40392_40645;
var G__40684 = count__40393_40646;
var G__40685 = (i__40394_40647 + (1));
seq__40388_40644 = G__40682;
chunk__40392_40645 = G__40683;
count__40393_40646 = G__40684;
i__40394_40647 = G__40685;
continue;
} else {
var G__40686 = seq__40388_40644;
var G__40687 = chunk__40392_40645;
var G__40688 = count__40393_40646;
var G__40689 = (i__40394_40647 + (1));
seq__40388_40644 = G__40686;
chunk__40392_40645 = G__40687;
count__40393_40646 = G__40688;
i__40394_40647 = G__40689;
continue;
}
} else {
var G__40690 = seq__40388_40644;
var G__40691 = chunk__40392_40645;
var G__40692 = count__40393_40646;
var G__40693 = (i__40394_40647 + (1));
seq__40388_40644 = G__40690;
chunk__40392_40645 = G__40691;
count__40393_40646 = G__40692;
i__40394_40647 = G__40693;
continue;
}
} else {
var temp__5720__auto___40694__$1 = cljs.core.seq(seq__40388_40644);
if(temp__5720__auto___40694__$1){
var seq__40388_40695__$1 = temp__5720__auto___40694__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40388_40695__$1)){
var c__5568__auto___40696 = cljs.core.chunk_first(seq__40388_40695__$1);
var G__40697 = cljs.core.chunk_rest(seq__40388_40695__$1);
var G__40698 = c__5568__auto___40696;
var G__40699 = cljs.core.count(c__5568__auto___40696);
var G__40700 = (0);
seq__40388_40644 = G__40697;
chunk__40392_40645 = G__40698;
count__40393_40646 = G__40699;
i__40394_40647 = G__40700;
continue;
} else {
var node_40701 = cljs.core.first(seq__40388_40695__$1);
if(cljs.core.not(node_40701.shadow$old)){
var path_match_40702 = shadow.cljs.devtools.client.browser.match_paths(node_40701.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40702)){
var new_link_40703 = (function (){var G__40431 = node_40701.cloneNode(true);
G__40431.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40702),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40431;
})();
(node_40701.shadow$old = true);

(new_link_40703.onload = ((function (seq__40388_40644,chunk__40392_40645,count__40393_40646,i__40394_40647,seq__40220,chunk__40222,count__40223,i__40224,new_link_40703,path_match_40702,node_40701,seq__40388_40695__$1,temp__5720__auto___40694__$1,path,seq__40220__$1,temp__5720__auto__,map__40219,map__40219__$1,msg,updates,reload_info){
return (function (e){
var seq__40432_40704 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40434_40705 = null;
var count__40435_40706 = (0);
var i__40436_40707 = (0);
while(true){
if((i__40436_40707 < count__40435_40706)){
var map__40440_40708 = chunk__40434_40705.cljs$core$IIndexed$_nth$arity$2(null,i__40436_40707);
var map__40440_40709__$1 = cljs.core.__destructure_map(map__40440_40708);
var task_40710 = map__40440_40709__$1;
var fn_str_40711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440_40709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440_40709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40713 = goog.getObjectByName(fn_str_40711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40712)].join(''));

(fn_obj_40713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40713.cljs$core$IFn$_invoke$arity$2(path,new_link_40703) : fn_obj_40713.call(null,path,new_link_40703));


var G__40714 = seq__40432_40704;
var G__40715 = chunk__40434_40705;
var G__40716 = count__40435_40706;
var G__40717 = (i__40436_40707 + (1));
seq__40432_40704 = G__40714;
chunk__40434_40705 = G__40715;
count__40435_40706 = G__40716;
i__40436_40707 = G__40717;
continue;
} else {
var temp__5720__auto___40718__$2 = cljs.core.seq(seq__40432_40704);
if(temp__5720__auto___40718__$2){
var seq__40432_40719__$1 = temp__5720__auto___40718__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40432_40719__$1)){
var c__5568__auto___40720 = cljs.core.chunk_first(seq__40432_40719__$1);
var G__40721 = cljs.core.chunk_rest(seq__40432_40719__$1);
var G__40722 = c__5568__auto___40720;
var G__40723 = cljs.core.count(c__5568__auto___40720);
var G__40724 = (0);
seq__40432_40704 = G__40721;
chunk__40434_40705 = G__40722;
count__40435_40706 = G__40723;
i__40436_40707 = G__40724;
continue;
} else {
var map__40441_40725 = cljs.core.first(seq__40432_40719__$1);
var map__40441_40726__$1 = cljs.core.__destructure_map(map__40441_40725);
var task_40727 = map__40441_40726__$1;
var fn_str_40728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40441_40726__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40441_40726__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40730 = goog.getObjectByName(fn_str_40728,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40729)].join(''));

(fn_obj_40730.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40730.cljs$core$IFn$_invoke$arity$2(path,new_link_40703) : fn_obj_40730.call(null,path,new_link_40703));


var G__40731 = cljs.core.next(seq__40432_40719__$1);
var G__40732 = null;
var G__40733 = (0);
var G__40734 = (0);
seq__40432_40704 = G__40731;
chunk__40434_40705 = G__40732;
count__40435_40706 = G__40733;
i__40436_40707 = G__40734;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40701);
});})(seq__40388_40644,chunk__40392_40645,count__40393_40646,i__40394_40647,seq__40220,chunk__40222,count__40223,i__40224,new_link_40703,path_match_40702,node_40701,seq__40388_40695__$1,temp__5720__auto___40694__$1,path,seq__40220__$1,temp__5720__auto__,map__40219,map__40219__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40702], 0));

goog.dom.insertSiblingAfter(new_link_40703,node_40701);


var G__40735 = cljs.core.next(seq__40388_40695__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40388_40644 = G__40735;
chunk__40392_40645 = G__40736;
count__40393_40646 = G__40737;
i__40394_40647 = G__40738;
continue;
} else {
var G__40739 = cljs.core.next(seq__40388_40695__$1);
var G__40740 = null;
var G__40741 = (0);
var G__40742 = (0);
seq__40388_40644 = G__40739;
chunk__40392_40645 = G__40740;
count__40393_40646 = G__40741;
i__40394_40647 = G__40742;
continue;
}
} else {
var G__40743 = cljs.core.next(seq__40388_40695__$1);
var G__40744 = null;
var G__40745 = (0);
var G__40746 = (0);
seq__40388_40644 = G__40743;
chunk__40392_40645 = G__40744;
count__40393_40646 = G__40745;
i__40394_40647 = G__40746;
continue;
}
}
} else {
}
}
break;
}


var G__40747 = cljs.core.next(seq__40220__$1);
var G__40748 = null;
var G__40749 = (0);
var G__40750 = (0);
seq__40220 = G__40747;
chunk__40222 = G__40748;
count__40223 = G__40749;
i__40224 = G__40750;
continue;
} else {
var G__40751 = cljs.core.next(seq__40220__$1);
var G__40752 = null;
var G__40753 = (0);
var G__40754 = (0);
seq__40220 = G__40751;
chunk__40222 = G__40752;
count__40223 = G__40753;
i__40224 = G__40754;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40442){
var map__40443 = p__40442;
var map__40443__$1 = cljs.core.__destructure_map(map__40443);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40443__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40444){
var map__40445 = p__40444;
var map__40445__$1 = cljs.core.__destructure_map(map__40445);
var _ = map__40445__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40445__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40446,done,error){
var map__40447 = p__40446;
var map__40447__$1 = cljs.core.__destructure_map(map__40447);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40447__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40448,done,error){
var map__40449 = p__40448;
var map__40449__$1 = cljs.core.__destructure_map(map__40449);
var msg = map__40449__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40449__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40449__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40449__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40450){
var map__40451 = p__40450;
var map__40451__$1 = cljs.core.__destructure_map(map__40451);
var src = map__40451__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40452 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40452) : done.call(null,G__40452));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40453){
var map__40454 = p__40453;
var map__40454__$1 = cljs.core.__destructure_map(map__40454);
var msg__$1 = map__40454__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40454__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40455){var ex = e40455;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40456){
var map__40457 = p__40456;
var map__40457__$1 = cljs.core.__destructure_map(map__40457);
var env = map__40457__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40457__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40458){
var map__40459 = p__40458;
var map__40459__$1 = cljs.core.__destructure_map(map__40459);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40459__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40459__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40460){
var map__40461 = p__40460;
var map__40461__$1 = cljs.core.__destructure_map(map__40461);
var svc = map__40461__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40461__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
