montageDefine("b02206b","ui/substitution.reel/substitution",{dependencies:["montage","ui/component","ui/slot.reel","core/logger"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/slot.reel").Slot,o=e("core/logger").logger("substitution");t.Substitution=r.create(s,{hasTemplate:{enumerable:!1,value:!1},switchComponents:{distinct:!0,value:{}},_switchValue:{value:null},switchValue:{get:function(){return this._switchValue},set:function(e){if(this._switchValue===e||this._isSwitchingContent)return;this._switchValue=e,this.switchComponents&&(this.content=this.switchComponents[this.switchValue])}},transition:{value:null}})}})