function compile(e){return compile.semantics.compile(e)}var compileObserver=require("./compile-observer"),Observers=require("./observers"),Binders=require("./binders"),solve=require("./algebra"),valueSyntax={type:"value"},trueSyntax={type:"literal",value:!0};module.exports=compile,compile.semantics={compilers:{property:Binders.makePropertyBinder,get:Binders.makeGetBinder,has:Binders.makeHasBinder,only:Binders.makeOnlyBinder,rangeContent:Binders.makeRangeContentBinder,mapContent:Binders.makeMapContentBinder,reversed:Binders.makeReversedBinder,and:Binders.makeAndBinder,or:Binders.makeOrBinder},compile:function(e){var t=this.compilers;if("default"===e.type)return this.compile(e.args[0]);if("literal"===e.type){if(null==e.value)return Function.noop;throw Error("Can't bind to literal: "+e.value)}if("equals"===e.type){var n=this.compile(e.args[0]),i=compileObserver(e.args[1]);return Binders.makeEqualityBinder(n,i)}if("if"===e.type){var r=compileObserver(e.args[0]),a=this.compile(e.args[1]),o=this.compile(e.args[2]);return Binders.makeConditionalBinder(r,a,o)}if("and"===e.type||"or"===e.type){var s=solve(e.args[0],valueSyntax),l=solve(e.args[1],valueSyntax),n=this.compile(s[0]),u=this.compile(l[0]),c=compileObserver(s[1]),h=compileObserver(l[1]),d=compileObserver(e.args[0]),i=compileObserver(e.args[1]);return this.compilers[e.type](n,u,d,i,c,h)}if("everyBlock"===e.type){var p=compileObserver(e.args[0]),f=solve(e.args[1],trueSyntax),m=this.compile(f[0]),v=compileObserver(f[1]);return Binders.makeEveryBlockBinder(p,m,v)}if("rangeContent"===e.type){var g,_=compileObserver(e.args[0]);try{g=this.compile(e.args[0])}catch(b){g=Function.noop}return Binders.makeRangeContentBinder(_,g)}if("defined"===e.type){var g=this.compile(e.args[0]);return Binders.makeDefinedBinder(g)}if(t.hasOwnProperty(e.type)){var y=e.args.map(compileObserver,compileObserver.semantics);return t[e.type].apply(null,y)}throw Error("Can't compile binder for "+JSON.stringify(e.type))}};