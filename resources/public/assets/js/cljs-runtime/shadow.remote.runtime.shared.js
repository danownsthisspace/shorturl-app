goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__35779,res){
var map__35780 = p__35779;
var map__35780__$1 = cljs.core.__destructure_map(map__35780);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35780__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35780__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__35781 = res;
var G__35781__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35781,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__35781);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35781__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__35781__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__35788 = arguments.length;
switch (G__35788) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__35791,msg,handlers,timeout_after_ms){
var map__35792 = p__35791;
var map__35792__$1 = cljs.core.__destructure_map(map__35792);
var runtime = map__35792__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36094 = arguments.length;
var i__5770__auto___36095 = (0);
while(true){
if((i__5770__auto___36095 < len__5769__auto___36094)){
args__5775__auto__.push((arguments[i__5770__auto___36095]));

var G__36097 = (i__5770__auto___36095 + (1));
i__5770__auto___36095 = G__36097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35807,ev,args){
var map__35808 = p__35807;
var map__35808__$1 = cljs.core.__destructure_map(map__35808);
var runtime = map__35808__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35808__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__35809 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35812 = null;
var count__35813 = (0);
var i__35814 = (0);
while(true){
if((i__35814 < count__35813)){
var ext = chunk__35812.cljs$core$IIndexed$_nth$arity$2(null,i__35814);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36103 = seq__35809;
var G__36104 = chunk__35812;
var G__36105 = count__35813;
var G__36106 = (i__35814 + (1));
seq__35809 = G__36103;
chunk__35812 = G__36104;
count__35813 = G__36105;
i__35814 = G__36106;
continue;
} else {
var G__36107 = seq__35809;
var G__36108 = chunk__35812;
var G__36109 = count__35813;
var G__36110 = (i__35814 + (1));
seq__35809 = G__36107;
chunk__35812 = G__36108;
count__35813 = G__36109;
i__35814 = G__36110;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35809);
if(temp__5720__auto__){
var seq__35809__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35809__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35809__$1);
var G__36112 = cljs.core.chunk_rest(seq__35809__$1);
var G__36113 = c__5568__auto__;
var G__36114 = cljs.core.count(c__5568__auto__);
var G__36115 = (0);
seq__35809 = G__36112;
chunk__35812 = G__36113;
count__35813 = G__36114;
i__35814 = G__36115;
continue;
} else {
var ext = cljs.core.first(seq__35809__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36116 = cljs.core.next(seq__35809__$1);
var G__36117 = null;
var G__36118 = (0);
var G__36119 = (0);
seq__35809 = G__36116;
chunk__35812 = G__36117;
count__35813 = G__36118;
i__35814 = G__36119;
continue;
} else {
var G__36120 = cljs.core.next(seq__35809__$1);
var G__36121 = null;
var G__36122 = (0);
var G__36123 = (0);
seq__35809 = G__36120;
chunk__35812 = G__36121;
count__35813 = G__36122;
i__35814 = G__36123;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq35793){
var G__35794 = cljs.core.first(seq35793);
var seq35793__$1 = cljs.core.next(seq35793);
var G__35795 = cljs.core.first(seq35793__$1);
var seq35793__$2 = cljs.core.next(seq35793__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35794,G__35795,seq35793__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__35834,p__35835){
var map__35836 = p__35834;
var map__35836__$1 = cljs.core.__destructure_map(map__35836);
var runtime = map__35836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35838 = p__35835;
var map__35838__$1 = cljs.core.__destructure_map(map__35838);
var msg = map__35838__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__35840 = cljs.core.deref(state_ref);
var map__35840__$1 = cljs.core.__destructure_map(map__35840);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35840__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__35845){
var map__35846 = p__35845;
var map__35846__$1 = cljs.core.__destructure_map(map__35846);
var runtime = map__35846__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35846__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35854,msg){
var map__35856 = p__35854;
var map__35856__$1 = cljs.core.__destructure_map(map__35856);
var runtime = map__35856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35868,key,p__35869){
var map__35871 = p__35868;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var state = map__35871__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35872 = p__35869;
var map__35872__$1 = cljs.core.__destructure_map(map__35872);
var spec = map__35872__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35872__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35887,key,spec){
var map__35890 = p__35887;
var map__35890__$1 = cljs.core.__destructure_map(map__35890);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35890__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35894_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35894_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35895_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35895_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35896_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35896_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35897_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35897_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35898_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35898_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35956,key){
var map__35964 = p__35956;
var map__35964__$1 = cljs.core.__destructure_map(map__35964);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35994,msg){
var map__35996 = p__35994;
var map__35996__$1 = cljs.core.__destructure_map(map__35996);
var runtime = map__35996__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35996__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36005,p__36006){
var map__36008 = p__36005;
var map__36008__$1 = cljs.core.__destructure_map(map__36008);
var runtime = map__36008__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36009 = p__36006;
var map__36009__$1 = cljs.core.__destructure_map(map__36009);
var msg = map__36009__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36021 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36023 = null;
var count__36024 = (0);
var i__36025 = (0);
while(true){
if((i__36025 < count__36024)){
var map__36046 = chunk__36023.cljs$core$IIndexed$_nth$arity$2(null,i__36025);
var map__36046__$1 = cljs.core.__destructure_map(map__36046);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36159 = seq__36021;
var G__36160 = chunk__36023;
var G__36161 = count__36024;
var G__36162 = (i__36025 + (1));
seq__36021 = G__36159;
chunk__36023 = G__36160;
count__36024 = G__36161;
i__36025 = G__36162;
continue;
} else {
var G__36164 = seq__36021;
var G__36165 = chunk__36023;
var G__36166 = count__36024;
var G__36167 = (i__36025 + (1));
seq__36021 = G__36164;
chunk__36023 = G__36165;
count__36024 = G__36166;
i__36025 = G__36167;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36021);
if(temp__5720__auto__){
var seq__36021__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36021__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36021__$1);
var G__36168 = cljs.core.chunk_rest(seq__36021__$1);
var G__36169 = c__5568__auto__;
var G__36170 = cljs.core.count(c__5568__auto__);
var G__36171 = (0);
seq__36021 = G__36168;
chunk__36023 = G__36169;
count__36024 = G__36170;
i__36025 = G__36171;
continue;
} else {
var map__36053 = cljs.core.first(seq__36021__$1);
var map__36053__$1 = cljs.core.__destructure_map(map__36053);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36053__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36172 = cljs.core.next(seq__36021__$1);
var G__36173 = null;
var G__36174 = (0);
var G__36175 = (0);
seq__36021 = G__36172;
chunk__36023 = G__36173;
count__36024 = G__36174;
i__36025 = G__36175;
continue;
} else {
var G__36176 = cljs.core.next(seq__36021__$1);
var G__36177 = null;
var G__36178 = (0);
var G__36179 = (0);
seq__36021 = G__36176;
chunk__36023 = G__36177;
count__36024 = G__36178;
i__36025 = G__36179;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
