montageDefine("1d1016a","montage",{dependencies:["./node.js"],factory:function(e,t,n){typeof window!="undefined"&&(document._montageTiming={},document._montageTiming.loadStartTime=Date.now(),window.addEventListener("DOMContentLoaded",function(){var e=1e3;document._montageStartBootstrappingTimeout=setTimeout(function(){document._montageStartBootstrappingTimeout=null;var e=document.documentElement;e.classList?e.classList.add("montage-app-bootstrapping"):e.className=e.className+" montage-app-bootstrapping",document._montageTiming.bootstrappingStartTime=Date.now()},e)})),function(r){typeof e!="undefined"?r.call(typeof global!="undefined"?global:this,e,t,n):r({},{},{})}(function(e,t,n){global=this,t.initMontage=function(){var e=t.getPlatform();e.bootstrap(function(n,r,i){var s=e.getParams(),u=e.getConfig(),a=i.resolve(n.getLocation(),s.montageLocation);u.makeLoader=function(e){return t.ReelLoader(e,n.makeLoader(e))},u.makeCompiler=function(e){return t.SerializationCompiler(e,t.TemplateCompiler(e,n.makeCompiler(e)))};var f=i.resolve(u.location,s["package"]||"."),l=s.applicationHash;if(typeof BUNDLE=="object"){var c={},h=function(e){return c[e]=c[e]||r.defer()};global.bundleLoaded=function(e){h(e).resolve()};var p=r.defer();u.preloaded=p.promise;var d=r.resolve();BUNDLE.forEach(function(e){d=d.then(function(){return r.all(e.map(function(e){return o.load(e),h(e).promise}))})}),p.resolve(d.then(function(){delete BUNDLE,delete bundleLoaded}))}n.loadPackage({location:a,hash:s.montageHash},u).then(function(e){var t;return s.promiseLocation?t=i.resolve(n.getLocation(),s.promiseLocation):t=i.resolve(a,"packages/mr/packages/q"),[e,e.loadPackage({location:t,hash:s.promiseHash})]}).spread(function(t,n){t.inject("core/mini-url",i),t.inject("core/promise",{Promise:r}),n.inject("q",r),u.lint=function(e){t.async("core/jshint").then(function(t){t.JSHINT(e.text)||(console.warn("JSHint Error: "+e.location),t.JSHINT.errors.forEach(function(e){e&&(console.warn("Problem at line "+e.line+" character "+e.character+": "+e.reason),e.evidence&&console.warn("    "+e.evidence))}))}).done()},"autoPackage"in s&&t.injectPackageDescription(f,{dependencies:{montage:"*"}});if(f.slice(f.length-5)===".json"){var o=f;f=i.resolve(f,"."),t.injectPackageDescriptionLocation(f,o)}return t.loadPackage({location:f,hash:l}).then(function(n){global.require=n,global.montageRequire=t,e.initMontage(t,n,s)})}).done()})};var r=/((.*)\.reel)\/\2$/,i=function(e,t){return t};t.SerializationCompiler=function(e,t){return function(e){t(e);if(!e.factory)return;var n=e.factory;return e.factory=function(e,t,s){n.call(this,e,t,s);for(var o in t){var u=t[o];if(u instanceof Object)if(u.hasOwnProperty("_montage_metadata")&&!u._montage_metadata.isInstance)u._montage_metadata.aliases.push(o),u._montage_metadata.objectName=o;else if(!Object.isSealed(u)){var a=s.id.replace(r,i);Object.defineProperty(u,"_montage_metadata",{value:{require:e,module:a,moduleId:a,property:o,objectName:o,aliases:[o],isInstance:!1}})}}},e}};var s=/([^\/]+)\.reel$/;t.ReelLoader=function(e,t){return function(e,n){var r=s.exec(e);return r?(n.redirect=e+"/"+r[1],n):t(e,n)}},t.TemplateCompiler=function(e,t){return function(e){if(!e.location)return;var n=e.location.match(/(.*\/)?(?=[^\/]+\.html(?:\.load\.js)?$)/);if(n)return e.dependencies=e.dependencies||[],e.exports={directory:n[1],content:e.text},Object.defineProperty(e.exports,"root",{get:function(){return typeof console=="object"&&console.warn("'root' property is deprecated on template modules.  Use 'directory' instead of root[1]"),n}}),e;t(e)}},t.getPlatform=function(){if(typeof window!="undefined"&&window&&window.document)return o;if(typeof process!="undefined")return e("./node.js");throw new Error("Platform not supported.")};var o={makeResolve:function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),r=document.createElement("a");return function(i,s){t||n.appendChild(e),i=String(i);if(!/^[\w\-]+:/.test(i))throw new Error("Can't resolve from a relative location: "+JSON.stringify(i)+" "+JSON.stringify(s));var o=e.href;e.href=i,r.href=s;var u=r.href;return e.href=o,t||n.removeChild(e),u}},load:function(e){var t=document.createElement("script");t.src=e,t.onload=function(){t.parentNode.removeChild(t)},document.getElementsByTagName("head")[0].appendChild(t)},getConfig:function(){return{location:""+window.location}},getParams:function(){var e,t,n,r,i,s,o;if(!this._params){this._params={};var u=document.getElementsByTagName("script");for(e=0;e<u.length;e++){r=u[e],i=!1,r.src&&(n=r.src.match(/^(.*)montage.js(?:[\?\.]|$)/i))&&(this._params.montageLocation=n[1],i=!0),r.hasAttribute("data-montage-location")&&(this._params.montageLocation=r.getAttribute("data-montage-location"),i=!0);if(i){if(r.dataset)for(o in r.dataset)this._params[o]=r.dataset[o];else if(r.attributes)for(t=0;t<r.attributes.length;t++)s=r.attributes[t],n=s.name.match(/^data-(.*)$/),n&&(this._params[n[1]]=s.value);r.parentNode.removeChild(r);break}}}return this._params},bootstrap:function(e){function f(){document.removeEventListener("DOMContentLoaded",f,!0),r=!0,g()}function v(e){if(!d[e]&&p[e]){var t=d[e]={};p[e](v,t)}return d[e]}function m(){s=v("mini-url"),i=v("promise"),n=v("require"),delete global.bootstrap,g()}function g(){r&&n&&e(n,i,s)}var t,n,r,i,s,u=this.getParams(),a=this.makeResolve();document.readyState==="interactive"?f():document.addEventListener("DOMContentLoaded",f,!0);var l={require:"packages/mr/require.js","require/browser":"packages/mr/browser.js",promise:"packages/mr/packages/q/q.js"};if(typeof BUNDLE=="undefined"){var c=a(window.location,u.montageLocation);for(var h in l)o.load(a(c,l[h]))}var p={};global.bootstrap=function(e,t){p[e]=t,delete l[e];for(var e in l)return;delete global.bootstrap,m()},global.bootstrap("mini-url",function(e,t){t.resolve=a});var d={}},initMontage:function(e,t,n){var r=["core/event/event-manager","core/deserializer"];typeof window!="undefined"&&r.push("core/event/binding");var i=e("core/promise").Promise;return i.all(r.map(e.deepLoad)).then(function(){r.forEach(e);var i=e("core/event/event-manager").EventManager,s=e("core/deserializer").Deserializer,o,u;o=i.create().initWithWindow(window),typeof global.montageWillLoad=="function"&&global.montageWillLoad();var a=t.packageDescription.applicationPrototype,f,l;return a?(f=s.parseForModuleAndName(a),l=t.async(f.module)):l=e.async("ui/application"),l.then(function(e){u=e[f?f.name:"Application"].create(),window.document.application=u,o.application=u,u.eventManager=o,u._load(t,function(){n.module&&t.async(n.module).done()})})}).done()}};typeof window!="undefined"?global.__MONTAGE_LOADED__?console.warn("Montage already loaded!"):(global.__MONTAGE_LOADED__=!0,t.initMontage()):t.getPlatform()})}})