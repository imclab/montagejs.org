montageDefine("dc1ff29","core/serialization/serializer/montage-builder",{dependencies:["montage","mousse/serialization/builder","./montage-ast"],factory:function(e,t){var n=e("montage").Montage,r=e("mousse/serialization/builder").Builder,i=e("./montage-ast"),a=n.specialize.call(r,{constructor:{value:function a(){r.call(this)}},createElementReference:{value:function(e){return(new i.ElementReference).initWithRootAndId(this._root,e)}},createModuleReference:{value:function(e){return(new i.ModuleReference).initWithRootAndModuleId(this._root,e)}}});t.MontageBuilder=a}});