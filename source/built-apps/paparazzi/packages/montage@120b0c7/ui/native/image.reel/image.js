var Montage=require("montage").Montage,Component=require("ui/component").Component,NativeControl=require("ui/native-control").NativeControl,Image=exports.Image=Montage.create(NativeControl,{});Image.addAttributes({alt:null,height:null,src:null,width:null})