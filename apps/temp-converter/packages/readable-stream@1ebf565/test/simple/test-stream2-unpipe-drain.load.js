montageDefine("1ebf565","test/simple/test-stream2-unpipe-drain",{dependencies:["../common.js","assert","../../readable","crypto","util"],factory:function(e){function t(){i.Writable.call(this)}function n(){i.Readable.call(this),this.reads=0}e("../common.js");var r=e("assert"),i=e("../../readable"),a=e("crypto"),o=e("util");o.inherits(t,i.Writable),t.prototype._write=function(){console.log("write called")};var s=new t;o.inherits(n,i.Readable),n.prototype._read=function(e){this.reads+=1,this.push(a.randomBytes(e))};var l=new n,u=new n;l.pipe(s),l.once("readable",function(){process.nextTick(function(){u.pipe(s),u.once("readable",function(){process.nextTick(function(){l.unpipe(s)})})})}),process.on("exit",function(){r.equal(l.reads,2),r.equal(u.reads,2)})}});