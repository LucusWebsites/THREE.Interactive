import{Vector2 as e,Raycaster as t}from"three";var n=function(e,t){this.target=e,this.name=t,this.intersected=!1,this.distance=0},o=function(){function e(e,t){void 0===t&&(t=null),this.cancelBubble=!1,this.type=e,this.originalEvent=t}return e.prototype.stopPropagation=function(){this.cancelBubble=!0},e}(),c=function(c,i,s){var u=this;this.dispose=function(){domElement.removeEventListener("mousemove",u.onDocumentMouseMove),domElement.removeEventListener("click",u.onDocumentMouseClick),domElement.removeEventListener("mousedown",u.onDocumentMouseDown),domElement.ownerDocument.removeEventListener("mouseup",u.onDocumentMouseUp),domElement.removeEventListener("touchstart",u.onDocumentTouchStart),domElement.removeEventListener("touchmove",u.onDocumentTouchMove),domElement.removeEventListener("touchend",u.onDocumentTouchEnd)},this.add=function(e,t){if(void 0===t&&(t=[]),t.length>0)t.forEach(function(t){var o=e.getObjectByName(t);if(o){var c=new n(o,t);u.interactiveObjects.push(c)}});else if(e){var o=new n(e,e.name);u.interactiveObjects.push(o)}},this.remove=function(e,t){if(void 0===t&&(t=[]),t.length>0){var n=[];u.interactiveObjects.forEach(function(e){t.includes(e.name)||n.push(e)}),u.interactiveObjects=n}else if(e){var o=[];u.interactiveObjects.forEach(function(t){t.name!==e.name&&o.push(t)}),u.interactiveObjects=o}},this.update=function(){u.raycaster.setFromCamera(u.mouse,u.camera),u.interactiveObjects.forEach(function(e){e.target&&u.checkIntersection(e)}),u.interactiveObjects.sort(function(e,t){return e.distance-t.distance});var e=new o("mouseout");u.interactiveObjects.forEach(function(t){!t.intersected&&t.wasIntersected&&u.dispatch(t,e)});var t=new o("mouseover");u.interactiveObjects.forEach(function(e){e.intersected&&!e.wasIntersected&&u.dispatch(e,t)})},this.checkIntersection=function(e){var t=u.raycaster.intersectObjects([e.target],!0);if(e.wasIntersected=e.intersected,t.length>0){var n=t[0].distance;t.forEach(function(e){e.distance<n&&(n=e.distance)}),e.intersected=!0,e.distance=n}else e.intersected=!1},this.onDocumentMouseMove=function(e){u.mapPositionToPoint(u.mouse,e.clientX,e.clientY);var t=new o("mousemove",e);u.interactiveObjects.forEach(function(e){u.dispatch(e,t)})},this.onDocumentTouchMove=function(e){u.mapPositionToPoint(u.mouse,e.touches[0].clientX,e.touches[0].clientY);var t=new o(u.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",e);u.interactiveObjects.forEach(function(e){u.dispatch(e,t)})},this.onDocumentMouseClick=function(e){u.update();var t=new o("click",e);u.interactiveObjects.forEach(function(e){e.intersected&&u.dispatch(e,t)})},this.onDocumentMouseDown=function(e){u.update();var t=new o("mousedown",e);u.interactiveObjects.forEach(function(e){e.intersected&&u.dispatch(e,t)})},this.onDocumentTouchStart=function(e){u.mapPositionToPoint(u.mouse,e.touches[0].clientX,e.touches[0].clientY),u.update();var t=new o(u.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",e);u.interactiveObjects.forEach(function(e){e.intersected&&u.dispatch(e,t)})},this.onDocumentMouseUp=function(e){var t=new o("mouseup",e);u.interactiveObjects.forEach(function(e){u.dispatch(e,t)})},this.onDocumentTouchEnd=function(e){u.mapPositionToPoint(u.mouse,e.touches[0].clientX,e.touches[0].clientY),u.update();var t=new o(u.treatTouchEventsAsMouseEvents?"mouseup":"touchend",e);u.interactiveObjects.forEach(function(e){u.dispatch(e,t)})},this.dispatch=function(e,t){e.target&&!t.cancelBubble&&(t.coords=u.mouse,t.distance=e.distance,t.intersected=e.intersected,e.target.dispatchEvent(t))},this.mapPositionToPoint=function(e,t,n){var o;o=u.renderer.domElement.parentElement?u.renderer.domElement.getBoundingClientRect():{x:0,y:0,left:0,top:0,width:0,height:0},e.x=(t-o.left)/o.width*2-1,e.y=-(n-o.top)/o.height*2+1},this.renderer=c,this.camera=i,this.domElement=s,this.mouse=new e,this.interactiveObjects=[],this.raycaster=new t,s.addEventListener("mousemove",this.onDocumentMouseMove,!1),s.addEventListener("click",this.onDocumentMouseClick,!1),s.addEventListener("mousedown",this.onDocumentMouseDown,!1),s.ownerDocument.addEventListener("mouseup",this.onDocumentMouseUp,!1),s.addEventListener("touchstart",this.onDocumentTouchStart,!1),s.addEventListener("touchmove",this.onDocumentTouchMove,!1),s.addEventListener("touchend",this.onDocumentTouchEnd,!1),this.treatTouchEventsAsMouseEvents=!0};export{c as InteractionManager,o as InteractiveEvent,n as InteractiveObject};
//# sourceMappingURL=three-interactive.module.js.map