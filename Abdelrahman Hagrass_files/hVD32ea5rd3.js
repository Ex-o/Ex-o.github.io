/*!CK:1587907452!*//*1447737506,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["tIzEL"]); }

__d("PlatformVersions",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LATEST:"v2.6",versions:{UNVERSIONED:"unversioned",V1_0:"v1.0",V2_0:"v2.0",V2_1:"v2.1",V2_2:"v2.2",V2_3:"v2.3",V2_4:"v2.4",V2_5:"v2.5",V2_6:"v2.6"}};},null,{});
__d("isNodeWithinRect",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){if(!i.getBoundingClientRect)return false;var k=i.getBoundingClientRect();return k.bottom>=j.top&&k.top<=j.bottom&&k.right>=j.left&&k.left<=j.right;}f.exports=h;},null);
__d('MTabbable',['MAria','MJSEnvironment','MViewport','isNodeWithinRect'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(o,p){while(o&&o!==p){if(h.isHidden(o))return true;o=o.parentNode;}return false;}function m(o,p){if(o.offsetHeight===0||o.offsetWidth===0||window.getComputedStyle(o).visibility==='hidden'||parseInt(o.tabIndex,10)<0||l(o,p))return false;if(o.tabIndex>=0)return true;switch(o.tagName){case 'A':return o.href&&o.rel!='ignore';case 'INPUT':return o.type!='hidden'&&o.type!='file'&&!o.disabled;case 'BUTTON':case 'SELECT':case 'TEXTAREA':return !o.disabled;}return false;}function n(o){if(!o.getBoundingClientRect)return;var p=i.IS_APPLE_WEBKIT_IOS&&parseFloat(i.OS_VERSION)>=8||i.BROWSER_NAME==='Safari'&&!i.IS_APPLE_WEBKIT_IOS,q=p?o.querySelectorAll('a, button, select, [tabindex]'):o.querySelectorAll('a, button, input, select, textarea, [tabindex]'),r=j.getBoundingRect();for(var s=0,t;t=q[s];s++)if(m(t,o)&&k(t,r)){t.focus();return;}}g.focusTabbable=n;},null);
__d('Popover',['setTimeoutAcrossTransitions','CSS','DOM','MAria','MViewport','Stratcom','Vector','$','eventsMixinDeprecated'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=40;function r(s){'use strict';var t=s.flyout;this.flyout=typeof t=='string'?o(t):t;this.content=j.scry(this.flyout,'div','flyout-content')[0];this.options=s;this._onOrientationChange=this._reposition.bind(this);i.conditionClass(this.flyout,'popover_flyout',true);var u=s.button;if(u){this.button=typeof u=='string'?o(u):u;this.buttonClickListener=j.listen(this.button,'click',null,this._openHandler.bind(this));this.button.setAttribute('role','button');k.setupPopup(this.button,this.flyout);}var v=s.flyoutAnchor;if(v){this.flyoutAnchor=typeof v=='string'?o(v):v;}else this.flyoutAnchor=this.button;if(this.options.flyoutFromRoot)this.flyoutClickListener=j.listen(this.flyout,'click',null,this._openHandler.bind(this));if(this.options.touchstart_callback)this.flyoutTouchStartListener=j.listen(this.flyout,'touchstart',null,this._touchStartHandler.bind(this));if(this.options.touchmove_callback)this.flyoutTouchMoveListener=j.listen(this.flyout,'touchmove',null,this._touchMoveHandler.bind(this));if(this.options.touchend_callback)this.flyoutTouchEndListener=j.listen(this.flyout,'touchend',null,this._touchEndHandler.bind(this));r._instances[this.flyout.id]=this;}r.prototype.isOpen=function(){'use strict';return !!this._isOpen;};r.prototype.open=function(){'use strict';if(this.isOpen())return;if(r._activePopover)r._activePopover.close();r._activePopover=this;this._isOpen=true;this.constraint=null;i.conditionClass(this.flyout,'popover_hidden',false);if(this.options.flyoutFromRoot)this._absolutePositionFlyout();this._position();if(!this.options.heightConstraint){i.conditionClass(document.body,'disableClicks',true);this.globalListener=m.listenCapture('click',null,this._closeHandler.bind(this));}window.addEventListener('orientationchange',this._onOrientationChange,false);k.showPopup(this.button,this.flyout);if(this.options.ensureVisible){var s=l.getScrollTop(),t=this._getElementPosition(this.flyout).y,u=t+this.flyout.offsetHeight,v=u-(s+l.getUseableHeight());if(v>0){var w=Math.min(v,Math.max(t-s-q,0));l.scrollTo(0,s+w);}}this.invoke('open');};r.prototype.close=function(s){'use strict';if(!this.isOpen())return;r._activePopover=null;this._isOpen=false;i.conditionClass(this.flyout,'popover_hidden',true);if(this.options.flyoutFromRoot){this.flyoutParent.appendChild(this.flyout);delete this.flyoutParent;}h((function(){i.conditionClass(document.body,'disableClicks',false);}).bind(this),400);this.globalListener&&this.globalListener.remove();window.removeEventListener('orientationchange',this._onOrientationChange,false);this._releaseConstraint();k.hidePopup(this.button,this.flyout);if(!s)this.invoke('close');};r.prototype.clear=function(){'use strict';this.globalListener&&this.globalListener.remove();this.buttonClickListener&&this.buttonClickListener.remove();this.flyoutClickListener&&this.flyoutClickListener.remove();this.flyoutTouchStartListener&&this.flyoutTouchStartListener.remove();this.flyoutTouchMoveListener&&this.flyoutTouchMoveListener.remove();this.flyoutTouchEndListener&&this.flyoutTouchEndListener.remove();delete r._instances[this.flyout.id];};r.prototype.refreshConstraints=function(){'use strict';if(!this._isOpen)return false;var s=this.flyout;this._releaseConstraint();if(this.options.heightConstraint){s.style.minHeight=l.getUseableHeight()+'px';this.constraint=l.addHeightConstraint(n.getDim(this.content).y+this._getElementPosition(s).y);}else this.constraint=l.addMinHeightConstraint(n.getDim(s).y+this._getElementPosition(s).y+r._MARGIN);};r.prototype._getTouchPoint=function(event){'use strict';var s=event.getRawEvent().targetTouches[0],t={x:s?s.screenX:0,y:s?s.screenY:0};return t;};r.prototype._touchStartHandler=function(event){'use strict';this.options.touchstart_callback(this._getTouchPoint(event));};r.prototype._touchMoveHandler=function(event){'use strict';if(this.isOpen())this.options.touchmove_callback(this._getTouchPoint(event));};r.prototype._touchEndHandler=function(event){'use strict';this.options.touchend_callback(this._getTouchPoint(event));};r.prototype._openHandler=function(event){'use strict';event.prevent();var s=this.isOpen();if(s&&!this.options.preventClose){this.close();}else if(!s){var t=j.scry(document,'input');for(var u=0;u<t.length;u++)t[u].blur();this.open();}};r.prototype._closeHandler=function(event){'use strict';if(!event.getNode('popover'))this.close();};r.prototype._getElementPosition=function(s){'use strict';var t=s.offsetLeft,u=s.offsetTop;s=s.offsetParent;while(s&&s!==document.documentElement){t+=s.offsetLeft;u+=s.offsetTop;var v=window.getComputedStyle(s);t+=parseInt(v.getPropertyValue('border-left-width').slice(0,-2),10);u+=parseInt(v.getPropertyValue('border-top-width').slice(0,-2),10);s=s.offsetParent;}return new n(t,u);};r.prototype._absolutePositionFlyout=function(){'use strict';this.flyoutParent=this.flyout.parentNode;o('root').appendChild(this.flyout);var s=this._getElementPosition(this.flyout.parentNode),t=this._getElementPosition(this.flyoutAnchor),u=n.getDim(this.flyoutAnchor),v=t.y-s.y+u.y;this.flyout.style.position='absolute';this.flyout.style.top=v+'px';};r.prototype._position=function(){'use strict';var s=this.flyout;if(this.flyoutAnchor&&this.options.positionNub){var t=this._getElementPosition(this.flyoutAnchor),u=j.find(this.flyout,'*','nub'),v=n.getDim(u).x,w=n.getDim(this.flyoutAnchor).x,x=this._getElementPosition(s);new n(t.x-x.x+(w-v)/2,0).setPos(u);}this.refreshConstraints();};r.prototype._reposition=function(){'use strict';h(this._position.bind(this),0);};r.prototype._releaseConstraint=function(){'use strict';if(this.constraint){this.constraint.release();this.constraint=null;}};r.getInstance=function(s){'use strict';return r._instances[s];};r.clearAll=function(){'use strict';for(var s=0;s<r._instances.length;s++)r._instances[s].clear();};p(r,['open','close']);Object.assign(r,{_activePopover:null,_MARGIN:40,_instances:{}});f.exports=r;},null);
__d('MJewel',['setTimeoutAcrossTransitions','CSS','DOM','MHistory','MJSEnvironment','MLogState','MTabbable','MViewport','Popover','Stratcom','$','eventsMixinDeprecated'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();var t=10;function u(v,w,x){'use strict';this._sigil=v;this._marauderModuleName=x;this.options=w||{};this._jewelNode=r(u.JEWEL_NAV_NODE_ID);this._softState=w.softState||'jewel='+u.nextID++;this._duringInit=false;this._previousScrollingPoint=null;this._createPopover();q.listen('m:history:change',null,(function(event){if(event.getData().soft===this._softState){this._popover&&this._popover.open();}else this._popover&&this._popover.close();}).bind(this));}u.prototype.isInitialized=function(){'use strict';var v=this.options.contentsSigil||'contents';return !!j.scry(this._jewelNode,'*',v)[0];};u.prototype._getJewelElement=function(){'use strict';return j.find(this._jewelNode,'div',this._sigil);};u.prototype._getCountElement=function(){'use strict';return j.find(this._getJewelElement(),'span','count');};u.prototype._getContentsElement=function(){'use strict';var v=this.options.contentsSigil||'contents';return j.find(this._getJewelElement(),'*',v);};u.prototype._getFlyoutElement=function(){'use strict';return j.find(this._getJewelElement(),'*','flyout');};u.prototype.getCount=function(){'use strict';return this._count;};u.prototype.setDuringInit=function(v){'use strict';this._duringInit=v;};u.prototype._updateCountElement=function(){'use strict';var v=this._getJewelCount();j.setContent(this._getCountElement(),''+v);var w=this._getJewelElement(),x=this._count>0;i.conditionClass(w,'noCount',!x);i.conditionClass(w,'hasCount',x);if(!this._duringInit&&this.options.mJewelMarauderLogger)this._logMarauderEvent('updated');};u.prototype.setCount=function(v){'use strict';if(v<0)return;this._count=v;this._updateCountElement();};u.prototype.setHeaderText=function(v,w){'use strict';if(!v||!w)return;var x=this._getFlyoutElement();if(!x)return;var y=j.find(x,'*',v);if(!y)return;var z=y.cloneNode(true);z.innerText=w;j.replace(y,z);};u.prototype.handleViewedContent=function(){'use strict';if(this.getCount()>0&&this.isInitialized()){this.setCount(0);this.invoke('cleared');}else this.invoke('jewel_click');};u.prototype.setMenuContent=function(v){'use strict';j.setContent(this._getFlyoutElement(),v);if(this.isOpen())this.handleViewedContent();};u.prototype.prependMenuContent=function(v){'use strict';j.prependContent(this._getContentsElement(),v);};u.prototype.removeMenuContent=function(v){'use strict';var w=document.getElementById(v);if(w)j.remove(w);};u.prototype.updateMenuColor=function(v,w,x){'use strict';x?h(this._updateMenuColor.bind(this,v,w),u.MARK_READ_DELAY):this._updateMenuColor(v,w);};u.prototype._updateMenuColor=function(v,w){'use strict';var x=document.getElementById(v);if(x){i.conditionClass(x,u.M_AREA_LIGHTBLUE,!w);i.conditionClass(x,u.M_AREA_WHITE,w);}};u.prototype._createPopover=function(){'use strict';var v=this._getJewelElement(),w=j.find(v,'div','flyout');this._popover=new p({button:j.find(v,'*','icon'),flyout:w,ensureVisible:false,touchstart_callback:this.options.mJewelMarauderLogger?this._onTouchStart.bind(this):null,touchmove_callback:this.options.mJewelMarauderLogger?this._onTouchMove.bind(this):null,touchend_callback:this.options.mJewelMarauderLogger?this._onTouchEnd.bind(this):null,heightConstraint:true,preventClose:true});this._onOpenListener=this._popover.listen('open',this._onOpen.bind(this));this._onCloseListener=this._popover.listen('close',this._onClose.bind(this));this._popoverClickListener=j.listen(w,'click',null,this._onPopoverClick.bind(this));if(l.IS_ANDROID&&l.GET_OS_VERSION>=4)this._scrollAreaNode=j.scry(w,'div','scroll-area')[0];};u.prototype.clear=function(){'use strict';this._onOpenListener&&this._onOpenListener.remove();this._onCloseListener&&this._onCloseListener.remove();this._popoverClickListener&&this._popoverClickListener.remove();this._popoverTouchStartListener&&this._popoverTouchStartListener.remove();this._touchMoveListener&&this._touchMoveListener.remove();this._touchStartListener&&this._touchStartListener.remove();this._popover&&this._popover.clear();};u.prototype._onPopoverClick=function(event){'use strict';m.updateLink(event,this.options.pos);this.options.clickCallback&&this.options.clickCallback(event);if(this.options.mJewelMarauderLogger)this._logMarauderEvent('clicked',event);};u.prototype._onPopoverTouchStart=function(event){'use strict';event.kill();};u.prototype._getJewelCount=function(){'use strict';if(this._count>0){return this._count;}else return this._unreadCount;};u.prototype._onOpen=function(){'use strict';if(this._scrollAreaNode){o.scrollToHeader();var v=document.documentElement;i.conditionClass(v,'hide-scroll',true);this._scrollAreaNode.style.maxHeight=v.offsetHeight-200+'px';}var w=this._getJewelCount();k.pushSoftState(this._softState);this.handleViewedContent();if(this.options.mJewelMarauderLogger)this.options.mJewelMarauderLogger.toggleModule(this._marauderModuleName,true,{jewel_count:w});q.invoke('m:jewel:flyout:open',null,{jewel:this._sigil});i.conditionClass(this._getJewelElement(),'popoverOpen',true);var x=j.find(this._getJewelElement(),'div','flyout');n.focusTabbable(x);};u.prototype._onClose=function(){'use strict';if(this._scrollAreaNode){this._scrollAreaNode.style.minHeight='';i.conditionClass(document.documentElement,'hide-scroll',false);}q.invoke('m:jewel:flyout:close',null,{jewel:this._sigil});i.conditionClass(this._getJewelElement(),'popoverOpen',false);if(this.options.mJewelMarauderLogger)this.options.mJewelMarauderLogger.toggleModule(this._marauderModuleName,false);k.popSoftState(this._softState);};u.prototype._onTouchStart=function(v){'use strict';this._previousScrollingPoint=v;};u.prototype._onTouchMove=function(v){'use strict';if(!this._previousScrollingPoint)return;var w=v.x-this._previousScrollingPoint.x,x=v.y-this._previousScrollingPoint.y,y=Math.sqrt(Math.abs(w)+Math.abs(x));if(y>=t){this._previousScrollingPoint=v;this._logMarauderEvent('scroll',{x:w,y:x});}};u.prototype._onTouchEnd=function(v){'use strict';this._previousScrollingPoint=null;};u.prototype._logMarauderEvent=function(v,w){'use strict';this.options.mJewelMarauderLogger.log(this._marauderModuleName,v,w);};u.prototype.isOpen=function(){'use strict';return this._popover&&this._popover.isOpen();};u.prototype.openPopover=function(){'use strict';this._popover&&!this._popover.isOpen()&&this._popover.open();};u.prototype.reregisterListeners=function(){'use strict';var v=this.isOpen();this.clear();this._createPopover();if(v)this._popover.open();};s(u,['cleared','jewel_click']);Object.assign(u,{M_AREA_WHITE:'acw',M_AREA_LIGHTBLUE:'aclb',MARK_READ_DELAY:3000,JEWEL_NAV_NODE_ID:'mJewelNav',nextID:0});Object.assign(u.prototype,{_sigil:null,_currentJewel:null,_count:0,_popover:null});f.exports=u;},null);
__d('MJewels',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={REQUESTS:'requests',MESSAGES:'messages',NOTIFICATIONS:'notifications',SEARCH:'search',MORE:'more',NEWS_FEED:'news-feed',BOOKMARKS:'bookmarks'};},null);
__d('PlatformBaseVersioning',['PlatformVersions','getObjectValues','StrSet','invariant'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=new j(i(h.versions)),m=location.pathname,n=m.substring(1,m.indexOf('/',1)),o=l.contains(n)?n:h.versions.UNVERSIONED;function p(s,t){if(t==h.versions.UNVERSIONED)return s;!l.contains(t)?k(0):undefined;if(s.indexOf('/')!==0)s='/'+s;return '/'+t+s;}function q(s){if(l.contains(s.substring(1,s.indexOf('/',1))))return s.substring(s.indexOf('/',1));return s;}var r={addVersionToPath:p,getLatestVersion:function(){return h.LATEST;},versionAwareURI:function(s){return s.setPath(p(s.getPath(),o));},versionAwarePath:function(s){return p(s,o);},getUnversionedPath:q};f.exports=r;},null);
__d('PlatformWidgetEndpoint',['PlatformBaseVersioning'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(n,o){return h.versionAwarePath('/dialog'+'/'+n+(o?'/'+o:''));}function j(n,o){return h.versionAwarePath('/plugins'+'/'+n+(o?'/'+o:''));}function k(n){return (/^\/plugins\//.test(h.getUnversionedPath(n)));}function l(n){return (/^\/dialog\//.test(h.getUnversionedPath(n)));}var m={dialog:i,plugins:j,isPluginEndpoint:k,isDialogEndpoint:l};f.exports=m;},null);
__d('MPlaces',['$','DOM','DataStore','LoadingIndicator','MRequest','Stratcom','MPageController','MURI','URI','ViewerLocationSource','FWLoader'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=c('FWLoader').FW,s={LINK_SIGIL:'gps-link',FORM_SIGIL:'gps-form',UPDATE_LOCATION_INTERVAL:60000,desiredProperties:['latitude','longitude','accuracy','altitude','altitudeAccuracy','heading','speed'],locationOptions:{enableHighAccuracy:true,timeout:60000,maximumAge:300000},watchID:null,pendingHref:'',pendingForm:null,_JSONLocation:'',_currentSearchMode:null,_lastUpdateTime:0,enableFWGeolocation:true,locationSearchModes:{SEARCH_MODE:'m',MODE_COMPOSER:'cp',MODE_CHECKIN:'ci'},setCurrentJSONLocation:function(t){s._JSONLocation=t;},getCurrentJSONLocation:function(){return s._JSONLocation;},setLocationSearchMode:function(t){s._currentSearchMode=t;},getLocationSearchMode:function(){return s._currentSearchMode;},shouldUseFWGeolocation:function(){return window.FW_ENABLED&&r.isIOS()&&s.enableFWGeolocation;},updateLocation:function(t){if(t){if(s.shouldUseFWGeolocation())t={coords:t};var u={},v;for(var w=0;w<s.desiredProperties.length;w++){v=s.desiredProperties[w];if(t.coords[v])u[v]=t.coords[v];}if(t.timestamp)u.timestamp=t.timestamp/1000;s._JSONLocation=JSON.stringify(u);s.sendCurrentLocationToServer();if(s.pendingForm){s.submitForm(s.pendingForm);}else if(s.pendingHref)s.gotoPage(s.pendingHref);s.pendingForm=null;s.pendingHref='';m.invoke('location-update',null,{position:t});}},handleError:function(t){s.clearWatch();m.invoke('location-error',null,{error:t});if(s.pendingForm){s.submitForm(s.pendingForm);s.pendingForm=null;}else if(s.pendingHref){s.gotoPage(s.pendingHref);s.pendingHref='';}},sendCurrentLocationToServer:function(){var t=Date.now();if(t-s._lastUpdateTime>s.UPDATE_LOCATION_INTERVAL){s._lastUpdateTime=t;var u=new l(new o('/places/update_location.php').toString());u.addData({json_location:s._JSONLocation,source:q.MSITE_PLACES});u.send();}},gotoPage:function(t){var u=new p(t);u.addQueryData('json_location',s._JSONLocation);n.load(u);},submitForm:function(t){t.appendChild(i.create('input',{name:'json_location',type:'hidden',value:s._JSONLocation}));if(!t.onsubmit||t.onsubmit())t.submit();},clearWatch:function(){if(!s.watchID)return;if(s.shouldUseFWGeolocation()){r.geolocation.clearWatch();}else navigator.geolocation.clearWatch(s.watchID);s.watchID=null;},watchPosition:function(){if(s.shouldUseFWGeolocation()){s.watchID=1;r.geolocation.watchPosition(s.updateLocation,s.handleError);r.geolocation.getCurrentPosition(s.updateLocation);}else{var t=setTimeout(s.handleError,s.locationOptions.timeout);s.watchID=navigator.geolocation.watchPosition(function(u){clearTimeout(t);s.updateLocation(u);},function(u){clearTimeout(t);s.handleError(u);},s.locationOptions);}},monitorLocation:function(){s.clearWatch();s.watchPosition();l.listen('postprocess',function(){if(!document.getElementById('place_update')&&s.watchID)s.clearWatch();});},submitFormWithLocation:function(t){if(typeof t=='string')t=h(t);var u=s;k.show();if(u.watchID&&u._JSONLocation){u.submitForm(t);return;}u.pendingHref='';u.pendingForm=t;u.monitorLocation();return false;},gotoPageWithLocation:function(t){var u=s;k.show();if(u.watchID&&u._JSONLocation){u.gotoPage(t);return;}u.pendingForm=null;u.pendingHref=t;u.monitorLocation();return false;},onClick:function(event){event.kill();var t=j.get(event.getNode(s.LINK_SIGIL));s.gotoPageWithLocation(t.href);},onSubmit:function(event){event.kill();var t=i.find(event.getNode(s.FORM_SIGIL),'form');s.submitFormWithLocation(t);}};f.exports=s;},null);
__d('MSideNavMarauderLogger',['DataStore','Stratcom','MarauderLogger','MTouchClick'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='';function m(event){j.toggleModule('sidebar_menu',true);}function n(event){j.toggleModule('sidebar_menu',false);}function o(event){var x=event.getNode('tag:a'),y=event.getNode('tag:div');j.log('open_application','sidebar_menu',{application_link_type:'local_module',display_name:y?y.innerText:'unknown',url:x&&x.href});j.setNavigationModule('sidebar_menu');}function p(){u('session_start');}function q(){u('cancel');}function r(x){var y=x.getData();if(y.node.rel<=0)return;var z=0,aa='',ba=h.get(y.node);if(ba){z=ba.bootstrap?1:0;aa=ba.type;}var ca=0,da=null;for(var ea=0;ea<y.results.length;ea++){var fa=y.results[ea];if(fa.rel>0){if(fa.rel==y.node.rel){da=ca;break;}ca++;}}u('click',{query:y.query,is_bootstrapped:z,display_position:da},aa,y.node.rel);}function s(x){var y=x.getData();u('click',{query:y.query,is_bootstrapped:y.node.bootstrap?1:0,display_position:y.position},y.node.type,y.node.id);}function t(x){if(l!==x)u('search_keystroke',{prev_query:l,new_query:x});l=x;}function u(x,y,z,aa){j.log(x,'search_typeahead',y,z,aa);}function v(x){x.listen('change',t);}i.listen('m:side-area:show',null,m);i.listen('m:side-area:hide',null,n);i.listen('click','side-menu-item',o);var w=k.hasTouchEvents()?'touchend':'click';i.listen(w,'search-activator',p);i.listen(w,'graph-search-activator',p);i.listen('click','graph-search-entry-point',p);i.listen('m:search-overlay:cancel',null,q);i.listen('m:search-overlay:cancel-react',null,q);i.listen('m:search-typeahead:select',null,r);i.listen('m:search-typeahead:select-react',null,s);f.exports={setupTypeaheadListener:v};},null);
__d('ReactRenderer',['React','ReactDOM','$'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(o,p,q,r){var s=h.createElement(o,p);return i.render(s,q,r);}var l=k;function m(o,p,q,r){return k(o,p,j(q),r);}var n=m;f.exports={constructAndRenderComponent:k,constructAndRenderComponentByID:m,constructAndRenderComponentAcrossTransitions:l,constructAndRenderComponentByIDAcrossTransitions:n,constructAndRenderComponent_DEPRECATED:l,constructAndRenderComponentByID_DEPRECATED:n};},null);
__d('MSearchConst',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={refid:46,feed_search:'feed',news_search:'news',video_search:'video',content_search:'content',msite_news_null_state:'mnns',msite_news_non_gs_null_state:'mnngns',event_click:'click',event_impression:'imp'};},null);
__d("XMobileSearchTrendingLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/graphsearch\/trending\/logging\/",{topic_ids:{type:"IntVector",required:true},source:{type:"String",required:true},positions:{type:"IntVector",required:true},query_id:{type:"Int",required:true},event:{type:"String",required:true}});},null,{});
__d('MSearchTrendingLogger',['XMobileSearchTrendingLoggingController','MRequest','MSearchConst','Stratcom'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=null,m={registerTrendingTopicListeners:function(n,o,p,q){if(!l)l={};for(var r=0;r<n.length;r++){var s=n[r];if(s==null||l[s])continue;l[s]=k.listen('click',s,this._logTrendingTopicClick(s,o,p[r],q));}},logTrendingTopicImpressions:function(n,o,p,q){if(!n||n.length===0)return;for(var r=0;r<n.length;r++)if(n[r]==null){n.splice(r,1);p.splice(r,1);r--;}var s=h.getURIBuilder().setIntVector('topic_ids',n).setString('source',o).setIntVector('positions',p).setInt('query_id',q).setString('event',j.event_impression).getURI(),t=new i(s);t.send();},_logTrendingTopicClick:function(n,o,p,q){if(!n)return;return function(){var r=h.getURIBuilder().setIntVector('topic_ids',[n]).setString('source',o).setIntVector('positions',[p]).setInt('query_id',q).setString('event',j.event_click).getURI(),s=new i(r);s.send();};}};f.exports=m;},null);
__d('MSearchTypeaheadPerfLogger',['BanzaiScuba','CurrentUser','performanceNow'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m,n){'use strict';this._searchType=m.type;this._sampleRate=m.sample_rate;this._siteType=m.site;this._cacheEnable=n?1:0;this.init(l);this.initEvents();this._reset();}k.prototype.init=function(l){'use strict';this._data=l.getDatasource();this._typeahead=l;if(this._typeahead.props&&this._typeahead.props.vertical)this._vertical=this._typeahead.props.vertical;};k.prototype.initEvents=function(){'use strict';this._data.listen('initial_render',this.initialRender.bind(this));this._data.listen('after_complete',this.complete.bind(this));this._data.listen('req_dispatch',this.remoteRequestDispatch.bind(this));this._data.listen('req_sent',this.remoteRequestSent.bind(this));this._data.listen('req_recv',this.remoteRequestReceived.bind(this));this._typeahead.listen('update',this.queryStart.bind(this));this._typeahead.listen('render_start',this.renderStart.bind(this));this._typeahead.listen('rendered',this.rendered.bind(this));};k.prototype._reset=function(){'use strict';this._startTime=null;this._intialRenderTime=null;this._remoteRequestDispatchTime=null;this._remoteRequestSentTime=null;this._remoteRequestReceivedTime=null;this._renderStart=null;this._rendered=null;this._endTime=null;this._cacheOnly=1;this._resultLength=0;this._originQuery=null;this._query=null;};k.prototype.initialRender=function(){'use strict';this._intialRenderTime=Date.now();};k.prototype.complete=function(){'use strict';this._endTime=Date.now();this._query=this._typeahead.getValue();this.logToScuba();this._reset();};k.prototype.queryStart=function(l){'use strict';this._reset();this._originQuery=l;this._startTime=Date.now();};k.prototype.renderStart=function(){'use strict';this._renderStart=j();};k.prototype.rendered=function(){'use strict';this._rendered=j()-this._renderStart;};k.prototype.remoteRequestDispatch=function(l){'use strict';this._remoteRequestDispatchTime=Date.now();this._sid=l;};k.prototype.remoteRequestSent=function(){'use strict';this._remoteRequestSentTime=Date.now();};k.prototype.remoteRequestReceived=function(l){'use strict';this._remoteRequestReceivedTime=Date.now();this._resultLength=l;this._cacheOnly=0;};k.prototype.logToScuba=function(){'use strict';if(this._startTime===null)return;if(this._originQuery!==this._query)return;var l=new h('mobile_search_facebar_js',null,{addBrowserFields:true,addPredictedGeographyFields:true,addUser:true,addSearchVersion:true,addGatekeepers:{mtouchGKs:true}});l.addInteger('sample_rate',this._sampleRate);l.addNormal('typeahead_type',this._searchType);l.addNormal('site',this._siteType);if(this._vertical){l.addNormal('vertical',this._vertical);l.addNormal('search_mode',this._typeahead.state.searchMode);}l.addNormal('session_id',this._sid);l.addNormal('user_id',i.getID());l.addNormal('query',this._query);l.addInteger('cache_keypress_render',Math.max(this._intialRenderTime-this._startTime,0));if(this._rendered)l.addInteger('rendered',this._rendered);if(this._cacheOnly===0){l.addInteger('remote_keypress_query_dispatch',Math.max(this._remoteRequestDispatchTime-this._startTime,0));l.addInteger('remote_keypress_query_start',Math.max(this._remoteRequestSentTime-this._startTime,0));l.addInteger('remote_keypress_query_end',Math.max(this._remoteRequestReceivedTime-this._startTime,0));l.addInteger('remote_keypress_render',Math.max(this._endTime-this._startTime,0));l.addInteger('remote_render',Math.max(this._endTime-this._remoteRequestReceivedTime,0));l.addInteger('time_js_async',Math.max(this._remoteRequestReceivedTime-this._remoteRequestSentTime,0));}l.addInteger('end_to_end',Math.max(this._endTime-this._startTime,0));l.addInteger('num_result',this._resultLength);l.addNormal('is_cache_only',this._cacheOnly);l.addNormal('is_cache_enable',this._cacheEnable);l.post();};f.exports=k;},null);
__d('MLink',['DOM','DataStore','ErrorUtils','MTabletLoader','MLinkHack','MLogger','MPageCache','MPageController','PlatformWidgetEndpoint','Stratcom','URI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s='standalone' in window.navigator&&window.navigator.standalone,t=false;function u(){if(t)return;t=true;h.listen(document.documentElement,'click',null,function(event){if(event.getPrevented())return;j.applyWithGuard(function(){var v=event.getNode('tag:a');if(!v)return;var w=event.getRawEvent();if(v.getAttribute('onclick')||(w.which||w.button)>=2)return;l.remove(v);var x=v.getAttribute('href'),y=new r(x),z=y.getProtocol();if(z&&z!='http'&&z!='https')return;var aa=y.getDomain(),ba=x&&x.charAt(0),ca=!ba||/[\/#]/.test(ba),da=y.getPort()?[aa,y.getPort()].join(':'):aa,ea=ca||location.host===da,fa=aa&&!/\.facebook.com$/i.test(aa);if(fa&&!q.hasSigil(v,'MLinkshim'))m.mustfix('Loading an external URL without shimming: %s',x);var ga=v.getAttribute('target');if((ga=='_blank'||fa)&&s)return;if(ga=='_blank'){window.open(x,'_blank');}else if(k.isTabletFrame&&!ea){k.MTabletLink.gotoURI(x);}else if(p.isDialogEndpoint(y.getPath())){return;}else if(ga||z&&z+':'!==location.protocol||q.hasSigil(v,'no_mpc')||fa){window.location=x;}else if(x){if(x.indexOf('#')===0){var ha=document.getElementById(x.substr(1));ha&&ha.scrollIntoView();}else{var ia=i.get(v);if(ia.fromCache)n.setScrollHistory(x,0);o.load(x,{replace:ia.behavior==='replace-state',expiration:ia.fromCache?o.HISTORY_EXPIRE_MS:null});}}else{if(v.hasAttribute('data-sigil'))return;var ja='',ka=event.getTarget();while(ka&&ka!=document.body){ja=ja+' <'+ka.nodeName;if(ka.id)ja=ja+' id='+ka.id;if(ka.className)ja=ja+' class='+ka.className;ja=ja+' >';ka=ka.parentNode;}m.warn('handleClick: unknown link action: '+'<a id="%s" class="%s" /> Path: %s',v.id,v.className,ja);return;}event.prevent();},null,[],null,'LinkController');});}g.setupListener=u;},null);
__d('MRecentSearchesUpdater',['Stratcom'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='search-recent-queries';function j(k){'use strict';k.listen('change',this.changeQuery.bind(this));k.listen('select',this.addRecentSearchWithSelection.bind(this));k.listen('show',this.changeResults.bind(this));k.listen('query',this.addRecentSearchWithQuery.bind(this));k.listen('refreshRecent',this.refreshRecent.bind(this));}j.prototype.refreshRecent=function(){'use strict';h.invoke('refreshRecent',i,{});};j.prototype.changeQuery=function(k){'use strict';this.currentQuery=k;};j.prototype.changeResults=function(k){'use strict';if(k.show){this.results=k.show.slice();}else this.results=k.slice();};j.prototype.addRecentSearchWithQuery=function(){'use strict';h.invoke('addRecentQuery',i,{query:this.currentQuery});};j.prototype.addRecentSearchWithSelection=function(k){'use strict';var l=k&&(k.rel||k.getAttribute('rel'));if(!l){this.addRecentSearchWithQuery();return;}for(var m=0;m<this.results.length;m++)if(this.results[m].id===l)h.invoke('addRecentSearch',i,{result:this.results[m]});};f.exports=j;},null);
__d('MSearchTypeaheadLogger',['setTimeoutAcrossTransitions','DataStore','DOM','MTouchClick','MRequest','Stratcom'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=1000;function o(q){var r=[];for(var s=0,t=q.length;s<t;s++){var u=q[s];if(u.rel>0){var v={id:u.rel};v.type=u.type;v.renderType=u.renderType;try{var x=j.find(u,'a','typeahead-result');if(i.get(x).bootstrap)v.bootstrap=1;}catch(w){}r.push(v);}}return r;}function p(q,r){'use strict';this.typeahead=q;this.uri=r;this.initialize();this.emptyQueryResults=[];q.listen('focus',(function(){this.startSession(this.typeahead.getValue(),{force:true});}).bind(this));q.listen('change',(function(t){this.startSession(t);if(this.sessionInProgress())this.data.query=t;}).bind(this));q.listen('keypress',(function(t){this.keypressed+=1;}).bind(this));q.listen('select',(function(t){var u=t&&(t.rel||t.getAttribute('rel'));if(!this.data.query)this.data.null_state=1;this.data.click_event=Date.now();if(u){this.data.selected_id=u;}else this.data.selected_search=1;if(this.results&&this.results.length&&this.data.query&&this.data.query.length)m.invoke('m:search-typeahead:select',null,{node:t,results:this.results.slice(),query:this.data.query.slice()});this.logToServer();}).bind(this));q.listen('show',(function(t){this.startSession(this.typeahead.getValue());if(this.sessionInProgress())if(t.show){this.results=o(t.show);if(!this.typeahead.getValue())this.emptyQueryResults=this.results;}else{this.data.candidate_results=t.slice();if(!this.typeahead.getValue())this.emptyQueryResults=this.data.candidate_results;}}).bind(this));q.listen('query',(function(t,u){this.data.selected_search=1;this.data.selected_type=u;this.logToServer();}).bind(this));var s=k.hasTouchEvents()?'touchend':'click';m.listen(s,'search-activator',(function(){this.startSession('',{force:true});}).bind(this));m.listen(s,'graph-search-activator',(function(){this.startSession('',{force:true});}).bind(this));q.listen('scroll',(function(event){this.data.scrolled=1;}).bind(this));}p.prototype.blur=function(q){'use strict';this.blurInProgress=true;this.blurTimeout=h((function(){this.data.abandonment_reason=q;if(!this.data.query)this.data.null_state=1;this.logToServer();}).bind(this),n);};p.prototype.startSession=function(q,r){'use strict';r=r||{};if(this.sessionID==null&&(q||r.force)){this.data={};this.keypressed=0;this.sessionID=Math.random().toString();this.data.query=q;this.data.session_start=Date.now();m.invoke('m-typeahead-logger:new-session-id',null,{sessionID:this.sessionID});}};p.prototype.sessionInProgress=function(){'use strict';if(this.sessionID!==null&&!this.blurInProgress)return true;return false;};p.prototype.logToServer=function(){'use strict';clearTimeout(this.blurTimeout);if(this.sessionID!=null){this.data.sid=this.sessionID;this.data.count_keys_pressed=this.keypressed;this.data.typeahead_type=this.typeahead.getTypeaheadType&&this.typeahead.getTypeaheadType();this.data.candidate_results=this.data.candidate_results||[];if(this.data.candidate_results.length===0)this.data.candidate_results=this.results;this.data.null_state_candidate_results=this.emptyQueryResults;var q=new l(this.uri);q.setMethod('POST').setData({stats:JSON.stringify(this.data)}).send();}this.initialize();};p.prototype.initialize=function(){'use strict';this.data={};this.sessionID=null;this.keypressed=0;this.results=[];this.blurInProgress=false;};Object.assign(p.prototype,{typeahead:null,data:null,sessionID:null,results:null,uri:null,blurInProgress:null});f.exports=p;},null);
__d("XLiveController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/live\/{?query}\/",{date:{type:"Int"},ref:{type:"String"},source:{type:"String"},region_id:{type:"Int"},season:{type:"String"},year:{type:"Int"},fref:{type:"String"},query:{type:"String"},name:{type:"String"},cursor:{type:"String"}});},null,{});
__d('MTypeaheadNullstateSource',['URI','Stratcom','MTypeaheadTouchSource','XLiveController'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m,n='graph-search-entry-point',o='search-recent-queries';l=babelHelpers.inherits(p,j);m=l&&l.prototype;function p(q,r){'use strict';m.constructor.call(this,q,r);i.listen('setCurrentProfileID',n,(function(event){if(event.getData().profileID!==this.profileID){this.profileID=event.getData().profileID;this.refresh();}}).bind(this));i.listen('addRecentSearch',o,(function(event){var s=event.getData().result;if(s)this.addRecentResult(s);}).bind(this));i.listen('addRecentQuery',o,(function(event){var s=event.getData().query;if(s){var t=this.makeRecentResultWithQuery(s);this.addRecentResult(t);}}).bind(this));i.listen('refreshRecent',o,(function(){this.refresh();}).bind(this));i.listen('searchRefreshNullstate',null,(function(){return this.refresh();}).bind(this));}p.prototype.makeRecentResultWithQuery=function(q){'use strict';return {display:q,name:q,id:q,uri:'/search/top/?q='+q};};p.prototype.addRecentResult=function(q){'use strict';if(q.isTrending)return;q.isRecentSearch=true;var r={},s=0;q.idx=s;r[q.id]=q;for(var t in this._raw)if(t!=q.id){s++;this._raw[t].idx=s;r[t]=this._raw[t];}this._raw=r;};p.prototype.refresh=function(){'use strict';this._raw={};this.sendRequest();};p.prototype.getAuxiliaryData=function(){'use strict';return {profile_id:this.profileID?this.profileID:this.groupID?this.groupID:null,disable_single_state:this.singleStateDisabled?true:false,enable_scoped:this.scopedEnabled?true:false};};p.prototype.ondata=function(q){'use strict';m.ondata.call(this,q.nullstate);};p.prototype.matchResults=function(q){'use strict';var r=[];if(q==='')r=Object.keys(this._raw);this.sortHits(q,r);var s=this.renderNodes(q,r);this.invoke('resultsready',s);this.invoke('complete');};p.prototype.setCurrentProfileID=function(q){'use strict';this.profileID=q;};p.prototype.setForceDisableSingleState=function(q){'use strict';this.singleStateDisabled=q;};p.prototype.setEnableScoped=function(q){'use strict';this.scopedEnabled=q;};p.prototype.sortHits=function(q,r){'use strict';r.sort(this.sortingFunction.bind(this));};p.prototype.sortingFunction=function(q,r){'use strict';var s=this._raw[q],t=isNaN(s.idx)?Number.MAX_VALUE:s.idx,u=this._raw[r],v=isNaN(u.idx)?Number.MAX_VALUE:u.idx;return t-v;};p.prototype.getTransformer=function(){'use strict';return function(q){if(q.keyword_type==='trending'){var r=new h('/topic/'+q.id);if(q.isSport)r=k.getURIBuilder().setString('query',String(q.id)).getURI();return {id:q.name,display:q.name,name:q.name,uri:r.toString(),topicID:q.id,trendingQueryID:q.trendingQueryID,subtext:q.articleTitle,type:'trending',photo:q.articleImageURI,actionTime:0,isTrending:true,isNullStateSuggestion:true};}if(q.type==='keyword'||q.type==='grammar'){r=new h(q.path||q.uri);return {cost:q.cost,idx:q.idx,display:q.text,name:q.text,type:'keyword',id:q.uid,uri:r.toString(),actionTime:q.action_time,isPYMK:q.pymk,isRecentSearch:q.recent_search,subtext:q.subtext,logInfo:q.logInfo,isNullStateSuggestion:true,isScoped:q.is_scoped};}return {actionTime:q.action_time,name:q.text,uri:q.path||q.uri,id:q.uid||q.id,display:q.name||q.text,photo:q.photo,category:q.category,cost:q.cost,idx:q.idx,tokens:q.tokens,type:q.type[0].toUpperCase()+q.type.slice(1),verticalType:q.vertical_type,subtext:q.subtext,isPYMK:q.pymk,isRecentSearch:q.recent_search,logInfo:q.logInfo,isNullStateSuggestion:true,isScoped:q.is_scoped};};};f.exports=p;},null);