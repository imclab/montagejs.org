var Montage=require("montage").Montage,Component=require("montage/ui/component").Component,undoManager=require("montage/core/undo-manager").defaultUndoManager,Promise=require("montage/core/promise").Promise;exports.ValueBasedEffect=Montage.create(Component,{name:{value:null},enabled:{value:!1},defaultValue:{value:null},_value:{value:0},value:{value:0},_originalSliderValue:{value:null},handleValueSliderMontage_range_interaction_start:{value:function(){this._originalSliderValue=this.sliderValue}},handleValueSliderMontage_range_interaction_end:{value:function(){this._commitSliderValue(),this._originalSliderValue=null}},_commitSliderValue:{value:function(e){var t=this._originalSliderValue?this._originalSliderValue:this.sliderValue;this.sliderValue!==this._originalSliderValue&&undoManager.register(this.name.toLowerCase()+" change",Promise.resolve([this._commitSliderValue,this,t])),typeof e!="undefined"&&(this.sliderValue=e)}},sliderValue:{dependencies:["value"],get:function(){return this.value},set:function(e){if(e===this._value)return;this.value=e}},minValue:{value:0},maxValue:{value:100},reset:{value:function(){this.value=this.defaultValue}}});var Converter=require("montage/core/converter/converter").Converter;exports.ResetAvailableConverter=Montage.create(Converter,{defaultValue:{value:null},convert:{value:function(e){return null==this.defaultValue?!1:e!==this.defaultValue}}})