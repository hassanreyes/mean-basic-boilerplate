/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './polls-list.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './polls.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../auth/auth.service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/security';
var renderType_PollsListComponent_Host:import0.RenderComponentType = (null as any);
class _View_PollsListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PollsListComponent_0_4:import3.PollsListComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PollsListComponent_Host0,renderType_PollsListComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-polls-list',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PollsListComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PollsListComponent_0_4 = new import3.PollsListComponent(this.parentInjector.get(import8.PollsService),this.parentInjector.get(import9.Router),this.parentInjector.get(import10.AuthService));
    this._appEl_0.initComponent(this._PollsListComponent_0_4,[],compView_0);
    compView_0.create(this._PollsListComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PollsListComponent) && (0 === requestNodeIndex))) { return this._PollsListComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._PollsListComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PollsListComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PollsListComponent_Host === (null as any))) { (renderType_PollsListComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_PollsListComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PollsListComponentNgFactory:import12.ComponentFactory<import3.PollsListComponent> = new import12.ComponentFactory<import3.PollsListComponent>('app-polls-list',viewFactory_PollsListComponent_Host0,import3.PollsListComponent);
const styles_PollsListComponent:any[] = [];
var renderType_PollsListComponent:import0.RenderComponentType = (null as any);
class _View_PollsListComponent0 extends import1.AppView<import3.PollsListComponent> {
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
  _anchor_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import13.NgIf;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _appEl_20:import2.AppElement;
  _TemplateRef_20_5:any;
  _NgFor_20_6:import14.NgFor;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PollsListComponent0,renderType_PollsListComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
    this._text_5 = this.renderer.createText(this._el_4,'Complete Polls list',(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_7 = this.renderer.createElement(this._el_1,'div',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','panel-body');
    this._text_8 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_7,'p',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Below are polls hosted by fcc-voting.',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_7,'p',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Select a poll to see the results and vote\n                ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import2.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import15.TemplateRef_(this._appEl_14,viewFactory_PollsListComponent1);
    this._NgIf_14_6 = new import13.NgIf(this._appEl_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_7,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_1,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','list-group');
    this._text_19 = this.renderer.createText(this._el_18,'\n            ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_18,(null as any));
    this._appEl_20 = new import2.AppElement(20,18,this,this._anchor_20);
    this._TemplateRef_20_5 = new import15.TemplateRef_(this._appEl_20,viewFactory_PollsListComponent2);
    this._NgFor_20_6 = new import14.NgFor(this._appEl_20.vcRef,this._TemplateRef_20_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_21 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
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
      this._anchor_14,
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
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import13.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6; }
    if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import14.NgFor) && (20 === requestNodeIndex))) { return this._NgFor_20_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = this.context.isLoggedIn();
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgIf_14_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    changes = (null as any);
    const currVal_1:any = this.context.polls;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgFor_20_6.ngForOf = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._NgFor_20_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_20_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PollsListComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PollsListComponent> {
  if ((renderType_PollsListComponent === (null as any))) { (renderType_PollsListComponent = viewUtils.createRenderComponentType('/home/ubuntu/workspace/fcc-app-voting/assets/app/polls/polls-list.component.ts class PollsListComponent - inline template',0,import11.ViewEncapsulation.None,styles_PollsListComponent,{})); }
  return new _View_PollsListComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PollsListComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import17.RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PollsListComponent1,renderType_PollsListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                , or make a ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this.renderer.setElementAttribute(this._el_2,'routerLink','/polls/create');
    this._RouterLinkWithHref_2_3 = new import17.RouterLinkWithHref(this.parent.parentInjector.get(import9.Router),this.parent.parentInjector.get(import18.ActivatedRoute),this.parent.parentInjector.get(import19.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'new poll!',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = '/polls/create';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import7.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_2:any = this._RouterLinkWithHref_2_3.href;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PollsListComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PollsListComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_PollsListComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PollsListComponent2,renderType_PollsListComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
function viewFactory_PollsListComponent2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PollsListComponent2(viewUtils,parentInjector,declarationEl);
}