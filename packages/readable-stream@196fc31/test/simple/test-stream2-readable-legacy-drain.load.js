montageDefine("196fc31","test/simple/test-stream2-readable-legacy-drain",{dependencies:["../common","assert","../../readable"],factory:function(e){function t(){n(2>=h),h=0,c.emit("drain")}e("../common");var n=e("assert"),a=e("../../readable"),s=a.Readable,i=new s,r=256,o=0;i._read=function(){return i.push(++o===r?null:new Buffer(1))};var l=!1;i.on("end",function(){l=!0});var c=new a;c.writable=!0;var p=0,h=0;c.write=function(e){return p+=e.length,h+=e.length,process.nextTick(t),!1};var u=!1;c.end=function(){u=!0},i.on("readable",function(){c.emit("drain")}),i.pipe(c),process.on("exit",function(){n(l),n(u),console.error("ok")})}});