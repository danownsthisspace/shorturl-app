goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38939 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38939(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38941 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38941(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37372 = coll;
var G__37373 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37372,G__37373) : shadow.dom.lazy_native_coll_seq.call(null,G__37372,G__37373));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__37424 = arguments.length;
switch (G__37424) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__37429 = arguments.length;
switch (G__37429) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__37448 = arguments.length;
switch (G__37448) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__37453 = arguments.length;
switch (G__37453) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__37495 = arguments.length;
switch (G__37495) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37532 = arguments.length;
switch (G__37532) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37563){if((e37563 instanceof Object)){
var e = e37563;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37563;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37589 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37590 = null;
var count__37591 = (0);
var i__37592 = (0);
while(true){
if((i__37592 < count__37591)){
var el = chunk__37590.cljs$core$IIndexed$_nth$arity$2(null,i__37592);
var handler_38961__$1 = ((function (seq__37589,chunk__37590,count__37591,i__37592,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37589,chunk__37590,count__37591,i__37592,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38961__$1);


var G__38962 = seq__37589;
var G__38963 = chunk__37590;
var G__38964 = count__37591;
var G__38965 = (i__37592 + (1));
seq__37589 = G__38962;
chunk__37590 = G__38963;
count__37591 = G__38964;
i__37592 = G__38965;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37589);
if(temp__5720__auto__){
var seq__37589__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37589__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37589__$1);
var G__38966 = cljs.core.chunk_rest(seq__37589__$1);
var G__38967 = c__5568__auto__;
var G__38968 = cljs.core.count(c__5568__auto__);
var G__38969 = (0);
seq__37589 = G__38966;
chunk__37590 = G__38967;
count__37591 = G__38968;
i__37592 = G__38969;
continue;
} else {
var el = cljs.core.first(seq__37589__$1);
var handler_38971__$1 = ((function (seq__37589,chunk__37590,count__37591,i__37592,el,seq__37589__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37589,chunk__37590,count__37591,i__37592,el,seq__37589__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38971__$1);


var G__38973 = cljs.core.next(seq__37589__$1);
var G__38974 = null;
var G__38975 = (0);
var G__38976 = (0);
seq__37589 = G__38973;
chunk__37590 = G__38974;
count__37591 = G__38975;
i__37592 = G__38976;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37663 = arguments.length;
switch (G__37663) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37697 = cljs.core.seq(events);
var chunk__37698 = null;
var count__37699 = (0);
var i__37700 = (0);
while(true){
if((i__37700 < count__37699)){
var vec__37732 = chunk__37698.cljs$core$IIndexed$_nth$arity$2(null,i__37700);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37732,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38980 = seq__37697;
var G__38981 = chunk__37698;
var G__38982 = count__37699;
var G__38983 = (i__37700 + (1));
seq__37697 = G__38980;
chunk__37698 = G__38981;
count__37699 = G__38982;
i__37700 = G__38983;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37697);
if(temp__5720__auto__){
var seq__37697__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37697__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37697__$1);
var G__38985 = cljs.core.chunk_rest(seq__37697__$1);
var G__38986 = c__5568__auto__;
var G__38988 = cljs.core.count(c__5568__auto__);
var G__38989 = (0);
seq__37697 = G__38985;
chunk__37698 = G__38986;
count__37699 = G__38988;
i__37700 = G__38989;
continue;
} else {
var vec__37749 = cljs.core.first(seq__37697__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38992 = cljs.core.next(seq__37697__$1);
var G__38993 = null;
var G__38994 = (0);
var G__38995 = (0);
seq__37697 = G__38992;
chunk__37698 = G__38993;
count__37699 = G__38994;
i__37700 = G__38995;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37766 = cljs.core.seq(styles);
var chunk__37767 = null;
var count__37768 = (0);
var i__37769 = (0);
while(true){
if((i__37769 < count__37768)){
var vec__37801 = chunk__37767.cljs$core$IIndexed$_nth$arity$2(null,i__37769);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38996 = seq__37766;
var G__38997 = chunk__37767;
var G__38998 = count__37768;
var G__38999 = (i__37769 + (1));
seq__37766 = G__38996;
chunk__37767 = G__38997;
count__37768 = G__38998;
i__37769 = G__38999;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37766);
if(temp__5720__auto__){
var seq__37766__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37766__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37766__$1);
var G__39000 = cljs.core.chunk_rest(seq__37766__$1);
var G__39001 = c__5568__auto__;
var G__39002 = cljs.core.count(c__5568__auto__);
var G__39003 = (0);
seq__37766 = G__39000;
chunk__37767 = G__39001;
count__37768 = G__39002;
i__37769 = G__39003;
continue;
} else {
var vec__37817 = cljs.core.first(seq__37766__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37817,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37817,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__39004 = cljs.core.next(seq__37766__$1);
var G__39005 = null;
var G__39006 = (0);
var G__39007 = (0);
seq__37766 = G__39004;
chunk__37767 = G__39005;
count__37768 = G__39006;
i__37769 = G__39007;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37833_39008 = key;
var G__37833_39009__$1 = (((G__37833_39008 instanceof cljs.core.Keyword))?G__37833_39008.fqn:null);
switch (G__37833_39009__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_39011 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_39011,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_39011,"aria-");
}
})())){
el.setAttribute(ks_39011,value);
} else {
(el[ks_39011] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37891){
var map__37892 = p__37891;
var map__37892__$1 = cljs.core.__destructure_map(map__37892);
var props = map__37892__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37892__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37895 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37900 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37900,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37900;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37908 = arguments.length;
switch (G__37908) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37928){
var vec__37930 = p__37928;
var seq__37931 = cljs.core.seq(vec__37930);
var first__37932 = cljs.core.first(seq__37931);
var seq__37931__$1 = cljs.core.next(seq__37931);
var nn = first__37932;
var first__37932__$1 = cljs.core.first(seq__37931__$1);
var seq__37931__$2 = cljs.core.next(seq__37931__$1);
var np = first__37932__$1;
var nc = seq__37931__$2;
var node = vec__37930;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37933 = nn;
var G__37934 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37933,G__37934) : create_fn.call(null,G__37933,G__37934));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37935 = nn;
var G__37936 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37935,G__37936) : create_fn.call(null,G__37935,G__37936));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37939 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(1),null);
var seq__37944_39019 = cljs.core.seq(node_children);
var chunk__37945_39020 = null;
var count__37946_39021 = (0);
var i__37947_39022 = (0);
while(true){
if((i__37947_39022 < count__37946_39021)){
var child_struct_39024 = chunk__37945_39020.cljs$core$IIndexed$_nth$arity$2(null,i__37947_39022);
var children_39025 = shadow.dom.dom_node(child_struct_39024);
if(cljs.core.seq_QMARK_(children_39025)){
var seq__38009_39026 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39025));
var chunk__38012_39027 = null;
var count__38013_39028 = (0);
var i__38014_39029 = (0);
while(true){
if((i__38014_39029 < count__38013_39028)){
var child_39030 = chunk__38012_39027.cljs$core$IIndexed$_nth$arity$2(null,i__38014_39029);
if(cljs.core.truth_(child_39030)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39030);


var G__39032 = seq__38009_39026;
var G__39033 = chunk__38012_39027;
var G__39034 = count__38013_39028;
var G__39035 = (i__38014_39029 + (1));
seq__38009_39026 = G__39032;
chunk__38012_39027 = G__39033;
count__38013_39028 = G__39034;
i__38014_39029 = G__39035;
continue;
} else {
var G__39036 = seq__38009_39026;
var G__39037 = chunk__38012_39027;
var G__39038 = count__38013_39028;
var G__39039 = (i__38014_39029 + (1));
seq__38009_39026 = G__39036;
chunk__38012_39027 = G__39037;
count__38013_39028 = G__39038;
i__38014_39029 = G__39039;
continue;
}
} else {
var temp__5720__auto___39040 = cljs.core.seq(seq__38009_39026);
if(temp__5720__auto___39040){
var seq__38009_39041__$1 = temp__5720__auto___39040;
if(cljs.core.chunked_seq_QMARK_(seq__38009_39041__$1)){
var c__5568__auto___39042 = cljs.core.chunk_first(seq__38009_39041__$1);
var G__39043 = cljs.core.chunk_rest(seq__38009_39041__$1);
var G__39044 = c__5568__auto___39042;
var G__39045 = cljs.core.count(c__5568__auto___39042);
var G__39046 = (0);
seq__38009_39026 = G__39043;
chunk__38012_39027 = G__39044;
count__38013_39028 = G__39045;
i__38014_39029 = G__39046;
continue;
} else {
var child_39047 = cljs.core.first(seq__38009_39041__$1);
if(cljs.core.truth_(child_39047)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39047);


var G__39048 = cljs.core.next(seq__38009_39041__$1);
var G__39049 = null;
var G__39050 = (0);
var G__39051 = (0);
seq__38009_39026 = G__39048;
chunk__38012_39027 = G__39049;
count__38013_39028 = G__39050;
i__38014_39029 = G__39051;
continue;
} else {
var G__39052 = cljs.core.next(seq__38009_39041__$1);
var G__39053 = null;
var G__39054 = (0);
var G__39055 = (0);
seq__38009_39026 = G__39052;
chunk__38012_39027 = G__39053;
count__38013_39028 = G__39054;
i__38014_39029 = G__39055;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39025);
}


var G__39056 = seq__37944_39019;
var G__39057 = chunk__37945_39020;
var G__39058 = count__37946_39021;
var G__39059 = (i__37947_39022 + (1));
seq__37944_39019 = G__39056;
chunk__37945_39020 = G__39057;
count__37946_39021 = G__39058;
i__37947_39022 = G__39059;
continue;
} else {
var temp__5720__auto___39061 = cljs.core.seq(seq__37944_39019);
if(temp__5720__auto___39061){
var seq__37944_39062__$1 = temp__5720__auto___39061;
if(cljs.core.chunked_seq_QMARK_(seq__37944_39062__$1)){
var c__5568__auto___39063 = cljs.core.chunk_first(seq__37944_39062__$1);
var G__39064 = cljs.core.chunk_rest(seq__37944_39062__$1);
var G__39065 = c__5568__auto___39063;
var G__39066 = cljs.core.count(c__5568__auto___39063);
var G__39067 = (0);
seq__37944_39019 = G__39064;
chunk__37945_39020 = G__39065;
count__37946_39021 = G__39066;
i__37947_39022 = G__39067;
continue;
} else {
var child_struct_39068 = cljs.core.first(seq__37944_39062__$1);
var children_39069 = shadow.dom.dom_node(child_struct_39068);
if(cljs.core.seq_QMARK_(children_39069)){
var seq__38039_39070 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_39069));
var chunk__38041_39071 = null;
var count__38042_39072 = (0);
var i__38043_39073 = (0);
while(true){
if((i__38043_39073 < count__38042_39072)){
var child_39074 = chunk__38041_39071.cljs$core$IIndexed$_nth$arity$2(null,i__38043_39073);
if(cljs.core.truth_(child_39074)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39074);


var G__39075 = seq__38039_39070;
var G__39076 = chunk__38041_39071;
var G__39077 = count__38042_39072;
var G__39078 = (i__38043_39073 + (1));
seq__38039_39070 = G__39075;
chunk__38041_39071 = G__39076;
count__38042_39072 = G__39077;
i__38043_39073 = G__39078;
continue;
} else {
var G__39079 = seq__38039_39070;
var G__39080 = chunk__38041_39071;
var G__39081 = count__38042_39072;
var G__39082 = (i__38043_39073 + (1));
seq__38039_39070 = G__39079;
chunk__38041_39071 = G__39080;
count__38042_39072 = G__39081;
i__38043_39073 = G__39082;
continue;
}
} else {
var temp__5720__auto___39083__$1 = cljs.core.seq(seq__38039_39070);
if(temp__5720__auto___39083__$1){
var seq__38039_39085__$1 = temp__5720__auto___39083__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38039_39085__$1)){
var c__5568__auto___39087 = cljs.core.chunk_first(seq__38039_39085__$1);
var G__39088 = cljs.core.chunk_rest(seq__38039_39085__$1);
var G__39089 = c__5568__auto___39087;
var G__39090 = cljs.core.count(c__5568__auto___39087);
var G__39091 = (0);
seq__38039_39070 = G__39088;
chunk__38041_39071 = G__39089;
count__38042_39072 = G__39090;
i__38043_39073 = G__39091;
continue;
} else {
var child_39093 = cljs.core.first(seq__38039_39085__$1);
if(cljs.core.truth_(child_39093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_39093);


var G__39094 = cljs.core.next(seq__38039_39085__$1);
var G__39095 = null;
var G__39096 = (0);
var G__39097 = (0);
seq__38039_39070 = G__39094;
chunk__38041_39071 = G__39095;
count__38042_39072 = G__39096;
i__38043_39073 = G__39097;
continue;
} else {
var G__39099 = cljs.core.next(seq__38039_39085__$1);
var G__39100 = null;
var G__39101 = (0);
var G__39102 = (0);
seq__38039_39070 = G__39099;
chunk__38041_39071 = G__39100;
count__38042_39072 = G__39101;
i__38043_39073 = G__39102;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_39069);
}


var G__39103 = cljs.core.next(seq__37944_39062__$1);
var G__39104 = null;
var G__39105 = (0);
var G__39106 = (0);
seq__37944_39019 = G__39103;
chunk__37945_39020 = G__39104;
count__37946_39021 = G__39105;
i__37947_39022 = G__39106;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__38141 = cljs.core.seq(node);
var chunk__38142 = null;
var count__38143 = (0);
var i__38144 = (0);
while(true){
if((i__38144 < count__38143)){
var n = chunk__38142.cljs$core$IIndexed$_nth$arity$2(null,i__38144);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39108 = seq__38141;
var G__39109 = chunk__38142;
var G__39110 = count__38143;
var G__39111 = (i__38144 + (1));
seq__38141 = G__39108;
chunk__38142 = G__39109;
count__38143 = G__39110;
i__38144 = G__39111;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__38141);
if(temp__5720__auto__){
var seq__38141__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38141__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38141__$1);
var G__39112 = cljs.core.chunk_rest(seq__38141__$1);
var G__39113 = c__5568__auto__;
var G__39114 = cljs.core.count(c__5568__auto__);
var G__39115 = (0);
seq__38141 = G__39112;
chunk__38142 = G__39113;
count__38143 = G__39114;
i__38144 = G__39115;
continue;
} else {
var n = cljs.core.first(seq__38141__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__39116 = cljs.core.next(seq__38141__$1);
var G__39117 = null;
var G__39118 = (0);
var G__39119 = (0);
seq__38141 = G__39116;
chunk__38142 = G__39117;
count__38143 = G__39118;
i__38144 = G__39119;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__38157 = arguments.length;
switch (G__38157) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__38165 = arguments.length;
switch (G__38165) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__38190 = arguments.length;
switch (G__38190) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39124 = arguments.length;
var i__5770__auto___39125 = (0);
while(true){
if((i__5770__auto___39125 < len__5769__auto___39124)){
args__5775__auto__.push((arguments[i__5770__auto___39125]));

var G__39126 = (i__5770__auto___39125 + (1));
i__5770__auto___39125 = G__39126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__38218_39128 = cljs.core.seq(nodes);
var chunk__38219_39129 = null;
var count__38220_39130 = (0);
var i__38221_39131 = (0);
while(true){
if((i__38221_39131 < count__38220_39130)){
var node_39132 = chunk__38219_39129.cljs$core$IIndexed$_nth$arity$2(null,i__38221_39131);
fragment.appendChild(shadow.dom._to_dom(node_39132));


var G__39133 = seq__38218_39128;
var G__39134 = chunk__38219_39129;
var G__39135 = count__38220_39130;
var G__39136 = (i__38221_39131 + (1));
seq__38218_39128 = G__39133;
chunk__38219_39129 = G__39134;
count__38220_39130 = G__39135;
i__38221_39131 = G__39136;
continue;
} else {
var temp__5720__auto___39138 = cljs.core.seq(seq__38218_39128);
if(temp__5720__auto___39138){
var seq__38218_39139__$1 = temp__5720__auto___39138;
if(cljs.core.chunked_seq_QMARK_(seq__38218_39139__$1)){
var c__5568__auto___39140 = cljs.core.chunk_first(seq__38218_39139__$1);
var G__39141 = cljs.core.chunk_rest(seq__38218_39139__$1);
var G__39142 = c__5568__auto___39140;
var G__39143 = cljs.core.count(c__5568__auto___39140);
var G__39144 = (0);
seq__38218_39128 = G__39141;
chunk__38219_39129 = G__39142;
count__38220_39130 = G__39143;
i__38221_39131 = G__39144;
continue;
} else {
var node_39145 = cljs.core.first(seq__38218_39139__$1);
fragment.appendChild(shadow.dom._to_dom(node_39145));


var G__39146 = cljs.core.next(seq__38218_39139__$1);
var G__39147 = null;
var G__39148 = (0);
var G__39149 = (0);
seq__38218_39128 = G__39146;
chunk__38219_39129 = G__39147;
count__38220_39130 = G__39148;
i__38221_39131 = G__39149;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq38216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38216));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__38226_39151 = cljs.core.seq(scripts);
var chunk__38227_39152 = null;
var count__38228_39153 = (0);
var i__38229_39154 = (0);
while(true){
if((i__38229_39154 < count__38228_39153)){
var vec__38254_39156 = chunk__38227_39152.cljs$core$IIndexed$_nth$arity$2(null,i__38229_39154);
var script_tag_39157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38254_39156,(0),null);
var script_body_39158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38254_39156,(1),null);
eval(script_body_39158);


var G__39159 = seq__38226_39151;
var G__39160 = chunk__38227_39152;
var G__39161 = count__38228_39153;
var G__39162 = (i__38229_39154 + (1));
seq__38226_39151 = G__39159;
chunk__38227_39152 = G__39160;
count__38228_39153 = G__39161;
i__38229_39154 = G__39162;
continue;
} else {
var temp__5720__auto___39163 = cljs.core.seq(seq__38226_39151);
if(temp__5720__auto___39163){
var seq__38226_39164__$1 = temp__5720__auto___39163;
if(cljs.core.chunked_seq_QMARK_(seq__38226_39164__$1)){
var c__5568__auto___39165 = cljs.core.chunk_first(seq__38226_39164__$1);
var G__39167 = cljs.core.chunk_rest(seq__38226_39164__$1);
var G__39168 = c__5568__auto___39165;
var G__39169 = cljs.core.count(c__5568__auto___39165);
var G__39170 = (0);
seq__38226_39151 = G__39167;
chunk__38227_39152 = G__39168;
count__38228_39153 = G__39169;
i__38229_39154 = G__39170;
continue;
} else {
var vec__38260_39171 = cljs.core.first(seq__38226_39164__$1);
var script_tag_39172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38260_39171,(0),null);
var script_body_39173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38260_39171,(1),null);
eval(script_body_39173);


var G__39174 = cljs.core.next(seq__38226_39164__$1);
var G__39175 = null;
var G__39176 = (0);
var G__39177 = (0);
seq__38226_39151 = G__39174;
chunk__38227_39152 = G__39175;
count__38228_39153 = G__39176;
i__38229_39154 = G__39177;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__38265){
var vec__38266 = p__38265;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__38283 = arguments.length;
switch (G__38283) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__38305 = cljs.core.seq(style_keys);
var chunk__38306 = null;
var count__38307 = (0);
var i__38308 = (0);
while(true){
if((i__38308 < count__38307)){
var it = chunk__38306.cljs$core$IIndexed$_nth$arity$2(null,i__38308);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39188 = seq__38305;
var G__39189 = chunk__38306;
var G__39190 = count__38307;
var G__39191 = (i__38308 + (1));
seq__38305 = G__39188;
chunk__38306 = G__39189;
count__38307 = G__39190;
i__38308 = G__39191;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__38305);
if(temp__5720__auto__){
var seq__38305__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38305__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38305__$1);
var G__39192 = cljs.core.chunk_rest(seq__38305__$1);
var G__39193 = c__5568__auto__;
var G__39194 = cljs.core.count(c__5568__auto__);
var G__39195 = (0);
seq__38305 = G__39192;
chunk__38306 = G__39193;
count__38307 = G__39194;
i__38308 = G__39195;
continue;
} else {
var it = cljs.core.first(seq__38305__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__39196 = cljs.core.next(seq__38305__$1);
var G__39197 = null;
var G__39198 = (0);
var G__39199 = (0);
seq__38305 = G__39196;
chunk__38306 = G__39197;
count__38307 = G__39198;
i__38308 = G__39199;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38327,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38347 = k38327;
var G__38347__$1 = (((G__38347 instanceof cljs.core.Keyword))?G__38347.fqn:null);
switch (G__38347__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38327,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38353){
var vec__38354 = p__38353;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38354,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38354,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38326){
var self__ = this;
var G__38326__$1 = this;
return (new cljs.core.RecordIter((0),G__38326__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38328,other38329){
var self__ = this;
var this38328__$1 = this;
return (((!((other38329 == null)))) && ((((this38328__$1.constructor === other38329.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38328__$1.x,other38329.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38328__$1.y,other38329.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38328__$1.__extmap,other38329.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38327){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38387 = k38327;
var G__38387__$1 = (((G__38387 instanceof cljs.core.Keyword))?G__38387.fqn:null);
switch (G__38387__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38327);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38326){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38393 = cljs.core.keyword_identical_QMARK_;
var expr__38394 = k__5352__auto__;
if(cljs.core.truth_((pred__38393.cljs$core$IFn$_invoke$arity$2 ? pred__38393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__38394) : pred__38393.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__38394)))){
return (new shadow.dom.Coordinate(G__38326,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38393.cljs$core$IFn$_invoke$arity$2 ? pred__38393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__38394) : pred__38393.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__38394)))){
return (new shadow.dom.Coordinate(self__.x,G__38326,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38326),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38326){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__38326,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__38331){
var extmap__5385__auto__ = (function (){var G__38423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38331,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__38331)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38423);
} else {
return G__38423;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__38331),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__38331),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k38429,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__38462 = k38429;
var G__38462__$1 = (((G__38462 instanceof cljs.core.Keyword))?G__38462.fqn:null);
switch (G__38462__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38429,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__38479){
var vec__38480 = p__38479;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38480,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38480,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38428){
var self__ = this;
var G__38428__$1 = this;
return (new cljs.core.RecordIter((0),G__38428__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38430,other38431){
var self__ = this;
var this38430__$1 = this;
return (((!((other38431 == null)))) && ((((this38430__$1.constructor === other38431.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38430__$1.w,other38431.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38430__$1.h,other38431.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38430__$1.__extmap,other38431.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k38429){
var self__ = this;
var this__5350__auto____$1 = this;
var G__38573 = k38429;
var G__38573__$1 = (((G__38573 instanceof cljs.core.Keyword))?G__38573.fqn:null);
switch (G__38573__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38429);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__38428){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__38577 = cljs.core.keyword_identical_QMARK_;
var expr__38578 = k__5352__auto__;
if(cljs.core.truth_((pred__38577.cljs$core$IFn$_invoke$arity$2 ? pred__38577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__38578) : pred__38577.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__38578)))){
return (new shadow.dom.Size(G__38428,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38577.cljs$core$IFn$_invoke$arity$2 ? pred__38577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__38578) : pred__38577.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__38578)))){
return (new shadow.dom.Size(self__.w,G__38428,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__38428),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__38428){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__38428,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__38447){
var extmap__5385__auto__ = (function (){var G__38594 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38447,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__38447)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38594);
} else {
return G__38594;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__38447),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__38447),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__39231 = (i + (1));
var G__39232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__39231;
ret = G__39232;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38651){
var vec__38652 = p__38651;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38652,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__38664 = arguments.length;
switch (G__38664) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__39234 = ps;
var G__39235 = (i + (1));
el__$1 = G__39234;
i = G__39235;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38774 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38774,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38774,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38774,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38781_39243 = cljs.core.seq(props);
var chunk__38782_39244 = null;
var count__38783_39245 = (0);
var i__38784_39246 = (0);
while(true){
if((i__38784_39246 < count__38783_39245)){
var vec__38805_39247 = chunk__38782_39244.cljs$core$IIndexed$_nth$arity$2(null,i__38784_39246);
var k_39248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38805_39247,(0),null);
var v_39249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38805_39247,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_39248);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39248),v_39249);


var G__39250 = seq__38781_39243;
var G__39251 = chunk__38782_39244;
var G__39252 = count__38783_39245;
var G__39253 = (i__38784_39246 + (1));
seq__38781_39243 = G__39250;
chunk__38782_39244 = G__39251;
count__38783_39245 = G__39252;
i__38784_39246 = G__39253;
continue;
} else {
var temp__5720__auto___39254 = cljs.core.seq(seq__38781_39243);
if(temp__5720__auto___39254){
var seq__38781_39255__$1 = temp__5720__auto___39254;
if(cljs.core.chunked_seq_QMARK_(seq__38781_39255__$1)){
var c__5568__auto___39256 = cljs.core.chunk_first(seq__38781_39255__$1);
var G__39257 = cljs.core.chunk_rest(seq__38781_39255__$1);
var G__39258 = c__5568__auto___39256;
var G__39259 = cljs.core.count(c__5568__auto___39256);
var G__39260 = (0);
seq__38781_39243 = G__39257;
chunk__38782_39244 = G__39258;
count__38783_39245 = G__39259;
i__38784_39246 = G__39260;
continue;
} else {
var vec__38814_39261 = cljs.core.first(seq__38781_39255__$1);
var k_39262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814_39261,(0),null);
var v_39263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814_39261,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_39262);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_39262),v_39263);


var G__39265 = cljs.core.next(seq__38781_39255__$1);
var G__39266 = null;
var G__39267 = (0);
var G__39268 = (0);
seq__38781_39243 = G__39265;
chunk__38782_39244 = G__39266;
count__38783_39245 = G__39267;
i__38784_39246 = G__39268;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38823 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38823,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38823,(1),null);
var seq__38828_39272 = cljs.core.seq(node_children);
var chunk__38830_39273 = null;
var count__38831_39274 = (0);
var i__38832_39275 = (0);
while(true){
if((i__38832_39275 < count__38831_39274)){
var child_struct_39279 = chunk__38830_39273.cljs$core$IIndexed$_nth$arity$2(null,i__38832_39275);
if((!((child_struct_39279 == null)))){
if(typeof child_struct_39279 === 'string'){
var text_39280 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39280),child_struct_39279].join(''));
} else {
var children_39281 = shadow.dom.svg_node(child_struct_39279);
if(cljs.core.seq_QMARK_(children_39281)){
var seq__38871_39282 = cljs.core.seq(children_39281);
var chunk__38873_39283 = null;
var count__38874_39284 = (0);
var i__38875_39285 = (0);
while(true){
if((i__38875_39285 < count__38874_39284)){
var child_39286 = chunk__38873_39283.cljs$core$IIndexed$_nth$arity$2(null,i__38875_39285);
if(cljs.core.truth_(child_39286)){
node.appendChild(child_39286);


var G__39287 = seq__38871_39282;
var G__39288 = chunk__38873_39283;
var G__39289 = count__38874_39284;
var G__39290 = (i__38875_39285 + (1));
seq__38871_39282 = G__39287;
chunk__38873_39283 = G__39288;
count__38874_39284 = G__39289;
i__38875_39285 = G__39290;
continue;
} else {
var G__39291 = seq__38871_39282;
var G__39292 = chunk__38873_39283;
var G__39293 = count__38874_39284;
var G__39294 = (i__38875_39285 + (1));
seq__38871_39282 = G__39291;
chunk__38873_39283 = G__39292;
count__38874_39284 = G__39293;
i__38875_39285 = G__39294;
continue;
}
} else {
var temp__5720__auto___39295 = cljs.core.seq(seq__38871_39282);
if(temp__5720__auto___39295){
var seq__38871_39296__$1 = temp__5720__auto___39295;
if(cljs.core.chunked_seq_QMARK_(seq__38871_39296__$1)){
var c__5568__auto___39297 = cljs.core.chunk_first(seq__38871_39296__$1);
var G__39298 = cljs.core.chunk_rest(seq__38871_39296__$1);
var G__39299 = c__5568__auto___39297;
var G__39300 = cljs.core.count(c__5568__auto___39297);
var G__39301 = (0);
seq__38871_39282 = G__39298;
chunk__38873_39283 = G__39299;
count__38874_39284 = G__39300;
i__38875_39285 = G__39301;
continue;
} else {
var child_39302 = cljs.core.first(seq__38871_39296__$1);
if(cljs.core.truth_(child_39302)){
node.appendChild(child_39302);


var G__39303 = cljs.core.next(seq__38871_39296__$1);
var G__39304 = null;
var G__39305 = (0);
var G__39306 = (0);
seq__38871_39282 = G__39303;
chunk__38873_39283 = G__39304;
count__38874_39284 = G__39305;
i__38875_39285 = G__39306;
continue;
} else {
var G__39307 = cljs.core.next(seq__38871_39296__$1);
var G__39308 = null;
var G__39309 = (0);
var G__39310 = (0);
seq__38871_39282 = G__39307;
chunk__38873_39283 = G__39308;
count__38874_39284 = G__39309;
i__38875_39285 = G__39310;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39281);
}
}


var G__39312 = seq__38828_39272;
var G__39313 = chunk__38830_39273;
var G__39314 = count__38831_39274;
var G__39315 = (i__38832_39275 + (1));
seq__38828_39272 = G__39312;
chunk__38830_39273 = G__39313;
count__38831_39274 = G__39314;
i__38832_39275 = G__39315;
continue;
} else {
var G__39316 = seq__38828_39272;
var G__39317 = chunk__38830_39273;
var G__39318 = count__38831_39274;
var G__39319 = (i__38832_39275 + (1));
seq__38828_39272 = G__39316;
chunk__38830_39273 = G__39317;
count__38831_39274 = G__39318;
i__38832_39275 = G__39319;
continue;
}
} else {
var temp__5720__auto___39320 = cljs.core.seq(seq__38828_39272);
if(temp__5720__auto___39320){
var seq__38828_39321__$1 = temp__5720__auto___39320;
if(cljs.core.chunked_seq_QMARK_(seq__38828_39321__$1)){
var c__5568__auto___39322 = cljs.core.chunk_first(seq__38828_39321__$1);
var G__39323 = cljs.core.chunk_rest(seq__38828_39321__$1);
var G__39324 = c__5568__auto___39322;
var G__39325 = cljs.core.count(c__5568__auto___39322);
var G__39326 = (0);
seq__38828_39272 = G__39323;
chunk__38830_39273 = G__39324;
count__38831_39274 = G__39325;
i__38832_39275 = G__39326;
continue;
} else {
var child_struct_39327 = cljs.core.first(seq__38828_39321__$1);
if((!((child_struct_39327 == null)))){
if(typeof child_struct_39327 === 'string'){
var text_39328 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_39328),child_struct_39327].join(''));
} else {
var children_39329 = shadow.dom.svg_node(child_struct_39327);
if(cljs.core.seq_QMARK_(children_39329)){
var seq__38879_39330 = cljs.core.seq(children_39329);
var chunk__38881_39331 = null;
var count__38882_39332 = (0);
var i__38883_39333 = (0);
while(true){
if((i__38883_39333 < count__38882_39332)){
var child_39334 = chunk__38881_39331.cljs$core$IIndexed$_nth$arity$2(null,i__38883_39333);
if(cljs.core.truth_(child_39334)){
node.appendChild(child_39334);


var G__39335 = seq__38879_39330;
var G__39336 = chunk__38881_39331;
var G__39337 = count__38882_39332;
var G__39338 = (i__38883_39333 + (1));
seq__38879_39330 = G__39335;
chunk__38881_39331 = G__39336;
count__38882_39332 = G__39337;
i__38883_39333 = G__39338;
continue;
} else {
var G__39339 = seq__38879_39330;
var G__39340 = chunk__38881_39331;
var G__39341 = count__38882_39332;
var G__39342 = (i__38883_39333 + (1));
seq__38879_39330 = G__39339;
chunk__38881_39331 = G__39340;
count__38882_39332 = G__39341;
i__38883_39333 = G__39342;
continue;
}
} else {
var temp__5720__auto___39343__$1 = cljs.core.seq(seq__38879_39330);
if(temp__5720__auto___39343__$1){
var seq__38879_39344__$1 = temp__5720__auto___39343__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38879_39344__$1)){
var c__5568__auto___39345 = cljs.core.chunk_first(seq__38879_39344__$1);
var G__39346 = cljs.core.chunk_rest(seq__38879_39344__$1);
var G__39347 = c__5568__auto___39345;
var G__39348 = cljs.core.count(c__5568__auto___39345);
var G__39349 = (0);
seq__38879_39330 = G__39346;
chunk__38881_39331 = G__39347;
count__38882_39332 = G__39348;
i__38883_39333 = G__39349;
continue;
} else {
var child_39350 = cljs.core.first(seq__38879_39344__$1);
if(cljs.core.truth_(child_39350)){
node.appendChild(child_39350);


var G__39351 = cljs.core.next(seq__38879_39344__$1);
var G__39352 = null;
var G__39353 = (0);
var G__39354 = (0);
seq__38879_39330 = G__39351;
chunk__38881_39331 = G__39352;
count__38882_39332 = G__39353;
i__38883_39333 = G__39354;
continue;
} else {
var G__39355 = cljs.core.next(seq__38879_39344__$1);
var G__39356 = null;
var G__39357 = (0);
var G__39358 = (0);
seq__38879_39330 = G__39355;
chunk__38881_39331 = G__39356;
count__38882_39332 = G__39357;
i__38883_39333 = G__39358;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_39329);
}
}


var G__39364 = cljs.core.next(seq__38828_39321__$1);
var G__39365 = null;
var G__39366 = (0);
var G__39367 = (0);
seq__38828_39272 = G__39364;
chunk__38830_39273 = G__39365;
count__38831_39274 = G__39366;
i__38832_39275 = G__39367;
continue;
} else {
var G__39368 = cljs.core.next(seq__38828_39321__$1);
var G__39369 = null;
var G__39370 = (0);
var G__39371 = (0);
seq__38828_39272 = G__39368;
chunk__38830_39273 = G__39369;
count__38831_39274 = G__39370;
i__38832_39275 = G__39371;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39374 = arguments.length;
var i__5770__auto___39375 = (0);
while(true){
if((i__5770__auto___39375 < len__5769__auto___39374)){
args__5775__auto__.push((arguments[i__5770__auto___39375]));

var G__39376 = (i__5770__auto___39375 + (1));
i__5770__auto___39375 = G__39376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38899){
var G__38900 = cljs.core.first(seq38899);
var seq38899__$1 = cljs.core.next(seq38899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38900,seq38899__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38906 = arguments.length;
switch (G__38906) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33238__auto___39382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_38912){
var state_val_38913 = (state_38912[(1)]);
if((state_val_38913 === (1))){
var state_38912__$1 = state_38912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38912__$1,(2),once_or_cleanup);
} else {
if((state_val_38913 === (2))){
var inst_38909 = (state_38912[(2)]);
var inst_38910 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38912__$1 = (function (){var statearr_38915 = state_38912;
(statearr_38915[(7)] = inst_38909);

return statearr_38915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38912__$1,inst_38910);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32668__auto__ = null;
var shadow$dom$state_machine__32668__auto____0 = (function (){
var statearr_38916 = [null,null,null,null,null,null,null,null];
(statearr_38916[(0)] = shadow$dom$state_machine__32668__auto__);

(statearr_38916[(1)] = (1));

return statearr_38916;
});
var shadow$dom$state_machine__32668__auto____1 = (function (state_38912){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_38912);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e38917){var ex__32671__auto__ = e38917;
var statearr_38918_39386 = state_38912;
(statearr_38918_39386[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_38912[(4)]))){
var statearr_38919_39387 = state_38912;
(statearr_38919_39387[(1)] = cljs.core.first((state_38912[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39388 = state_38912;
state_38912 = G__39388;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
shadow$dom$state_machine__32668__auto__ = function(state_38912){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32668__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32668__auto____1.call(this,state_38912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32668__auto____0;
shadow$dom$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32668__auto____1;
return shadow$dom$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_38922 = f__33239__auto__();
(statearr_38922[(6)] = c__33238__auto___39382);

return statearr_38922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
