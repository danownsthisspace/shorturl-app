goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33349 = arguments.length;
switch (G__33349) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33356 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33356 = (function (f,blockable,meta33357){
this.f = f;
this.blockable = blockable;
this.meta33357 = meta33357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33358,meta33357__$1){
var self__ = this;
var _33358__$1 = this;
return (new cljs.core.async.t_cljs$core$async33356(self__.f,self__.blockable,meta33357__$1));
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33358){
var self__ = this;
var _33358__$1 = this;
return self__.meta33357;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33357","meta33357",700947155,null)], null);
}));

(cljs.core.async.t_cljs$core$async33356.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33356");

(cljs.core.async.t_cljs$core$async33356.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33356");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33356.
 */
cljs.core.async.__GT_t_cljs$core$async33356 = (function cljs$core$async$__GT_t_cljs$core$async33356(f__$1,blockable__$1,meta33357){
return (new cljs.core.async.t_cljs$core$async33356(f__$1,blockable__$1,meta33357));
});

}

return (new cljs.core.async.t_cljs$core$async33356(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33432 = arguments.length;
switch (G__33432) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33470 = arguments.length;
switch (G__33470) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33535 = arguments.length;
switch (G__33535) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37387 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37387) : fn1.call(null,val_37387));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37387) : fn1.call(null,val_37387));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33583 = arguments.length;
switch (G__33583) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___37405 = n;
var x_37406 = (0);
while(true){
if((x_37406 < n__5636__auto___37405)){
(a[x_37406] = x_37406);

var G__37407 = (x_37406 + (1));
x_37406 = G__37407;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33615 = (function (flag,meta33616){
this.flag = flag;
this.meta33616 = meta33616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33617,meta33616__$1){
var self__ = this;
var _33617__$1 = this;
return (new cljs.core.async.t_cljs$core$async33615(self__.flag,meta33616__$1));
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33617){
var self__ = this;
var _33617__$1 = this;
return self__.meta33616;
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33616","meta33616",-1595745044,null)], null);
}));

(cljs.core.async.t_cljs$core$async33615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33615");

(cljs.core.async.t_cljs$core$async33615.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33615.
 */
cljs.core.async.__GT_t_cljs$core$async33615 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33615(flag__$1,meta33616){
return (new cljs.core.async.t_cljs$core$async33615(flag__$1,meta33616));
});

}

return (new cljs.core.async.t_cljs$core$async33615(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33637 = (function (flag,cb,meta33638){
this.flag = flag;
this.cb = cb;
this.meta33638 = meta33638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33639,meta33638__$1){
var self__ = this;
var _33639__$1 = this;
return (new cljs.core.async.t_cljs$core$async33637(self__.flag,self__.cb,meta33638__$1));
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33639){
var self__ = this;
var _33639__$1 = this;
return self__.meta33638;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33638","meta33638",484244953,null)], null);
}));

(cljs.core.async.t_cljs$core$async33637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33637");

(cljs.core.async.t_cljs$core$async33637.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33637.
 */
cljs.core.async.__GT_t_cljs$core$async33637 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33637(flag__$1,cb__$1,meta33638){
return (new cljs.core.async.t_cljs$core$async33637(flag__$1,cb__$1,meta33638));
});

}

return (new cljs.core.async.t_cljs$core$async33637(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33664_SHARP_){
var G__33672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33664_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33672) : fret.call(null,G__33672));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33665_SHARP_){
var G__33676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33665_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33676) : fret.call(null,G__33676));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37430 = (i + (1));
i = G__37430;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37436 = arguments.length;
var i__5770__auto___37438 = (0);
while(true){
if((i__5770__auto___37438 < len__5769__auto___37436)){
args__5775__auto__.push((arguments[i__5770__auto___37438]));

var G__37439 = (i__5770__auto___37438 + (1));
i__5770__auto___37438 = G__37439;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33691){
var map__33692 = p__33691;
var map__33692__$1 = cljs.core.__destructure_map(map__33692);
var opts = map__33692__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33689){
var G__33690 = cljs.core.first(seq33689);
var seq33689__$1 = cljs.core.next(seq33689);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33690,seq33689__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33717 = arguments.length;
switch (G__33717) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33238__auto___37450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_33761){
var state_val_33763 = (state_33761[(1)]);
if((state_val_33763 === (7))){
var inst_33753 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33771_37452 = state_33761__$1;
(statearr_33771_37452[(2)] = inst_33753);

(statearr_33771_37452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (1))){
var state_33761__$1 = state_33761;
var statearr_33774_37454 = state_33761__$1;
(statearr_33774_37454[(2)] = null);

(statearr_33774_37454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (4))){
var inst_33734 = (state_33761[(7)]);
var inst_33734__$1 = (state_33761[(2)]);
var inst_33737 = (inst_33734__$1 == null);
var state_33761__$1 = (function (){var statearr_33787 = state_33761;
(statearr_33787[(7)] = inst_33734__$1);

return statearr_33787;
})();
if(cljs.core.truth_(inst_33737)){
var statearr_33788_37462 = state_33761__$1;
(statearr_33788_37462[(1)] = (5));

} else {
var statearr_33789_37463 = state_33761__$1;
(statearr_33789_37463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (13))){
var state_33761__$1 = state_33761;
var statearr_33790_37466 = state_33761__$1;
(statearr_33790_37466[(2)] = null);

(statearr_33790_37466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (6))){
var inst_33734 = (state_33761[(7)]);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33761__$1,(11),to,inst_33734);
} else {
if((state_val_33763 === (3))){
var inst_33758 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33761__$1,inst_33758);
} else {
if((state_val_33763 === (12))){
var state_33761__$1 = state_33761;
var statearr_33800_37475 = state_33761__$1;
(statearr_33800_37475[(2)] = null);

(statearr_33800_37475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (2))){
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33761__$1,(4),from);
} else {
if((state_val_33763 === (11))){
var inst_33746 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
if(cljs.core.truth_(inst_33746)){
var statearr_33808_37489 = state_33761__$1;
(statearr_33808_37489[(1)] = (12));

} else {
var statearr_33809_37490 = state_33761__$1;
(statearr_33809_37490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (9))){
var state_33761__$1 = state_33761;
var statearr_33810_37493 = state_33761__$1;
(statearr_33810_37493[(2)] = null);

(statearr_33810_37493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (5))){
var state_33761__$1 = state_33761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33819_37497 = state_33761__$1;
(statearr_33819_37497[(1)] = (8));

} else {
var statearr_33822_37498 = state_33761__$1;
(statearr_33822_37498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (14))){
var inst_33751 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33825_37504 = state_33761__$1;
(statearr_33825_37504[(2)] = inst_33751);

(statearr_33825_37504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (10))){
var inst_33743 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33829_37505 = state_33761__$1;
(statearr_33829_37505[(2)] = inst_33743);

(statearr_33829_37505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (8))){
var inst_33740 = cljs.core.async.close_BANG_(to);
var state_33761__$1 = state_33761;
var statearr_33831_37510 = state_33761__$1;
(statearr_33831_37510[(2)] = inst_33740);

(statearr_33831_37510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_33833 = [null,null,null,null,null,null,null,null];
(statearr_33833[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_33833[(1)] = (1));

return statearr_33833;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_33761){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_33761);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e33837){var ex__32671__auto__ = e33837;
var statearr_33838_37518 = state_33761;
(statearr_33838_37518[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_33761[(4)]))){
var statearr_33841_37519 = state_33761;
(statearr_33841_37519[(1)] = cljs.core.first((state_33761[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37520 = state_33761;
state_33761 = G__37520;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_33761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_33761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_33855 = f__33239__auto__();
(statearr_33855[(6)] = c__33238__auto___37450);

return statearr_33855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33868){
var vec__33871 = p__33868;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33871,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33871,(1),null);
var job = vec__33871;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33238__auto___37527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_33881){
var state_val_33882 = (state_33881[(1)]);
if((state_val_33882 === (1))){
var state_33881__$1 = state_33881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33881__$1,(2),res,v);
} else {
if((state_val_33882 === (2))){
var inst_33878 = (state_33881[(2)]);
var inst_33879 = cljs.core.async.close_BANG_(res);
var state_33881__$1 = (function (){var statearr_33889 = state_33881;
(statearr_33889[(7)] = inst_33878);

return statearr_33889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33881__$1,inst_33879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_33893 = [null,null,null,null,null,null,null,null];
(statearr_33893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__);

(statearr_33893[(1)] = (1));

return statearr_33893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1 = (function (state_33881){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_33881);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e33897){var ex__32671__auto__ = e33897;
var statearr_33899_37535 = state_33881;
(statearr_33899_37535[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_33881[(4)]))){
var statearr_33900_37540 = state_33881;
(statearr_33900_37540[(1)] = cljs.core.first((state_33881[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37543 = state_33881;
state_33881 = G__37543;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = function(state_33881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1.call(this,state_33881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_33904 = f__33239__auto__();
(statearr_33904[(6)] = c__33238__auto___37527);

return statearr_33904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33910){
var vec__33911 = p__33910;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33911,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33911,(1),null);
var job = vec__33911;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___37545 = n;
var __37547 = (0);
while(true){
if((__37547 < n__5636__auto___37545)){
var G__33919_37549 = type;
var G__33919_37550__$1 = (((G__33919_37549 instanceof cljs.core.Keyword))?G__33919_37549.fqn:null);
switch (G__33919_37550__$1) {
case "compute":
var c__33238__auto___37554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37547,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = ((function (__37547,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function (state_33939){
var state_val_33940 = (state_33939[(1)]);
if((state_val_33940 === (1))){
var state_33939__$1 = state_33939;
var statearr_33947_37561 = state_33939__$1;
(statearr_33947_37561[(2)] = null);

(statearr_33947_37561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (2))){
var state_33939__$1 = state_33939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33939__$1,(4),jobs);
} else {
if((state_val_33940 === (3))){
var inst_33935 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33939__$1,inst_33935);
} else {
if((state_val_33940 === (4))){
var inst_33926 = (state_33939[(2)]);
var inst_33927 = process__$1(inst_33926);
var state_33939__$1 = state_33939;
if(cljs.core.truth_(inst_33927)){
var statearr_33962_37565 = state_33939__$1;
(statearr_33962_37565[(1)] = (5));

} else {
var statearr_33964_37566 = state_33939__$1;
(statearr_33964_37566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (5))){
var state_33939__$1 = state_33939;
var statearr_33965_37567 = state_33939__$1;
(statearr_33965_37567[(2)] = null);

(statearr_33965_37567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (6))){
var state_33939__$1 = state_33939;
var statearr_33967_37568 = state_33939__$1;
(statearr_33967_37568[(2)] = null);

(statearr_33967_37568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33940 === (7))){
var inst_33933 = (state_33939[(2)]);
var state_33939__$1 = state_33939;
var statearr_33971_37569 = state_33939__$1;
(statearr_33971_37569[(2)] = inst_33933);

(statearr_33971_37569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37547,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
;
return ((function (__37547,switch__32667__auto__,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_33981 = [null,null,null,null,null,null,null];
(statearr_33981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__);

(statearr_33981[(1)] = (1));

return statearr_33981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1 = (function (state_33939){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_33939);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e33982){var ex__32671__auto__ = e33982;
var statearr_33984_37573 = state_33939;
(statearr_33984_37573[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_33939[(4)]))){
var statearr_33988_37574 = state_33939;
(statearr_33988_37574[(1)] = cljs.core.first((state_33939[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37579 = state_33939;
state_33939 = G__37579;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = function(state_33939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1.call(this,state_33939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__;
})()
;})(__37547,switch__32667__auto__,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
})();
var state__33240__auto__ = (function (){var statearr_33989 = f__33239__auto__();
(statearr_33989[(6)] = c__33238__auto___37554);

return statearr_33989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
});})(__37547,c__33238__auto___37554,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
);


break;
case "async":
var c__33238__auto___37581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37547,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = ((function (__37547,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function (state_34012){
var state_val_34013 = (state_34012[(1)]);
if((state_val_34013 === (1))){
var state_34012__$1 = state_34012;
var statearr_34019_37588 = state_34012__$1;
(statearr_34019_37588[(2)] = null);

(statearr_34019_37588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (2))){
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34012__$1,(4),jobs);
} else {
if((state_val_34013 === (3))){
var inst_34010 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34012__$1,inst_34010);
} else {
if((state_val_34013 === (4))){
var inst_34002 = (state_34012[(2)]);
var inst_34003 = async(inst_34002);
var state_34012__$1 = state_34012;
if(cljs.core.truth_(inst_34003)){
var statearr_34025_37604 = state_34012__$1;
(statearr_34025_37604[(1)] = (5));

} else {
var statearr_34026_37605 = state_34012__$1;
(statearr_34026_37605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (5))){
var state_34012__$1 = state_34012;
var statearr_34028_37609 = state_34012__$1;
(statearr_34028_37609[(2)] = null);

(statearr_34028_37609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (6))){
var state_34012__$1 = state_34012;
var statearr_34030_37616 = state_34012__$1;
(statearr_34030_37616[(2)] = null);

(statearr_34030_37616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (7))){
var inst_34008 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34031_37618 = state_34012__$1;
(statearr_34031_37618[(2)] = inst_34008);

(statearr_34031_37618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37547,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
;
return ((function (__37547,switch__32667__auto__,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_34034 = [null,null,null,null,null,null,null];
(statearr_34034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__);

(statearr_34034[(1)] = (1));

return statearr_34034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1 = (function (state_34012){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34012);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34039){var ex__32671__auto__ = e34039;
var statearr_34044_37626 = state_34012;
(statearr_34044_37626[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34012[(4)]))){
var statearr_34045_37627 = state_34012;
(statearr_34045_37627[(1)] = cljs.core.first((state_34012[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37629 = state_34012;
state_34012 = G__37629;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__;
})()
;})(__37547,switch__32667__auto__,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
})();
var state__33240__auto__ = (function (){var statearr_34050 = f__33239__auto__();
(statearr_34050[(6)] = c__33238__auto___37581);

return statearr_34050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
});})(__37547,c__33238__auto___37581,G__33919_37549,G__33919_37550__$1,n__5636__auto___37545,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33919_37550__$1)].join('')));

}

var G__37632 = (__37547 + (1));
__37547 = G__37632;
continue;
} else {
}
break;
}

var c__33238__auto___37633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34086){
var state_val_34087 = (state_34086[(1)]);
if((state_val_34087 === (7))){
var inst_34082 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34100_37634 = state_34086__$1;
(statearr_34100_37634[(2)] = inst_34082);

(statearr_34100_37634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (1))){
var state_34086__$1 = state_34086;
var statearr_34101_37636 = state_34086__$1;
(statearr_34101_37636[(2)] = null);

(statearr_34101_37636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (4))){
var inst_34059 = (state_34086[(7)]);
var inst_34059__$1 = (state_34086[(2)]);
var inst_34061 = (inst_34059__$1 == null);
var state_34086__$1 = (function (){var statearr_34102 = state_34086;
(statearr_34102[(7)] = inst_34059__$1);

return statearr_34102;
})();
if(cljs.core.truth_(inst_34061)){
var statearr_34103_37639 = state_34086__$1;
(statearr_34103_37639[(1)] = (5));

} else {
var statearr_34104_37640 = state_34086__$1;
(statearr_34104_37640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (6))){
var inst_34059 = (state_34086[(7)]);
var inst_34066 = (state_34086[(8)]);
var inst_34066__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34070 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34071 = [inst_34059,inst_34066__$1];
var inst_34072 = (new cljs.core.PersistentVector(null,2,(5),inst_34070,inst_34071,null));
var state_34086__$1 = (function (){var statearr_34106 = state_34086;
(statearr_34106[(8)] = inst_34066__$1);

return statearr_34106;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34086__$1,(8),jobs,inst_34072);
} else {
if((state_val_34087 === (3))){
var inst_34084 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34086__$1,inst_34084);
} else {
if((state_val_34087 === (2))){
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34086__$1,(4),from);
} else {
if((state_val_34087 === (9))){
var inst_34076 = (state_34086[(2)]);
var state_34086__$1 = (function (){var statearr_34111 = state_34086;
(statearr_34111[(9)] = inst_34076);

return statearr_34111;
})();
var statearr_34112_37651 = state_34086__$1;
(statearr_34112_37651[(2)] = null);

(statearr_34112_37651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (5))){
var inst_34064 = cljs.core.async.close_BANG_(jobs);
var state_34086__$1 = state_34086;
var statearr_34114_37654 = state_34086__$1;
(statearr_34114_37654[(2)] = inst_34064);

(statearr_34114_37654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (8))){
var inst_34066 = (state_34086[(8)]);
var inst_34074 = (state_34086[(2)]);
var state_34086__$1 = (function (){var statearr_34118 = state_34086;
(statearr_34118[(10)] = inst_34074);

return statearr_34118;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34086__$1,(9),results,inst_34066);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_34119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__);

(statearr_34119[(1)] = (1));

return statearr_34119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1 = (function (state_34086){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34086);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34120){var ex__32671__auto__ = e34120;
var statearr_34121_37664 = state_34086;
(statearr_34121_37664[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34086[(4)]))){
var statearr_34122_37665 = state_34086;
(statearr_34122_37665[(1)] = cljs.core.first((state_34086[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37666 = state_34086;
state_34086 = G__37666;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34129 = f__33239__auto__();
(statearr_34129[(6)] = c__33238__auto___37633);

return statearr_34129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


var c__33238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34181){
var state_val_34182 = (state_34181[(1)]);
if((state_val_34182 === (7))){
var inst_34175 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34191_37670 = state_34181__$1;
(statearr_34191_37670[(2)] = inst_34175);

(statearr_34191_37670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (20))){
var state_34181__$1 = state_34181;
var statearr_34193_37675 = state_34181__$1;
(statearr_34193_37675[(2)] = null);

(statearr_34193_37675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (1))){
var state_34181__$1 = state_34181;
var statearr_34195_37676 = state_34181__$1;
(statearr_34195_37676[(2)] = null);

(statearr_34195_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (4))){
var inst_34134 = (state_34181[(7)]);
var inst_34134__$1 = (state_34181[(2)]);
var inst_34139 = (inst_34134__$1 == null);
var state_34181__$1 = (function (){var statearr_34198 = state_34181;
(statearr_34198[(7)] = inst_34134__$1);

return statearr_34198;
})();
if(cljs.core.truth_(inst_34139)){
var statearr_34201_37680 = state_34181__$1;
(statearr_34201_37680[(1)] = (5));

} else {
var statearr_34204_37681 = state_34181__$1;
(statearr_34204_37681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (15))){
var inst_34153 = (state_34181[(8)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34181__$1,(18),to,inst_34153);
} else {
if((state_val_34182 === (21))){
var inst_34168 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34207_37685 = state_34181__$1;
(statearr_34207_37685[(2)] = inst_34168);

(statearr_34207_37685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (13))){
var inst_34171 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34214 = state_34181;
(statearr_34214[(9)] = inst_34171);

return statearr_34214;
})();
var statearr_34215_37690 = state_34181__$1;
(statearr_34215_37690[(2)] = null);

(statearr_34215_37690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (6))){
var inst_34134 = (state_34181[(7)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34181__$1,(11),inst_34134);
} else {
if((state_val_34182 === (17))){
var inst_34162 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
if(cljs.core.truth_(inst_34162)){
var statearr_34220_37694 = state_34181__$1;
(statearr_34220_37694[(1)] = (19));

} else {
var statearr_34222_37695 = state_34181__$1;
(statearr_34222_37695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (3))){
var inst_34178 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34181__$1,inst_34178);
} else {
if((state_val_34182 === (12))){
var inst_34149 = (state_34181[(10)]);
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34181__$1,(14),inst_34149);
} else {
if((state_val_34182 === (2))){
var state_34181__$1 = state_34181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34181__$1,(4),results);
} else {
if((state_val_34182 === (19))){
var state_34181__$1 = state_34181;
var statearr_34227_37703 = state_34181__$1;
(statearr_34227_37703[(2)] = null);

(statearr_34227_37703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (11))){
var inst_34149 = (state_34181[(2)]);
var state_34181__$1 = (function (){var statearr_34230 = state_34181;
(statearr_34230[(10)] = inst_34149);

return statearr_34230;
})();
var statearr_34234_37708 = state_34181__$1;
(statearr_34234_37708[(2)] = null);

(statearr_34234_37708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (9))){
var state_34181__$1 = state_34181;
var statearr_34236_37711 = state_34181__$1;
(statearr_34236_37711[(2)] = null);

(statearr_34236_37711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (5))){
var state_34181__$1 = state_34181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34241_37713 = state_34181__$1;
(statearr_34241_37713[(1)] = (8));

} else {
var statearr_34242_37715 = state_34181__$1;
(statearr_34242_37715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (14))){
var inst_34155 = (state_34181[(11)]);
var inst_34153 = (state_34181[(8)]);
var inst_34153__$1 = (state_34181[(2)]);
var inst_34154 = (inst_34153__$1 == null);
var inst_34155__$1 = cljs.core.not(inst_34154);
var state_34181__$1 = (function (){var statearr_34245 = state_34181;
(statearr_34245[(11)] = inst_34155__$1);

(statearr_34245[(8)] = inst_34153__$1);

return statearr_34245;
})();
if(inst_34155__$1){
var statearr_34247_37720 = state_34181__$1;
(statearr_34247_37720[(1)] = (15));

} else {
var statearr_34250_37721 = state_34181__$1;
(statearr_34250_37721[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (16))){
var inst_34155 = (state_34181[(11)]);
var state_34181__$1 = state_34181;
var statearr_34252_37723 = state_34181__$1;
(statearr_34252_37723[(2)] = inst_34155);

(statearr_34252_37723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (10))){
var inst_34146 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34253_37729 = state_34181__$1;
(statearr_34253_37729[(2)] = inst_34146);

(statearr_34253_37729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (18))){
var inst_34159 = (state_34181[(2)]);
var state_34181__$1 = state_34181;
var statearr_34255_37730 = state_34181__$1;
(statearr_34255_37730[(2)] = inst_34159);

(statearr_34255_37730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34182 === (8))){
var inst_34143 = cljs.core.async.close_BANG_(to);
var state_34181__$1 = state_34181;
var statearr_34260_37731 = state_34181__$1;
(statearr_34260_37731[(2)] = inst_34143);

(statearr_34260_37731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_34265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__);

(statearr_34265[(1)] = (1));

return statearr_34265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1 = (function (state_34181){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34181);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34266){var ex__32671__auto__ = e34266;
var statearr_34267_37739 = state_34181;
(statearr_34267_37739[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34181[(4)]))){
var statearr_34268_37740 = state_34181;
(statearr_34268_37740[(1)] = cljs.core.first((state_34181[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37742 = state_34181;
state_34181 = G__37742;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__ = function(state_34181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1.call(this,state_34181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34276 = f__33239__auto__();
(statearr_34276[(6)] = c__33238__auto__);

return statearr_34276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

return c__33238__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34281 = arguments.length;
switch (G__34281) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34346 = arguments.length;
switch (G__34346) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33238__auto___37776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34408){
var state_val_34409 = (state_34408[(1)]);
if((state_val_34409 === (7))){
var inst_34403 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34414_37777 = state_34408__$1;
(statearr_34414_37777[(2)] = inst_34403);

(statearr_34414_37777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (1))){
var state_34408__$1 = state_34408;
var statearr_34417_37782 = state_34408__$1;
(statearr_34417_37782[(2)] = null);

(statearr_34417_37782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (4))){
var inst_34382 = (state_34408[(7)]);
var inst_34382__$1 = (state_34408[(2)]);
var inst_34383 = (inst_34382__$1 == null);
var state_34408__$1 = (function (){var statearr_34420 = state_34408;
(statearr_34420[(7)] = inst_34382__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34421_37783 = state_34408__$1;
(statearr_34421_37783[(1)] = (5));

} else {
var statearr_34422_37784 = state_34408__$1;
(statearr_34422_37784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (13))){
var state_34408__$1 = state_34408;
var statearr_34427_37786 = state_34408__$1;
(statearr_34427_37786[(2)] = null);

(statearr_34427_37786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (6))){
var inst_34382 = (state_34408[(7)]);
var inst_34388 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34382) : p.call(null,inst_34382));
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34388)){
var statearr_34428_37790 = state_34408__$1;
(statearr_34428_37790[(1)] = (9));

} else {
var statearr_34430_37794 = state_34408__$1;
(statearr_34430_37794[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (3))){
var inst_34406 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34408__$1,inst_34406);
} else {
if((state_val_34409 === (12))){
var state_34408__$1 = state_34408;
var statearr_34439_37797 = state_34408__$1;
(statearr_34439_37797[(2)] = null);

(statearr_34439_37797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (2))){
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34408__$1,(4),ch);
} else {
if((state_val_34409 === (11))){
var inst_34382 = (state_34408[(7)]);
var inst_34394 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34408__$1,(8),inst_34394,inst_34382);
} else {
if((state_val_34409 === (9))){
var state_34408__$1 = state_34408;
var statearr_34445_37808 = state_34408__$1;
(statearr_34445_37808[(2)] = tc);

(statearr_34445_37808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (5))){
var inst_34385 = cljs.core.async.close_BANG_(tc);
var inst_34386 = cljs.core.async.close_BANG_(fc);
var state_34408__$1 = (function (){var statearr_34447 = state_34408;
(statearr_34447[(8)] = inst_34385);

return statearr_34447;
})();
var statearr_34448_37810 = state_34408__$1;
(statearr_34448_37810[(2)] = inst_34386);

(statearr_34448_37810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (14))){
var inst_34401 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
var statearr_34452_37816 = state_34408__$1;
(statearr_34452_37816[(2)] = inst_34401);

(statearr_34452_37816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (10))){
var state_34408__$1 = state_34408;
var statearr_34454_37820 = state_34408__$1;
(statearr_34454_37820[(2)] = fc);

(statearr_34454_37820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34409 === (8))){
var inst_34396 = (state_34408[(2)]);
var state_34408__$1 = state_34408;
if(cljs.core.truth_(inst_34396)){
var statearr_34457_37821 = state_34408__$1;
(statearr_34457_37821[(1)] = (12));

} else {
var statearr_34458_37824 = state_34408__$1;
(statearr_34458_37824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_34461 = [null,null,null,null,null,null,null,null,null];
(statearr_34461[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_34461[(1)] = (1));

return statearr_34461;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_34408){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34408);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34462){var ex__32671__auto__ = e34462;
var statearr_34463_37825 = state_34408;
(statearr_34463_37825[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34408[(4)]))){
var statearr_34465_37826 = state_34408;
(statearr_34465_37826[(1)] = cljs.core.first((state_34408[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37831 = state_34408;
state_34408 = G__37831;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_34408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_34408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34466 = f__33239__auto__();
(statearr_34466[(6)] = c__33238__auto___37776);

return statearr_34466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34502_37835 = state_34498__$1;
(statearr_34502_37835[(2)] = inst_34494);

(statearr_34502_37835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (1))){
var inst_34473 = init;
var inst_34474 = inst_34473;
var state_34498__$1 = (function (){var statearr_34504 = state_34498;
(statearr_34504[(7)] = inst_34474);

return statearr_34504;
})();
var statearr_34505_37839 = state_34498__$1;
(statearr_34505_37839[(2)] = null);

(statearr_34505_37839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (4))){
var inst_34477 = (state_34498[(8)]);
var inst_34477__$1 = (state_34498[(2)]);
var inst_34479 = (inst_34477__$1 == null);
var state_34498__$1 = (function (){var statearr_34506 = state_34498;
(statearr_34506[(8)] = inst_34477__$1);

return statearr_34506;
})();
if(cljs.core.truth_(inst_34479)){
var statearr_34507_37845 = state_34498__$1;
(statearr_34507_37845[(1)] = (5));

} else {
var statearr_34508_37846 = state_34498__$1;
(statearr_34508_37846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var inst_34477 = (state_34498[(8)]);
var inst_34484 = (state_34498[(9)]);
var inst_34474 = (state_34498[(7)]);
var inst_34484__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34474,inst_34477) : f.call(null,inst_34474,inst_34477));
var inst_34485 = cljs.core.reduced_QMARK_(inst_34484__$1);
var state_34498__$1 = (function (){var statearr_34514 = state_34498;
(statearr_34514[(9)] = inst_34484__$1);

return statearr_34514;
})();
if(inst_34485){
var statearr_34516_37849 = state_34498__$1;
(statearr_34516_37849[(1)] = (8));

} else {
var statearr_34517_37850 = state_34498__$1;
(statearr_34517_37850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34498__$1,(4),ch);
} else {
if((state_val_34499 === (9))){
var inst_34484 = (state_34498[(9)]);
var inst_34474 = inst_34484;
var state_34498__$1 = (function (){var statearr_34526 = state_34498;
(statearr_34526[(7)] = inst_34474);

return statearr_34526;
})();
var statearr_34528_37851 = state_34498__$1;
(statearr_34528_37851[(2)] = null);

(statearr_34528_37851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var inst_34474 = (state_34498[(7)]);
var state_34498__$1 = state_34498;
var statearr_34536_37852 = state_34498__$1;
(statearr_34536_37852[(2)] = inst_34474);

(statearr_34536_37852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (10))){
var inst_34492 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34537_37853 = state_34498__$1;
(statearr_34537_37853[(2)] = inst_34492);

(statearr_34537_37853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (8))){
var inst_34484 = (state_34498[(9)]);
var inst_34488 = cljs.core.deref(inst_34484);
var state_34498__$1 = state_34498;
var statearr_34539_37855 = state_34498__$1;
(statearr_34539_37855[(2)] = inst_34488);

(statearr_34539_37855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32668__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32668__auto____0 = (function (){
var statearr_34541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34541[(0)] = cljs$core$async$reduce_$_state_machine__32668__auto__);

(statearr_34541[(1)] = (1));

return statearr_34541;
});
var cljs$core$async$reduce_$_state_machine__32668__auto____1 = (function (state_34498){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34498);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34543){var ex__32671__auto__ = e34543;
var statearr_34545_37862 = state_34498;
(statearr_34545_37862[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34498[(4)]))){
var statearr_34548_37865 = state_34498;
(statearr_34548_37865[(1)] = cljs.core.first((state_34498[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37869 = state_34498;
state_34498 = G__37869;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32668__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32668__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32668__auto____0;
cljs$core$async$reduce_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32668__auto____1;
return cljs$core$async$reduce_$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34553 = f__33239__auto__();
(statearr_34553[(6)] = c__33238__auto__);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

return c__33238__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34560){
var state_val_34561 = (state_34560[(1)]);
if((state_val_34561 === (1))){
var inst_34554 = cljs.core.async.reduce(f__$1,init,ch);
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34560__$1,(2),inst_34554);
} else {
if((state_val_34561 === (2))){
var inst_34556 = (state_34560[(2)]);
var inst_34558 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34556) : f__$1.call(null,inst_34556));
var state_34560__$1 = state_34560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34560__$1,inst_34558);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32668__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32668__auto____0 = (function (){
var statearr_34563 = [null,null,null,null,null,null,null];
(statearr_34563[(0)] = cljs$core$async$transduce_$_state_machine__32668__auto__);

(statearr_34563[(1)] = (1));

return statearr_34563;
});
var cljs$core$async$transduce_$_state_machine__32668__auto____1 = (function (state_34560){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34560);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34567){var ex__32671__auto__ = e34567;
var statearr_34568_37873 = state_34560;
(statearr_34568_37873[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34560[(4)]))){
var statearr_34569_37874 = state_34560;
(statearr_34569_37874[(1)] = cljs.core.first((state_34560[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37875 = state_34560;
state_34560 = G__37875;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32668__auto__ = function(state_34560){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32668__auto____1.call(this,state_34560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32668__auto____0;
cljs$core$async$transduce_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32668__auto____1;
return cljs$core$async$transduce_$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34577 = f__33239__auto__();
(statearr_34577[(6)] = c__33238__auto__);

return statearr_34577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

return c__33238__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34582 = arguments.length;
switch (G__34582) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_34616){
var state_val_34617 = (state_34616[(1)]);
if((state_val_34617 === (7))){
var inst_34595 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34621_37880 = state_34616__$1;
(statearr_34621_37880[(2)] = inst_34595);

(statearr_34621_37880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (1))){
var inst_34587 = cljs.core.seq(coll);
var inst_34588 = inst_34587;
var state_34616__$1 = (function (){var statearr_34626 = state_34616;
(statearr_34626[(7)] = inst_34588);

return statearr_34626;
})();
var statearr_34628_37881 = state_34616__$1;
(statearr_34628_37881[(2)] = null);

(statearr_34628_37881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (4))){
var inst_34588 = (state_34616[(7)]);
var inst_34593 = cljs.core.first(inst_34588);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34616__$1,(7),ch,inst_34593);
} else {
if((state_val_34617 === (13))){
var inst_34610 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34633_37882 = state_34616__$1;
(statearr_34633_37882[(2)] = inst_34610);

(statearr_34633_37882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (6))){
var inst_34598 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34598)){
var statearr_34637_37883 = state_34616__$1;
(statearr_34637_37883[(1)] = (8));

} else {
var statearr_34641_37884 = state_34616__$1;
(statearr_34641_37884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (3))){
var inst_34614 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34616__$1,inst_34614);
} else {
if((state_val_34617 === (12))){
var state_34616__$1 = state_34616;
var statearr_34647_37885 = state_34616__$1;
(statearr_34647_37885[(2)] = null);

(statearr_34647_37885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (2))){
var inst_34588 = (state_34616[(7)]);
var state_34616__$1 = state_34616;
if(cljs.core.truth_(inst_34588)){
var statearr_34650_37886 = state_34616__$1;
(statearr_34650_37886[(1)] = (4));

} else {
var statearr_34653_37887 = state_34616__$1;
(statearr_34653_37887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (11))){
var inst_34607 = cljs.core.async.close_BANG_(ch);
var state_34616__$1 = state_34616;
var statearr_34655_37888 = state_34616__$1;
(statearr_34655_37888[(2)] = inst_34607);

(statearr_34655_37888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (9))){
var state_34616__$1 = state_34616;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34662_37889 = state_34616__$1;
(statearr_34662_37889[(1)] = (11));

} else {
var statearr_34665_37890 = state_34616__$1;
(statearr_34665_37890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (5))){
var inst_34588 = (state_34616[(7)]);
var state_34616__$1 = state_34616;
var statearr_34667_37893 = state_34616__$1;
(statearr_34667_37893[(2)] = inst_34588);

(statearr_34667_37893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (10))){
var inst_34612 = (state_34616[(2)]);
var state_34616__$1 = state_34616;
var statearr_34672_37894 = state_34616__$1;
(statearr_34672_37894[(2)] = inst_34612);

(statearr_34672_37894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34617 === (8))){
var inst_34588 = (state_34616[(7)]);
var inst_34602 = cljs.core.next(inst_34588);
var inst_34588__$1 = inst_34602;
var state_34616__$1 = (function (){var statearr_34674 = state_34616;
(statearr_34674[(7)] = inst_34588__$1);

return statearr_34674;
})();
var statearr_34675_37898 = state_34616__$1;
(statearr_34675_37898[(2)] = null);

(statearr_34675_37898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_34681 = [null,null,null,null,null,null,null,null];
(statearr_34681[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_34681[(1)] = (1));

return statearr_34681;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_34616){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_34616);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e34685){var ex__32671__auto__ = e34685;
var statearr_34687_37903 = state_34616;
(statearr_34687_37903[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_34616[(4)]))){
var statearr_34693_37905 = state_34616;
(statearr_34693_37905[(1)] = cljs.core.first((state_34616[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37906 = state_34616;
state_34616 = G__37906;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_34616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_34616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_34703 = f__33239__auto__();
(statearr_34703[(6)] = c__33238__auto__);

return statearr_34703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

return c__33238__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34718 = arguments.length;
switch (G__34718) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37911 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37911(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37917 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37917(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37926 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37926(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37929 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37929(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34830 = (function (ch,cs,meta34831){
this.ch = ch;
this.cs = cs;
this.meta34831 = meta34831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34832,meta34831__$1){
var self__ = this;
var _34832__$1 = this;
return (new cljs.core.async.t_cljs$core$async34830(self__.ch,self__.cs,meta34831__$1));
}));

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34832){
var self__ = this;
var _34832__$1 = this;
return self__.meta34831;
}));

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34830.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34831","meta34831",148299769,null)], null);
}));

(cljs.core.async.t_cljs$core$async34830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34830");

(cljs.core.async.t_cljs$core$async34830.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34830.
 */
cljs.core.async.__GT_t_cljs$core$async34830 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34830(ch__$1,cs__$1,meta34831){
return (new cljs.core.async.t_cljs$core$async34830(ch__$1,cs__$1,meta34831));
});

}

return (new cljs.core.async.t_cljs$core$async34830(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33238__auto___37942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_35057){
var state_val_35059 = (state_35057[(1)]);
if((state_val_35059 === (7))){
var inst_35047 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35064_37948 = state_35057__$1;
(statearr_35064_37948[(2)] = inst_35047);

(statearr_35064_37948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (20))){
var inst_34910 = (state_35057[(7)]);
var inst_34929 = cljs.core.first(inst_34910);
var inst_34930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34929,(0),null);
var inst_34931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34929,(1),null);
var state_35057__$1 = (function (){var statearr_35071 = state_35057;
(statearr_35071[(8)] = inst_34930);

return statearr_35071;
})();
if(cljs.core.truth_(inst_34931)){
var statearr_35073_37953 = state_35057__$1;
(statearr_35073_37953[(1)] = (22));

} else {
var statearr_35077_37954 = state_35057__$1;
(statearr_35077_37954[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (27))){
var inst_34869 = (state_35057[(9)]);
var inst_34965 = (state_35057[(10)]);
var inst_34982 = (state_35057[(11)]);
var inst_34967 = (state_35057[(12)]);
var inst_34982__$1 = cljs.core._nth(inst_34965,inst_34967);
var inst_34985 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34982__$1,inst_34869,done);
var state_35057__$1 = (function (){var statearr_35082 = state_35057;
(statearr_35082[(11)] = inst_34982__$1);

return statearr_35082;
})();
if(cljs.core.truth_(inst_34985)){
var statearr_35083_37961 = state_35057__$1;
(statearr_35083_37961[(1)] = (30));

} else {
var statearr_35085_37962 = state_35057__$1;
(statearr_35085_37962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (1))){
var state_35057__$1 = state_35057;
var statearr_35086_37963 = state_35057__$1;
(statearr_35086_37963[(2)] = null);

(statearr_35086_37963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (24))){
var inst_34910 = (state_35057[(7)]);
var inst_34938 = (state_35057[(2)]);
var inst_34939 = cljs.core.next(inst_34910);
var inst_34882 = inst_34939;
var inst_34884 = null;
var inst_34885 = (0);
var inst_34886 = (0);
var state_35057__$1 = (function (){var statearr_35090 = state_35057;
(statearr_35090[(13)] = inst_34885);

(statearr_35090[(14)] = inst_34886);

(statearr_35090[(15)] = inst_34882);

(statearr_35090[(16)] = inst_34884);

(statearr_35090[(17)] = inst_34938);

return statearr_35090;
})();
var statearr_35092_37968 = state_35057__$1;
(statearr_35092_37968[(2)] = null);

(statearr_35092_37968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (39))){
var state_35057__$1 = state_35057;
var statearr_35108_37970 = state_35057__$1;
(statearr_35108_37970[(2)] = null);

(statearr_35108_37970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (4))){
var inst_34869 = (state_35057[(9)]);
var inst_34869__$1 = (state_35057[(2)]);
var inst_34874 = (inst_34869__$1 == null);
var state_35057__$1 = (function (){var statearr_35113 = state_35057;
(statearr_35113[(9)] = inst_34869__$1);

return statearr_35113;
})();
if(cljs.core.truth_(inst_34874)){
var statearr_35122_37972 = state_35057__$1;
(statearr_35122_37972[(1)] = (5));

} else {
var statearr_35125_37973 = state_35057__$1;
(statearr_35125_37973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (15))){
var inst_34885 = (state_35057[(13)]);
var inst_34886 = (state_35057[(14)]);
var inst_34882 = (state_35057[(15)]);
var inst_34884 = (state_35057[(16)]);
var inst_34904 = (state_35057[(2)]);
var inst_34905 = (inst_34886 + (1));
var tmp35097 = inst_34885;
var tmp35098 = inst_34882;
var tmp35099 = inst_34884;
var inst_34882__$1 = tmp35098;
var inst_34884__$1 = tmp35099;
var inst_34885__$1 = tmp35097;
var inst_34886__$1 = inst_34905;
var state_35057__$1 = (function (){var statearr_35135 = state_35057;
(statearr_35135[(13)] = inst_34885__$1);

(statearr_35135[(14)] = inst_34886__$1);

(statearr_35135[(15)] = inst_34882__$1);

(statearr_35135[(18)] = inst_34904);

(statearr_35135[(16)] = inst_34884__$1);

return statearr_35135;
})();
var statearr_35143_37975 = state_35057__$1;
(statearr_35143_37975[(2)] = null);

(statearr_35143_37975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (21))){
var inst_34942 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35160_37976 = state_35057__$1;
(statearr_35160_37976[(2)] = inst_34942);

(statearr_35160_37976[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (31))){
var inst_34982 = (state_35057[(11)]);
var inst_34994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34982);
var state_35057__$1 = state_35057;
var statearr_35161_37977 = state_35057__$1;
(statearr_35161_37977[(2)] = inst_34994);

(statearr_35161_37977[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (32))){
var inst_34964 = (state_35057[(19)]);
var inst_34965 = (state_35057[(10)]);
var inst_34967 = (state_35057[(12)]);
var inst_34966 = (state_35057[(20)]);
var inst_34996 = (state_35057[(2)]);
var inst_35000 = (inst_34967 + (1));
var tmp35150 = inst_34964;
var tmp35151 = inst_34965;
var tmp35152 = inst_34966;
var inst_34964__$1 = tmp35150;
var inst_34965__$1 = tmp35151;
var inst_34966__$1 = tmp35152;
var inst_34967__$1 = inst_35000;
var state_35057__$1 = (function (){var statearr_35166 = state_35057;
(statearr_35166[(19)] = inst_34964__$1);

(statearr_35166[(21)] = inst_34996);

(statearr_35166[(10)] = inst_34965__$1);

(statearr_35166[(12)] = inst_34967__$1);

(statearr_35166[(20)] = inst_34966__$1);

return statearr_35166;
})();
var statearr_35170_37980 = state_35057__$1;
(statearr_35170_37980[(2)] = null);

(statearr_35170_37980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (40))){
var inst_35019 = (state_35057[(22)]);
var inst_35024 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35019);
var state_35057__$1 = state_35057;
var statearr_35173_37987 = state_35057__$1;
(statearr_35173_37987[(2)] = inst_35024);

(statearr_35173_37987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (33))){
var inst_35003 = (state_35057[(23)]);
var inst_35008 = cljs.core.chunked_seq_QMARK_(inst_35003);
var state_35057__$1 = state_35057;
if(inst_35008){
var statearr_35180_37988 = state_35057__$1;
(statearr_35180_37988[(1)] = (36));

} else {
var statearr_35181_37989 = state_35057__$1;
(statearr_35181_37989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (13))){
var inst_34897 = (state_35057[(24)]);
var inst_34901 = cljs.core.async.close_BANG_(inst_34897);
var state_35057__$1 = state_35057;
var statearr_35189_37990 = state_35057__$1;
(statearr_35189_37990[(2)] = inst_34901);

(statearr_35189_37990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (22))){
var inst_34930 = (state_35057[(8)]);
var inst_34934 = cljs.core.async.close_BANG_(inst_34930);
var state_35057__$1 = state_35057;
var statearr_35192_37991 = state_35057__$1;
(statearr_35192_37991[(2)] = inst_34934);

(statearr_35192_37991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (36))){
var inst_35003 = (state_35057[(23)]);
var inst_35011 = cljs.core.chunk_first(inst_35003);
var inst_35013 = cljs.core.chunk_rest(inst_35003);
var inst_35014 = cljs.core.count(inst_35011);
var inst_34964 = inst_35013;
var inst_34965 = inst_35011;
var inst_34966 = inst_35014;
var inst_34967 = (0);
var state_35057__$1 = (function (){var statearr_35197 = state_35057;
(statearr_35197[(19)] = inst_34964);

(statearr_35197[(10)] = inst_34965);

(statearr_35197[(12)] = inst_34967);

(statearr_35197[(20)] = inst_34966);

return statearr_35197;
})();
var statearr_35198_37992 = state_35057__$1;
(statearr_35198_37992[(2)] = null);

(statearr_35198_37992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (41))){
var inst_35003 = (state_35057[(23)]);
var inst_35026 = (state_35057[(2)]);
var inst_35027 = cljs.core.next(inst_35003);
var inst_34964 = inst_35027;
var inst_34965 = null;
var inst_34966 = (0);
var inst_34967 = (0);
var state_35057__$1 = (function (){var statearr_35200 = state_35057;
(statearr_35200[(25)] = inst_35026);

(statearr_35200[(19)] = inst_34964);

(statearr_35200[(10)] = inst_34965);

(statearr_35200[(12)] = inst_34967);

(statearr_35200[(20)] = inst_34966);

return statearr_35200;
})();
var statearr_35201_37993 = state_35057__$1;
(statearr_35201_37993[(2)] = null);

(statearr_35201_37993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (43))){
var state_35057__$1 = state_35057;
var statearr_35206_37996 = state_35057__$1;
(statearr_35206_37996[(2)] = null);

(statearr_35206_37996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (29))){
var inst_35035 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35212_37998 = state_35057__$1;
(statearr_35212_37998[(2)] = inst_35035);

(statearr_35212_37998[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (44))){
var inst_35044 = (state_35057[(2)]);
var state_35057__$1 = (function (){var statearr_35217 = state_35057;
(statearr_35217[(26)] = inst_35044);

return statearr_35217;
})();
var statearr_35218_37999 = state_35057__$1;
(statearr_35218_37999[(2)] = null);

(statearr_35218_37999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (6))){
var inst_34954 = (state_35057[(27)]);
var inst_34953 = cljs.core.deref(cs);
var inst_34954__$1 = cljs.core.keys(inst_34953);
var inst_34956 = cljs.core.count(inst_34954__$1);
var inst_34957 = cljs.core.reset_BANG_(dctr,inst_34956);
var inst_34963 = cljs.core.seq(inst_34954__$1);
var inst_34964 = inst_34963;
var inst_34965 = null;
var inst_34966 = (0);
var inst_34967 = (0);
var state_35057__$1 = (function (){var statearr_35226 = state_35057;
(statearr_35226[(19)] = inst_34964);

(statearr_35226[(28)] = inst_34957);

(statearr_35226[(10)] = inst_34965);

(statearr_35226[(27)] = inst_34954__$1);

(statearr_35226[(12)] = inst_34967);

(statearr_35226[(20)] = inst_34966);

return statearr_35226;
})();
var statearr_35232_38002 = state_35057__$1;
(statearr_35232_38002[(2)] = null);

(statearr_35232_38002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (28))){
var inst_35003 = (state_35057[(23)]);
var inst_34964 = (state_35057[(19)]);
var inst_35003__$1 = cljs.core.seq(inst_34964);
var state_35057__$1 = (function (){var statearr_35237 = state_35057;
(statearr_35237[(23)] = inst_35003__$1);

return statearr_35237;
})();
if(inst_35003__$1){
var statearr_35238_38006 = state_35057__$1;
(statearr_35238_38006[(1)] = (33));

} else {
var statearr_35240_38007 = state_35057__$1;
(statearr_35240_38007[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (25))){
var inst_34967 = (state_35057[(12)]);
var inst_34966 = (state_35057[(20)]);
var inst_34974 = (inst_34967 < inst_34966);
var inst_34975 = inst_34974;
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_34975)){
var statearr_35245_38008 = state_35057__$1;
(statearr_35245_38008[(1)] = (27));

} else {
var statearr_35246_38011 = state_35057__$1;
(statearr_35246_38011[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (34))){
var state_35057__$1 = state_35057;
var statearr_35252_38016 = state_35057__$1;
(statearr_35252_38016[(2)] = null);

(statearr_35252_38016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (17))){
var state_35057__$1 = state_35057;
var statearr_35256_38017 = state_35057__$1;
(statearr_35256_38017[(2)] = null);

(statearr_35256_38017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (3))){
var inst_35049 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35057__$1,inst_35049);
} else {
if((state_val_35059 === (12))){
var inst_34947 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35262_38018 = state_35057__$1;
(statearr_35262_38018[(2)] = inst_34947);

(statearr_35262_38018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (2))){
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35057__$1,(4),ch);
} else {
if((state_val_35059 === (23))){
var state_35057__$1 = state_35057;
var statearr_35272_38019 = state_35057__$1;
(statearr_35272_38019[(2)] = null);

(statearr_35272_38019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (35))){
var inst_35033 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35273_38020 = state_35057__$1;
(statearr_35273_38020[(2)] = inst_35033);

(statearr_35273_38020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (19))){
var inst_34910 = (state_35057[(7)]);
var inst_34917 = cljs.core.chunk_first(inst_34910);
var inst_34918 = cljs.core.chunk_rest(inst_34910);
var inst_34919 = cljs.core.count(inst_34917);
var inst_34882 = inst_34918;
var inst_34884 = inst_34917;
var inst_34885 = inst_34919;
var inst_34886 = (0);
var state_35057__$1 = (function (){var statearr_35282 = state_35057;
(statearr_35282[(13)] = inst_34885);

(statearr_35282[(14)] = inst_34886);

(statearr_35282[(15)] = inst_34882);

(statearr_35282[(16)] = inst_34884);

return statearr_35282;
})();
var statearr_35286_38023 = state_35057__$1;
(statearr_35286_38023[(2)] = null);

(statearr_35286_38023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (11))){
var inst_34910 = (state_35057[(7)]);
var inst_34882 = (state_35057[(15)]);
var inst_34910__$1 = cljs.core.seq(inst_34882);
var state_35057__$1 = (function (){var statearr_35288 = state_35057;
(statearr_35288[(7)] = inst_34910__$1);

return statearr_35288;
})();
if(inst_34910__$1){
var statearr_35289_38024 = state_35057__$1;
(statearr_35289_38024[(1)] = (16));

} else {
var statearr_35293_38025 = state_35057__$1;
(statearr_35293_38025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (9))){
var inst_34949 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35295_38027 = state_35057__$1;
(statearr_35295_38027[(2)] = inst_34949);

(statearr_35295_38027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (5))){
var inst_34880 = cljs.core.deref(cs);
var inst_34881 = cljs.core.seq(inst_34880);
var inst_34882 = inst_34881;
var inst_34884 = null;
var inst_34885 = (0);
var inst_34886 = (0);
var state_35057__$1 = (function (){var statearr_35302 = state_35057;
(statearr_35302[(13)] = inst_34885);

(statearr_35302[(14)] = inst_34886);

(statearr_35302[(15)] = inst_34882);

(statearr_35302[(16)] = inst_34884);

return statearr_35302;
})();
var statearr_35305_38028 = state_35057__$1;
(statearr_35305_38028[(2)] = null);

(statearr_35305_38028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (14))){
var state_35057__$1 = state_35057;
var statearr_35306_38029 = state_35057__$1;
(statearr_35306_38029[(2)] = null);

(statearr_35306_38029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (45))){
var inst_35041 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35311_38031 = state_35057__$1;
(statearr_35311_38031[(2)] = inst_35041);

(statearr_35311_38031[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (26))){
var inst_34954 = (state_35057[(27)]);
var inst_35037 = (state_35057[(2)]);
var inst_35038 = cljs.core.seq(inst_34954);
var state_35057__$1 = (function (){var statearr_35316 = state_35057;
(statearr_35316[(29)] = inst_35037);

return statearr_35316;
})();
if(inst_35038){
var statearr_35317_38032 = state_35057__$1;
(statearr_35317_38032[(1)] = (42));

} else {
var statearr_35318_38033 = state_35057__$1;
(statearr_35318_38033[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (16))){
var inst_34910 = (state_35057[(7)]);
var inst_34915 = cljs.core.chunked_seq_QMARK_(inst_34910);
var state_35057__$1 = state_35057;
if(inst_34915){
var statearr_35321_38035 = state_35057__$1;
(statearr_35321_38035[(1)] = (19));

} else {
var statearr_35324_38036 = state_35057__$1;
(statearr_35324_38036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (38))){
var inst_35030 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35326_38037 = state_35057__$1;
(statearr_35326_38037[(2)] = inst_35030);

(statearr_35326_38037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (30))){
var state_35057__$1 = state_35057;
var statearr_35331_38038 = state_35057__$1;
(statearr_35331_38038[(2)] = null);

(statearr_35331_38038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (10))){
var inst_34886 = (state_35057[(14)]);
var inst_34884 = (state_35057[(16)]);
var inst_34896 = cljs.core._nth(inst_34884,inst_34886);
var inst_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34896,(0),null);
var inst_34898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34896,(1),null);
var state_35057__$1 = (function (){var statearr_35337 = state_35057;
(statearr_35337[(24)] = inst_34897);

return statearr_35337;
})();
if(cljs.core.truth_(inst_34898)){
var statearr_35340_38047 = state_35057__$1;
(statearr_35340_38047[(1)] = (13));

} else {
var statearr_35341_38049 = state_35057__$1;
(statearr_35341_38049[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (18))){
var inst_34945 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35342_38050 = state_35057__$1;
(statearr_35342_38050[(2)] = inst_34945);

(statearr_35342_38050[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (42))){
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35057__$1,(45),dchan);
} else {
if((state_val_35059 === (37))){
var inst_34869 = (state_35057[(9)]);
var inst_35003 = (state_35057[(23)]);
var inst_35019 = (state_35057[(22)]);
var inst_35019__$1 = cljs.core.first(inst_35003);
var inst_35020 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35019__$1,inst_34869,done);
var state_35057__$1 = (function (){var statearr_35343 = state_35057;
(statearr_35343[(22)] = inst_35019__$1);

return statearr_35343;
})();
if(cljs.core.truth_(inst_35020)){
var statearr_35345_38059 = state_35057__$1;
(statearr_35345_38059[(1)] = (39));

} else {
var statearr_35346_38063 = state_35057__$1;
(statearr_35346_38063[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35059 === (8))){
var inst_34885 = (state_35057[(13)]);
var inst_34886 = (state_35057[(14)]);
var inst_34890 = (inst_34886 < inst_34885);
var inst_34891 = inst_34890;
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_34891)){
var statearr_35357_38069 = state_35057__$1;
(statearr_35357_38069[(1)] = (10));

} else {
var statearr_35364_38071 = state_35057__$1;
(statearr_35364_38071[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32668__auto__ = null;
var cljs$core$async$mult_$_state_machine__32668__auto____0 = (function (){
var statearr_35370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35370[(0)] = cljs$core$async$mult_$_state_machine__32668__auto__);

(statearr_35370[(1)] = (1));

return statearr_35370;
});
var cljs$core$async$mult_$_state_machine__32668__auto____1 = (function (state_35057){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_35057);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e35371){var ex__32671__auto__ = e35371;
var statearr_35375_38089 = state_35057;
(statearr_35375_38089[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_35057[(4)]))){
var statearr_35377_38095 = state_35057;
(statearr_35377_38095[(1)] = cljs.core.first((state_35057[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38106 = state_35057;
state_35057 = G__38106;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32668__auto__ = function(state_35057){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32668__auto____1.call(this,state_35057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32668__auto____0;
cljs$core$async$mult_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32668__auto____1;
return cljs$core$async$mult_$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_35384 = f__33239__auto__();
(statearr_35384[(6)] = c__33238__auto___37942);

return statearr_35384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35393 = arguments.length;
switch (G__35393) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38117 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38117(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38118 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38118(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38119 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38119(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38123 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38123(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38129 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38129(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38132 = arguments.length;
var i__5770__auto___38133 = (0);
while(true){
if((i__5770__auto___38133 < len__5769__auto___38132)){
args__5775__auto__.push((arguments[i__5770__auto___38133]));

var G__38134 = (i__5770__auto___38133 + (1));
i__5770__auto___38133 = G__38134;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35455){
var map__35456 = p__35455;
var map__35456__$1 = cljs.core.__destructure_map(map__35456);
var opts = map__35456__$1;
var statearr_35458_38135 = state;
(statearr_35458_38135[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35466_38137 = state;
(statearr_35466_38137[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_35467_38138 = state;
(statearr_35467_38138[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35447){
var G__35448 = cljs.core.first(seq35447);
var seq35447__$1 = cljs.core.next(seq35447);
var G__35449 = cljs.core.first(seq35447__$1);
var seq35447__$2 = cljs.core.next(seq35447__$1);
var G__35450 = cljs.core.first(seq35447__$2);
var seq35447__$3 = cljs.core.next(seq35447__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35448,G__35449,G__35450,seq35447__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35493 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35494){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35494 = meta35494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35495,meta35494__$1){
var self__ = this;
var _35495__$1 = this;
return (new cljs.core.async.t_cljs$core$async35493(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35494__$1));
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35495){
var self__ = this;
var _35495__$1 = this;
return self__.meta35494;
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35494","meta35494",-1858615899,null)], null);
}));

(cljs.core.async.t_cljs$core$async35493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35493");

(cljs.core.async.t_cljs$core$async35493.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35493.
 */
cljs.core.async.__GT_t_cljs$core$async35493 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35494){
return (new cljs.core.async.t_cljs$core$async35493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35494));
});

}

return (new cljs.core.async.t_cljs$core$async35493(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33238__auto___38158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_35651){
var state_val_35653 = (state_35651[(1)]);
if((state_val_35653 === (7))){
var inst_35600 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
if(cljs.core.truth_(inst_35600)){
var statearr_35659_38159 = state_35651__$1;
(statearr_35659_38159[(1)] = (8));

} else {
var statearr_35662_38160 = state_35651__$1;
(statearr_35662_38160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (20))){
var inst_35584 = (state_35651[(7)]);
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35651__$1,(23),out,inst_35584);
} else {
if((state_val_35653 === (1))){
var inst_35563 = calc_state();
var inst_35564 = cljs.core.__destructure_map(inst_35563);
var inst_35565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35564,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35568 = inst_35563;
var state_35651__$1 = (function (){var statearr_35671 = state_35651;
(statearr_35671[(8)] = inst_35568);

(statearr_35671[(9)] = inst_35566);

(statearr_35671[(10)] = inst_35565);

(statearr_35671[(11)] = inst_35567);

return statearr_35671;
})();
var statearr_35672_38162 = state_35651__$1;
(statearr_35672_38162[(2)] = null);

(statearr_35672_38162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (24))){
var inst_35571 = (state_35651[(12)]);
var inst_35568 = inst_35571;
var state_35651__$1 = (function (){var statearr_35673 = state_35651;
(statearr_35673[(8)] = inst_35568);

return statearr_35673;
})();
var statearr_35674_38163 = state_35651__$1;
(statearr_35674_38163[(2)] = null);

(statearr_35674_38163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (4))){
var inst_35584 = (state_35651[(7)]);
var inst_35587 = (state_35651[(13)]);
var inst_35583 = (state_35651[(2)]);
var inst_35584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35583,(0),null);
var inst_35586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35583,(1),null);
var inst_35587__$1 = (inst_35584__$1 == null);
var state_35651__$1 = (function (){var statearr_35681 = state_35651;
(statearr_35681[(14)] = inst_35586);

(statearr_35681[(7)] = inst_35584__$1);

(statearr_35681[(13)] = inst_35587__$1);

return statearr_35681;
})();
if(cljs.core.truth_(inst_35587__$1)){
var statearr_35683_38166 = state_35651__$1;
(statearr_35683_38166[(1)] = (5));

} else {
var statearr_35684_38167 = state_35651__$1;
(statearr_35684_38167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (15))){
var inst_35572 = (state_35651[(15)]);
var inst_35616 = (state_35651[(16)]);
var inst_35616__$1 = cljs.core.empty_QMARK_(inst_35572);
var state_35651__$1 = (function (){var statearr_35687 = state_35651;
(statearr_35687[(16)] = inst_35616__$1);

return statearr_35687;
})();
if(inst_35616__$1){
var statearr_35688_38168 = state_35651__$1;
(statearr_35688_38168[(1)] = (17));

} else {
var statearr_35690_38169 = state_35651__$1;
(statearr_35690_38169[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (21))){
var inst_35571 = (state_35651[(12)]);
var inst_35568 = inst_35571;
var state_35651__$1 = (function (){var statearr_35693 = state_35651;
(statearr_35693[(8)] = inst_35568);

return statearr_35693;
})();
var statearr_35694_38170 = state_35651__$1;
(statearr_35694_38170[(2)] = null);

(statearr_35694_38170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (13))){
var inst_35608 = (state_35651[(2)]);
var inst_35610 = calc_state();
var inst_35568 = inst_35610;
var state_35651__$1 = (function (){var statearr_35696 = state_35651;
(statearr_35696[(8)] = inst_35568);

(statearr_35696[(17)] = inst_35608);

return statearr_35696;
})();
var statearr_35697_38173 = state_35651__$1;
(statearr_35697_38173[(2)] = null);

(statearr_35697_38173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (22))){
var inst_35639 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35701_38174 = state_35651__$1;
(statearr_35701_38174[(2)] = inst_35639);

(statearr_35701_38174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (6))){
var inst_35586 = (state_35651[(14)]);
var inst_35595 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35586,change);
var state_35651__$1 = state_35651;
var statearr_35706_38175 = state_35651__$1;
(statearr_35706_38175[(2)] = inst_35595);

(statearr_35706_38175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (25))){
var state_35651__$1 = state_35651;
var statearr_35707_38176 = state_35651__$1;
(statearr_35707_38176[(2)] = null);

(statearr_35707_38176[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (17))){
var inst_35586 = (state_35651[(14)]);
var inst_35574 = (state_35651[(18)]);
var inst_35618 = (inst_35574.cljs$core$IFn$_invoke$arity$1 ? inst_35574.cljs$core$IFn$_invoke$arity$1(inst_35586) : inst_35574.call(null,inst_35586));
var inst_35619 = cljs.core.not(inst_35618);
var state_35651__$1 = state_35651;
var statearr_35709_38177 = state_35651__$1;
(statearr_35709_38177[(2)] = inst_35619);

(statearr_35709_38177[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (3))){
var inst_35646 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35651__$1,inst_35646);
} else {
if((state_val_35653 === (12))){
var state_35651__$1 = state_35651;
var statearr_35710_38178 = state_35651__$1;
(statearr_35710_38178[(2)] = null);

(statearr_35710_38178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (2))){
var inst_35568 = (state_35651[(8)]);
var inst_35571 = (state_35651[(12)]);
var inst_35571__$1 = cljs.core.__destructure_map(inst_35568);
var inst_35572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35571__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35571__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35571__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35651__$1 = (function (){var statearr_35716 = state_35651;
(statearr_35716[(18)] = inst_35574);

(statearr_35716[(12)] = inst_35571__$1);

(statearr_35716[(15)] = inst_35572);

return statearr_35716;
})();
return cljs.core.async.ioc_alts_BANG_(state_35651__$1,(4),inst_35575);
} else {
if((state_val_35653 === (23))){
var inst_35628 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
if(cljs.core.truth_(inst_35628)){
var statearr_35720_38181 = state_35651__$1;
(statearr_35720_38181[(1)] = (24));

} else {
var statearr_35724_38182 = state_35651__$1;
(statearr_35724_38182[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (19))){
var inst_35622 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35728_38183 = state_35651__$1;
(statearr_35728_38183[(2)] = inst_35622);

(statearr_35728_38183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (11))){
var inst_35586 = (state_35651[(14)]);
var inst_35605 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35586);
var state_35651__$1 = state_35651;
var statearr_35734_38185 = state_35651__$1;
(statearr_35734_38185[(2)] = inst_35605);

(statearr_35734_38185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (9))){
var inst_35586 = (state_35651[(14)]);
var inst_35613 = (state_35651[(19)]);
var inst_35572 = (state_35651[(15)]);
var inst_35613__$1 = (inst_35572.cljs$core$IFn$_invoke$arity$1 ? inst_35572.cljs$core$IFn$_invoke$arity$1(inst_35586) : inst_35572.call(null,inst_35586));
var state_35651__$1 = (function (){var statearr_35735 = state_35651;
(statearr_35735[(19)] = inst_35613__$1);

return statearr_35735;
})();
if(cljs.core.truth_(inst_35613__$1)){
var statearr_35739_38187 = state_35651__$1;
(statearr_35739_38187[(1)] = (14));

} else {
var statearr_35740_38188 = state_35651__$1;
(statearr_35740_38188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (5))){
var inst_35587 = (state_35651[(13)]);
var state_35651__$1 = state_35651;
var statearr_35745_38191 = state_35651__$1;
(statearr_35745_38191[(2)] = inst_35587);

(statearr_35745_38191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (14))){
var inst_35613 = (state_35651[(19)]);
var state_35651__$1 = state_35651;
var statearr_35746_38192 = state_35651__$1;
(statearr_35746_38192[(2)] = inst_35613);

(statearr_35746_38192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (26))){
var inst_35634 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35755_38193 = state_35651__$1;
(statearr_35755_38193[(2)] = inst_35634);

(statearr_35755_38193[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (16))){
var inst_35624 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
if(cljs.core.truth_(inst_35624)){
var statearr_35756_38195 = state_35651__$1;
(statearr_35756_38195[(1)] = (20));

} else {
var statearr_35757_38196 = state_35651__$1;
(statearr_35757_38196[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (10))){
var inst_35644 = (state_35651[(2)]);
var state_35651__$1 = state_35651;
var statearr_35758_38197 = state_35651__$1;
(statearr_35758_38197[(2)] = inst_35644);

(statearr_35758_38197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (18))){
var inst_35616 = (state_35651[(16)]);
var state_35651__$1 = state_35651;
var statearr_35759_38198 = state_35651__$1;
(statearr_35759_38198[(2)] = inst_35616);

(statearr_35759_38198[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35653 === (8))){
var inst_35584 = (state_35651[(7)]);
var inst_35602 = (inst_35584 == null);
var state_35651__$1 = state_35651;
if(cljs.core.truth_(inst_35602)){
var statearr_35760_38201 = state_35651__$1;
(statearr_35760_38201[(1)] = (11));

} else {
var statearr_35761_38202 = state_35651__$1;
(statearr_35761_38202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32668__auto__ = null;
var cljs$core$async$mix_$_state_machine__32668__auto____0 = (function (){
var statearr_35762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35762[(0)] = cljs$core$async$mix_$_state_machine__32668__auto__);

(statearr_35762[(1)] = (1));

return statearr_35762;
});
var cljs$core$async$mix_$_state_machine__32668__auto____1 = (function (state_35651){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_35651);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e35763){var ex__32671__auto__ = e35763;
var statearr_35764_38206 = state_35651;
(statearr_35764_38206[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_35651[(4)]))){
var statearr_35769_38207 = state_35651;
(statearr_35769_38207[(1)] = cljs.core.first((state_35651[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38209 = state_35651;
state_35651 = G__38209;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32668__auto__ = function(state_35651){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32668__auto____1.call(this,state_35651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32668__auto____0;
cljs$core$async$mix_$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32668__auto____1;
return cljs$core$async$mix_$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_35772 = f__33239__auto__();
(statearr_35772[(6)] = c__33238__auto___38158);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38211 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38211(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38213 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38213(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38214 = (function() {
var G__38215 = null;
var G__38215__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38215__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38215 = function(p,v){
switch(arguments.length){
case 1:
return G__38215__1.call(this,p);
case 2:
return G__38215__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38215.cljs$core$IFn$_invoke$arity$1 = G__38215__1;
G__38215.cljs$core$IFn$_invoke$arity$2 = G__38215__2;
return G__38215;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35818 = arguments.length;
switch (G__35818) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38214(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38214(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35831_SHARP_){
if(cljs.core.truth_((p1__35831_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35831_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35831_SHARP_.call(null,topic)))){
return p1__35831_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35831_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35848 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35849){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35849 = meta35849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35850,meta35849__$1){
var self__ = this;
var _35850__$1 = this;
return (new cljs.core.async.t_cljs$core$async35848(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35849__$1));
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35850){
var self__ = this;
var _35850__$1 = this;
return self__.meta35849;
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35849","meta35849",1181507060,null)], null);
}));

(cljs.core.async.t_cljs$core$async35848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35848");

(cljs.core.async.t_cljs$core$async35848.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35848.
 */
cljs.core.async.__GT_t_cljs$core$async35848 = (function cljs$core$async$__GT_t_cljs$core$async35848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35849){
return (new cljs.core.async.t_cljs$core$async35848(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35849));
});

}

return (new cljs.core.async.t_cljs$core$async35848(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33238__auto___38223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_35995){
var state_val_35997 = (state_35995[(1)]);
if((state_val_35997 === (7))){
var inst_35989 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36003_38224 = state_35995__$1;
(statearr_36003_38224[(2)] = inst_35989);

(statearr_36003_38224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (20))){
var state_35995__$1 = state_35995;
var statearr_36004_38225 = state_35995__$1;
(statearr_36004_38225[(2)] = null);

(statearr_36004_38225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (1))){
var state_35995__$1 = state_35995;
var statearr_36007_38230 = state_35995__$1;
(statearr_36007_38230[(2)] = null);

(statearr_36007_38230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (24))){
var inst_35965 = (state_35995[(7)]);
var inst_35976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35965);
var state_35995__$1 = state_35995;
var statearr_36012_38231 = state_35995__$1;
(statearr_36012_38231[(2)] = inst_35976);

(statearr_36012_38231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (4))){
var inst_35902 = (state_35995[(8)]);
var inst_35902__$1 = (state_35995[(2)]);
var inst_35903 = (inst_35902__$1 == null);
var state_35995__$1 = (function (){var statearr_36015 = state_35995;
(statearr_36015[(8)] = inst_35902__$1);

return statearr_36015;
})();
if(cljs.core.truth_(inst_35903)){
var statearr_36018_38239 = state_35995__$1;
(statearr_36018_38239[(1)] = (5));

} else {
var statearr_36019_38240 = state_35995__$1;
(statearr_36019_38240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (15))){
var inst_35958 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36020_38241 = state_35995__$1;
(statearr_36020_38241[(2)] = inst_35958);

(statearr_36020_38241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (21))){
var inst_35985 = (state_35995[(2)]);
var state_35995__$1 = (function (){var statearr_36028 = state_35995;
(statearr_36028[(9)] = inst_35985);

return statearr_36028;
})();
var statearr_36029_38242 = state_35995__$1;
(statearr_36029_38242[(2)] = null);

(statearr_36029_38242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (13))){
var inst_35938 = (state_35995[(10)]);
var inst_35940 = cljs.core.chunked_seq_QMARK_(inst_35938);
var state_35995__$1 = state_35995;
if(inst_35940){
var statearr_36032_38246 = state_35995__$1;
(statearr_36032_38246[(1)] = (16));

} else {
var statearr_36034_38247 = state_35995__$1;
(statearr_36034_38247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (22))){
var inst_35973 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35973)){
var statearr_36039_38252 = state_35995__$1;
(statearr_36039_38252[(1)] = (23));

} else {
var statearr_36041_38253 = state_35995__$1;
(statearr_36041_38253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (6))){
var inst_35965 = (state_35995[(7)]);
var inst_35969 = (state_35995[(11)]);
var inst_35902 = (state_35995[(8)]);
var inst_35965__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35902) : topic_fn.call(null,inst_35902));
var inst_35968 = cljs.core.deref(mults);
var inst_35969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35968,inst_35965__$1);
var state_35995__$1 = (function (){var statearr_36043 = state_35995;
(statearr_36043[(7)] = inst_35965__$1);

(statearr_36043[(11)] = inst_35969__$1);

return statearr_36043;
})();
if(cljs.core.truth_(inst_35969__$1)){
var statearr_36044_38257 = state_35995__$1;
(statearr_36044_38257[(1)] = (19));

} else {
var statearr_36045_38258 = state_35995__$1;
(statearr_36045_38258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (25))){
var inst_35978 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36049_38259 = state_35995__$1;
(statearr_36049_38259[(2)] = inst_35978);

(statearr_36049_38259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (17))){
var inst_35938 = (state_35995[(10)]);
var inst_35947 = cljs.core.first(inst_35938);
var inst_35948 = cljs.core.async.muxch_STAR_(inst_35947);
var inst_35949 = cljs.core.async.close_BANG_(inst_35948);
var inst_35951 = cljs.core.next(inst_35938);
var inst_35912 = inst_35951;
var inst_35913 = null;
var inst_35914 = (0);
var inst_35915 = (0);
var state_35995__$1 = (function (){var statearr_36052 = state_35995;
(statearr_36052[(12)] = inst_35912);

(statearr_36052[(13)] = inst_35914);

(statearr_36052[(14)] = inst_35913);

(statearr_36052[(15)] = inst_35949);

(statearr_36052[(16)] = inst_35915);

return statearr_36052;
})();
var statearr_36054_38263 = state_35995__$1;
(statearr_36054_38263[(2)] = null);

(statearr_36054_38263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (3))){
var inst_35991 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35995__$1,inst_35991);
} else {
if((state_val_35997 === (12))){
var inst_35960 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36063_38264 = state_35995__$1;
(statearr_36063_38264[(2)] = inst_35960);

(statearr_36063_38264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (2))){
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35995__$1,(4),ch);
} else {
if((state_val_35997 === (23))){
var state_35995__$1 = state_35995;
var statearr_36069_38269 = state_35995__$1;
(statearr_36069_38269[(2)] = null);

(statearr_36069_38269[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (19))){
var inst_35969 = (state_35995[(11)]);
var inst_35902 = (state_35995[(8)]);
var inst_35971 = cljs.core.async.muxch_STAR_(inst_35969);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35995__$1,(22),inst_35971,inst_35902);
} else {
if((state_val_35997 === (11))){
var inst_35912 = (state_35995[(12)]);
var inst_35938 = (state_35995[(10)]);
var inst_35938__$1 = cljs.core.seq(inst_35912);
var state_35995__$1 = (function (){var statearr_36076 = state_35995;
(statearr_36076[(10)] = inst_35938__$1);

return statearr_36076;
})();
if(inst_35938__$1){
var statearr_36077_38270 = state_35995__$1;
(statearr_36077_38270[(1)] = (13));

} else {
var statearr_36081_38271 = state_35995__$1;
(statearr_36081_38271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (9))){
var inst_35962 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36082_38272 = state_35995__$1;
(statearr_36082_38272[(2)] = inst_35962);

(statearr_36082_38272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (5))){
var inst_35909 = cljs.core.deref(mults);
var inst_35910 = cljs.core.vals(inst_35909);
var inst_35911 = cljs.core.seq(inst_35910);
var inst_35912 = inst_35911;
var inst_35913 = null;
var inst_35914 = (0);
var inst_35915 = (0);
var state_35995__$1 = (function (){var statearr_36088 = state_35995;
(statearr_36088[(12)] = inst_35912);

(statearr_36088[(13)] = inst_35914);

(statearr_36088[(14)] = inst_35913);

(statearr_36088[(16)] = inst_35915);

return statearr_36088;
})();
var statearr_36089_38273 = state_35995__$1;
(statearr_36089_38273[(2)] = null);

(statearr_36089_38273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (14))){
var state_35995__$1 = state_35995;
var statearr_36096_38274 = state_35995__$1;
(statearr_36096_38274[(2)] = null);

(statearr_36096_38274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (16))){
var inst_35938 = (state_35995[(10)]);
var inst_35942 = cljs.core.chunk_first(inst_35938);
var inst_35943 = cljs.core.chunk_rest(inst_35938);
var inst_35944 = cljs.core.count(inst_35942);
var inst_35912 = inst_35943;
var inst_35913 = inst_35942;
var inst_35914 = inst_35944;
var inst_35915 = (0);
var state_35995__$1 = (function (){var statearr_36098 = state_35995;
(statearr_36098[(12)] = inst_35912);

(statearr_36098[(13)] = inst_35914);

(statearr_36098[(14)] = inst_35913);

(statearr_36098[(16)] = inst_35915);

return statearr_36098;
})();
var statearr_36102_38275 = state_35995__$1;
(statearr_36102_38275[(2)] = null);

(statearr_36102_38275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (10))){
var inst_35912 = (state_35995[(12)]);
var inst_35914 = (state_35995[(13)]);
var inst_35913 = (state_35995[(14)]);
var inst_35915 = (state_35995[(16)]);
var inst_35925 = cljs.core._nth(inst_35913,inst_35915);
var inst_35926 = cljs.core.async.muxch_STAR_(inst_35925);
var inst_35927 = cljs.core.async.close_BANG_(inst_35926);
var inst_35928 = (inst_35915 + (1));
var tmp36091 = inst_35912;
var tmp36092 = inst_35914;
var tmp36093 = inst_35913;
var inst_35912__$1 = tmp36091;
var inst_35913__$1 = tmp36093;
var inst_35914__$1 = tmp36092;
var inst_35915__$1 = inst_35928;
var state_35995__$1 = (function (){var statearr_36127 = state_35995;
(statearr_36127[(12)] = inst_35912__$1);

(statearr_36127[(13)] = inst_35914__$1);

(statearr_36127[(14)] = inst_35913__$1);

(statearr_36127[(17)] = inst_35927);

(statearr_36127[(16)] = inst_35915__$1);

return statearr_36127;
})();
var statearr_36129_38276 = state_35995__$1;
(statearr_36129_38276[(2)] = null);

(statearr_36129_38276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (18))){
var inst_35954 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36130_38277 = state_35995__$1;
(statearr_36130_38277[(2)] = inst_35954);

(statearr_36130_38277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35997 === (8))){
var inst_35914 = (state_35995[(13)]);
var inst_35915 = (state_35995[(16)]);
var inst_35921 = (inst_35915 < inst_35914);
var inst_35922 = inst_35921;
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35922)){
var statearr_36134_38278 = state_35995__$1;
(statearr_36134_38278[(1)] = (10));

} else {
var statearr_36135_38279 = state_35995__$1;
(statearr_36135_38279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_36136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36136[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_36136[(1)] = (1));

return statearr_36136;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_35995){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_35995);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36139){var ex__32671__auto__ = e36139;
var statearr_36140_38281 = state_35995;
(statearr_36140_38281[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_35995[(4)]))){
var statearr_36143_38282 = state_35995;
(statearr_36143_38282[(1)] = cljs.core.first((state_35995[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38284 = state_35995;
state_35995 = G__38284;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_35995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_35995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36145 = f__33239__auto__();
(statearr_36145[(6)] = c__33238__auto___38223);

return statearr_36145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36154 = arguments.length;
switch (G__36154) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36158 = arguments.length;
switch (G__36158) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36181 = arguments.length;
switch (G__36181) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33238__auto___38294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36252){
var state_val_36253 = (state_36252[(1)]);
if((state_val_36253 === (7))){
var state_36252__$1 = state_36252;
var statearr_36255_38295 = state_36252__$1;
(statearr_36255_38295[(2)] = null);

(statearr_36255_38295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (1))){
var state_36252__$1 = state_36252;
var statearr_36264_38296 = state_36252__$1;
(statearr_36264_38296[(2)] = null);

(statearr_36264_38296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (4))){
var inst_36190 = (state_36252[(7)]);
var inst_36189 = (state_36252[(8)]);
var inst_36192 = (inst_36190 < inst_36189);
var state_36252__$1 = state_36252;
if(cljs.core.truth_(inst_36192)){
var statearr_36271_38297 = state_36252__$1;
(statearr_36271_38297[(1)] = (6));

} else {
var statearr_36272_38298 = state_36252__$1;
(statearr_36272_38298[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (15))){
var inst_36238 = (state_36252[(9)]);
var inst_36243 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36238);
var state_36252__$1 = state_36252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36252__$1,(17),out,inst_36243);
} else {
if((state_val_36253 === (13))){
var inst_36238 = (state_36252[(9)]);
var inst_36238__$1 = (state_36252[(2)]);
var inst_36239 = cljs.core.some(cljs.core.nil_QMARK_,inst_36238__$1);
var state_36252__$1 = (function (){var statearr_36280 = state_36252;
(statearr_36280[(9)] = inst_36238__$1);

return statearr_36280;
})();
if(cljs.core.truth_(inst_36239)){
var statearr_36281_38299 = state_36252__$1;
(statearr_36281_38299[(1)] = (14));

} else {
var statearr_36282_38300 = state_36252__$1;
(statearr_36282_38300[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (6))){
var state_36252__$1 = state_36252;
var statearr_36283_38301 = state_36252__$1;
(statearr_36283_38301[(2)] = null);

(statearr_36283_38301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (17))){
var inst_36245 = (state_36252[(2)]);
var state_36252__$1 = (function (){var statearr_36288 = state_36252;
(statearr_36288[(10)] = inst_36245);

return statearr_36288;
})();
var statearr_36289_38302 = state_36252__$1;
(statearr_36289_38302[(2)] = null);

(statearr_36289_38302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (3))){
var inst_36250 = (state_36252[(2)]);
var state_36252__$1 = state_36252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36252__$1,inst_36250);
} else {
if((state_val_36253 === (12))){
var _ = (function (){var statearr_36300 = state_36252;
(statearr_36300[(4)] = cljs.core.rest((state_36252[(4)])));

return statearr_36300;
})();
var state_36252__$1 = state_36252;
var ex36287 = (state_36252__$1[(2)]);
var statearr_36307_38303 = state_36252__$1;
(statearr_36307_38303[(5)] = ex36287);


if((ex36287 instanceof Object)){
var statearr_36308_38304 = state_36252__$1;
(statearr_36308_38304[(1)] = (11));

(statearr_36308_38304[(5)] = null);

} else {
throw ex36287;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (2))){
var inst_36188 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36189 = cnt;
var inst_36190 = (0);
var state_36252__$1 = (function (){var statearr_36309 = state_36252;
(statearr_36309[(11)] = inst_36188);

(statearr_36309[(7)] = inst_36190);

(statearr_36309[(8)] = inst_36189);

return statearr_36309;
})();
var statearr_36310_38309 = state_36252__$1;
(statearr_36310_38309[(2)] = null);

(statearr_36310_38309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (11))){
var inst_36211 = (state_36252[(2)]);
var inst_36212 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36252__$1 = (function (){var statearr_36311 = state_36252;
(statearr_36311[(12)] = inst_36211);

return statearr_36311;
})();
var statearr_36312_38310 = state_36252__$1;
(statearr_36312_38310[(2)] = inst_36212);

(statearr_36312_38310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (9))){
var inst_36190 = (state_36252[(7)]);
var _ = (function (){var statearr_36313 = state_36252;
(statearr_36313[(4)] = cljs.core.cons((12),(state_36252[(4)])));

return statearr_36313;
})();
var inst_36224 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36190) : chs__$1.call(null,inst_36190));
var inst_36225 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36190) : done.call(null,inst_36190));
var inst_36226 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36224,inst_36225);
var ___$1 = (function (){var statearr_36318 = state_36252;
(statearr_36318[(4)] = cljs.core.rest((state_36252[(4)])));

return statearr_36318;
})();
var state_36252__$1 = state_36252;
var statearr_36319_38315 = state_36252__$1;
(statearr_36319_38315[(2)] = inst_36226);

(statearr_36319_38315[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (5))){
var inst_36236 = (state_36252[(2)]);
var state_36252__$1 = (function (){var statearr_36320 = state_36252;
(statearr_36320[(13)] = inst_36236);

return statearr_36320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36252__$1,(13),dchan);
} else {
if((state_val_36253 === (14))){
var inst_36241 = cljs.core.async.close_BANG_(out);
var state_36252__$1 = state_36252;
var statearr_36321_38321 = state_36252__$1;
(statearr_36321_38321[(2)] = inst_36241);

(statearr_36321_38321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (16))){
var inst_36248 = (state_36252[(2)]);
var state_36252__$1 = state_36252;
var statearr_36322_38322 = state_36252__$1;
(statearr_36322_38322[(2)] = inst_36248);

(statearr_36322_38322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (10))){
var inst_36190 = (state_36252[(7)]);
var inst_36229 = (state_36252[(2)]);
var inst_36230 = (inst_36190 + (1));
var inst_36190__$1 = inst_36230;
var state_36252__$1 = (function (){var statearr_36329 = state_36252;
(statearr_36329[(14)] = inst_36229);

(statearr_36329[(7)] = inst_36190__$1);

return statearr_36329;
})();
var statearr_36330_38324 = state_36252__$1;
(statearr_36330_38324[(2)] = null);

(statearr_36330_38324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36253 === (8))){
var inst_36234 = (state_36252[(2)]);
var state_36252__$1 = state_36252;
var statearr_36331_38325 = state_36252__$1;
(statearr_36331_38325[(2)] = inst_36234);

(statearr_36331_38325[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_36332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36332[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_36332[(1)] = (1));

return statearr_36332;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_36252){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36252);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36334){var ex__32671__auto__ = e36334;
var statearr_36335_38336 = state_36252;
(statearr_36335_38336[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36252[(4)]))){
var statearr_36336_38337 = state_36252;
(statearr_36336_38337[(1)] = cljs.core.first((state_36252[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38338 = state_36252;
state_36252 = G__38338;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_36252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_36252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36338 = f__33239__auto__();
(statearr_36338[(6)] = c__33238__auto___38294);

return statearr_36338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36343 = arguments.length;
switch (G__36343) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36376){
var state_val_36377 = (state_36376[(1)]);
if((state_val_36377 === (7))){
var inst_36356 = (state_36376[(7)]);
var inst_36355 = (state_36376[(8)]);
var inst_36355__$1 = (state_36376[(2)]);
var inst_36356__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36355__$1,(0),null);
var inst_36357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36355__$1,(1),null);
var inst_36358 = (inst_36356__$1 == null);
var state_36376__$1 = (function (){var statearr_36379 = state_36376;
(statearr_36379[(9)] = inst_36357);

(statearr_36379[(7)] = inst_36356__$1);

(statearr_36379[(8)] = inst_36355__$1);

return statearr_36379;
})();
if(cljs.core.truth_(inst_36358)){
var statearr_36380_38348 = state_36376__$1;
(statearr_36380_38348[(1)] = (8));

} else {
var statearr_36381_38349 = state_36376__$1;
(statearr_36381_38349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (1))){
var inst_36345 = cljs.core.vec(chs);
var inst_36346 = inst_36345;
var state_36376__$1 = (function (){var statearr_36382 = state_36376;
(statearr_36382[(10)] = inst_36346);

return statearr_36382;
})();
var statearr_36383_38352 = state_36376__$1;
(statearr_36383_38352[(2)] = null);

(statearr_36383_38352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (4))){
var inst_36346 = (state_36376[(10)]);
var state_36376__$1 = state_36376;
return cljs.core.async.ioc_alts_BANG_(state_36376__$1,(7),inst_36346);
} else {
if((state_val_36377 === (6))){
var inst_36372 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
var statearr_36384_38357 = state_36376__$1;
(statearr_36384_38357[(2)] = inst_36372);

(statearr_36384_38357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (3))){
var inst_36374 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36376__$1,inst_36374);
} else {
if((state_val_36377 === (2))){
var inst_36346 = (state_36376[(10)]);
var inst_36348 = cljs.core.count(inst_36346);
var inst_36349 = (inst_36348 > (0));
var state_36376__$1 = state_36376;
if(cljs.core.truth_(inst_36349)){
var statearr_36387_38363 = state_36376__$1;
(statearr_36387_38363[(1)] = (4));

} else {
var statearr_36388_38364 = state_36376__$1;
(statearr_36388_38364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (11))){
var inst_36346 = (state_36376[(10)]);
var inst_36365 = (state_36376[(2)]);
var tmp36385 = inst_36346;
var inst_36346__$1 = tmp36385;
var state_36376__$1 = (function (){var statearr_36389 = state_36376;
(statearr_36389[(10)] = inst_36346__$1);

(statearr_36389[(11)] = inst_36365);

return statearr_36389;
})();
var statearr_36390_38365 = state_36376__$1;
(statearr_36390_38365[(2)] = null);

(statearr_36390_38365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (9))){
var inst_36356 = (state_36376[(7)]);
var state_36376__$1 = state_36376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36376__$1,(11),out,inst_36356);
} else {
if((state_val_36377 === (5))){
var inst_36370 = cljs.core.async.close_BANG_(out);
var state_36376__$1 = state_36376;
var statearr_36392_38366 = state_36376__$1;
(statearr_36392_38366[(2)] = inst_36370);

(statearr_36392_38366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (10))){
var inst_36368 = (state_36376[(2)]);
var state_36376__$1 = state_36376;
var statearr_36393_38367 = state_36376__$1;
(statearr_36393_38367[(2)] = inst_36368);

(statearr_36393_38367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36377 === (8))){
var inst_36357 = (state_36376[(9)]);
var inst_36356 = (state_36376[(7)]);
var inst_36346 = (state_36376[(10)]);
var inst_36355 = (state_36376[(8)]);
var inst_36360 = (function (){var cs = inst_36346;
var vec__36351 = inst_36355;
var v = inst_36356;
var c = inst_36357;
return (function (p1__36339_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36339_SHARP_);
});
})();
var inst_36361 = cljs.core.filterv(inst_36360,inst_36346);
var inst_36346__$1 = inst_36361;
var state_36376__$1 = (function (){var statearr_36395 = state_36376;
(statearr_36395[(10)] = inst_36346__$1);

return statearr_36395;
})();
var statearr_36396_38372 = state_36376__$1;
(statearr_36396_38372[(2)] = null);

(statearr_36396_38372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_36397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36397[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_36397[(1)] = (1));

return statearr_36397;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_36376){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36376);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36399){var ex__32671__auto__ = e36399;
var statearr_36401_38374 = state_36376;
(statearr_36401_38374[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36376[(4)]))){
var statearr_36406_38375 = state_36376;
(statearr_36406_38375[(1)] = cljs.core.first((state_36376[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38376 = state_36376;
state_36376 = G__38376;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_36376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_36376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36409 = f__33239__auto__();
(statearr_36409[(6)] = c__33238__auto___38345);

return statearr_36409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36415 = arguments.length;
switch (G__36415) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (7))){
var inst_36421 = (state_36439[(7)]);
var inst_36421__$1 = (state_36439[(2)]);
var inst_36422 = (inst_36421__$1 == null);
var inst_36423 = cljs.core.not(inst_36422);
var state_36439__$1 = (function (){var statearr_36445 = state_36439;
(statearr_36445[(7)] = inst_36421__$1);

return statearr_36445;
})();
if(inst_36423){
var statearr_36446_38381 = state_36439__$1;
(statearr_36446_38381[(1)] = (8));

} else {
var statearr_36448_38382 = state_36439__$1;
(statearr_36448_38382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (1))){
var inst_36416 = (0);
var state_36439__$1 = (function (){var statearr_36454 = state_36439;
(statearr_36454[(8)] = inst_36416);

return statearr_36454;
})();
var statearr_36457_38383 = state_36439__$1;
(statearr_36457_38383[(2)] = null);

(statearr_36457_38383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (4))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36439__$1,(7),ch);
} else {
if((state_val_36440 === (6))){
var inst_36434 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36464_38388 = state_36439__$1;
(statearr_36464_38388[(2)] = inst_36434);

(statearr_36464_38388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (3))){
var inst_36436 = (state_36439[(2)]);
var inst_36437 = cljs.core.async.close_BANG_(out);
var state_36439__$1 = (function (){var statearr_36465 = state_36439;
(statearr_36465[(9)] = inst_36436);

return statearr_36465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36439__$1,inst_36437);
} else {
if((state_val_36440 === (2))){
var inst_36416 = (state_36439[(8)]);
var inst_36418 = (inst_36416 < n);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36418)){
var statearr_36466_38396 = state_36439__$1;
(statearr_36466_38396[(1)] = (4));

} else {
var statearr_36468_38397 = state_36439__$1;
(statearr_36468_38397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (11))){
var inst_36416 = (state_36439[(8)]);
var inst_36426 = (state_36439[(2)]);
var inst_36427 = (inst_36416 + (1));
var inst_36416__$1 = inst_36427;
var state_36439__$1 = (function (){var statearr_36472 = state_36439;
(statearr_36472[(10)] = inst_36426);

(statearr_36472[(8)] = inst_36416__$1);

return statearr_36472;
})();
var statearr_36473_38398 = state_36439__$1;
(statearr_36473_38398[(2)] = null);

(statearr_36473_38398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (9))){
var state_36439__$1 = state_36439;
var statearr_36476_38399 = state_36439__$1;
(statearr_36476_38399[(2)] = null);

(statearr_36476_38399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (5))){
var state_36439__$1 = state_36439;
var statearr_36478_38402 = state_36439__$1;
(statearr_36478_38402[(2)] = null);

(statearr_36478_38402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (10))){
var inst_36431 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36483_38403 = state_36439__$1;
(statearr_36483_38403[(2)] = inst_36431);

(statearr_36483_38403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (8))){
var inst_36421 = (state_36439[(7)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36439__$1,(11),out,inst_36421);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_36491 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36491[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_36491[(1)] = (1));

return statearr_36491;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_36439){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36439);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36496){var ex__32671__auto__ = e36496;
var statearr_36497_38405 = state_36439;
(statearr_36497_38405[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36439[(4)]))){
var statearr_36498_38406 = state_36439;
(statearr_36498_38406[(1)] = cljs.core.first((state_36439[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38407 = state_36439;
state_36439 = G__38407;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36499 = f__33239__auto__();
(statearr_36499[(6)] = c__33238__auto___38380);

return statearr_36499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36503 = (function (f,ch,meta36504){
this.f = f;
this.ch = ch;
this.meta36504 = meta36504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36505,meta36504__$1){
var self__ = this;
var _36505__$1 = this;
return (new cljs.core.async.t_cljs$core$async36503(self__.f,self__.ch,meta36504__$1));
}));

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36505){
var self__ = this;
var _36505__$1 = this;
return self__.meta36504;
}));

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36523 = (function (f,ch,meta36504,_,fn1,meta36524){
this.f = f;
this.ch = ch;
this.meta36504 = meta36504;
this._ = _;
this.fn1 = fn1;
this.meta36524 = meta36524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36525,meta36524__$1){
var self__ = this;
var _36525__$1 = this;
return (new cljs.core.async.t_cljs$core$async36523(self__.f,self__.ch,self__.meta36504,self__._,self__.fn1,meta36524__$1));
}));

(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36525){
var self__ = this;
var _36525__$1 = this;
return self__.meta36524;
}));

(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36500_SHARP_){
var G__36532 = (((p1__36500_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36500_SHARP_) : self__.f.call(null,p1__36500_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36532) : f1.call(null,G__36532));
});
}));

(cljs.core.async.t_cljs$core$async36523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36504","meta36504",-1592289682,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36503","cljs.core.async/t_cljs$core$async36503",946789700,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36524","meta36524",1831512125,null)], null);
}));

(cljs.core.async.t_cljs$core$async36523.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36523");

(cljs.core.async.t_cljs$core$async36523.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36523");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36523.
 */
cljs.core.async.__GT_t_cljs$core$async36523 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36523(f__$1,ch__$1,meta36504__$1,___$2,fn1__$1,meta36524){
return (new cljs.core.async.t_cljs$core$async36523(f__$1,ch__$1,meta36504__$1,___$2,fn1__$1,meta36524));
});

}

return (new cljs.core.async.t_cljs$core$async36523(self__.f,self__.ch,self__.meta36504,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36561 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36561) : self__.f.call(null,G__36561));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36504","meta36504",-1592289682,null)], null);
}));

(cljs.core.async.t_cljs$core$async36503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36503");

(cljs.core.async.t_cljs$core$async36503.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36503.
 */
cljs.core.async.__GT_t_cljs$core$async36503 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36503(f__$1,ch__$1,meta36504){
return (new cljs.core.async.t_cljs$core$async36503(f__$1,ch__$1,meta36504));
});

}

return (new cljs.core.async.t_cljs$core$async36503(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36573 = (function (f,ch,meta36574){
this.f = f;
this.ch = ch;
this.meta36574 = meta36574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36575,meta36574__$1){
var self__ = this;
var _36575__$1 = this;
return (new cljs.core.async.t_cljs$core$async36573(self__.f,self__.ch,meta36574__$1));
}));

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36575){
var self__ = this;
var _36575__$1 = this;
return self__.meta36574;
}));

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36574","meta36574",-1393462341,null)], null);
}));

(cljs.core.async.t_cljs$core$async36573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36573");

(cljs.core.async.t_cljs$core$async36573.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36573.
 */
cljs.core.async.__GT_t_cljs$core$async36573 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36573(f__$1,ch__$1,meta36574){
return (new cljs.core.async.t_cljs$core$async36573(f__$1,ch__$1,meta36574));
});

}

return (new cljs.core.async.t_cljs$core$async36573(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36590 = (function (p,ch,meta36591){
this.p = p;
this.ch = ch;
this.meta36591 = meta36591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36592,meta36591__$1){
var self__ = this;
var _36592__$1 = this;
return (new cljs.core.async.t_cljs$core$async36590(self__.p,self__.ch,meta36591__$1));
}));

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36592){
var self__ = this;
var _36592__$1 = this;
return self__.meta36591;
}));

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36591","meta36591",-2041917641,null)], null);
}));

(cljs.core.async.t_cljs$core$async36590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36590");

(cljs.core.async.t_cljs$core$async36590.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36590.
 */
cljs.core.async.__GT_t_cljs$core$async36590 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36590(p__$1,ch__$1,meta36591){
return (new cljs.core.async.t_cljs$core$async36590(p__$1,ch__$1,meta36591));
});

}

return (new cljs.core.async.t_cljs$core$async36590(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36626 = arguments.length;
switch (G__36626) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36657){
var state_val_36658 = (state_36657[(1)]);
if((state_val_36658 === (7))){
var inst_36651 = (state_36657[(2)]);
var state_36657__$1 = state_36657;
var statearr_36666_38514 = state_36657__$1;
(statearr_36666_38514[(2)] = inst_36651);

(statearr_36666_38514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (1))){
var state_36657__$1 = state_36657;
var statearr_36671_38515 = state_36657__$1;
(statearr_36671_38515[(2)] = null);

(statearr_36671_38515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (4))){
var inst_36637 = (state_36657[(7)]);
var inst_36637__$1 = (state_36657[(2)]);
var inst_36638 = (inst_36637__$1 == null);
var state_36657__$1 = (function (){var statearr_36675 = state_36657;
(statearr_36675[(7)] = inst_36637__$1);

return statearr_36675;
})();
if(cljs.core.truth_(inst_36638)){
var statearr_36677_38523 = state_36657__$1;
(statearr_36677_38523[(1)] = (5));

} else {
var statearr_36678_38524 = state_36657__$1;
(statearr_36678_38524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (6))){
var inst_36637 = (state_36657[(7)]);
var inst_36642 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36637) : p.call(null,inst_36637));
var state_36657__$1 = state_36657;
if(cljs.core.truth_(inst_36642)){
var statearr_36684_38528 = state_36657__$1;
(statearr_36684_38528[(1)] = (8));

} else {
var statearr_36689_38529 = state_36657__$1;
(statearr_36689_38529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (3))){
var inst_36654 = (state_36657[(2)]);
var state_36657__$1 = state_36657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36657__$1,inst_36654);
} else {
if((state_val_36658 === (2))){
var state_36657__$1 = state_36657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36657__$1,(4),ch);
} else {
if((state_val_36658 === (11))){
var inst_36645 = (state_36657[(2)]);
var state_36657__$1 = state_36657;
var statearr_36690_38535 = state_36657__$1;
(statearr_36690_38535[(2)] = inst_36645);

(statearr_36690_38535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (9))){
var state_36657__$1 = state_36657;
var statearr_36691_38538 = state_36657__$1;
(statearr_36691_38538[(2)] = null);

(statearr_36691_38538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (5))){
var inst_36640 = cljs.core.async.close_BANG_(out);
var state_36657__$1 = state_36657;
var statearr_36692_38547 = state_36657__$1;
(statearr_36692_38547[(2)] = inst_36640);

(statearr_36692_38547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (10))){
var inst_36648 = (state_36657[(2)]);
var state_36657__$1 = (function (){var statearr_36695 = state_36657;
(statearr_36695[(8)] = inst_36648);

return statearr_36695;
})();
var statearr_36696_38548 = state_36657__$1;
(statearr_36696_38548[(2)] = null);

(statearr_36696_38548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36658 === (8))){
var inst_36637 = (state_36657[(7)]);
var state_36657__$1 = state_36657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36657__$1,(11),out,inst_36637);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_36702 = [null,null,null,null,null,null,null,null,null];
(statearr_36702[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_36702[(1)] = (1));

return statearr_36702;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_36657){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36657);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36707){var ex__32671__auto__ = e36707;
var statearr_36708_38561 = state_36657;
(statearr_36708_38561[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36657[(4)]))){
var statearr_36713_38566 = state_36657;
(statearr_36713_38566[(1)] = cljs.core.first((state_36657[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38568 = state_36657;
state_36657 = G__38568;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_36657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_36657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36714 = f__33239__auto__();
(statearr_36714[(6)] = c__33238__auto___38512);

return statearr_36714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36716 = arguments.length;
switch (G__36716) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36788){
var state_val_36789 = (state_36788[(1)]);
if((state_val_36789 === (7))){
var inst_36782 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36793_38572 = state_36788__$1;
(statearr_36793_38572[(2)] = inst_36782);

(statearr_36793_38572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (20))){
var inst_36746 = (state_36788[(7)]);
var inst_36761 = (state_36788[(2)]);
var inst_36762 = cljs.core.next(inst_36746);
var inst_36732 = inst_36762;
var inst_36733 = null;
var inst_36734 = (0);
var inst_36735 = (0);
var state_36788__$1 = (function (){var statearr_36794 = state_36788;
(statearr_36794[(8)] = inst_36761);

(statearr_36794[(9)] = inst_36734);

(statearr_36794[(10)] = inst_36732);

(statearr_36794[(11)] = inst_36735);

(statearr_36794[(12)] = inst_36733);

return statearr_36794;
})();
var statearr_36795_38574 = state_36788__$1;
(statearr_36795_38574[(2)] = null);

(statearr_36795_38574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (1))){
var state_36788__$1 = state_36788;
var statearr_36797_38576 = state_36788__$1;
(statearr_36797_38576[(2)] = null);

(statearr_36797_38576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (4))){
var inst_36721 = (state_36788[(13)]);
var inst_36721__$1 = (state_36788[(2)]);
var inst_36722 = (inst_36721__$1 == null);
var state_36788__$1 = (function (){var statearr_36798 = state_36788;
(statearr_36798[(13)] = inst_36721__$1);

return statearr_36798;
})();
if(cljs.core.truth_(inst_36722)){
var statearr_36799_38580 = state_36788__$1;
(statearr_36799_38580[(1)] = (5));

} else {
var statearr_36800_38581 = state_36788__$1;
(statearr_36800_38581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (15))){
var state_36788__$1 = state_36788;
var statearr_36804_38582 = state_36788__$1;
(statearr_36804_38582[(2)] = null);

(statearr_36804_38582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (21))){
var state_36788__$1 = state_36788;
var statearr_36805_38583 = state_36788__$1;
(statearr_36805_38583[(2)] = null);

(statearr_36805_38583[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (13))){
var inst_36734 = (state_36788[(9)]);
var inst_36732 = (state_36788[(10)]);
var inst_36735 = (state_36788[(11)]);
var inst_36733 = (state_36788[(12)]);
var inst_36742 = (state_36788[(2)]);
var inst_36743 = (inst_36735 + (1));
var tmp36801 = inst_36734;
var tmp36802 = inst_36732;
var tmp36803 = inst_36733;
var inst_36732__$1 = tmp36802;
var inst_36733__$1 = tmp36803;
var inst_36734__$1 = tmp36801;
var inst_36735__$1 = inst_36743;
var state_36788__$1 = (function (){var statearr_36806 = state_36788;
(statearr_36806[(9)] = inst_36734__$1);

(statearr_36806[(10)] = inst_36732__$1);

(statearr_36806[(11)] = inst_36735__$1);

(statearr_36806[(14)] = inst_36742);

(statearr_36806[(12)] = inst_36733__$1);

return statearr_36806;
})();
var statearr_36807_38586 = state_36788__$1;
(statearr_36807_38586[(2)] = null);

(statearr_36807_38586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (22))){
var state_36788__$1 = state_36788;
var statearr_36808_38587 = state_36788__$1;
(statearr_36808_38587[(2)] = null);

(statearr_36808_38587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (6))){
var inst_36721 = (state_36788[(13)]);
var inst_36730 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36721) : f.call(null,inst_36721));
var inst_36731 = cljs.core.seq(inst_36730);
var inst_36732 = inst_36731;
var inst_36733 = null;
var inst_36734 = (0);
var inst_36735 = (0);
var state_36788__$1 = (function (){var statearr_36819 = state_36788;
(statearr_36819[(9)] = inst_36734);

(statearr_36819[(10)] = inst_36732);

(statearr_36819[(11)] = inst_36735);

(statearr_36819[(12)] = inst_36733);

return statearr_36819;
})();
var statearr_36824_38591 = state_36788__$1;
(statearr_36824_38591[(2)] = null);

(statearr_36824_38591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (17))){
var inst_36746 = (state_36788[(7)]);
var inst_36752 = cljs.core.chunk_first(inst_36746);
var inst_36755 = cljs.core.chunk_rest(inst_36746);
var inst_36756 = cljs.core.count(inst_36752);
var inst_36732 = inst_36755;
var inst_36733 = inst_36752;
var inst_36734 = inst_36756;
var inst_36735 = (0);
var state_36788__$1 = (function (){var statearr_36831 = state_36788;
(statearr_36831[(9)] = inst_36734);

(statearr_36831[(10)] = inst_36732);

(statearr_36831[(11)] = inst_36735);

(statearr_36831[(12)] = inst_36733);

return statearr_36831;
})();
var statearr_36832_38592 = state_36788__$1;
(statearr_36832_38592[(2)] = null);

(statearr_36832_38592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (3))){
var inst_36784 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36788__$1,inst_36784);
} else {
if((state_val_36789 === (12))){
var inst_36771 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36834_38595 = state_36788__$1;
(statearr_36834_38595[(2)] = inst_36771);

(statearr_36834_38595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (2))){
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36788__$1,(4),in$);
} else {
if((state_val_36789 === (23))){
var inst_36780 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36845_38596 = state_36788__$1;
(statearr_36845_38596[(2)] = inst_36780);

(statearr_36845_38596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (19))){
var inst_36765 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36846_38597 = state_36788__$1;
(statearr_36846_38597[(2)] = inst_36765);

(statearr_36846_38597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (11))){
var inst_36732 = (state_36788[(10)]);
var inst_36746 = (state_36788[(7)]);
var inst_36746__$1 = cljs.core.seq(inst_36732);
var state_36788__$1 = (function (){var statearr_36847 = state_36788;
(statearr_36847[(7)] = inst_36746__$1);

return statearr_36847;
})();
if(inst_36746__$1){
var statearr_36849_38599 = state_36788__$1;
(statearr_36849_38599[(1)] = (14));

} else {
var statearr_36850_38601 = state_36788__$1;
(statearr_36850_38601[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (9))){
var inst_36773 = (state_36788[(2)]);
var inst_36775 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36788__$1 = (function (){var statearr_36856 = state_36788;
(statearr_36856[(15)] = inst_36773);

return statearr_36856;
})();
if(cljs.core.truth_(inst_36775)){
var statearr_36857_38602 = state_36788__$1;
(statearr_36857_38602[(1)] = (21));

} else {
var statearr_36860_38607 = state_36788__$1;
(statearr_36860_38607[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (5))){
var inst_36724 = cljs.core.async.close_BANG_(out);
var state_36788__$1 = state_36788;
var statearr_36863_38608 = state_36788__$1;
(statearr_36863_38608[(2)] = inst_36724);

(statearr_36863_38608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (14))){
var inst_36746 = (state_36788[(7)]);
var inst_36750 = cljs.core.chunked_seq_QMARK_(inst_36746);
var state_36788__$1 = state_36788;
if(inst_36750){
var statearr_36864_38613 = state_36788__$1;
(statearr_36864_38613[(1)] = (17));

} else {
var statearr_36865_38614 = state_36788__$1;
(statearr_36865_38614[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (16))){
var inst_36769 = (state_36788[(2)]);
var state_36788__$1 = state_36788;
var statearr_36867_38615 = state_36788__$1;
(statearr_36867_38615[(2)] = inst_36769);

(statearr_36867_38615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36789 === (10))){
var inst_36735 = (state_36788[(11)]);
var inst_36733 = (state_36788[(12)]);
var inst_36740 = cljs.core._nth(inst_36733,inst_36735);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36788__$1,(13),out,inst_36740);
} else {
if((state_val_36789 === (18))){
var inst_36746 = (state_36788[(7)]);
var inst_36759 = cljs.core.first(inst_36746);
var state_36788__$1 = state_36788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36788__$1,(20),out,inst_36759);
} else {
if((state_val_36789 === (8))){
var inst_36734 = (state_36788[(9)]);
var inst_36735 = (state_36788[(11)]);
var inst_36737 = (inst_36735 < inst_36734);
var inst_36738 = inst_36737;
var state_36788__$1 = state_36788;
if(cljs.core.truth_(inst_36738)){
var statearr_36874_38617 = state_36788__$1;
(statearr_36874_38617[(1)] = (10));

} else {
var statearr_36878_38618 = state_36788__$1;
(statearr_36878_38618[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____0 = (function (){
var statearr_36883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36883[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__);

(statearr_36883[(1)] = (1));

return statearr_36883;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____1 = (function (state_36788){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36788);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e36887){var ex__32671__auto__ = e36887;
var statearr_36888_38629 = state_36788;
(statearr_36888_38629[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36788[(4)]))){
var statearr_36891_38630 = state_36788;
(statearr_36891_38630[(1)] = cljs.core.first((state_36788[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38636 = state_36788;
state_36788 = G__38636;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__ = function(state_36788){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____1.call(this,state_36788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32668__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_36894 = f__33239__auto__();
(statearr_36894[(6)] = c__33238__auto__);

return statearr_36894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));

return c__33238__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36906 = arguments.length;
switch (G__36906) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36913 = arguments.length;
switch (G__36913) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36921 = arguments.length;
switch (G__36921) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_36954){
var state_val_36955 = (state_36954[(1)]);
if((state_val_36955 === (7))){
var inst_36949 = (state_36954[(2)]);
var state_36954__$1 = state_36954;
var statearr_36959_38663 = state_36954__$1;
(statearr_36959_38663[(2)] = inst_36949);

(statearr_36959_38663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (1))){
var inst_36931 = null;
var state_36954__$1 = (function (){var statearr_36961 = state_36954;
(statearr_36961[(7)] = inst_36931);

return statearr_36961;
})();
var statearr_36962_38669 = state_36954__$1;
(statearr_36962_38669[(2)] = null);

(statearr_36962_38669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (4))){
var inst_36934 = (state_36954[(8)]);
var inst_36934__$1 = (state_36954[(2)]);
var inst_36935 = (inst_36934__$1 == null);
var inst_36936 = cljs.core.not(inst_36935);
var state_36954__$1 = (function (){var statearr_36963 = state_36954;
(statearr_36963[(8)] = inst_36934__$1);

return statearr_36963;
})();
if(inst_36936){
var statearr_36964_38670 = state_36954__$1;
(statearr_36964_38670[(1)] = (5));

} else {
var statearr_36965_38671 = state_36954__$1;
(statearr_36965_38671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (6))){
var state_36954__$1 = state_36954;
var statearr_36975_38672 = state_36954__$1;
(statearr_36975_38672[(2)] = null);

(statearr_36975_38672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (3))){
var inst_36951 = (state_36954[(2)]);
var inst_36952 = cljs.core.async.close_BANG_(out);
var state_36954__$1 = (function (){var statearr_36976 = state_36954;
(statearr_36976[(9)] = inst_36951);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36954__$1,inst_36952);
} else {
if((state_val_36955 === (2))){
var state_36954__$1 = state_36954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36954__$1,(4),ch);
} else {
if((state_val_36955 === (11))){
var inst_36934 = (state_36954[(8)]);
var inst_36943 = (state_36954[(2)]);
var inst_36931 = inst_36934;
var state_36954__$1 = (function (){var statearr_36982 = state_36954;
(statearr_36982[(10)] = inst_36943);

(statearr_36982[(7)] = inst_36931);

return statearr_36982;
})();
var statearr_36983_38677 = state_36954__$1;
(statearr_36983_38677[(2)] = null);

(statearr_36983_38677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (9))){
var inst_36934 = (state_36954[(8)]);
var state_36954__$1 = state_36954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36954__$1,(11),out,inst_36934);
} else {
if((state_val_36955 === (5))){
var inst_36934 = (state_36954[(8)]);
var inst_36931 = (state_36954[(7)]);
var inst_36938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36934,inst_36931);
var state_36954__$1 = state_36954;
if(inst_36938){
var statearr_36987_38678 = state_36954__$1;
(statearr_36987_38678[(1)] = (8));

} else {
var statearr_36992_38679 = state_36954__$1;
(statearr_36992_38679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (10))){
var inst_36946 = (state_36954[(2)]);
var state_36954__$1 = state_36954;
var statearr_36998_38680 = state_36954__$1;
(statearr_36998_38680[(2)] = inst_36946);

(statearr_36998_38680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36955 === (8))){
var inst_36931 = (state_36954[(7)]);
var tmp36985 = inst_36931;
var inst_36931__$1 = tmp36985;
var state_36954__$1 = (function (){var statearr_37019 = state_36954;
(statearr_37019[(7)] = inst_36931__$1);

return statearr_37019;
})();
var statearr_37020_38681 = state_36954__$1;
(statearr_37020_38681[(2)] = null);

(statearr_37020_38681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_37021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37021[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_37021[(1)] = (1));

return statearr_37021;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_36954){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_36954);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e37022){var ex__32671__auto__ = e37022;
var statearr_37023_38691 = state_36954;
(statearr_37023_38691[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_36954[(4)]))){
var statearr_37025_38694 = state_36954;
(statearr_37025_38694[(1)] = cljs.core.first((state_36954[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38701 = state_36954;
state_36954 = G__38701;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_36954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_36954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_37032 = f__33239__auto__();
(statearr_37032[(6)] = c__33238__auto___38661);

return statearr_37032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37035 = arguments.length;
switch (G__37035) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_37075){
var state_val_37076 = (state_37075[(1)]);
if((state_val_37076 === (7))){
var inst_37070 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
var statearr_37079_38719 = state_37075__$1;
(statearr_37079_38719[(2)] = inst_37070);

(statearr_37079_38719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (1))){
var inst_37037 = (new Array(n));
var inst_37038 = inst_37037;
var inst_37039 = (0);
var state_37075__$1 = (function (){var statearr_37080 = state_37075;
(statearr_37080[(7)] = inst_37038);

(statearr_37080[(8)] = inst_37039);

return statearr_37080;
})();
var statearr_37081_38720 = state_37075__$1;
(statearr_37081_38720[(2)] = null);

(statearr_37081_38720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (4))){
var inst_37042 = (state_37075[(9)]);
var inst_37042__$1 = (state_37075[(2)]);
var inst_37043 = (inst_37042__$1 == null);
var inst_37044 = cljs.core.not(inst_37043);
var state_37075__$1 = (function (){var statearr_37082 = state_37075;
(statearr_37082[(9)] = inst_37042__$1);

return statearr_37082;
})();
if(inst_37044){
var statearr_37083_38736 = state_37075__$1;
(statearr_37083_38736[(1)] = (5));

} else {
var statearr_37084_38743 = state_37075__$1;
(statearr_37084_38743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (15))){
var inst_37064 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
var statearr_37085_38744 = state_37075__$1;
(statearr_37085_38744[(2)] = inst_37064);

(statearr_37085_38744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (13))){
var state_37075__$1 = state_37075;
var statearr_37090_38746 = state_37075__$1;
(statearr_37090_38746[(2)] = null);

(statearr_37090_38746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (6))){
var inst_37039 = (state_37075[(8)]);
var inst_37060 = (inst_37039 > (0));
var state_37075__$1 = state_37075;
if(cljs.core.truth_(inst_37060)){
var statearr_37092_38751 = state_37075__$1;
(statearr_37092_38751[(1)] = (12));

} else {
var statearr_37093_38752 = state_37075__$1;
(statearr_37093_38752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (3))){
var inst_37072 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37075__$1,inst_37072);
} else {
if((state_val_37076 === (12))){
var inst_37038 = (state_37075[(7)]);
var inst_37062 = cljs.core.vec(inst_37038);
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37075__$1,(15),out,inst_37062);
} else {
if((state_val_37076 === (2))){
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37075__$1,(4),ch);
} else {
if((state_val_37076 === (11))){
var inst_37054 = (state_37075[(2)]);
var inst_37055 = (new Array(n));
var inst_37038 = inst_37055;
var inst_37039 = (0);
var state_37075__$1 = (function (){var statearr_37096 = state_37075;
(statearr_37096[(7)] = inst_37038);

(statearr_37096[(8)] = inst_37039);

(statearr_37096[(10)] = inst_37054);

return statearr_37096;
})();
var statearr_37097_38763 = state_37075__$1;
(statearr_37097_38763[(2)] = null);

(statearr_37097_38763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (9))){
var inst_37038 = (state_37075[(7)]);
var inst_37052 = cljs.core.vec(inst_37038);
var state_37075__$1 = state_37075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37075__$1,(11),out,inst_37052);
} else {
if((state_val_37076 === (5))){
var inst_37042 = (state_37075[(9)]);
var inst_37038 = (state_37075[(7)]);
var inst_37047 = (state_37075[(11)]);
var inst_37039 = (state_37075[(8)]);
var inst_37046 = (inst_37038[inst_37039] = inst_37042);
var inst_37047__$1 = (inst_37039 + (1));
var inst_37048 = (inst_37047__$1 < n);
var state_37075__$1 = (function (){var statearr_37102 = state_37075;
(statearr_37102[(12)] = inst_37046);

(statearr_37102[(11)] = inst_37047__$1);

return statearr_37102;
})();
if(cljs.core.truth_(inst_37048)){
var statearr_37103_38771 = state_37075__$1;
(statearr_37103_38771[(1)] = (8));

} else {
var statearr_37106_38773 = state_37075__$1;
(statearr_37106_38773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (14))){
var inst_37067 = (state_37075[(2)]);
var inst_37068 = cljs.core.async.close_BANG_(out);
var state_37075__$1 = (function (){var statearr_37109 = state_37075;
(statearr_37109[(13)] = inst_37067);

return statearr_37109;
})();
var statearr_37110_38777 = state_37075__$1;
(statearr_37110_38777[(2)] = inst_37068);

(statearr_37110_38777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (10))){
var inst_37058 = (state_37075[(2)]);
var state_37075__$1 = state_37075;
var statearr_37111_38780 = state_37075__$1;
(statearr_37111_38780[(2)] = inst_37058);

(statearr_37111_38780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37076 === (8))){
var inst_37038 = (state_37075[(7)]);
var inst_37047 = (state_37075[(11)]);
var tmp37108 = inst_37038;
var inst_37038__$1 = tmp37108;
var inst_37039 = inst_37047;
var state_37075__$1 = (function (){var statearr_37122 = state_37075;
(statearr_37122[(7)] = inst_37038__$1);

(statearr_37122[(8)] = inst_37039);

return statearr_37122;
})();
var statearr_37123_38785 = state_37075__$1;
(statearr_37123_38785[(2)] = null);

(statearr_37123_38785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_37124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37124[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_37124[(1)] = (1));

return statearr_37124;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_37075){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_37075);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e37126){var ex__32671__auto__ = e37126;
var statearr_37127_38793 = state_37075;
(statearr_37127_38793[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_37075[(4)]))){
var statearr_37128_38794 = state_37075;
(statearr_37128_38794[(1)] = cljs.core.first((state_37075[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38795 = state_37075;
state_37075 = G__38795;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_37075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_37075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_37129 = f__33239__auto__();
(statearr_37129[(6)] = c__33238__auto___38708);

return statearr_37129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37148 = arguments.length;
switch (G__37148) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33238__auto___38801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33239__auto__ = (function (){var switch__32667__auto__ = (function (state_37207){
var state_val_37208 = (state_37207[(1)]);
if((state_val_37208 === (7))){
var inst_37203 = (state_37207[(2)]);
var state_37207__$1 = state_37207;
var statearr_37209_38803 = state_37207__$1;
(statearr_37209_38803[(2)] = inst_37203);

(statearr_37209_38803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (1))){
var inst_37155 = [];
var inst_37156 = inst_37155;
var inst_37157 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37207__$1 = (function (){var statearr_37210 = state_37207;
(statearr_37210[(7)] = inst_37156);

(statearr_37210[(8)] = inst_37157);

return statearr_37210;
})();
var statearr_37211_38804 = state_37207__$1;
(statearr_37211_38804[(2)] = null);

(statearr_37211_38804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (4))){
var inst_37167 = (state_37207[(9)]);
var inst_37167__$1 = (state_37207[(2)]);
var inst_37168 = (inst_37167__$1 == null);
var inst_37169 = cljs.core.not(inst_37168);
var state_37207__$1 = (function (){var statearr_37215 = state_37207;
(statearr_37215[(9)] = inst_37167__$1);

return statearr_37215;
})();
if(inst_37169){
var statearr_37216_38808 = state_37207__$1;
(statearr_37216_38808[(1)] = (5));

} else {
var statearr_37218_38809 = state_37207__$1;
(statearr_37218_38809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (15))){
var inst_37156 = (state_37207[(7)]);
var inst_37195 = cljs.core.vec(inst_37156);
var state_37207__$1 = state_37207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37207__$1,(18),out,inst_37195);
} else {
if((state_val_37208 === (13))){
var inst_37189 = (state_37207[(2)]);
var state_37207__$1 = state_37207;
var statearr_37224_38810 = state_37207__$1;
(statearr_37224_38810[(2)] = inst_37189);

(statearr_37224_38810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (6))){
var inst_37156 = (state_37207[(7)]);
var inst_37191 = inst_37156.length;
var inst_37192 = (inst_37191 > (0));
var state_37207__$1 = state_37207;
if(cljs.core.truth_(inst_37192)){
var statearr_37227_38811 = state_37207__$1;
(statearr_37227_38811[(1)] = (15));

} else {
var statearr_37228_38812 = state_37207__$1;
(statearr_37228_38812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (17))){
var inst_37200 = (state_37207[(2)]);
var inst_37201 = cljs.core.async.close_BANG_(out);
var state_37207__$1 = (function (){var statearr_37229 = state_37207;
(statearr_37229[(10)] = inst_37200);

return statearr_37229;
})();
var statearr_37230_38813 = state_37207__$1;
(statearr_37230_38813[(2)] = inst_37201);

(statearr_37230_38813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (3))){
var inst_37205 = (state_37207[(2)]);
var state_37207__$1 = state_37207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37207__$1,inst_37205);
} else {
if((state_val_37208 === (12))){
var inst_37156 = (state_37207[(7)]);
var inst_37182 = cljs.core.vec(inst_37156);
var state_37207__$1 = state_37207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37207__$1,(14),out,inst_37182);
} else {
if((state_val_37208 === (2))){
var state_37207__$1 = state_37207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37207__$1,(4),ch);
} else {
if((state_val_37208 === (11))){
var inst_37156 = (state_37207[(7)]);
var inst_37171 = (state_37207[(11)]);
var inst_37167 = (state_37207[(9)]);
var inst_37179 = inst_37156.push(inst_37167);
var tmp37232 = inst_37156;
var inst_37156__$1 = tmp37232;
var inst_37157 = inst_37171;
var state_37207__$1 = (function (){var statearr_37240 = state_37207;
(statearr_37240[(7)] = inst_37156__$1);

(statearr_37240[(12)] = inst_37179);

(statearr_37240[(8)] = inst_37157);

return statearr_37240;
})();
var statearr_37244_38817 = state_37207__$1;
(statearr_37244_38817[(2)] = null);

(statearr_37244_38817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (9))){
var inst_37157 = (state_37207[(8)]);
var inst_37175 = cljs.core.keyword_identical_QMARK_(inst_37157,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37207__$1 = state_37207;
var statearr_37250_38818 = state_37207__$1;
(statearr_37250_38818[(2)] = inst_37175);

(statearr_37250_38818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (5))){
var inst_37172 = (state_37207[(13)]);
var inst_37157 = (state_37207[(8)]);
var inst_37171 = (state_37207[(11)]);
var inst_37167 = (state_37207[(9)]);
var inst_37171__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37167) : f.call(null,inst_37167));
var inst_37172__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37171__$1,inst_37157);
var state_37207__$1 = (function (){var statearr_37251 = state_37207;
(statearr_37251[(13)] = inst_37172__$1);

(statearr_37251[(11)] = inst_37171__$1);

return statearr_37251;
})();
if(inst_37172__$1){
var statearr_37256_38820 = state_37207__$1;
(statearr_37256_38820[(1)] = (8));

} else {
var statearr_37257_38821 = state_37207__$1;
(statearr_37257_38821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (14))){
var inst_37171 = (state_37207[(11)]);
var inst_37167 = (state_37207[(9)]);
var inst_37184 = (state_37207[(2)]);
var inst_37185 = [];
var inst_37186 = inst_37185.push(inst_37167);
var inst_37156 = inst_37185;
var inst_37157 = inst_37171;
var state_37207__$1 = (function (){var statearr_37258 = state_37207;
(statearr_37258[(7)] = inst_37156);

(statearr_37258[(14)] = inst_37184);

(statearr_37258[(8)] = inst_37157);

(statearr_37258[(15)] = inst_37186);

return statearr_37258;
})();
var statearr_37259_38822 = state_37207__$1;
(statearr_37259_38822[(2)] = null);

(statearr_37259_38822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (16))){
var state_37207__$1 = state_37207;
var statearr_37260_38827 = state_37207__$1;
(statearr_37260_38827[(2)] = null);

(statearr_37260_38827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (10))){
var inst_37177 = (state_37207[(2)]);
var state_37207__$1 = state_37207;
if(cljs.core.truth_(inst_37177)){
var statearr_37263_38834 = state_37207__$1;
(statearr_37263_38834[(1)] = (11));

} else {
var statearr_37264_38835 = state_37207__$1;
(statearr_37264_38835[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (18))){
var inst_37197 = (state_37207[(2)]);
var state_37207__$1 = state_37207;
var statearr_37265_38836 = state_37207__$1;
(statearr_37265_38836[(2)] = inst_37197);

(statearr_37265_38836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37208 === (8))){
var inst_37172 = (state_37207[(13)]);
var state_37207__$1 = state_37207;
var statearr_37266_38837 = state_37207__$1;
(statearr_37266_38837[(2)] = inst_37172);

(statearr_37266_38837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32668__auto__ = null;
var cljs$core$async$state_machine__32668__auto____0 = (function (){
var statearr_37274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37274[(0)] = cljs$core$async$state_machine__32668__auto__);

(statearr_37274[(1)] = (1));

return statearr_37274;
});
var cljs$core$async$state_machine__32668__auto____1 = (function (state_37207){
while(true){
var ret_value__32669__auto__ = (function (){try{while(true){
var result__32670__auto__ = switch__32667__auto__(state_37207);
if(cljs.core.keyword_identical_QMARK_(result__32670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32670__auto__;
}
break;
}
}catch (e37275){var ex__32671__auto__ = e37275;
var statearr_37277_38849 = state_37207;
(statearr_37277_38849[(2)] = ex__32671__auto__);


if(cljs.core.seq((state_37207[(4)]))){
var statearr_37278_38854 = state_37207;
(statearr_37278_38854[(1)] = cljs.core.first((state_37207[(4)])));

} else {
throw ex__32671__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38855 = state_37207;
state_37207 = G__38855;
continue;
} else {
return ret_value__32669__auto__;
}
break;
}
});
cljs$core$async$state_machine__32668__auto__ = function(state_37207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32668__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32668__auto____1.call(this,state_37207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32668__auto____0;
cljs$core$async$state_machine__32668__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32668__auto____1;
return cljs$core$async$state_machine__32668__auto__;
})()
})();
var state__33240__auto__ = (function (){var statearr_37281 = f__33239__auto__();
(statearr_37281[(6)] = c__33238__auto___38801);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
