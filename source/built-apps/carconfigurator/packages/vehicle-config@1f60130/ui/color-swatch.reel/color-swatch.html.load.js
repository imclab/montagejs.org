montageDefine("1f60130","ui/color-swatch.reel/color-swatch.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n    <title>ColorSwatch</title>\n    <link rel=stylesheet type="text/css" href=color-swatch.css>\n\n    <script type="text/montage-serialization">{"colorName":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"colorName"}},"bindings":{"value":{"<-":"@owner.color.name"}}},"owner":{"properties":{"element":{"#":"ColorSwatch"},"colorChip":{"#":"colorChip"}}}}</script>\n\n</head>\n<body>\n\n    <li data-montage-id=ColorSwatch class=ColorSwatch>\n        <div data-montage-id=colorChip class=colorChip></div>\n        <span data-montage-id=colorName class=colorName></span>\n    </li>\n\n</body>\n</html>'})