!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],t):t((e=e||self).threeInteractive={},e.THREE)}(this,function(e,t){var n=function(e,t){this.target=e,this.name=t,this.intersected=!1,this.distance=0},o=function(){function e(e,t){void 0===t&&(t=null),this.cancelBubble=!1,this.type=e,this.originalEvent=t}return e.prototype.stopPropagation=function(){this.cancelBubble=!0},e}();e.InteractionManager=function(e,c,i){var s=this;this.dispose=function(){domElement.removeEventListener("mousemove",s.onDocumentMouseMove),domElement.removeEventListener("click",s.onDocumentMouseClick),domElement.removeEventListener("mousedown",s.onDocumentMouseDown),domElement.ownerDocument.removeEventListener("mouseup",s.onDocumentMouseUp),domElement.removeEventListener("touchstart",s.onDocumentTouchStart),domElement.removeEventListener("touchmove",s.onDocumentTouchMove),domElement.removeEventListener("touchend",s.onDocumentTouchEnd)},this.add=function(e,t){if(void 0===t&&(t=[]),t.length>0)t.forEach(function(t){var o=e.getObjectByName(t);if(o){var c=new n(o,t);s.interactiveObjects.push(c)}});else if(e){var o=new n(e,e.name);s.interactiveObjects.push(o)}},this.remove=function(e,t){if(void 0===t&&(t=[]),t.length>0){var n=[];s.interactiveObjects.forEach(function(e){t.includes(e.name)||n.push(e)}),s.interactiveObjects=n}else if(e){var o=[];s.interactiveObjects.forEach(function(t){t.name!==e.name&&o.push(t)}),s.interactiveObjects=o}},this.update=function(){s.raycaster.setFromCamera(s.mouse,s.camera),s.interactiveObjects.forEach(function(e){e.target&&s.checkIntersection(e)}),s.interactiveObjects.sort(function(e,t){return e.distance-t.distance});var e=new o("mouseout");s.interactiveObjects.forEach(function(t){!t.intersected&&t.wasIntersected&&s.dispatch(t,e)});var t=new o("mouseover");s.interactiveObjects.forEach(function(e){e.intersected&&!e.wasIntersected&&s.dispatch(e,t)})},this.checkIntersection=function(e){var t=s.raycaster.intersectObjects([e.target],!0);if(e.wasIntersected=e.intersected,t.length>0){var n=t[0].distance;t.forEach(function(e){e.distance<n&&(n=e.distance)}),e.intersected=!0,e.distance=n}else e.intersected=!1},this.onDocumentMouseMove=function(e){s.mapPositionToPoint(s.mouse,e.clientX,e.clientY);var t=new o("mousemove",e);s.interactiveObjects.forEach(function(e){s.dispatch(e,t)})},this.onDocumentTouchMove=function(e){s.mapPositionToPoint(s.mouse,e.touches[0].clientX,e.touches[0].clientY);var t=new o(s.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",e);s.interactiveObjects.forEach(function(e){s.dispatch(e,t)})},this.onDocumentMouseClick=function(e){s.update();var t=new o("click",e);s.interactiveObjects.forEach(function(e){e.intersected&&s.dispatch(e,t)})},this.onDocumentMouseDown=function(e){s.update();var t=new o("mousedown",e);s.interactiveObjects.forEach(function(e){e.intersected&&s.dispatch(e,t)})},this.onDocumentTouchStart=function(e){s.mapPositionToPoint(s.mouse,e.touches[0].clientX,e.touches[0].clientY),s.update();var t=new o(s.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",e);s.interactiveObjects.forEach(function(e){e.intersected&&s.dispatch(e,t)})},this.onDocumentMouseUp=function(e){var t=new o("mouseup",e);s.interactiveObjects.forEach(function(e){s.dispatch(e,t)})},this.onDocumentTouchEnd=function(e){s.mapPositionToPoint(s.mouse,e.touches[0].clientX,e.touches[0].clientY),s.update();var t=new o(s.treatTouchEventsAsMouseEvents?"mouseup":"touchend",e);s.interactiveObjects.forEach(function(e){s.dispatch(e,t)})},this.dispatch=function(e,t){e.target&&!t.cancelBubble&&(t.coords=s.mouse,t.distance=e.distance,t.intersected=e.intersected,e.target.dispatchEvent(t))},this.mapPositionToPoint=function(e,t,n){var o;o=s.renderer.domElement.parentElement?s.renderer.domElement.getBoundingClientRect():{x:0,y:0,left:0,top:0,width:0,height:0},e.x=(t-o.left)/o.width*2-1,e.y=-(n-o.top)/o.height*2+1},this.renderer=e,this.camera=c,this.domElement=i,this.mouse=new t.Vector2,this.interactiveObjects=[],this.raycaster=new t.Raycaster,i.addEventListener("mousemove",this.onDocumentMouseMove,!1),i.addEventListener("click",this.onDocumentMouseClick,!1),i.addEventListener("mousedown",this.onDocumentMouseDown,!1),i.ownerDocument.addEventListener("mouseup",this.onDocumentMouseUp,!1),i.addEventListener("touchstart",this.onDocumentTouchStart,!1),i.addEventListener("touchmove",this.onDocumentTouchMove,!1),i.addEventListener("touchend",this.onDocumentTouchEnd,!1),this.treatTouchEventsAsMouseEvents=!0},e.InteractiveEvent=o,e.InteractiveObject=n});
//# sourceMappingURL=three-interactive.umd.js.map
