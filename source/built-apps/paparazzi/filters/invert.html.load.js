montageDefine("fb87e57","filters/invert.html",{text:'<!doctype html>\n\n<html>\n    <head>\n        <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n\n        <script type="text/montage-serialization">{"owner":{"prototype":"shuriken/effect/effect","properties":{"profiles":{"GLSL":{"techniques":{"invert":{"pass 0":{"x-shader/x-fragment":{"#":"filter-invert-fs"},"x-shader/x-vertex":{"#":"filter-invert-vs"}}}}}}}}}</script>\n\n    </head>\n\n<body>\n\n<script id=filter-invert-fs type="x-shader/x-fragment">\n    #ifdef GL_ES\n    precision highp float;\n    #endif\n\n    uniform sampler2D uSampler;\n    uniform float uTime;\n\n    varying vec2 vTexCoord;\n\n    void main(void)\n    {\n        vec4 frameColor = texture2D(uSampler, vTexCoord);\n        gl_FragColor = vec4(1.0-frameColor.rgb, frameColor.a);\n    }\n</script>\n\n<script id=filter-invert-vs type="x-shader/x-vertex">\n    attribute vec3 aPosition;\n    attribute vec2 aTexCoord;\n\n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjMatrix;\n\n    varying vec2 vTexCoord;\n\n    void main(void) {\n        vTexCoord = aTexCoord;\n        gl_Position = uProjMatrix * uModelViewMatrix * vec4(aPosition, 1.0);\n    }\n</script>\n\n</body>\n\n</html>'})