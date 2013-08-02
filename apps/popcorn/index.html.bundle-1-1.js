montageDefine("4f13e82","composer/translate-composer",{dependencies:["montage","composer/composer","core/event/event-manager"],factory:function(e,t){"use strict";var n=(e("montage").Montage,e("composer/composer").Composer),r=e("core/event/event-manager").defaultEventManager,i=t.TranslateComposer=n.specialize({_NATIVE_ELEMENTS:{value:["A","IFRAME","EMBED","OBJECT","VIDEO","AUDIO","CANVAS","LABEL","INPUT","BUTTON","SELECT","TEXTAREA","KEYGEN","DETAILS","COMMAND"]},_WHEEL_POINTER:{value:"wheel",writable:!1},_externalUpdate:{value:!0},isAnimating:{value:!1},isMoving:{value:!1},frame:{value:function(){this.isAnimating&&this._animationInterval(),this._externalUpdate=!1}},_pointerSpeedMultiplier:{value:1},pointerSpeedMultiplier:{get:function(){return this._pointerSpeedMultiplier},set:function(e){this._pointerSpeedMultiplier=e}},pointerStartEventPosition:{value:null},_shouldDispatchTranslate:{value:!1},_isSelfUpdate:{value:!1},_allowFloats:{value:!1},allowFloats:{get:function(){return this._allowFloats},set:function(e){this._allowFloats!==e&&(this._allowFloats=e,this.translateX=this._translateX,this.translateY=this._translateY)}},_translateX:{value:0},translateX:{get:function(){return this._translateX},set:function(e){if("vertical"===this._axis)this._translateX=this._minTranslateX||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;null!==this._minTranslateX&&this._minTranslateX>t&&(t=this._minTranslateX),null!==this._maxTranslateX&&t>this._maxTranslateX&&(t=this._maxTranslateX),this._isSelfUpdate||(this.isAnimating=!1),this._translateX=t}}},_translateY:{value:0},translateY:{get:function(){return this._translateY},set:function(e){if("horizontal"===this._axis)this._translateY=this._minTranslateY||0;else{var t=isNaN(e)?0:this._allowFloats?parseFloat(e):e>>0;null!==this._minTranslateY&&this._minTranslateY>t&&(t=this._minTranslateY),null!==this._maxTranslateY&&t>this._maxTranslateY&&(t=this._maxTranslateY),this._isSelfUpdate||(this.isAnimating=!1),this._translateY=t}}},_minTranslateX:{value:null},minTranslateX:{get:function(){return this._minTranslateX},set:function(e){null!==e&&(e=parseFloat(e)),this._minTranslateX!=e&&(null!==e&&e>this._translateX&&(this.translateX=e),this._minTranslateX=e)}},_maxTranslateX:{value:null},maxTranslateX:{get:function(){return this._maxTranslateX},set:function(e){null!==e&&(e=parseFloat(e)),this._maxTranslateX!=e&&(null!==e&&this._translateX>e&&(this.translateX=e),this._maxTranslateX=e)}},_minTranslateY:{value:null},minTranslateY:{get:function(){return this._minTranslateY},set:function(e){null!==e&&(e=parseFloat(e)),this._minTranslateY!=e&&(null!==e&&e>this._translateY&&(this.translateY=e),this._minTranslateY=e)}},_maxTranslateY:{value:null},maxTranslateY:{get:function(){return this._maxTranslateY},set:function(e){null!==e&&(e=parseFloat(e)),this._maxTranslateY!=e&&(null!==e&&this._translateY>e&&(this.translateY=e),this._maxTranslateY=e)}},_axis:{value:"both"},axis:{get:function(){return this._axis},set:function(e){switch(e){case"vertical":case"horizontal":this._axis=e,this.translateX=this._translateX,this.translateY=this._translateY;break;default:this._axis="both"}}},invertAxis:{depends:["invertXAxis","invertYAxis"],get:function(){return this._invertXAxis===this._invertYAxis?this._invertXAxis:null},set:function(e){this.invertXAxis=e,this.invertYAxis=e}},_invertXAxis:{value:!1},invertXAxis:{get:function(){return this._invertXAxis},set:function(e){this._invertXAxis=!!e}},_invertYAxis:{value:!1},invertYAxis:{get:function(){return this._invertYAxis},set:function(e){this._invertYAxis=!!e}},startTranslateSpeed:{value:500},startTranslateRadius:{value:8},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(e){this._hasMomentum=e?!0:!1}},__momentumDuration:{value:650},_momentumDuration:{get:function(){return this.__momentumDuration},set:function(e){this.__momentumDuration=isNaN(e)?1:e>>0,1>this.__momentumDuration&&(this.__momentumDuration=1)}},_pointerX:{value:null},_pointerY:{value:null},_touchIdentifier:{value:null},_isFirstMove:{value:!1},_start:{value:function(e,t,n){this.pointerStartEventPosition={pageX:e,pageY:t,target:n},this._pointerX=e,this._pointerY=t,window.Touch?(document.addEventListener("touchend",this,!0),this._element.addEventListener("touchmove",this,!1)):(document.addEventListener("mouseup",this,!0),this._element.addEventListener("mousemove",this,!1)),this.isAnimating=!1,this._isFirstMove=!0}},_observedPointer:{value:null},_shouldPreventDefault:{value:function(e){return!!e.target.tagName&&-1===i._NATIVE_ELEMENTS.indexOf(e.target.tagName)&&!e.target.isContentEditable}},captureMousedown:{value:function(e){0===e.button&&(this._observedPointer="mouse",this._start(e.clientX,e.clientY,e.target))}},handleMousedown:{value:function(e){0!==e.button||this.eventManager.componentClaimingPointer(this._observedPointer)||this.eventManager.claimPointer(this._observedPointer,this)}},handleMousemove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._firstMove()):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._firstMove())}},captureMousemove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.clientX,e.clientY)):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._move(e.clientX,e.clientY))}},captureMouseup:{value:function(e){this._end(e)}},_releaseInterest:{value:function(){window.Touch?(document.removeEventListener("touchend",this,!0),this._isFirstMove?this._element.removeEventListener("touchmove",this,!1):document.removeEventListener("touchmove",this,!0)):(document.removeEventListener("mouseup",this,!0),this._isFirstMove?this._element.removeEventListener("mousemove",this,!1):document.removeEventListener("mousemove",this,!0)),this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)&&this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},captureTouchstart:{value:function(e){null!==this._observedPointer&&this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)||e.targetTouches&&1===e.targetTouches.length&&(this._observedPointer=e.targetTouches[0].identifier,this._start(e.targetTouches[0].clientX,e.targetTouches[0].clientY,e.targetTouches[0].target))}},handleTouchstart:{value:function(e){this.eventManager.componentClaimingPointer(this._observedPointer)||e.targetTouches&&1===e.targetTouches.length&&(this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.claimPointer(this._observedPointer,this))}},handleTouchmove:{value:function(e){this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._firstMove()):("both"===this.axis||this._analyzeMovement(e))&&this._stealPointer()&&(e.preventDefault(),this._firstMove())}},captureTouchmove:{value:function(e){for(var t=0,n=e.changedTouches.length;n>t&&e.changedTouches[t].identifier!==this._observedPointer;)t++;n>t&&(this.eventManager.isPointerClaimedByComponent(this._observedPointer,this)?(e.preventDefault(),this._move(e.changedTouches[t].clientX,e.changedTouches[t].clientY)):this._analyzeMovement(e.changedTouches[t]))}},captureTouchend:{value:function(e){for(var t=0,n=e.changedTouches.length;n>t&&e.changedTouches[t].identifier!==this._observedPointer;)t++;n>t&&this._end(e.changedTouches[t])}},_analyzeMovement:{value:function(e){var t=e.velocity;if(t){var n,r,i,a,o,s,l,u,c=.7853981633974483,h=2.356194490192345,d=-2.356194490192345,p=-.7853981633974483;if(s=t.speed,0!==t.speed&&!isNaN(t.speed))if(o=t.angle,"horizontal"===this.axis){if(i=c>=o&&o>=p,a=o>=h||d>=o,i||a)return this._stealPointer()}else if("vertical"===this.axis){if(n=p>=o&&o>=d,r=o>=c&&h>=o,n||r)return this._stealPointer()}else{if(s>=this.startTranslateSpeed)return this._stealPointer();if(l=this.pointerStartEventPosition.pageX-e.pageX,u=this.pointerStartEventPosition.pageY-e.pageY,l*l+u*u>this.startTranslateRadius*this.startTranslateRadius)return this._stealPointer()}}}},_stealPointer:{value:function(){return this.eventManager.claimPointer(this._observedPointer,this)}},_translateEndTimeout:{value:null},captureMousewheel:{value:function(){this.eventManager.componentClaimingPointer(this._WHEEL_POINTER)||this.eventManager.claimPointer(this._WHEEL_POINTER,this.component)}},handleMousewheel:{value:function(e){var t=this;if(this.eventManager.isPointerClaimedByComponent(this._WHEEL_POINTER,this.component)){var n=this._translateY;this._dispatchTranslateStart(),this.translateY=this._translateY-20*e.wheelDeltaY/120,this._dispatchTranslate(),window.clearTimeout(this._translateEndTimeout),this._translateEndTimeout=window.setTimeout(function(){t._dispatchTranslateEnd()},400),n!==this._translateY&&this._shouldPreventDefault(e)&&e.preventDefault(),this.eventManager.forfeitPointer(this._WHEEL_POINTER,this.component)}}},_firstMove:{value:function(){this._isFirstMove&&(this._dispatchTranslateStart(this._translateX,this._translateY),this._isFirstMove=!1,this.isMoving=!0,window.Touch?(document.addEventListener("touchmove",this,!0),this._element.removeEventListener("touchmove",this,!1)):(document.addEventListener("mousemove",this,!0),this._element.removeEventListener("mousemove",this,!1)))}},_move:{value:function(e,t){var n;this._isSelfUpdate=!0,"vertical"!=this._axis&&(n=this._invertXAxis?this._pointerX-e:e-this._pointerX,this.translateX+=n*this._pointerSpeedMultiplier),"horizontal"!=this._axis&&(n=this._invertYAxis?this._pointerY-t:t-this._pointerY,this.translateY+=n*this._pointerSpeedMultiplier),this._isSelfUpdate=!1,this._pointerX=e,this._pointerY=t,this._shouldDispatchTranslate&&this._dispatchTranslate()}},_bezierTValue:{value:function(e,t,n,r,i){var a,o,s,l,u=1-3*r+3*t,c=3*r-6*t,h=3*t,d=.5;for(o=0;10>o;o++)l=d*d,a=3*u*l+2*c*d+h,s=1-d,d-=(3*(s*s*d*t+s*l*r)+l*d-e)/a;return l=d*d,s=1-d,3*(s*s*d*n+s*l*i)+l*d}},_dispatchTranslateStart:{value:function(e,t){var n=document.createEvent("CustomEvent");n.initCustomEvent("translateStart",!0,!0,null),n.translateX=e,n.translateY=t,this.dispatchEvent(n)}},_dispatchTranslateEnd:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translateEnd",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,this.dispatchEvent(e)}},_dispatchTranslate:{value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("translate",!0,!0,null),e.translateX=this._translateX,e.translateY=this._translateY,this.dispatchEvent(e)}},animateBouncingX:{value:!1,enumerable:!1},startTimeBounceX:{value:!1,enumerable:!1},animateBouncingY:{value:!1,enumerable:!1},startTimeBounceY:{value:!1,enumerable:!1},animateMomentum:{value:!1,enumerable:!1},startTime:{value:null,enumerable:!1},startX:{value:null,enumerable:!1},posX:{value:null,enumerable:!1},endX:{value:null,enumerable:!1},startY:{value:null,enumerable:!1},posY:{value:null,enumerable:!1},endY:{value:null,enumerable:!1},translateStrideX:{value:null},translateStrideY:{value:null},translateStrideDuration:{value:330},_animationInterval:{value:function(){var e,t,n,r,i=Date.now(),a=!1;this.animateMomentum&&(e=i-this.startTime,this.__momentumDuration>e?(this.posX=this.startX-(this.momentumX+this.momentumX*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this.posY=this.startY-(this.momentumY+this.momentumY*(this.__momentumDuration-e)/this.__momentumDuration)*e/1e3/2,this.translateStrideX&&null===this.startStrideXTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.posX-this.endX)<.75*this.translateStrideX)&&(this.startStrideXTime=i),this.translateStrideY&&null===this.startStrideYTime&&(this.__momentumDuration-e<this.translateStrideDuration||Math.abs(this.posY-this.endY)<.75*this.translateStrideY)&&(this.startStrideYTime=i)):this.animateMomentum=!1),t=Math.round(this.endX/this.translateStrideX),this.startStrideXTime&&i-this.startStrideXTime>0&&(i-this.startStrideXTime<this.translateStrideDuration?(e=this._bezierTValue((i-this.startStrideXTime)/this.translateStrideDuration,.275,0,.275,1),this.posX=this.posX*(1-e)+t*this.translateStrideX*e,a=!0):this.posX=t*this.translateStrideX),t=Math.round(this.endY/this.translateStrideY),this.startStrideYTime&&i-this.startStrideYTime>0&&(i-this.startStrideYTime<this.translateStrideDuration?(e=this._bezierTValue((i-this.startStrideYTime)/this.translateStrideDuration,.275,0,.275,1),this.posY=this.posY*(1-e)+t*this.translateStrideY*e,a=!0):this.posY=t*this.translateStrideY),n=this.posX,r=this.posY,this._isSelfUpdate=!0,this.translateX=n,this.translateY=r,this._shouldDispatchTranslate&&this._dispatchTranslate(),this._isSelfUpdate=!1,this.isAnimating=this.animateMomentum||a,this.isAnimating?this.needsFrame=!0:this._dispatchTranslateEnd()}},_end:{value:function(e){this.startTime=Date.now(),this.endX=this.posX=this.startX=this._translateX,this.endY=this.posY=this.startY=this._translateY,this._hasMomentum&&(e.velocity.speed>40||this.translateStrideX||this.translateStrideY)?(this.momentumX="vertical"!=this._axis?e.velocity.x*this._pointerSpeedMultiplier*(this._invertXAxis?1:-1):0,this.momentumY="horizontal"!=this._axis?e.velocity.y*this._pointerSpeedMultiplier*(this._invertYAxis?1:-1):0,this.endX=this.startX-this.momentumX*this.__momentumDuration/2e3,this.endY=this.startY-this.momentumY*this.__momentumDuration/2e3,this.startStrideXTime=null,this.startStrideYTime=null,this.animateMomentum=!0):this.animateMomentum=!1,this.animateMomentum?this._animationInterval():this._isFirstMove||(this.isMoving=!1,this._dispatchTranslateEnd()),this._releaseInterest()}},surrenderPointer:{value:function(){return!this.isMoving}},eventManager:{get:function(){return r}},load:{value:function(){window.Touch?(this._element.addEventListener("touchstart",this,!0),this._element.addEventListener("touchstart",this,!1)):(this._element.addEventListener("mousedown",this,!0),this._element.addEventListener("mousedown",this,!1),this._element.addEventListener("mousewheel",this,!1),this._element.addEventListener("mousewheel",this,!0)),this.eventManager.isStoringPointerEvents=!0}},addEventListener:{value:function(e,t,r){n.addEventListener.call(this,e,t,r),"translate"===e&&(this._shouldDispatchTranslate=!0)}}})}}),montageDefine("4f13e82","ui/flow.reel/flow-bezier-spline",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage,r=t.FlowBezierSpline=n.specialize({constructor:{value:function(){this._knots=[],this._densities=[]}},knots:{get:function(){return this._knots},set:function(e){this._knots=e}},previousHandlers:{get:function(){return this._previousHandlers||(this._previousHandlers=[]),this._previousHandlers},set:function(e){this._previousHandlers=e}},nextHandlers:{get:function(){return this._nextHandlers||(this._nextHandlers=[]),this._nextHandlers},set:function(e){this._nextHandlers=e}},densities:{get:function(){return this._densities},set:function(e){this._densities=e,this._densitiesLength=this._densities.length,this._maxTime=null}},_parameters:{value:{}},parameters:{get:function(){return this._parameters||(this._parameters={}),this._parameters},set:function(e){this._parameters=e,this._parametersLength=this._parameters.length}},_maxTime:{enumerable:!1,value:null},computeMaxTime:{value:function(){return this._computeDensitySummation(),this._maxTime=this._densitySummation.length?this._densitySummation[this._densitySummation.length-1]:0,this._maxTime}},_densitySummation:{enumerable:!1,value:null},_computeDensitySummation:{enumerable:!1,value:function(){var e,t=this.densities,n=t.length-1,r=0;for(this._densitySummation=[],e=0;n>e;e++)r+=(t[e]+t[e+1])/2,this._densitySummation[e]=r;this._maxTime=null}},_convertSplineTimeToBezierIndexTime:{enumerable:!1,value:function(e){if(0>e)return null;if(null===this._maxTime&&this.computeMaxTime(),e>=this._maxTime)return null;for(var t,n,r,i,a,o=this._densitySummation,s=o.length,l=s-1,u=s>>1;u;)l-u>=0&&o[l-u]>e?l-=u:u>>=1;return t=e-(l?o[l-1]:0),r=this._densities[l],i=this._densities[l+1],a=r-i,n=-1e-10>a||a>1e-10?(r-Math.sqrt(r*r+2*(i-r)*t))/a:t/r,[l,n]}},getPositionAtIndexTime:{value:function(e){var t=e[0],n=e[1],r=this._knots[t],i=this._nextHandlers[t],a=this._previousHandlers[t+1],o=this._knots[t+1],s=1-n,l=s*s*s,u=3*s*s*n,c=3*s*n*n,h=n*n*n;return[r[0]*l+i[0]*u+a[0]*c+o[0]*h,r[1]*l+i[1]*u+a[1]*c+o[1]*h,r[2]*l+i[2]*u+a[2]*c+o[2]*h]}},getRotationAtIndexTime:{value:function(e){var t,n,r,i=e[0],a=e[1],o=1-a,s=this._parameters;return t=void 0!==s.rotateX?s.rotateX.data[i]*o+s.rotateX.data[i+1]*a:0,n=void 0!==s.rotateY?s.rotateY.data[i]*o+s.rotateY.data[i+1]*a:0,r=void 0!==s.rotateZ?s.rotateZ.data[i]*o+s.rotateZ.data[i+1]*a:0,[t,n,r]}},getStyleAtIndexTime:{value:function(e){var t,n,r=e[0],i=e[1],a=this._parameters,o=1-i,s="";for(parameterKeys=Object.keys(a),parameterKeyCount=parameterKeys.length,t=0;parameterKeyCount>t;t++)n=parameterKeys[t],jParameter=a[n],jParameterData=jParameter.data,"rotateX"!==n&&"rotateY"!==n&&"rotateZ"!==n&&void 0!==jParameterData[r]&&void 0!==jParameterData[r+1]&&(s+=n+":"+1e-5*(1e5*(jParameterData[r]*o+jParameterData[r+1]*i)>>0)+jParameter.units+";");return s}},transformVectorArray:{value:function(e,t){var n,r,i=e.length,a=[];for(r=0;i>r;r++)n=e[r],n&&(a[r]=[n[0]*t[0]+n[1]*t[4]+n[2]*t[8]+t[12],n[0]*t[1]+n[1]*t[5]+n[2]*t[9]+t[13],n[0]*t[2]+n[1]*t[6]+n[2]*t[10]+t[14]]);return a}},transform:{value:function(e){var t=new r;return t._densities=this._densities,t._densitySummation=this._densitySummation,t._knots=this.transformVectorArray(this.knots,e),t._previousHandlers=this.transformVectorArray(this.previousHandlers,e),t._nextHandlers=this.transformVectorArray(this.nextHandlers,e),t}},deCasteljau:{value:function(e,t,n,r,i){var a=1-i,o=a*e[0]+i*t[0],s=a*t[0]+i*n[0],l=a*n[0]+i*r[0],u=a*o+i*s,c=a*s+i*l,h=a*u+i*c,d=a*e[1]+i*t[1],p=a*t[1]+i*n[1],f=a*n[1]+i*r[1],m=a*d+i*p,v=a*p+i*f,g=a*m+i*v,b=a*e[2]+i*t[2],_=a*t[2]+i*n[2],y=a*n[2]+i*r[2],w=a*b+i*_,x=a*_+i*y,E=a*w+i*x;return[[e,[o,d,b],[u,m,w],[h,g,E]],[[h,g,E],[c,v,x],[l,f,y],r]]}},cubic:{enumerable:!1,value:function(e,t,n,r,i){return((e*i+t)*i+n)*i+r}},cubeRoot:{enumerable:!1,value:function(e){return e>0?Math.pow(e,1/3):-Math.pow(-e,1/3)}},cubicRealRoots:{enumerable:!1,value:function(e,t,n,r){var i=1e-100,a=Math;if(-i>e||e>i){var o=1/e,s=t*o,l=n*o,u=(3*l-s*s)*(1/9),c=(4.5*s*l-13.5*r*o-s*s*s)*(1/27),h=u*u*u+c*c;if(h>i){var d=a.sqrt(h);return[this.cubeRoot(c+d)+this.cubeRoot(c-d)+s*(-1/3)]}if(h>-i){if(-i>c||c>i){var p=this.cubeRoot(c),f=2*p+s*(-1/3),m=s*(-1/3)-p;return m>f?[f,m]:[m,f]}return[s*(-1/3)]}var v=a.acos(c/a.sqrt(-u*u*u))*(1/3),g=a.sqrt(-u),b=1.7320508075688772*g*a.sin(v),_=s*(-1/3);return g*=a.cos(v),[_-g-b,_-g+b,_+2*g]}if(-i>t||t>i){var y=n*n-4*t*r;return y>=0?(y=a.sqrt(y),[(-n-y)/(2*t),(y-n)/(2*t)]):[]}return-i>n||n>i?[-r/n]:[]}},_halfPI:{enumerable:!1,value:.5*Math.PI},reflectionMatrix:{enumerable:!1,value:function(e,t,n,r){var i=Math,a=this._halfPI-i.atan2(t,e),o=i.sin(a),s=i.cos(a),l=this._halfPI-i.atan2(n,e*o+t*s),u=i.sin(l);return r[0]=u*o,r[1]=s*u,r[2]=i.cos(l),r}},reflectedY:{enumerable:!1,value:function(e,t,n,r){return e*r[0]+t*r[1]+n*r[2]}},directedPlaneBezierIntersection:{enumerable:!1,value:function(e,t,n,r,i,a,o,s,l){for(var u,c,h=this.reflectionMatrix(r[0],r[1],r[2],l),d=this.reflectedY(i[0]-e,i[1]-t,i[2]-n,h),p=this.reflectedY(a[0]-e,a[1]-t,a[2]-n,h),f=this.reflectedY(o[0]-e,o[1]-t,o[2]-n,h),m=this.reflectedY(s[0]-e,s[1]-t,s[2]-n,h),v=3*(p-f)+m-d,g=3*(d+f)-6*p,b=3*(p-d),_=this.cubicRealRoots(v,g,b,d),y=0,w=0,x=[];_.length>w&&0>=_[w];)w++;for(;_.length>w&&1>_[w];)u=y,y=_[w],c=.5*(u+y),this.cubic(v,g,b,d,c)>=0&&x.push([u,y]),w++;return c=.5*(y+1),this.cubic(v,g,b,d,c)>=0&&x.push([y,1]),x}}})}}),montageDefine("c8437f1","ui/scroller.reel/scroller",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component;t.Scroller=n.specialize({_scrollX:{value:0},scrollX:{get:function(){return this._scrollX},set:function(e){this._scrollX!==e&&(this._scrollX=e,this.needsDraw=!0)}},_scrollY:{value:0},scrollY:{get:function(){return this._scrollY},set:function(e){this._scrollY!==e&&(this._scrollY=e,this.needsDraw=!0)}},_maxTranslateX:{value:0},_maxTranslateY:{value:0},_axis:{value:"auto"},axis:{get:function(){return this._axis},set:function(e){this._axis=e,this.needsDraw=!0}},_displayScrollbars:{value:"auto"},displayScrollbars:{get:function(){return this._displayScrollbars},set:function(e){switch(e){case"vertical":case"horizontal":case"both":case"auto":this._displayScrollbars=e;break;default:this._displayScrollbars="none"}this.needsDraw=!0}},_hasMomentum:{value:!0},hasMomentum:{get:function(){return this._hasMomentum},set:function(e){this._hasMomentum=e}},_content:{value:null},_scrollBars:{value:null},handleTranslateStart:{value:function(){this._scrollBars.opacity=.5}},handleTranslateEnd:{value:function(){this._scrollBars.opacity=0}},canDraw:{value:function(){return this.needsDraw=!0,n.canDraw.apply(this,arguments)}},willDraw:{value:function(){this._left=this._element.offsetLeft,this._top=this._element.offsetTop,this._width=this._element.offsetWidth,this._height=this._element.offsetHeight,this._maxTranslateX=this._content.scrollWidth-this._width,0>this._maxTranslateX&&(this._maxTranslateX=0),this._maxTranslateY=this._content.offsetHeight-this._height,0>this._maxTranslateY&&(this._maxTranslateY=0);var e=this.callDelegateMethod("didSetMaxScroll",{x:this._maxTranslateX,y:this._maxTranslateY});switch(e&&(this._maxTranslateX=e.x,this._maxTranslateY=e.y),this.scrollX=Math.min(this._scrollX,this._maxTranslateX),this.scrollY=Math.min(this._scrollY,this._maxTranslateY),this._displayScrollbars){case"horizontal":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!1;break;case"vertical":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!0;break;case"both":this._scrollBars.displayHorizontal=!0,this._scrollBars.displayVertical=!0;break;case"auto":this._scrollBars.displayHorizontal=!!this._maxTranslateX,this._scrollBars.displayVertical=!!this._maxTranslateY;break;case"none":this._scrollBars.displayHorizontal=!1,this._scrollBars.displayVertical=!1}this._scrollBars.displayHorizontal&&(this._content.scrollWidth?(this._scrollBars.horizontalLength=this._width/this._content.scrollWidth,this._scrollBars.horizontalScroll=this._scrollX/this._content.scrollWidth):(this._scrollBars.horizontalLength=1,this._scrollBars.horizontalScroll=0)),this._scrollBars.displayVertical&&(this._content.offsetHeight?(this._scrollBars.verticalLength=this._height/this._content.offsetHeight,this._scrollBars.verticalScroll=this._scrollY/this._content.offsetHeight):(this._scrollBars.verticalLength=1,this._scrollBars.verticalScroll=0))}},draw:{value:function(){var e=-this._scrollX+"px, "+-this._scrollY+"px";this._content.style.webkitTransform="translate3d("+e+", 0px)",this._content.style.MozTransform="translate("+e+")",this._content.style.transform="translate("+e+")"}}})}}),montageDefine("ee4a092","ui/main.reel/main.html",{text:'<!DOCTYPE html>\n\n<html>\n    <head>\n        <meta http-equiv=content-type content="text/html; charset=utf-8">\n\n        <link rel=stylesheet type="text/css" href=main.css>\n        <link href="http://fonts.googleapis.com/css?family=Nunito:400,700" rel=stylesheet type="text/css">\n        <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"main"}}},"facadeflow":{"prototype":"ui/facadeflow.reel","properties":{"element":{"#":"facade-flow"}},"bindings":{"latestBoxofficeMovies":{"<-":"@owner.appData.latestBoxofficeMovies"},"upcomingMovies":{"<-":"@owner.appData.upcomingMovies"},"topDvdRentals":{"<-":"@owner.appData.topDvdRentals"},"inTheaters":{"<-":"@owner.appData.inTheaters"},"categoryId":{"<-":"@owner.categoryId"}}},"latest":{"prototype":"matte/ui/toggle-button.reel","properties":{"element":{"#":"latest"},"identifier":"categoryButton","pressedClass":"selected","category":"latestBoxofficeMovies"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"theaters":{"prototype":"matte/ui/toggle-button.reel","properties":{"element":{"#":"theaters"},"identifier":"categoryButton","pressedClass":"selected","category":"inTheaters"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"dvd":{"prototype":"matte/ui/toggle-button.reel","properties":{"element":{"#":"dvd"},"identifier":"categoryButton","pressedClass":"selected","category":"topDvdRentals"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"upcoming":{"prototype":"matte/ui/toggle-button.reel","properties":{"element":{"#":"upcoming"},"identifier":"categoryButton","pressedClass":"selected","category":"upcomingMovies"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"popup":{"prototype":"ui/moviepopup.reel","properties":{"element":{"#":"popup"}}}}</script>\n\n    </head>\n\n    <body>\n        <div data-montage-id=main class=main>\n            <div data-montage-id=facade class=facade>\n                <header class=header>\n                    <img class=logo src="assets/image/logo.png" alt=logo>\n                    <div class="filter matte-ButtonGroup">\n                        <button data-montage-id=latest>Box Office</button>\n                        <button data-montage-id=theaters>In Theaters</button>\n                        <button data-montage-id=upcoming>Upcoming</button>\n                        <button data-montage-id=dvd>DVD Rentals</button>\n                    </div>\n                </header>\n                <div data-montage-id=facade-flow class=facade-flow></div>\n                <div data-montage-id=popup class=popup></div>\n            </div>\n            <a class=MontageMade href="http://montagejs.org">Made with Montage</a>\n        </div>\n    </body>\n\n</html>'}),montageDefine("8023de4","package.json",{exports:{name:"native",version:"0.1.1-alpha",publishConfig:{tag:"edge"},repository:{type:"git",url:"https://github.com/montagejs/native.git"},dependencies:{montage:"0.13.0-alpha"},devDependencies:{"montage-testing":"0.2.0-alpha"},exclude:["overview.html","overview","run-tests.html","test"],readme:'montage-native\n==============\n\nThis is the Montage package template.\n\nNote: Before working on your package you will need to add montage to it.\n\n```\nnpm install .\n```\n\nLayout\n------\n\nThe template contains the following files and directories:\n\n* `ui/` – Directory containing all the UI .reel directories.\n* `package.json` – Describes your app and its dependencies\n* `README.md` – This readme. Replace the current content with a description of your app\n* `overview.html`\n* `overview/` – Directory that contains the files for the overview page. This is a different package so you will need to require the component using montage-native/*.\n  * `main.reel` – The main interface component where you can add the components to show.\n* `node_modules/` – Directory containing all npm packages needed, including Montage. Any packages here must be included as `dependencies` in `package.json` for the Montage require to find them.\n* `test/` – Directory containing tests for your package.\n  * `all.js` – Module that point the test runner to all your jasmine specs.\n* `run-tests.html` – Page to run jasmine tests manually in your browser\n* `testacular.conf.js` – This is the testacular configuration file. You can start testacular by running `node_modules/testacular/bin/testacular start`\n\nCreate the following directories if you need them:\n\n* `locale/` – Directory containing localized content.\n* `scripts/` – Directory containing other JS libraries. If a library doesn’t support the CommonJS "exports" object it will need to be loaded through a `<script>` tag.\n\n',readmeFilename:"README.md",_id:"native@0.1.1-alpha",description:"montage-native ==============",_from:"native@0.1.1-alpha",directories:{lib:"./"},hash:"8023de4",mappings:{montage:{name:"montage",hash:"4f13e82",location:"../montage@4f13e82/"}},production:!0,useScriptInjection:!0}}),montageDefine("c8437f1","ui/scroller.reel/scroller.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=scroller.css>\n    <script type="text/montage-serialization">{"scrollbars":{"prototype":"ui/scroll-bars.reel","properties":{"element":{"#":"scrollbars"}}},"translateComposer1":{"prototype":"montage/composer/translate-composer","properties":{"component":{"@":"owner"},"minTranslateX":0,"minTranslateY":0,"invertAxis":true},"bindings":{"translateX":{"<->":"@owner.scrollX"},"translateY":{"<->":"@owner.scrollY"},"maxTranslateX":{"<-":"@owner._maxTranslateX"},"maxTranslateY":{"<-":"@owner._maxTranslateY"},"axis":{"<-":"@owner.axis"},"hasMomentum":{"<-":"@owner.hasMomentum"}},"listeners":[{"type":"translateStart","listener":{"@":"owner"}},{"type":"translateEnd","listener":{"@":"owner"}}]},"owner":{"prototype":"ui/scroller.reel","properties":{"_content":{"#":"content"},"element":{"#":"montage-scroller"},"_scrollBars":{"@":"scrollbars"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-scroller class=matte-Scroller>\n        <div data-montage-id=scrollbars></div>\n        <div data-montage-id=content class=matte-Scroller-content>\n            <div data-param="*"></div>\n        </div>\n    </div>\n</body>\n</html>'}),montageDefine("4f13e82","composer/composer",{dependencies:["montage","core/target"],factory:function(e,t){var n=(e("montage").Montage,e("core/target").Target);t.Composer=n.specialize({_component:{value:null},component:{get:function(){return this._component},set:function(e){this._component=e}},_element:{value:null},element:{get:function(){return this._element},set:function(e){this._element=e}},lazyLoad:{value:!1},_needsFrame:{value:!1},needsFrame:{set:function(e){this._needsFrame!==e&&(this._needsFrame=e,this._component&&e&&this._component.scheduleComposer(this))},get:function(){return this._needsFrame}},frame:{value:function(){}},_resolveDefaults:{value:function(){null==this.element&&null!=this.component&&(this.element=this.component.element)}},_load:{value:function(){this.element||this._resolveDefaults(),this.load()}},load:{value:function(){}},unload:{value:function(){}},deserializedFromTemplate:{value:function(){this.component&&this.component.addComposer(this)}}})}}),montageDefine("8023de4","ui/native-control",{dependencies:["montage/ui/component"],factory:function(e,t){var n=e("montage/ui/component").Component,r=t.NativeControl=n.specialize({hasTemplate:{value:!1},willPrepareForDraw:{value:function(){}}});r.addAttributes({accesskey:null,contenteditable:null,contextmenu:null,dir:null,draggable:null,dropzone:null,hidden:{dataType:"boolean"},lang:null,spellcheck:null,style:null,tabindex:null,title:null})}}),montageDefine("c8437f1","ui/toggle-button.reel/toggle-button.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href="../button.reel/button.css">\n    <link rel=stylesheet href=toggle-button.css>\n</head>\n<body>\n</body>\n</html>'});
bundleLoaded("index.html.bundle-1-1.js")