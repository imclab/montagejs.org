montageDefine("120b0c7","data/operation",{dependencies:["montage/core","montage/logger"],factory:function(e,t,n){var r=e("montage/core").Montage,i=e("montage/logger").logger("operation"),s=null,o=t.Operation=r.create(r,{init:{value:function(){return this}},manager:{get:function(){return s===null&&(s=u.create().init()),s},set:function(e){s=e}}}),u=t.OperationManager=r.create(r,{init:{value:function(){return this}},createNoopOperation:{value:function(){return a===null&&(a=f.create().init()),a}},createInsertOperation:{value:function(){return l.create().init()}},createDeleteOperation:{value:function(){return c.create().init()}},createChangeOperation:{value:function(){return h.create().init()}}}),a=null,f=t.NoopOperation=r.create(o,{}),l=t.InsertOperation=r.create(o,{}),c=t.DeleteOperation=r.create(o,{}),h=t.ChangeOperation=r.create(o,{})}})