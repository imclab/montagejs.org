var Montage=require("montage").Montage,Converter=require("montage/core/converter/converter").Converter;exports.ValidNumberConverter=Montage.create(Converter,{convert:{value:function(e){return 0===e?!0:!!e}}})