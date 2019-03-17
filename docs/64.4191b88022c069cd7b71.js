(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{mlYn:function(t,o,e){"use strict";e.r(o),e.d(o,"IonToast",function(){return u}),e.d(o,"IonToastController",function(){return p});var i=e("B5Ai"),n=e("cBjU"),a=e("6Fnk"),r=e("PkGC");function s(t,o,e){var i=new t,n=new t,a=o.host||o,r=o.querySelector(".toast-wrapper");switch(n.addElement(r),e){case"top":n.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var s=Math.floor(a.clientHeight/2-r.clientHeight/2);r.style.top=s+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(i.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(n))}function c(t,o,e){var i=new t,n=new t,a=o.host||o,r=o.querySelector(".toast-wrapper");switch(n.addElement(r),e){case"top":n.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(i.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n))}function l(t,o,e){var i=new t,n=new t,a=o.host||o,r=o.querySelector(".toast-wrapper");switch(n.addElement(r),e){case"top":r.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":var s=Math.floor(a.clientHeight/2-r.clientHeight/2);r.style.top=s+"px",n.fromTo("opacity",.01,1);break;default:r.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return Promise.resolve(i.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n))}function d(t,o){var e=new t,i=new t,n=o.host||o,a=o.querySelector(".toast-wrapper");return i.addElement(a),i.fromTo("opacity",.99,0),Promise.resolve(e.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(i))}var u=function(){function t(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.present=function(){return i.a(this,void 0,void 0,function(){var t=this;return i.c(this,function(o){switch(o.label){case 0:return[4,Object(a.e)(this,"toastEnter",s,l,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss(void 0,"timeout")},this.duration)),[2]}})})},t.prototype.dismiss=function(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.b)(this,t,o,"toastLeave",c,d,this.position)},t.prototype.onDidDismiss=function(){return Object(a.c)(this.el,"ionToastDidDismiss")},t.prototype.onWillDismiss=function(){return Object(a.c)(this.el,"ionToastWillDismiss")},t.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},Object(r.b)(this.color),Object(r.a)(this.cssClass),{"toast-translucent":this.translucent})}},t.prototype.render=function(){var t,o=this,e=((t={"toast-wrapper":!0})["toast-"+this.position]=!0,t);return Object(n.b)("div",{class:e},Object(n.b)("div",{class:"toast-container"},void 0!==this.message&&Object(n.b)("div",{class:"toast-message"},this.message),this.showCloseButton&&Object(n.b)("ion-button",{fill:"clear",class:"toast-button ion-activatable",onClick:function(){return o.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-toast-ios-h{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.ion-color.sc-ion-toast-ios-h{--button-color:inherit;color:var(--ion-color-contrast)}.ion-color.sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{background:var(--ion-color-base)}.toast-wrapper.sc-ion-toast-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-container.sc-ion-toast-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-ios{color:var(--button-color)}.toast-message.sc-ion-toast-ios{-ms-flex:1;flex:1;white-space:pre-wrap}.sc-ion-toast-ios-h{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-step-600,#666);--color:var(--ion-color-step-850,#262626);--max-width:700px;font-size:14px}.toast-wrapper.sc-ion-toast-ios{left:10px;right:10px;margin:auto;display:block;position:absolute;z-index:10}.toast-translucent.sc-ion-toast-ios-h   .toast-wrapper.sc-ion-toast-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-wrapper.toast-top.sc-ion-toast-ios{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle.sc-ion-toast-ios{opacity:.01}.toast-wrapper.toast-bottom.sc-ion-toast-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-message.sc-ion-toast-ios{padding:15px}.toast-button.sc-ion-toast-ios{font-size:15px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){}return t.prototype.create=function(t){return Object(a.f)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,o,e){return Object(a.g)(this.doc,t,o,"ion-toast",e)},t.prototype.getTop=function(){return i.a(this,void 0,void 0,function(){return i.c(this,function(t){return[2,Object(a.h)(this.doc,"ion-toast")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);