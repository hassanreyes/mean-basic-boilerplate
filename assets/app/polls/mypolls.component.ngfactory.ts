/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './mypolls.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './polls.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/router/src/directives/router_link';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/core/src/security';
var renderType_MyPollsComponent_Host:import0.RenderComponentType = (null as any);
class _View_MyPollsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MyPollsComponent_0_4:import3.MyPollsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyPollsComponent_Host0,renderType_MyPollsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-mypolls',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyPollsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyPollsComponent_0_4 = new import3.MyPollsComponent(this.parentInjector.get(import8.PollsService),this.parentInjector.get(import9.Router));
    this._appEl_0.initComponent(this._MyPollsComponent_0_4,[],compView_0);
    compView_0.create(this._MyPollsComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MyPollsComponent) && (0 === requestNodeIndex))) { return this._MyPollsComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._MyPollsComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MyPollsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MyPollsComponent_Host === (null as any))) { (renderType_MyPollsComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_MyPollsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyPollsComponentNgFactory:import11.ComponentFactory<import3.MyPollsComponent> = new import11.ComponentFactory<import3.MyPollsComponent>('app-mypolls',viewFactory_MyPollsComponent_Host0,import3.MyPollsComponent);
const styles_MyPollsComponent:any[] = [];
var renderType_MyPollsComponent:import0.RenderComponentType = (null as any);
class _View_MyPollsComponent0 extends import1.AppView<import3.MyPollsComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _RouterLinkWithHref_14_3:import12.RouterLinkWithHref;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgFor_20_6:import13.NgFor;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyPollsComponent0,renderType_MyPollsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','panel panel-default');
    this._text_2 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','panel-heading');
    this._el_4 = this.renderer.createElement(this._el_3,'h2',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'My Polls',(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','panel-body');
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'p',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Below are polls hosted by fcc-voting.',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_7,'p',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Select a poll to see the results and vote, or make a ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'a',(null as any));
    this.renderer.setElementAttribute(this._el_14,'routerLink','/polls/create');
    this._RouterLinkWithHref_14_3 = new import12.RouterLinkWithHref(this.parentInjector.get(import9.Router),this.parentInjector.get(import14.ActivatedRoute),this.parentInjector.get(import15.LocationStrategy));
    this._text_15 = this.renderer.createText(this._el_14,'new poll!',(null as any));
    this._text_16 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_1,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','list-group');
    this._text_19 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18,(null as any));
    this._appEl_20 = new import2.AppElement(20,18,this,this._anchor_20);
    this._TemplateRef_20_5 = new import16.TemplateRef_(this._appEl_20,viewFactory_MyPollsComponent1);
    this._NgFor_20_6 = new import13.NgFor(this._appEl_20.vcRef,this._TemplateRef_20_5,this.parentInjector.get(import17.IterableDiffers),this.ref);
    this._text_21 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._text_22,
      this._text_23
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.RouterLinkWithHref) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._RouterLinkWithHref_14_3; }
    if (((token === import16.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import13.NgFor) && (20 === requestNodeIndex))) { return this._NgFor_20_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = '/polls/create';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_14_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_14_3.ngOnChanges(changes); }
    changes = (null as any);
    const currVal_3:any = this.context.polls;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgFor_20_6.ngForOf = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    if ((changes !== (null as any))) { this._NgFor_20_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_20_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_14_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_14,'href',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_14_3.ngOnDestroy();
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_14_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MyPollsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MyPollsComponent> {
  if ((renderType_MyPollsComponent === (null as any))) { (renderType_MyPollsComponent = viewUtils.createRenderComponentType('/home/ubuntu/workspace/fcc-app-voting/assets/app/polls/mypolls.component.ts class MyPollsComponent - inline template',0,import10.ViewEncapsulation.None,styles_MyPollsComponent,{})); }
  return new _View_MyPollsComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_MyPollsComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyPollsComponent1,renderType_MyPollsComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','list-group-item btn');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'\n                ',this.context.$implicit.title,'\n            ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.gotoPoll(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MyPollsComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MyPollsComponent1(viewUtils,parentInjector,declarationEl);
}