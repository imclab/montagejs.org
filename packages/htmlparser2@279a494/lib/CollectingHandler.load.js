montageDefine("279a494","lib/CollectingHandler",{dependencies:["./"],factory:function(e,t,n){function a(e){this._cbs=e||{},this.events=[]}n.exports=a;var s=e("./").EVENTS;Object.keys(s).forEach(function(e){if(0===s[e])e="on"+e,a.prototype[e]=function(){this.events.push([e]),this._cbs[e]&&this._cbs[e]()};else if(1===s[e])e="on"+e,a.prototype[e]=function(t){this.events.push([e,t]),this._cbs[e]&&this._cbs[e](t)};else{if(2!==s[e])throw Error("wrong number of arguments");e="on"+e,a.prototype[e]=function(t,n){this.events.push([e,t,n]),this._cbs[e]&&this._cbs[e](t,n)}}}),a.prototype.onreset=function(){this.events=[],this._cbs.onreset&&this._cbs.onreset()},a.prototype.restart=function(){this._cbs.onreset&&this._cbs.onreset();for(var e=0,t=this.events.length;t>e;e++)if(this._cbs[this.events[e][0]]){var n=this.events[e].length;1===n?this._cbs[this.events[e][0]]():2===n?this._cbs[this.events[e][0]](this.events[e][1]):this._cbs[this.events[e][0]](this.events[e][1],this.events[e][2])}}}});