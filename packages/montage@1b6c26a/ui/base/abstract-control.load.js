montageDefine("1b6c26a","ui/base/abstract-control",{dependencies:["montage","ui/component","collections/dict"],factory:function(e,n){var t=(e("montage").Montage,e("ui/component").Component),a=e("collections/dict");n.AbstractControl=t.specialize({dispatchActionEvent:{value:function(){this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new a),this._detail}},createActionEvent:{value:function(){var e,n=document.createEvent("CustomEvent");return e=this._detail,n.initCustomEvent("action",!0,!0,e),n}}})}});