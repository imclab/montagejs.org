montageDefine("8023de4","ui/input-range.reel/input-range",{dependencies:["ui/text-input","montage/composer/press-composer"],factory:function(e,t){var n=e("ui/text-input").TextInput,i=e("montage/composer/press-composer").PressComposer,r=t.InputRange=n.specialize({prepareForActivationEvents:{value:function(){var e=new i;e.delegate=this,this.addComposer(e),e.addEventListener("pressStart",this,!1),e.addEventListener("press",this,!1),e.addEventListener("pressCancel",this,!1)}},handlePressStart:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("montage_range_interaction_start",!0,!0,null),this.dispatchEvent(e)}},handlePress:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("montage_range_interaction_end",!0,!0,null),this.dispatchEvent(e)}},surrenderPointer:{value:function(){return!1}}});r.addAttributes({max:{dataType:"number"},min:{dataType:"number"},step:null})}});